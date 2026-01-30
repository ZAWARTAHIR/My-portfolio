# public/images

Place your static images in this folder.

Usage in React:

- When built with Create React App or similar, reference images by absolute path from `public`:
  - Example: `<img src="/images/profile.jpg" alt="Profile" />`

Notes:

- Files here are served as-is at `/images/<filename>`.
- If you prefer bundling and importing images, consider using `src/assets/images` instead.
