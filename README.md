# StatAnimate

A sophisticated, animated statistics section featuring smooth counting animations, modern dark theme design, and intersection observer-triggered effects. Perfect for showcasing agency metrics, company achievements, or portfolio statistics with professional elegance.

## Live Demo

[View Live Demo](https://thisislefa.github.io/StatAnimate)

## Features

- **Smooth Counting Animations**: Elegant number counting with easing functions and staggered delays
- **Intersection Observer Trigger**: Animations start when section comes into viewport for optimal performance
- **Modern Dark Theme**: Professional black and gray color scheme with subtle borders and accents
- **Responsive Grid Layout**: Adaptive card grid that reflows seamlessly across all device sizes
- **Team Avatar Integration**: Inline team member avatars with overlapping design in the header statement
- **Custom Typography**: Precise Inter font weights with optimal sizing and spacing
- **Accessibility Focused**: Semantic HTML, proper ARIA labels, and keyboard navigation support
- **Performance Optimized**: Efficient JavaScript with requestAnimationFrame and single observer instance

## Tech Stack

- **HTML5** - Semantic structure with clean, accessible markup
- **CSS3** - CSS Grid, Flexbox, custom properties, and modern layout techniques
- **JavaScript ES6+** - Intersection Observer API and requestAnimationFrame for smooth animations
- **Google Fonts** - Inter font family (400-900 weights)
- **CSS Custom Properties** - Consistent theming and easy customization

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thisislefa/statanimate.git
   cd statanimate
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```

## Project Structure

```
statanimate/
├── index.html          # Complete HTML with embedded CSS and JavaScript
└── README.md           # Project documentation
```

## Usage

### Basic Integration
The statistics section is entirely self-contained in a single HTML file. Simply include it in your project:

```html
<!-- Copy the entire cirka-section-wrapper -->
<div class="cirka-section-wrapper" id="stats-section-observer">
    <!-- Statistics content -->
</div>
```

### Adding New Statistics
Extend the statistics grid by adding new card items:

```html
<div class="stat-card-item">
    <p class="stat-category-label">Your Category</p>
    <div class="number-display-wrapper" data-target="100" data-suffix="+">
        <span class="animated-counter-value">0</span>
        <span class="static-char">+</span>
    </div>
    <p class="stat-description-text">Your description text here.</p>
</div>
```

### Customization Options

#### Animation Settings
```css
:root {
    --animation-duration: 2500ms; /* Total counting animation time */
    --number-size: 4rem; /* Base size for animated numbers */
}
```

#### Color Scheme
```css
:root {
    --color-background-dark: #000000;
    --color-text-light: #ffffff;
    --color-text-muted: #aaaaaa;
    --color-card-background: #101010;
    --color-card-border: #333333;
    --highlight-color: #ffffff;
}
```

## Customization

### Colors
- Background Dark: `#000000`
- Text Light: `#ffffff`
- Text Muted: `#aaaaaa`
- Card Background: `#101010`
- Card Border: `#333333`
- Highlight Color: `#ffffff`

### Typography
- Header Tag: 0.875rem, 500 weight, 0.1em letter spacing (uppercase)
- Section Statement: 2.25rem (36px), 600 weight, 1.4 line height
- Stat Numbers: 4rem (64px), 900 weight (desktop), 3rem (48px) mobile
- Category Labels: 1rem (16px), 500 weight
- Description Text: 0.9rem (14px), 400 weight

### Layout
- Container Max Width: 1280px
- Grid Template: repeat(auto-fit, minmax(250px, 1fr))
- Grid Gap: 1.5rem (desktop), 1rem (mobile)
- Card Border Radius: 12px
- Card Padding: 2.5rem (desktop), 2rem (mobile)

### Animation Settings
- Total Duration: 2500ms
- Stagger Delay: 100ms between each counter
- Easing Function: easeOutQuad (progress * progress)
- Trigger Threshold: 20% visibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- **Note**: Requires support for Intersection Observer API and CSS Custom Properties

## Responsive Breakpoints

- Desktop: 769px and above (4-column grid)
- Mobile: 768px and below (1-2 column grid, adjusted typography)

## Technical Implementation Details

### Animation System
The component uses a sophisticated animation system that:
- Triggers only when the section is 20% visible in the viewport
- Uses requestAnimationFrame for smooth 60fps animations
- Implements easeOutQuad easing for natural acceleration
- Includes staggered delays between counter elements
- Handles large numbers with proper formatting

### Performance Features
- **Intersection Observer**: Prevents animations from running until needed
- **Single Observer Instance**: Efficient observation of the entire section
- **Animation Frame Optimization**: Uses performance.now() for precise timing
- **Memory Management**: Observer disconnects after first trigger

### JavaScript API
The component exposes several customizable parameters:
```javascript
const DURATION = 2500; // Total animation duration
const STAGGER_DELAY = 100; // Delay between counter starts
const THRESHOLD = 0.2; // Intersection observer trigger point
```

## Design Features

- **Card Design**: Subtle borders with dark backgrounds for depth
- **Typography Hierarchy**: Clear visual scaling from numbers to descriptions
- **Team Integration**: Creative avatar placement within header text
- **Iconography**: Custom asterisk/snowflake icon in header tag
- **Spacing System**: Consistent vertical rhythm and padding scales
- **Hover States**: Subtle interactive elements (expandable)
- **Color Contrast**: WCAG compliant text contrast ratios

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT License](https://github.com/thisislefa/statanimate/blob/main/LICENSE)



