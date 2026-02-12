# The Complete Web Development Landscape

A comprehensive reference of every concept, tool, and technique in modern web development.

---

## 1. HTML - Structure & Semantics

The building blocks of every page. Most people think HTML is just `<div>` tags, but there's a rich set of **semantic elements** that communicate meaning:

| Element | Purpose |
|---------|---------|
| `<header>`, `<footer>`, `<nav>` | Page regions |
| `<main>`, `<section>`, `<article>` | Content structure |
| `<h1>` through `<h6>` | Heading hierarchy |
| `<figure>`, `<figcaption>` | Images with captions |
| `<dialog>` | Native modals/popups (no library needed!) |
| `<details>`, `<summary>` | Native accordion/collapsible |
| `<time>` | Machine-readable dates |
| `<mark>` | Highlighted text |
| `<abbr>` | Abbreviations with tooltips |
| `<form>`, `<input>`, `<select>`, `<textarea>` | User input |
| `<table>`, `<thead>`, `<tbody>` | Tabular data |
| `<video>`, `<audio>`, `<canvas>` | Media and drawing |
| `<svg>` | Vector graphics inline in HTML |
| `<iframe>` | Embed other websites (YouTube, maps) |

**Why semantics matter:** Screen readers, search engines, and browsers all use these to understand your page. A `<nav>` tells a screen reader "this is navigation" - a `<div>` tells it nothing.

---

## 2. CSS - The Visual Layer

CSS controls everything you see.

### Layout Systems

| System | What It Does | When to Use |
|--------|-------------|-------------|
| **Flexbox** | 1-dimensional layout (row OR column) | Navigation bars, button groups, centering |
| **CSS Grid** | 2-dimensional layout (rows AND columns) | Page layouts, card grids, complex arrangements |
| **Position** (`relative`, `absolute`, `fixed`, `sticky`) | Place elements precisely | Overlays, sticky headers, tooltips |
| **Float** | Text wrapping around elements | Mostly legacy, still useful for text wrapping around images |
| **Container Queries** | Style based on parent size (not screen size) | Reusable components that adapt to their container |

### The Box Model & Spacing

```
margin       → space OUTSIDE the element (pushes others away)
border       → the edge of the element
padding      → space INSIDE the element (pushes content inward)
width/height → size of the content area
box-sizing   → whether padding/border are included in width
gap          → space between flex/grid children
```

### Typography

| Property | Controls |
|----------|----------|
| `font-family` | Which font (e.g., Geist, Inter, system fonts) |
| `font-size` | How big |
| `font-weight` | How bold (100=thin, 400=normal, 700=bold, 900=black) |
| `line-height` | Space between lines |
| `letter-spacing` | Space between characters (`tracking` in Tailwind) |
| `text-wrap: balance` | Evens out line lengths in headings |
| `text-wrap: pretty` | Prevents orphan words on the last line |
| `font-variant-numeric` | Tabular numbers for aligned columns |
| `clamp()` | Fluid font size that scales with viewport |
| `@font-face` | Loading custom fonts |
| **Variable fonts** | Single font file with adjustable weight/width/slant |

### Colors & Backgrounds

