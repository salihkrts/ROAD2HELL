export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Clean Vite base url, remove trailing slashes if any
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  
  // If path starts with slash, append to base (since GH pages expects /repo/assets...)
  if (path.startsWith('/')) {
    return `${baseUrl}${path}`;
  }
  
  return path;
};
