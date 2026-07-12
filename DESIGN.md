---
name: Serene Dental
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#42474f'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#00696e'
  on-secondary: '#ffffff'
  secondary-container: '#75f2f9'
  on-secondary-container: '#006e72'
  tertiary: '#2d3536'
  on-tertiary: '#ffffff'
  tertiary-container: '#434c4d'
  on-tertiary-container: '#b3bcbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#78f5fc'
  secondary-fixed-dim: '#58d8df'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#dbe4e5'
  tertiary-fixed-dim: '#bfc8c9'
  on-tertiary-fixed: '#151d1e'
  on-tertiary-fixed-variant: '#404849'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The design system is built to evoke a sense of clinical excellence, hygiene, and patient-centric calm. The target audience includes both families and professionals seeking high-quality dental care in a stress-free environment.

The aesthetic follows a **Corporate / Modern** movement with a heavy emphasis on **Minimalism**. The interface relies on airy compositions, generous whitespace to reduce cognitive load, and high-quality photography. The visual language balances professional authority with an approachable, empathetic tone, ensuring the user feels safe and well-cared for from the first digital touchpoint.

## Colors

The palette is anchored by "Clinical Trust" and "Hygienic Calm." 

- **Primary (Classic Navy):** Used for headlines, primary buttons, and navigational elements to establish authority and depth.
- **Secondary (Clinical Teal):** Applied to active states, icons, and success indicators to provide a fresh, medical feel.
- **Tertiary (Frost Blue):** A subtle background wash used to differentiate sections without the harshness of pure white.
- **Neutral (Slate Gray):** Utilized for body text and secondary labels to maintain high legibility against white backgrounds.
- **Functional Whites:** Pure white (#FFFFFF) is the primary surface color to emphasize cleanliness.

## Typography

This design system utilizes **Inter** across all levels for its systematic, utilitarian, and highly legible characteristics. 

Headlines use a tighter letter-spacing and heavier weights to project confidence. Body copy is optimized for readability with generous line heights to accommodate medical descriptions and patient instructions. For mobile, headline scales are aggressively reduced to ensure key messaging remains "above the fold" without overwhelming the smaller viewport. Use bold weights sparingly for emphasis within body text.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a controlled, professional presentation, transitioning to a fluid model for mobile devices.

- **Desktop:** A 12-column grid with a 1200px max-width centered in the viewport.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing follows an 8px linear scale. Section vertical spacing is intentionally large (80px+) to create the "airy" feel requested, ensuring that dental services and call-to-actions have significant breathing room. Use "stack" variables for consistent vertical rhythm between elements like headers, paragraphs, and buttons.

## Elevation & Depth

This design system uses **Ambient Shadows** to create a soft, approachable depth. 

Shadows are rendered with very low-opacity (4-8%) using the Primary color (Navy) as the shadow tint rather than pure black. This prevents the "dirty" look often found in default drop shadows and keeps the interface feeling "medical-grade." Surfaces are categorized into three levels:
1. **Level 0 (Flat):** Primary background and tertiary sections.
2. **Level 1 (Soft Elevation):** Content cards and input fields.
3. **Level 2 (Floating):** Navigation bars, dropdowns, and modals to signify immediate interaction priority.

## Shapes

The shape language is **Rounded** (0.5rem base), providing a friendly and modern counterpoint to the clinical precision of the typography.

- **Standard Components:** Buttons, inputs, and small cards use the 0.5rem base radius.
- **Large Components:** Feature sections and hero imagery use 1.5rem (rounded-xl) to create a softer, more inviting visual frame for photography.
- **Interactive Elements:** Checkboxes use a 4px radius to maintain a distinct "click-target" appearance while remaining cohesive with the system.

## Components

- **Buttons:** Primary buttons are solid Navy with white text. Secondary buttons use a Teal outline with Teal text. Hover states should feature a subtle vertical shift (-2px) and a slight increase in shadow spread.
- **Input Fields:** Use a light gray border (#E2E8F0) and the Tertiary background color. On focus, the border transitions to Primary Navy with a 2px outer glow.
- **Cards:** Cards are pure white with a Level 1 shadow and 1rem padding. They are used to group dental services or practitioner bios.
- **Chips/Badges:** Small, pill-shaped labels used for "Available" slots or "New Patient" tags, using Secondary Teal at 10% opacity with solid Teal text.
- **Lists:** Icon-led lists are preferred for service features, using Teal checkmarks to reinforce a positive, healthy outcome.
- **Appointment Widget:** A specialized sticky component or modal that uses the Secondary Teal for the "Book Now" action to differentiate it from informational navigation.