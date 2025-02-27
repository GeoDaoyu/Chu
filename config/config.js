import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  npmClient: 'pnpm',
  headScripts: [{ src: './config/index.js' }],
  styles: ['./assets/esri/themes/light/main.css'],
});
