export const API = import.meta.env.PROD
  ? `${import.meta.env.VITE_HOST}`
  : "http://localhost:5000";
