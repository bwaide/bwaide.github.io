# FreeYourData Alternatives CMS

This is a Content Management System for the FreeYourData "Alternatives" site, designed to provide information about European alternatives to US-based SaaS and Cloud services. The site will be accessible via https://alternatives.freeyourdata.eu and integrated with the Risk Assessment Calculator.

## Features

- Collection of alternatives organized by categories
- Risk level assessments for each alternative
- Detailed information about each service including features, compliance, and pricing
- Responsive design matching the main FreeYourData site
- Direct integration with Risk Assessment results

## Getting Started

### Prerequisites

- Ruby 2.7+ 
- Bundler
- Jekyll

### Installation

1. Clone the repository
2. Install Ruby dependencies:
   ```
   bundle install
   ```
3. Install Node.js dependencies (for Tailwind CSS):
   ```
   npm install
   ```
4. Build the CSS:
   ```
   npm run build:css
   ```
5. Run the development server:
   ```
   bundle exec jekyll serve
   ```
6. Visit http://localhost:4000 in your browser

For development, you can run Tailwind in watch mode in a separate terminal:
```
npm run dev
```

Note: If you want to make the site accessible from other devices on your network (for example, to test on mobile), use:
```
bundle exec jekyll serve --host=0.0.0.0
```
Then access it using your computer's IP address followed by port 4000.

### Adding New Content

#### Add a new category

Create a new markdown file in the `_categories` directory:

```markdown
---
layout: category
title: Category Name
category_name: Category Name
description: "Description of the category and why European alternatives are important."
---

Content describing the category in more detail...
```

#### Add a new alternative

Create a new markdown file in the `_alternatives/[category-name]` directory:

```markdown
---
layout: alternative
title: Service Name
category: Category Name
risk_level: Low/Medium/High
features:
  - Feature 1
  - Feature 2
compliance:
  - GDPR compliant
  - Based in Germany
pricing: "Free plan available, Premium from €X/month"
official_website: https://example.com
---

Content describing the service in detail...
```

## Deployment

The site can be deployed using GitHub Pages or any static site hosting service. Build the site using:

```
bundle exec jekyll build
```

The generated site will be in the `_site` directory.

## Integration with Risk Assessment Calculator

The Alternatives CMS is designed to be linked from the Risk Assessment results page. Each alternative has a risk_level that can be matched to the risk assessment results.