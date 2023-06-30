import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Barber Studio',
  origin: 'https://barberstudio-jet.vercel.app',
  basePathname: '/',
  trailingSlash: false,
  title: 'Barber Studio',
  description:
    'Na Barber Studio, os nossos barbeiros proporcionam um atendimento personalizado às tuas preferências. Visita-nos em Setúbal e vem também conhecer a nossa seleção de produtos em loja.',
  defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'pt',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('pt', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
