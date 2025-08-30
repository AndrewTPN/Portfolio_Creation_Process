# Andrew Nguyen Portfolio - Next.js Version

This is a modern portfolio website built with Next.js, converted from the original HTML/CSS/JavaScript version.

## Features

- **Modern React Components**: Built with Next.js 14 and React 18
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Elements**: Tab navigation, image carousel, and form handling
- **Icon Integration**: Uses Lucide React for consistent iconography
- **Performance Optimized**: Next.js Image component for optimized image loading

## Pages

- **Home**: Introduction and statistics
- **Services**: Overview of offered services
- **Resume**: Interactive resume with tabbed sections
- **Work**: Portfolio showcase with image carousel
- **Contact**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: JavaScript (ES6+)
- **Styling**: CSS with CSS Variables
- **Icons**: Lucide React
- **Font**: Space Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
app/
├── components/          # Reusable components
│   └── Header.js       # Navigation header
├── contact/            # Contact page
│   └── page.js
├── resume/             # Resume page
│   └── page.js
├── services/           # Services page
│   └── page.js
├── work/               # Work/Portfolio page
│   └── page.js
├── globals.css         # Global styles
├── layout.js           # Root layout
└── page.js             # Home page
```

## Assets

The following assets are referenced in the project:
- `profile.jpg` - Profile image
- `constr_imgs/` - Construction project images
- `logo_symbol/` - Technology skill icons

Make sure these assets are placed in the `public/` directory for proper Next.js static file serving.

## Customization

### Colors
Update the CSS variables in `globals.css`:
```css
:root { 
    --primary: #00ff9d;
    --background: #121212;
    --card: #1a1a1a;
    /* ... other colors */
}
```

### Content
Edit the content in each page component to match your information:
- Update personal details in `resume/page.js`
- Modify services in `services/page.js`
- Change project details in `work/page.js`
- Update contact information in `contact/page.js`

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js

## License

This project is for portfolio purposes. Feel free to use as a template for your own portfolio.

## Contact

For questions or support, reach out to Andrew Nguyen.
