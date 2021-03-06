const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-listing-jsx": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/src/templates/listing.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/src/templates/tag.jsx"))),
  "component---src-templates-category-jsx": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/src/templates/category.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/peter_dzurus/Git/bug-hunt/src/pages/about.jsx")))
}

