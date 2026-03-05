"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

const MARKERS = [
    { id: "kathmandu", name: "Kathmandu",  lat: 27.7172, lng: 85.3240, desc: "Cultural capital, UNESCO sites", temp: "24°C" },
    { id: "pokhara",   name: "Pokhara",    lat: 28.2096, lng: 83.9856, desc: "Lake city, Annapurna gateway",  temp: "22°C" },
    { id: "chitwan",   name: "Chitwan",    lat: 27.5291, lng: 84.3542, desc: "Wildlife safari, jungle tours",  temp: "28°C" },
    { id: "lumbini",   name: "Lumbini",    lat: 27.4833, lng: 83.2760, desc: "Birthplace of Buddha",          temp: "26°C" },
    { id: "ebc",       name: "Everest BC", lat: 28.0026, lng: 86.8528, desc: "World's highest base camp",     temp: "−8°C" },
    { id: "nagarkot",  name: "Nagarkot",   lat: 27.7172, lng: 85.5178, desc: "Sunrise over Himalayas",        temp: "18°C" },
];

// Nepal bounds: roughly 26.3–30.5°N, 80.0–88.2°E
const NEPAL_BOUNDS: [[number, number], [number, number]] = [
    [26.3, 80.0],
    [30.5, 88.2],
];

export default function NepalMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef       = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return;

        // Leaflet must load client-side only
        import("leaflet").then((L) => {
            // Fix default icon paths broken by webpack
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            });

            const map = L.map(containerRef.current!, {
                center: [28.1, 84.1],
                zoom: 7,
                maxBounds: NEPAL_BOUNDS,
                maxBoundsViscosity: 0.8,
                zoomControl: true,
                scrollWheelZoom: false,
                attributionControl: true,
            });

            mapRef.current = map;

            // OpenStreetMap tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);

            // Custom orange pin icon
            const pinIcon = L.divIcon({
                className: "",
                html: `<div style="
                    width:14px;height:14px;border-radius:50% 50% 50% 0;
                    background:#F77F00;border:2px solid #fff;
                    transform:rotate(-45deg);
                    box-shadow:0 2px 6px rgba(0,0,0,0.35);
                "></div>`,
                iconSize:   [14, 14],
                iconAnchor: [7, 14],
                popupAnchor:[0, -16],
            });

            MARKERS.forEach((m) => {
                L.marker([m.lat, m.lng], { icon: pinIcon })
                    .addTo(map)
                    .bindPopup(
                        `<div style="font-family:sans-serif;min-width:140px">
                            <div style="font-weight:700;font-size:14px;color:#1a1a2e;margin-bottom:2px">${m.name}</div>
                            <div style="font-size:12px;color:#555;margin-bottom:4px">${m.desc}</div>
                            <div style="font-size:13px;font-weight:700;color:#F77F00">${m.temp}</div>
                        </div>`,
                        { closeButton: false, className: "nepal-map-popup" }
                    );
            });

            // Fit map tightly to Nepal
            map.fitBounds(NEPAL_BOUNDS, { padding: [8, 8] });
        });

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <>
            {/* Leaflet CSS loaded via link tag to avoid SSR issues */}
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                crossOrigin=""
            />
            <style>{`
                .nepal-map-popup .leaflet-popup-content-wrapper {
                    border-radius: 12px;
                    padding: 4px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    border: 1px solid #f0f0f0;
                }
                .nepal-map-popup .leaflet-popup-tip { background: #fff; }
            `}</style>
            <div
                ref={containerRef}
                className="w-full rounded-xl overflow-hidden"
                style={{ height: 340 }}
            />
        </>
    );
}
