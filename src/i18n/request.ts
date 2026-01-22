import { getRequestConfig } from 'next-intl/server';

// Pour export statique, on ne peut pas utiliser requestLocale
// Les messages sont chargés directement dans le layout
export default getRequestConfig(async () => {
  // Retourne une config vide, les messages sont gérés dans le layout
  return {
    locale: 'en',
    messages: {}
  };
});