# AGENTS.md

This file provides guidance to neovate when working with code in this repository.

## Development Commands

### Core Commands

- `pnpm install` - Install all dependencies using pnpm workspace
- `pnpm start` - Start scene-pro application in development mode
- `pnpm start:map` - Start map-pro application in development mode
- `pnpm build` - Build scene-pro application
- `pnpm build:map` - Build map-pro application

### Linting and Formatting

- `pnpm run lint` - Run ESLint and stylelint checks
- `pnpm run lint:fix` - Auto-fix code with prettier, eslint, and stylelint
- `pnpm run prepare` - Setup husky git hooks

## Code Architecture & Patterns

### Monorepo Structure

The project uses a Monorepo architecture with:

- `apps/` - Application templates (map-pro, scene-pro) built with Umi/Max
- `packages/` - Reusable libraries (cli, lib, middleware, store, ui, widgets)
- Core dependencies managed in root package.json with pnpm workspace

### Key Architectural Patterns

- **State Management**: Zustand (replaces dva) for global state management
- **GIS Engine**: ArcGIS Maps SDK for JavaScript with custom layer management
- **Component Architecture**: React components with dumi documentation
- **Middleware Pattern**: For layer control and data flow separation
- **HOC Composition**: For extending component functionality (withSearch, withActions)

### Data Flow

- Store layer in `packages/store` manages pure state
- Middleware layer in `packages/middleware` handles business logic
- Library layer in `packages/lib` contains core GIS operations
- Components use hooks to access state and trigger actions

### Layer Management System

- LayerTree component with middleware for controlling layer visibility
- createLayer utility supports multiple layer types (geojson, feature, imagery, etc.)
- Layer control operations (add, remove, goToFullExtent) in lib package
- Data normalization utilities for transforming backend data to expected format

## Technology Stack & Dependencies

### Core Frameworks

- **Umi/Max** for application framework (React-based)
- **ArcGIS Maps SDK for JavaScript** as GIS engine
- **Zustand** for state management
- **dumi** for component documentation
- **Ant Design** for UI components

### GIS Components

- **map-components** for new widget development (using web components)
- **LayerTree** with search and action capabilities
- **Custom widgets** for specialized GIS functionality
- **Static assets** management for ArcGIS resources

### Build Tools

- **pnpm** as package manager with workspace support
- **ESLint** with ali configuration for code quality
- **Prettier** for code formatting
- **Stylelint** for CSS/Less formatting
- **Husky** for git hooks
