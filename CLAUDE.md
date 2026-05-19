# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Chu is a modern WebGIS framework using a pnpm Monorepo architecture. It consists of UmiJS Max applications (3D Scene and 2D Map) plus shared packages for UI components, widgets, state management, and utilities. The map engine is ArcGIS Maps SDK for JavaScript v5.

## Commands

```bash
# Development
pnpm start              # Start scene-pro (3D) dev server
pnpm start:map          # Start map-pro (2D) dev server

# Build
pnpm build              # Build scene-pro
pnpm build:map          # Build map-pro

# Linting & Formatting
pnpm lint               # ESLint + Stylelint
pnpm lint:fix           # Prettier + ESLint fix + Stylelint fix

# Fix ArcGIS SceneView syntax error (required after install)
pnpm fix:arcgis
```

Packages use `father` for building and `dumi` for component documentation. Run `pnpm build` inside a package directory to build it, or `pnpm dev` for dumi doc preview.

## Architecture

```
apps/
  scene-pro/     # 3D SceneView app (UmiJS Max + ArcGIS SceneView)
  map-pro/       # 2D MapView app (UmiJS Max + ArcGIS MapView)
packages/
  lib/           # @chu/lib — Core utilities, business logic, layer helpers
  store/         # @chu/store — Zustand stores (useViewStore, useLayerTreeStore)
  middleware/    # @chu/middleware — Zustand middleware (layerControl, log)
  ui/            # @chu/ui — Shared UI components (Panel, Toolbar, FunctionList)
  widgets/       # @chu/widgets — ArcGIS-based map widgets (wrappers + custom)
  cli/           # @geodaoyu/chu-cli — Project scaffolding CLI
```

## Key Patterns

**State management** uses Zustand with a `withMiddlewares` helper (`packages/store/util/withMiddlewares.js`) that composes store middleware via Ramda's `compose`. The `useViewStore` holds the ArcGIS view instance; `useLayerTreeStore` holds layer tree data and checked keys.

**Map initialization** happens in the app-level `src/widgets/Map/index.js`. It creates an ArcGIS `Map` + `SceneView` (or `MapView` for map-pro), sets `esriConfig.assetsPath` to `'./assets'`, and stores the view in Zustand via `initializeView(view)`. The view is also attached to the container DOM element (`ref.current.view = view`) for ArcGIS map-components usage.

**Post-install**: After `pnpm install`, apps run `max setup` then copy ArcGIS assets from `node_modules/@arcgis/core/assets/` to `public/assets/` via `cpx`.

**ArcGIS SceneView fix**: `@arcgis/core` v5 has a syntax error in `SceneView.js`. Running `pnpm fix:arcgis` applies prettier formatting to that file as a workaround. This must be done after each install.

**Conventional commits** are enforced via commitlint (Angular convention). Types: feat, fix, docs, style, refactor, perf, test, chore, deps.

## Linting Conventions

- ESLint extends `eslint-config-ali` (Alibaba F2E spec) with React rules and Prettier
- Stylelint extends `stylelint-config-standard`
- Prettier uses `prettier-config-ali` with organize-imports and packagejson plugins
- `react/prop-types` is disabled project-wide
- lint-staged auto-fixes on pre-commit via Husky

## Application Structure (per app)

Each app follows UmiJS Max conventions:
- `config/config.js` — Umi config with `hash` history, `antd`, `access`, `model`, `initialState` plugins
- `config/routes.js` — Route definitions with layout
- `src/app.jsx` — Runtime config: `getInitialState`, `rootContainer` (Antd ConfigProvider wrapping)
- `src/access.js` — Access control rules
- `src/layouts/` — Layout components with Map + sidebar shell
- `src/pages/` — Route-level page components
- `src/models/` — Umi models (currently empty, state managed via Zustand instead)
- `src/services/` — API service calls
