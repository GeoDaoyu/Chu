import process from 'node:process';
import { defineConfig } from '@umijs/max';
import routes from './routes';

const { UMI_ENV } = process.env;

export default defineConfig({
  history: {
    type: 'hash',
  },
  antd: {
    style: 'css',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  mfsu: false,
  npmClient: 'pnpm',
  jsMinifier: 'terser',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  headScripts: [
    './config/fixHTMLElement.js',
    {
      src: UMI_ENV ? `./config/index.${UMI_ENV}.js` : './config/index.js',
    },
  ],
  styles: ['./assets/esri/themes/light/main.css'],
});
