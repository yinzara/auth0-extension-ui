## [2.0.0] - 2026-09-21

### Breaking changes

- Requires React 18 (`react`, `react-dom`), React Router 7 (`react-router`) and Node.js >= 22.12.
- `SidebarItem`, `TabPane` and `TableRouteCell` no longer read the react-router v2 context; they must be rendered inside a react-router v7 `<Router>` (e.g. `<BrowserRouter>`).
- `Multiselect`, `Select` and `VirtualizedSelect` now use react-select v5 (`react-window` for virtualization). The public props are unchanged (`multi`, `loadOptions`, `options`, ...), but the `react-select-fast-filter-options` filtering was replaced by react-select's own filtering.
- `Alert`, `Confirm`, `Pagination` and `TableAction` now use react-bootstrap v2 internally.
- `redux` is no longer a peer dependency (it was never imported by the components).

### Changes

- Upgrade the build to webpack 5 / Babel 7+ and the tooling (mocha, eslint 9, storybook 10) to their latest versions.
- The package can be installed directly from GitHub (`npm install auth0-extensions/auth0-extension-ui`): `dist` is no longer committed and is built by the `prepare` script on install.
- `CodeEditor` uses CodeMirror 5 directly instead of the unmaintained `react-codemirror`.
- `LoadingPanel` and `DragAndDrop` no longer depend on `react-loader-advanced` / the old `react-dropzone` API.

## [1.1.5] - 2018-02-22

### Changes

- Add localization support for Error, Paging, Totals, and SearchBar

