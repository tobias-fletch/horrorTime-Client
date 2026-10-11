// Centralized API base URL for the horrorTime backend.
//
// Override at build time with the API_URL environment variable, e.g.:
//   API_URL=https://my-backend.onrender.com npm run build
// Parcel 1 inlines process.env.* at build time (from the environment or .env).
// Falls back to the legacy Heroku URL until the backend is re-hosted.
export const API_URL =
  process.env.API_URL || 'https://itshorrortime.herokuapp.com';
