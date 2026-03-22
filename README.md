# Restaurant-Page

A dynamic restaurant website built with vanilla JavaScript and Webpack. All page content is generated through DOM manipulation — no content is hardcoded in HTML. Built as part of The Odin Project curriculum.

## Live Demo

[View on GitHub Pages](https://anvar-khikmatov.github.io/Restaurant-Page) 

## Features

- Full DOM-based content rendering
- Tabbed navigation: Home, Menu, About
- Responsive design for mobile and desktop
- Webpack module bundling
- CSS custom properties for consistent theming

## Tech Stack

- Vanilla JavaScript (ES Modules)
- CSS3 with custom properties
- Webpack 5
- HtmlWebpackPlugin
- css-loader, style-loader
- asset/resource loader for images

## Getting Started

Clone the repo:

```bash
git clone  https://github.com/Anvar-Khikmatov/Restaurant-Page.git
cd Restaurant-Page
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npx webpack serve
```

Open your browser at http://localhost:8080

## Build for Production

```bash
npx webpack
```

Output will be in the dist folder.

## Project Structure

```
src/
  index.js        # Entry point, tab switching logic
  home.js         # Home tab module
  menu.js         # Menu tab module
  about.js        # About tab module
  style.css       # Global styles
  template.html   # HTML template
  img/            # Image assets
webpack.config.js
package.json
```

