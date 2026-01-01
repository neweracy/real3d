# Real3D Design System

## Color Palette Analysis

### Existing Colors

- **Gold/Yellow**: Used for primary actions, highlights, and active states.
  - `text-yellow-500` (#EAB308)
  - `text-yellow-600` (#CA8A04)
  - `bg-yellow-500` (#EAB308)
  - `gold` (#FFD700)
- **Dark Gray / Black**: Used for backgrounds and dark mode elements.
  - `#242424` (Drawer background)
  - `gray-800` (#1F2937)
- **Light Gray / White**: Used for backgrounds and text.
  - `bg-slate-100` (#F1F5F9)
  - `white` (#FFFFFF)
  - `rgba(255, 255, 255, 0.87)`
- **Text Grays**:
  - `gray-600` (#4B5563)
  - `gray-700` (#374151)
  - `gray-500` (#6B7280)

### Theme Definition

We are consolidating these into a disciplined "Industrial Gold" theme.

#### Tokens

| Role              | Token Name              | Value                  | Tailwind Class                           |
| ----------------- | ----------------------- | ---------------------- | ---------------------------------------- |
| **Primary**       | `--color-primary`       | `#CA8A04` (Yellow-600) | `text-primary`, `bg-primary`             |
| **Primary Light** | `--color-primary-light` | `#EAB308` (Yellow-500) | `text-primary-light`, `bg-primary-light` |
| **Surface Dark**  | `--color-surface-dark`  | `#242424`              | `bg-surface-dark`                        |
| **Surface Light** | `--color-surface-light` | `#FFFFFF`              | `bg-surface-light`                       |
| **Surface Muted** | `--color-surface-muted` | `#F3F4F6` (Gray-100)   | `bg-surface-muted`                       |
| **Text Main**     | `--color-text-main`     | `#1F2937` (Gray-800)   | `text-main`                              |
| **Text Muted**    | `--color-text-muted`    | `#4B5563` (Gray-600)   | `text-muted`                             |
| **Text Inverse**  | `--color-text-inverse`  | `#FFFFFF`              | `text-inverse`                           |

### Rationale

- **Primary**: Consolidated to `Yellow-600` for better contrast on light backgrounds, while keeping `Yellow-500` for dark backgrounds or large areas.
- **Surface Dark**: Preserved `#242424` as it provides a softer, more premium feel than pure black (`#000000`).
- **Typography**: Standardized to `Gray-800` for body copy to reduce eye strain compared to pure black.

## Implementation

### CSS Variables (index.css)

```css
:root {
  --color-primary: #ca8a04;
  --color-primary-light: #eab308;
  --color-surface-dark: #242424;
  --color-surface-light: #ffffff;
  --color-surface-muted: #f3f4f6;
  --color-text-main: #1f2937;
  --color-text-muted: #4b5563;
  --color-text-inverse: #ffffff;
}
```

### Tailwind Config

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
      },
      surface: {
        dark: 'var(--color-surface-dark)',
        light: 'var(--color-surface-light)',
        muted: 'var(--color-surface-muted)',
      },
      text: {
        main: 'var(--color-text-main)',
        muted: 'var(--color-text-muted)',
        inverse: 'var(--color-text-inverse)',
      }
    }
  }
}
```
