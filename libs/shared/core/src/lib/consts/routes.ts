export interface RouteModel {
  path: string;
  title?: string;
  landingPage: {
    path: string;
    title?: string;
  };
  page_not_found: {
    path: string;
    title?: string;
  };
}

export const APP_ROUTES: RouteModel = {
  path: '',
  landingPage: {
    path: 'landing-page',
    title: 'Welcome on TrenApp',
  },
  page_not_found: {
    path: 'page-not-found',
    title: 'Not found',
  },
};
