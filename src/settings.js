// settings.js

export const appSettings = {
    appName: 'Moja Aplikacja',
    appDescription: 'Opis mojej aplikacji',
    authors: ['Autor 1', 'Autor 2'],
    theme: 'light',
  };
  
  export const getAppSettings = () => {
    return appSettings;
  };
  
  export const setAppSettings = (newSettings) => {
    Object.assign(appSettings, newSettings);
  };
  