import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const config = [
  ...nextConfig,
  prettierRecommended,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'public/**'],
  },
];

export default config;
