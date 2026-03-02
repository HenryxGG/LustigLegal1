# Design Specification: Law Firm Landing Page

## Visual Identity & "Vibe"
**Theme:** Authority, Trust, Modernity. High-end and Exclusive.
**Color Palette:**
- **Primary (Midnight Blue):** `#0B1120` (Deep, almost black blue)
- **Secondary (Graphite Gray):** `#334155` (Slate 700 - Professional/Neutral)
- **Accent (Matte Gold):** `#C5A059` (Elegant, not flashy)
- **Backgrounds:** `#F8FAFC` (Slate 50) for light sections, `#0B1120` for dark sections.
- **Text:** `#F8FAFC` (on dark), `#1E293B` (on light).

**Typography:**
- **Headings (Serif):** `Playfair Display` - Classic, authoritative, elegant.
- **Body (Sans-serif):** `Inter` or `Lato` - Clean, legible, modern.

## Component Breakdown

### 1. Hero Section
- **Background:** High-quality image of a modern office or abstract legal scales/books, with a strict dark blue gradient overlay (`bg-gradient-to-r from-slate-900/90 to-slate-900/40`).
- **Content:** Large serif headline (e.g., "Justice Defined by Excellence"). Subtitle in sans-serif.
- **Action:** Primary Gold Button "Agendar Consulta".

### 2. Areas of Practice (Grid)
- **Layout:** CSS Grid.
- **Cards:** White or light gray cards. Minimalist thin-line icons (Feather Icons or Heroicons).
- **Interaction:** Lift on hover + Gold border reveal.

### 3. Team Section
- **Style:** Clean portrait cards.
- **Hover:** Image zooms slightly, social links or "View Profile" button fades in with gold accent.

### 4. Social Proof
- **Logos:** Monochrome (grayscale) helper logos to maintain elegance. Opacity 50% -> 100% on hover.
- **Testimonials:** Carousel/Slider. Serif quotes.

### 5. Contact Form
- **Style:** Minimalist inputs with bottom borders or solid slate backgrounds.
- **Validation:** Real-time feedback.
- **Map:** Stylish dark-mode map integration (or carefully styled image placeholder).

## Technical Implementation Strategy
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS (configured in `tailwind.config.js` with custom colors/fonts).
- **Animations:** Framer Motion for:
    - Staggered entrances for list items.
    - Smooth scroll reveals (Use `whileInView`).
    - Hover states.

## Proposed File Structure
```
src/
  components/
    ui/           # Reusable minimal components (Button, Card, Input)
    layout/       # Navbar, Footer
    sections/     # Hero, PracticeAreas, Team, Testimonials, Contact
  assets/         # Images, Icons
  styles/         # Global styles
```
