## Nepal Travel Website — Design System

### 1. Overview

This design system defines the **color palette and typography** for a travel and tourism website focused on **Nepal’s natural landscapes** such as the Himalayas, forests, trekking trails, and sunrise mountain views.

The design aims to create three psychological responses in users:

* **Trust & calmness** → Blue tones inspired by Himalayan skies
* **Connection to nature** → Green tones inspired by forests
* **Excitement & exploration** → Orange tones inspired by sunrise over mountains

This combination encourages users to **explore, stay longer, and interact with the website**.

---

# Color System

## Primary Brand Colors

| Role    | Color Name         | Hex     |
| ------- | ------------------ | ------- |
| Primary | Himalayan Sky Blue | #2C7DA0 |
| Accent  | Sunrise Orange     | #F77F00 |

### Psychology

**Himalayan Blue (#2C7DA0)**

* Associated with **trust, stability, calmness**
* Reflects **Nepal’s open sky and mountain atmosphere**
* Creates a relaxed browsing experience

**Sunrise Orange (#F77F00)**

* Associated with **energy, adventure, excitement**
* Mimics **Himalayan sunrise colors**
* Encourages users to click **call-to-action buttons**

---

## Extended Brand Palette

| Role          | Color Name         | Hex     |
| ------------- | ------------------ | ------- |
| Primary Dark  | Deep Mountain Blue | #1B4E66 |
| Primary Light | Glacier Blue       | #6FB3D2 |
| Accent Dark   | Sunset Orange      | #C75A00 |
| Accent Light  | Warm Sand          | #FFD6A3 |

Purpose:

* **Primary Dark** → Navigation bars or overlays
* **Primary Light** → hover states and UI highlights
* **Accent Dark** → button hover states
* **Accent Light** → subtle backgrounds and highlights

---

## Nature Supporting Colors

These colors strengthen the **natural identity of Nepal tourism**.

| Role             | Color Name   | Hex     |
| ---------------- | ------------ | ------- |
| Nature Primary   | Forest Green | #2D6A4F |
| Nature Secondary | Moss Green   | #40916C |

Psychology:

Green tones create a subconscious association with:

* safety
* freshness
* biodiversity
* outdoor environments

This improves **user immersion in travel experiences**.

---

## Neutral Colors

Neutral colors ensure readability and allow **photography to stand out**.

| Role       | Color Name  | Hex     |
| ---------- | ----------- | ------- |
| Background | Cloud White | #F8F9FA |
| Surface    | Pure White  | #FFFFFF |
| Border     | Stone Grey  | #E9ECEF |
| Text       | Charcoal    | #212529 |

Purpose:

* Reduce **visual fatigue**
* Improve **content readability**
* Allow travel imagery to dominate the page

---

# Color Usage Guidelines

### Navigation Bar

Background: #2C7DA0
Text: #FFFFFF
Hover: #6FB3D2

Purpose: Create **trust and stability**.

---

### Call-To-Action Buttons

Background: #F77F00
Text: #FFFFFF
Hover: #C75A00

Purpose: Stimulate **action behavior** such as booking trips or exploring tours.

---

### Page Background

Main background: #F8F9FA
Cards: #FFFFFF
Borders: #E9ECEF

Purpose: Maintain **clean and distraction-free layouts**.

---

### Icons and Highlights

Primary icons: #2C7DA0
Nature icons: #2D6A4F
Highlights: #F77F00

Purpose: Maintain a clear **visual hierarchy**.

---

# Typography System

The typography aims to balance **readability, modern aesthetics, and emotional warmth** suitable for tourism platforms.

---

## Heading Font

Font: **Poppins**

Type: Geometric Sans-Serif

### Why Poppins

* Rounded shapes feel **friendly and welcoming**
* Clean geometry creates a **modern digital appearance**
* Excellent readability for **large titles and hero sections**

### Usage

| Element         | Weight |
| --------------- | ------ |
| Hero Heading    | 700    |
| Section Heading | 600    |
| Subheading      | 500    |

Example:

Explore Nepal
Journey Into the Himalayas
Discover Hidden Trails

---

## Body Font

Font: **Inter**

Type: UI Sans-Serif

### Why Inter

* Designed specifically for **screen readability**
* High x-height improves legibility
* Neutral style ensures text **does not compete with photography**

### Usage

| Element          | Weight |
| ---------------- | ------ |
| Body Text        | 400    |
| Small Text       | 300    |
| Highlighted Text | 500    |

Used for:

* descriptions
* blog content
* travel guides
* itinerary details

---

## Optional Accent Font

Font: **Playfair Display**

Type: Serif

Purpose:

Used occasionally in **hero sections or quotes** to create a sense of:

* culture
* heritage
* storytelling

This aligns with Nepal’s **spiritual and historical identity**.

---

# Typography Implementation

Google Fonts:

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

CSS:

body {
font-family: "Inter", sans-serif;
}

h1, h2, h3, h4 {
font-family: "Poppins", sans-serif;
}

---

# Visual Hierarchy Strategy

The design follows the **60-30-10 color rule**:

60% → Neutral backgrounds
30% → Primary blue tones
10% → Accent orange elements

This ensures:

* balanced layouts
* clear focus on call-to-action elements
* strong visibility of travel photography

---

# Final Design Philosophy

The overall design reflects Nepal’s natural environment:

* **Blue** → Himalayan sky and altitude
* **Green** → forests and trekking landscapes
* **Orange** → sunrise over mountains

Combined with modern typography, the system creates a website that feels:

* calm
* adventurous
* immersive

This emotional balance is ideal for **travel and tourism platforms** focused on nature.
