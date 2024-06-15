// environment.ts (ambiente de desenvolvimento)

export const environment = {
  production: false,
  apiUrl: process.env['API_URL'] || 'http://localhost:3000',
};
