export const BASE_TOKEN_NAME = 'healthProtection_token';
export const PUBLIC_COUNTRY_TOKEN_NAME = 'publicApiCountry_Token';
export const PGW_TOKEN_NAME = 'pgw_Token';

export const selectedBaseUrlAPI = {
  auth: process.env.NEXT_PUBLIC_AUTH_URL,
  base: process.env.NEXT_PUBLIC_BASE_URL,
  wp: process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL,
  publicApiCountry: process.env.NEXT_PUBLIC_API_COUNTRY_BASE_URL,
  pgw: process.env.NEXT_PUBLIC_PGW_BASE_URL,
};

export const selectedTokenName = {
  auth: BASE_TOKEN_NAME,
  base: BASE_TOKEN_NAME,
  wp: BASE_TOKEN_NAME,
  publicApiCountry: PUBLIC_COUNTRY_TOKEN_NAME,
  pgw: PGW_TOKEN_NAME,
};
