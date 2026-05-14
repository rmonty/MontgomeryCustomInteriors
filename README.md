# MontgomeryCustomInteriors

This is the new GitHub Pages-ready site for Montgomery Custom Interiors.

## What is in this scaffold

- Static public pages rebuilt from the Wix site structure.
- Shared styling and lightweight interaction with no backend dependency.
- A contact/booking flow that can stay static unless persistence, auth, or file uploads become necessary.
- A clear place to add Firebase later only if the site needs backend services.

## Pages

- `index.html` - Home
- `services.html` - Services
- `projects.html` - Projects
- `testimonials.html` - Testimonials
- `booking.html` - Book Online
- `contact.html` - Contact
- `404.html` - GitHub Pages fallback

## Firebase guidance

Do not add Firebase unless a feature needs one of the following:

- saved form submissions
- authentication or member-only access
- file uploads
- dynamic content that should not live in static files

If that becomes necessary, add Firebase incrementally and keep the public site functional without it.