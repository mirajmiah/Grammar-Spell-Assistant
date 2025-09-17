// Config.js
const CONFIG = {
    GEMINI_API_KEY: window.location.hostname.includes('localhost') 
        ? 'AIzaSyAKrUzsPx9eHdz51GlQjGPuOZnPoxh8JXc'  // Local development
        : 'PLACEHOLDER_FOR_PRODUCTION'  // Will be replaced by backend
};
