# Overview

ScanBand is a marketing website for a soccer training wearable device that provides real-time scanning feedback to improve field vision and awareness. The project is a static website showcasing the product with preorder functionality, targeting soccer players and training enthusiasts who want to develop Messi-like field awareness skills.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static HTML/CSS/JavaScript**: Simple multi-page structure with index.html as the main landing page and preorder.html for customer acquisition
- **CSS Animation Framework**: Custom keyframe animations for professional user experience including fadeInUp, slideInFromLeft, slideInFromRight, and pulse effects
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox with viewport meta tags for cross-device compatibility
- **Font Integration**: Google Fonts (Inter) for consistent typography across the site

## SEO and Marketing Optimization
- **Meta Tag Strategy**: Comprehensive SEO implementation with Open Graph and Twitter Cards for social media sharing
- **Structured Data**: JSON-LD schema markup for product information to enhance search engine understanding
- **Canonical URLs**: Proper URL canonicalization for search engine optimization
- **Robots.txt**: Search engine crawler guidance with sitemap reference

## Form Handling Architecture
- **Client-Side Validation**: JavaScript form validation with required field checking
- **Dual Form Implementation**: Both inline JavaScript (preorder.html) and external script (script.js) handling for form submissions
- **User Feedback System**: Dynamic show/hide messaging for form submission confirmation
- **Fetch API Integration**: Modern browser API for form data submission with proper error handling

## Content Strategy
- **Product Positioning**: Focus on being "world's first" soccer vision training wearable
- **Social Proof Integration**: References to professional players (Messi) for credibility
- **Call-to-Action Flow**: Clear navigation from product information to preorder process

# External Dependencies

## Third-Party Services
- **Google Fonts API**: Inter font family hosting for consistent typography
- **Form Processing Service**: External form handling endpoint (referenced in script.js but not visible in current codebase)
- **Venmo Integration**: Payment processing through Venmo platform (@connorowen888)

## Asset Dependencies
- **Image Assets**: Product images and favicon files stored in local Images directory
- **Sitemap**: Referenced in robots.txt for search engine indexing (not included in current files)

## Browser APIs
- **Fetch API**: For asynchronous form submission
- **DOM Manipulation**: Standard JavaScript for form handling and UI updates
- **CSS3 Animations**: Native browser animation support for enhanced user experience