| Concept | What It Is |
|---------|-----------|
| `hex` (#FF5733) | Classic color format |
| `rgb` / `rgba` | Red, green, blue + alpha (transparency) |
| `hsl` / `hsla` | Hue, saturation, lightness - more intuitive for humans |
| `oklch` | Modern color space, perceptually uniform - the future |
| **CSS variables** | `--brand-color: #6B8072;` reuse everywhere |
| **Gradients** | `linear-gradient`, `radial-gradient`, `conic-gradient` |
| **Mesh gradients** | Complex multi-point color blends |
| `backdrop-filter: blur()` | Frosted glass effect behind an element |
| `mix-blend-mode` | Photoshop-like blending (multiply, screen, overlay) |
| `opacity` | Whole element transparency |
| `accent-color` | Style native form elements (checkboxes, radio buttons) |

### Borders & Shapes

| Technique | Effect |
|-----------|--------|
| `border-radius` | Rounded corners |
| `clip-path` | Cut elements into any shape (circles, polygons, custom) |
| `mask-image` | Fade elements out with gradient masks |
| `outline` | Outer ring (doesn't affect layout, great for focus states) |
| `box-shadow` | Shadows for depth |
| `drop-shadow` | Shadow that follows the shape (works on PNGs with transparency) |

### Responsive Design

```
Mobile-first approach (Tailwind default):

className="text-base md:text-lg lg:text-xl"
              │          │          │
              │          │          └── large screens (1024px+)
              │          └── medium screens (768px+)
              └── default (mobile)
```

| Concept | What It Does |
|---------|-------------|
| **Media queries** | Change styles at different screen sizes |
| **Container queries** | Change styles based on parent element size |
| **Fluid typography** | `clamp(1rem, 2.5vw, 2rem)` - scales smoothly |
| **Viewport units** | `vw`, `vh`, `dvh` (dynamic viewport height for mobile) |
| **Aspect ratio** | `aspect-ratio: 16/9` - maintains proportions |
| **`min()`, `max()`, `clamp()`** | Responsive values without media queries |

### Pseudo-Elements & States

| Selector | What It Does |
|----------|-------------|
| `:hover` | Mouse is over the element |
| `:focus` | Element is focused (keyboard/click) |
| `:focus-visible` | Focused via keyboard only (better UX) |
| `:active` | Being clicked |
| `:first-child`, `:last-child` | Target position in parent |
| `:nth-child(odd)` | Every other element (striped tables!) |
| `::before`, `::after` | Insert decorative content via CSS |
| `::placeholder` | Style form placeholder text |
| `::selection` | Style highlighted/selected text |
| `:has()` | Parent selector - "style parent if it contains X" |
| `:is()`, `:where()` | Group selectors efficiently |

---

## 3. CSS Animation & Transitions

| Technique | Complexity | Use Case |
|-----------|-----------|----------|
| `transition` | Simple | Property A to property B (hover, toggle) |
| `@keyframes` | Moderate | Multi-step animations, loops |
| `animation-timeline: scroll()` | Moderate | Scroll-driven animations (pure CSS, no JS!) |
| `animation-timeline: view()` | Moderate | Animate when element enters viewport (pure CSS!) |
| `@starting-style` | Simple | Animate elements appearing in the DOM |
| `view-transition-name` | Moderate | Smooth page-to-page transitions (native!) |

### Animation Properties

- `transform` - move (`translate`), rotate, scale, skew - GPU accelerated, very performant
- `opacity` - fade in/out - also GPU accelerated
- `filter` - blur, brightness, contrast, grayscale, sepia
- `clip-path` - animate shapes morphing
- `offset-path` - move elements along a custom path

### Easing Functions

```
linear        ████████████████  constant speed (robotic)
ease          ██████████░░░░░░  fast start, slow end
ease-in       ░░░░████████████  slow start, fast end
ease-out      ████████████░░░░  fast start, gentle stop
ease-in-out   ░░░█████████░░░  gentle start and stop
cubic-bezier  (fully custom)    any curve you want
spring()      (coming soon)     physics-based bounce
```

### Concepts → Tools Map

When prompting, you describe the **concept** (left column). The AI chooses the best **implementation** (right columns):

| Concept (what you say) | Browser-Native Option | Library Option |
|------------------------|----------------------|----------------|
| "Fade in elements as I scroll to them" | Intersection Observer, CSS `animation-timeline: view()` | GSAP ScrollTrigger, Framer Motion `whileInView` |
| "Animate based on scroll position/progress" | CSS `animation-timeline: scroll()` | GSAP ScrollTrigger (pinning, scrubbing, timelines) |
| "Animate text word by word or letter by letter" | Manual DOM splitting (`<span>` per character) | GSAP SplitText, Splitting.js |
| "Draw an SVG line on scroll" | CSS `stroke-dashoffset` animation | GSAP DrawSVGPlugin |
| "Make elements follow a curved path" | CSS `offset-path` | GSAP MotionPathPlugin |
| "Smooth page-to-page transitions" | View Transitions API | Framer Motion `AnimatePresence`, Barba.js |
| "Parallax scrolling" | `transform: translateY()` on scroll event | GSAP ScrollTrigger, Rellax.js |
| "Sticky section that transforms as you scroll" | `position: sticky` + Intersection Observer | GSAP ScrollTrigger `pin` |
| "Physics-based spring animations" | Web Animations API (limited) | Framer Motion `spring`, React Spring |
| "Continuously scrolling logo/text strip" | CSS `@keyframes` + `translateX` | No library needed - pure CSS |
| "Typewriter text effect" | `setTimeout` loop | Typed.js, custom hook |

---

## 4. JavaScript / TypeScript Concepts

### Core Concepts

| Concept | What It Is |
|---------|-----------|
| **Variables** | `let`, `const` - storing values |
| **Functions** | Reusable blocks of logic |
| **Arrays & Objects** | Collections of data |
| **Async/Await** | Handling things that take time (API calls, file loading) |
| **Promises** | The underlying mechanism for async operations |
| **DOM manipulation** | Changing the page with JS |
| **Events** | Responding to clicks, scrolls, keypresses, form submissions |
| **Fetch API** | Making HTTP requests to servers/APIs |
| **LocalStorage / SessionStorage** | Storing data in the browser |
| **Cookies** | Small data sent with every server request |

### Browser APIs

| API | What It Does |
|-----|-------------|
| **Intersection Observer** | Detect when elements enter/leave the viewport |
| **Resize Observer** | Detect when elements change size |
| **Mutation Observer** | Detect when the DOM changes |
| **Web Animations API** | JavaScript-driven animations (alternative to CSS) |
| **Clipboard API** | Copy/paste programmatically |
| **Geolocation** | Get user's location |
| **Notifications API** | Send desktop notifications |
| **Web Workers** | Run heavy computation without freezing the page |
| **Service Workers** | Offline support, background sync, push notifications |
| **WebSockets** | Real-time two-way communication (chat, live updates) |
| **Canvas API** | 2D drawing and graphics |
| **WebGL / WebGPU** | 3D graphics in the browser |
| **Speech Recognition** | Voice-to-text in the browser |
| **MediaRecorder** | Record audio/video from the user's camera/mic |
| **Drag and Drop API** | Native drag and drop |
| **File System Access API** | Read/write files on the user's computer |
| **View Transitions API** | Smooth animated transitions between pages |
| **Popover API** | Native popovers/dropdowns without JavaScript |

---

## 5. React Concepts

### Core

| Concept | What It Does |
|---------|-------------|
| **Components** | Reusable UI pieces (`.tsx` files) |
| **JSX** | HTML-like syntax inside JavaScript |
| **Props** | Data passed into a component from its parent |
| **State** (`useState`) | Data that changes over time inside a component |
| **Effects** (`useEffect`) | Run code when something changes |
| **Refs** (`useRef`) | Direct access to DOM elements |
| **Context** (`useContext`) | Share data across many components without prop drilling |
| **Memo** (`useMemo`, `useCallback`) | Performance optimization |
| **Custom Hooks** | Extract reusable logic |

### Advanced Patterns

| Pattern | What It Is |
|---------|-----------|
| **Server Components** | Run on the server, send HTML to client (Next.js default) |
| **Client Components** | Run in the browser, needed for interactivity |
| **Suspense** | Show loading states while data/components load |
| **Error Boundaries** | Catch errors gracefully instead of crashing |
| **Portals** | Render a component outside its parent DOM |
| **Render Props** | Share logic by passing rendering functions |
| **Compound Components** | Components that work together |
| **Controlled vs Uncontrolled** | Whether React or the DOM manages form input values |

---

## 6. Next.js Concepts

| Concept | What It Does |
|---------|-------------|
| **File-based routing** | Folders = URLs |
| **Layouts** | Shared UI that persists across pages |
| **Loading states** | `loading.tsx` shows while the page loads |
| **Error handling** | `error.tsx` catches page-level errors |
| **Not found** | `not-found.tsx` for 404 pages |
| **API Routes** | Build backend API endpoints in `app/api/` |
| **Server Actions** | Call server functions directly from forms |
| **Middleware** | Run code before every request |
| **Metadata** | SEO titles, descriptions, Open Graph images |
| **Image optimization** | `<Image>` component auto-optimizes images |
| **Font optimization** | `next/font` loads fonts with zero layout shift |
| **Static generation (SSG)** | Pre-build pages at deploy time |
| **Server-side rendering (SSR)** | Build pages on each request |
| **Incremental Static Regeneration (ISR)** | Rebuild static pages periodically |
| **Streaming** | Send HTML progressively as it's ready |
| **Parallel routes** | Multiple pages rendered simultaneously in slots |
| **Intercepting routes** | Show modals over the current page while updating the URL |

---

## 7. Styling Approaches

| Approach | How It Works |
|----------|-------------|
| **Vanilla CSS** | Write `.css` files |
| **CSS Modules** | Scoped CSS per component (`.module.css`) |
| **Tailwind CSS** | Utility classes in HTML |
| **Sass/SCSS** | CSS with variables, nesting, mixins |
| **CSS-in-JS** (styled-components, Emotion) | Write CSS inside JavaScript |
| **Vanilla Extract** | Type-safe CSS written in TypeScript |
| **Panda CSS** | Tailwind-like but generates atomic CSS at build time |
| **Open Props** | Pre-made CSS custom properties |

---

## 8. Animation Libraries

| Library | Strengths | Ideal For |
|---------|----------|-----------|
| **Framer Motion** | React-native, declarative, layout animations | React projects |
| **GSAP** | Most powerful, timeline-based, scroll control | Marketing sites, complex choreography |
| **Lottie** | Play After Effects animations on the web | Illustrated vector animations |
| **Rive** | Interactive vector animations, state machines | Game-like interactions |
| **Three.js** | 3D graphics and WebGL | 3D product viewers, immersive experiences |
| **React Three Fiber** | Three.js for React | 3D in React apps |
| **Spline** | Visual 3D design tool that exports to web | 3D scenes without writing WebGL |
| **Motion One** | Lightweight, Web Animations API | Minimal bundle size |
| **Auto Animate** | One line, automatic animations | Quick animations |
| **Typed.js** | Typewriter text effects | Typing animations |

---

## 9. UI Component Libraries

| Library | Philosophy |
|---------|-----------|
| **shadcn/ui** | Copy-paste components, Tailwind-based, fully customizable |
| **Radix UI** | Unstyled, accessible primitives |
| **Headless UI** | Unstyled components from the Tailwind team |
| **Material UI (MUI)** | Google's Material Design, opinionated |
| **Chakra UI** | Styled, accessible, easy to use |
| **Ant Design** | Enterprise-focused, very feature-rich |
| **DaisyUI** | Tailwind plugin with pre-designed components |
| **Aceternity UI** | Trendy animated components |
| **Magic UI** | Animated components |

---

## 10. Design Concepts

### Visual Hierarchy

How you guide the user's eye through the page:

```
BIG BOLD HEADING          ← Sees this first
Medium supporting text     ← Then this
Small details              ← Then this
[Button]                   ← Then acts
```

### Spacing Systems

Professional sites use consistent spacing scales:

```
4px → 8px → 12px → 16px → 24px → 32px → 48px → 64px → 96px → 128px
```

### Color Theory

| Concept | Meaning |
|---------|---------|
| **Primary color** | Your main brand color |
| **Neutral palette** | Grays for text, backgrounds, borders |
| **Semantic colors** | Red=danger, green=success, yellow=warning |
| **Contrast ratio** | Text must be readable (WCAG requires 4.5:1 minimum) |
| **60-30-10 rule** | 60% dominant color, 30% secondary, 10% accent |

### Typography Rules of Thumb

- No more than 2 fonts on a site
- Body text: 16-18px minimum for readability
- Line height: 1.5-1.7 for body text, 1.1-1.3 for headings
- Line length: 45-75 characters per line max
- Hierarchy through weight and size, not multiple fonts

### White Space

The empty space between elements. More white space = more premium feel. Cheap-looking sites cram too much together.

---

## 11. Accessibility (a11y)

| Concept | What It Means |
|---------|--------------|
| **Semantic HTML** | Using the right elements (`<button>`, not styled `<div>`) |
| **Alt text** | Descriptions on images for screen readers |
| **Keyboard navigation** | Every interactive element reachable via Tab key |
| **Focus indicators** | Visible outline when elements are focused |
| **ARIA attributes** | Extra info for assistive technology |
| **Color contrast** | Text readable against its background |
| **Reduced motion** | Respect user's motion preferences |
| **Screen reader testing** | NVDA (Windows), VoiceOver (Mac) |
| **Skip links** | "Skip to main content" for keyboard users |

---

## 12. Performance

| Concept | What It Means |
|---------|--------------|
| **Core Web Vitals** | Google's metrics: LCP, INP, CLS |
| **Lazy loading** | Only load images/components when visible |
| **Code splitting** | Only send JS needed for the current page |
| **Image optimization** | WebP/AVIF formats, responsive sizes |
| **Caching** | Store responses to avoid re-fetching |
| **CDN** | Serve files from nearby servers |
| **Bundle size** | Keep JavaScript payload small |
| **Prefetching** | Load the next page before the user clicks |
| **SSR/SSG** | Render HTML on the server for fast initial load |
| **Font loading** | `font-display: swap` to prevent invisible text |

---

## 13. SEO (Search Engine Optimization)

| Concept | Purpose |
|---------|---------|
| **Meta tags** | Title, description for search results |
| **Open Graph** | How your link looks on social media |
| **Structured data** (JSON-LD) | Rich results in Google |
| **Sitemap** | List of all pages for search engines |
| **Robots.txt** | Tell crawlers what to index |
| **Canonical URLs** | Avoid duplicate content issues |
| **Alt text** | Image descriptions |
| **Semantic HTML** | Search engines understand page structure |
| **Page speed** | Google ranks faster sites higher |

---

## 14. Backend Concepts

| Concept | What It Is |
|---------|-----------|
| **REST APIs** | Standard data exchange (GET, POST, PUT, DELETE) |
| **GraphQL** | Query exactly the data you need |
| **Databases** | PostgreSQL, MySQL, MongoDB, SQLite |
| **ORMs** | Prisma, Drizzle - database queries in TypeScript |
| **Authentication** | Login systems (NextAuth, Clerk, Supabase Auth) |
| **Authorization** | Who can access what (roles, permissions) |
| **File uploads** | S3, Cloudflare R2, Uploadthing |
| **Email** | Resend, SendGrid, Postmark |
| **Payments** | Stripe, Lemon Squeezy |
| **Real-time** | WebSockets, Server-Sent Events |
| **Background jobs** | Inngest, Trigger.dev |
| **Rate limiting** | Preventing abuse |
| **Caching** | Redis, Upstash |
| **BaaS** | Supabase, Firebase, Convex |

---

## 15. Hosting & Deployment

| Platform | Strength |
|----------|----------|
| **Vercel** | Built for Next.js |
| **Netlify** | Great developer experience |
| **Cloudflare Pages** | Edge-first, very fast |
| **Railway** | Easy server/database hosting |
| **Fly.io** | Docker-based, global deployment |
| **AWS / GCP / Azure** | Enterprise cloud |

---

## 16. Developer Tools & Workflow

| Tool | Purpose |
|------|---------|
| **Git** | Version control |
| **GitHub** | Host repositories, collaboration |
| **VS Code** | Code editor |
| **DevTools** (F12) | Inspect, debug, profile |
| **Figma** | Design tool |
| **Storybook** | Develop components in isolation |
| **ESLint** | Catch code errors |
| **Prettier** | Auto-format code |
| **TypeScript** | Type safety |
