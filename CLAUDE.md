# FreeYourData Alternatives CMS - Commands & Style Guide

## Build & Run Commands
- Install Ruby dependencies: `bundle install`
- Install Node.js dependencies: `npm install`
- Build CSS: `npm run build:css`
- Run Tailwind in watch mode: `npm run dev`
- Run development server: `bundle exec jekyll serve`
- Run with all interfaces (for testing subdomain): `bundle exec jekyll serve --host=0.0.0.0`
- Build site: `bundle exec jekyll build`
- Preview drafts: `bundle exec jekyll serve --drafts`
- Create new alternative: Create markdown file in _alternatives/[category]/[service-name].md
- Create new category: Create markdown file in _categories/[category-name].md

## Testing
- No formal test framework identified

## Code Style Guidelines
- **Naming**: Use snake_case for file names and variables
- **Front Matter**: Always include layout, title, date in post front matter
- **Markdown**: Use Markdown for content with Jekyll-specific templating
- **Permalinks**: Use descriptive, SEO-friendly URLs in front matter
- **Liquid Tags**: Use `{%raw%}{% %}{%endraw%}` for logic, `{%raw%}{{ }}{%endraw%}` for output
- **Images**: Store in /assets/images/ with descriptive filenames
- **Error Handling**: Use conditional Liquid tags for optional content
- **Code Snippets**: Use highlight blocks with language specified

## Project Structure
- `_posts/`: Blog posts with YYYY-MM-DD-title.markdown naming
- `_layouts/`: Page templates
- `_includes/`: Reusable components
- `assets/`: Static files (CSS, JS, images)