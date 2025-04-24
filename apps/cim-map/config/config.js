import { defineConfig } from '@umijs/max';
import routes from './routes';

const UMI_ENV = process.env.UMI_ENV;

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  npmClient: 'pnpm',
  headScripts: [
    {
      src: UMI_ENV ? `./config/index.${UMI_ENV}.js` : './config/index.js',
    },
  ],
  styles: ['./assets/esri/themes/light/main.css'],
});
