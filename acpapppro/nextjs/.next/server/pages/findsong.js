"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/findsong";
exports.ids = ["pages/findsong"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport safe */ _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   FormControl: () => (/* reexport safe */ _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   InputLabel: () => (/* reexport safe */ _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   MenuItem: () => (/* reexport safe */ _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Paper: () => (/* reexport safe */ _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Select: () => (/* reexport safe */ _Select_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   Table: () => (/* reexport safe */ _Table_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   TableBody: () => (/* reexport safe */ _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   TableCell: () => (/* reexport safe */ _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   TableContainer: () => (/* reexport safe */ _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   TableHead: () => (/* reexport safe */ _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   TableRow: () => (/* reexport safe */ _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__.ThemeProvider),\n/* harmony export */   Toolbar: () => (/* reexport safe */ _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n/* harmony export */   createTheme: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__.createTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar/index.js */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CssBaseline/index.js */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormControl/index.js */ \"./node_modules/@mui/material/FormControl/index.js\");\n/* harmony import */ var _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputLabel/index.js */ \"./node_modules/@mui/material/InputLabel/index.js\");\n/* harmony import */ var _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuItem/index.js */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Paper/index.js */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _Select_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Select/index.js */ \"./node_modules/@mui/material/Select/index.js\");\n/* harmony import */ var _Table_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table/index.js */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableBody/index.js */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableCell/index.js */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TableContainer/index.js */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* harmony import */ var _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TableHead/index.js */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TableRow/index.js */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextField/index.js */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Toolbar/index.js */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__, _Select_index_js__WEBPACK_IMPORTED_MODULE_8__, _Table_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__]);\n([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__, _Select_index_js__WEBPACK_IMPORTED_MODULE_8__, _Table_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQm94LEJ1dHRvbixDc3NCYXNlbGluZSxGb3JtQ29udHJvbCxJbnB1dExhYmVsLE1lbnVJdGVtLFBhcGVyLFNlbGVjdCxUYWJsZSxUYWJsZUJvZHksVGFibGVDZWxsLFRhYmxlQ29udGFpbmVyLFRhYmxlSGVhZCxUYWJsZVJvdyxUZXh0RmllbGQsVGhlbWVQcm92aWRlcixUb29sYmFyLFR5cG9ncmFwaHksY3JlYXRlVGhlbWUhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDTjtBQUNNO0FBQ1U7QUFDQTtBQUNGO0FBQ0o7QUFDTjtBQUNFO0FBQ0Y7QUFDUTtBQUNBO0FBQ1U7QUFDVjtBQUNGO0FBQ0U7QUFDb0I7QUFDeEI7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzPzI3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvbi9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtQ29udHJvbCB9IGZyb20gXCIuL0Zvcm1Db250cm9sL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRMYWJlbCB9IGZyb20gXCIuL0lucHV0TGFiZWwvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51SXRlbSB9IGZyb20gXCIuL01lbnVJdGVtL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFwZXIgfSBmcm9tIFwiLi9QYXBlci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSBcIi4vVGFibGUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUJvZHkgfSBmcm9tIFwiLi9UYWJsZUJvZHkvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNlbGwgfSBmcm9tIFwiLi9UYWJsZUNlbGwvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNvbnRhaW5lciB9IGZyb20gXCIuL1RhYmxlQ29udGFpbmVyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVIZWFkIH0gZnJvbSBcIi4vVGFibGVIZWFkL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVSb3cgfSBmcm9tIFwiLi9UYWJsZVJvdy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gXCIuL1RleHRGaWVsZC9pbmRleC5qc1wiXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi9zcmMvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiXG5leHBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCIvc3JjL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffindsong&preferredRegion=&absolutePagePath=.%2Fpages%2Ffindsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffindsong&preferredRegion=&absolutePagePath=.%2Fpages%2Ffindsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./node_modules/next/dist/pages/_app.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/findsong.js */ \"./pages/findsong.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/findsong\",\n        pathname: \"/findsong\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: (private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_findsong_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGZmluZHNvbmcmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmZpbmRzb25nLmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDaEM7QUFDTDtBQUMxRDtBQUNvRDtBQUNWO0FBQzFDO0FBQ2dEO0FBQ2hEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywrQ0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQywrQ0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQywrQ0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQywrQ0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsK0NBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsK0NBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQywrQ0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQywrQ0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQywrQ0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQywrQ0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQywrQ0FBUTtBQUN6RDtBQUNPLHdCQUF3Qix5R0FBZ0I7QUFDL0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8/NjZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2ZpbmRzb25nLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvZmluZHNvbmdcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2ZpbmRzb25nXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXBwLFxuICAgICAgICBEb2N1bWVudFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffindsong&preferredRegion=&absolutePagePath=.%2Fpages%2Ffindsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material-nextjs/v13-pagesRouter */ \"@mui/material-nextjs/v13-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Document(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.DocumentHeadTags, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/src/pages/_document.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/_document.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nDocument.getInitialProps = async (ctx)=>{\n    const finalProps = await (0,_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.documentGetInitialProps)(ctx);\n    return finalProps;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkQ7QUFJZjtBQUUvQixTQUFTTSxTQUFTQyxLQUFLO0lBQ3BDLHFCQUNFLDhEQUFDUCwrQ0FBSUE7UUFBQ1EsTUFBSzs7MEJBQ1QsOERBQUNQLCtDQUFJQTswQkFDSCw0RUFBQ0csa0ZBQWdCQTtvQkFBRSxHQUFHRyxLQUFLOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUNFOztrQ0FDQyw4REFBQ1AsK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtBQUVBRyxTQUFTSSxlQUFlLEdBQUcsT0FBT0M7SUFDaEMsTUFBTUMsYUFBYSxNQUFNUCw2RkFBdUJBLENBQUNNO0lBQ2pELE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudEhlYWRUYWdzLFxyXG4gIGRvY3VtZW50R2V0SW5pdGlhbFByb3BzLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsLW5leHRqcy92MTMtcGFnZXNSb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8RG9jdW1lbnRIZWFkVGFncyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE1haW4gLz5cclxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L0h0bWw+XHJcbiAgKTtcclxufVxyXG5cclxuRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGZpbmFsUHJvcHMgPSBhd2FpdCBkb2N1bWVudEdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIHJldHVybiBmaW5hbFByb3BzO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkRvY3VtZW50SGVhZFRhZ3MiLCJkb2N1bWVudEdldEluaXRpYWxQcm9wcyIsIkRvY3VtZW50IiwicHJvcHMiLCJsYW5nIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZpbmFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./pages/findsong.js":
/*!***************************!*\
  !*** ./pages/findsong.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FindSongPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__]);\n_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Dark theme with black and orange\nconst darkTheme = (0,_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n    palette: {\n        mode: \"dark\",\n        background: {\n            default: \"#000000\",\n            paper: \"#1e1e1e\"\n        },\n        primary: {\n            main: \"#ff8c00\"\n        },\n        text: {\n            primary: \"#ffffff\",\n            secondary: \"#ff8c00\"\n        }\n    }\n});\n// List of allowed languages\nconst allowedLanguages = [\n    \"Mandarin Chinese\",\n    \"English\",\n    \"Spanish\",\n    \"Portuguese\",\n    \"Russian\",\n    \"Hindi\",\n    \"Japanese\",\n    \"Arabic\",\n    \"French\",\n    \"Thai\"\n];\n// List of allowed genres\nconst allowedGenres = [\n    \"Pop\",\n    \"Hip Hop\",\n    \"R&B\",\n    \"Dance\",\n    \"Classic Rock\"\n];\nfunction FindSongPage() {\n    const [songName, setSongName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [songType, setSongType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [songList, setSongList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            songName: \"Song 1\",\n            songType: \"Pop\",\n            language: \"English\"\n        },\n        {\n            songName: \"Song 2\",\n            songType: \"R&B\",\n            language: \"Mandarin Chinese\"\n        },\n        {\n            songName: \"Song 3\",\n            songType: \"Dance\",\n            language: \"Spanish\"\n        }\n    ]);\n    const [topSongs, setTopSongs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleFindSong = ()=>{\n        // Filtering logic\n        const filteredSongs = songList.filter((song)=>(!songName || song.songName.toLowerCase().includes(songName.toLowerCase())) && (!songType || song.songType === songType) && (!language || song.language === language));\n        // Select top 3 matching songs\n        const randomTopSongs = filteredSongs.sort(()=>0.5 - Math.random()).slice(0, 3);\n        setTopSongs(randomTopSongs);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: darkTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {\n                fileName: \"/src/pages/findsong.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {\n                position: \"static\",\n                sx: {\n                    backgroundColor: \"#1e1e1e\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"h6\",\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: \"MusicApp\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/findsong.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: \"inherit\",\n                            href: \"/mainpage\",\n                            sx: {\n                                color: \"#ff8c00\"\n                            },\n                            children: \"Back to Main Page\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/findsong.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/src/pages/findsong.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/findsong.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    height: \"100vh\",\n                    width: \"100vw\",\n                    backgroundColor: \"background.default\",\n                    padding: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 2,\n                            backgroundColor: \"background.paper\",\n                            padding: 4,\n                            borderRadius: 2,\n                            width: \"100%\",\n                            maxWidth: \"600px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"h5\",\n                                gutterBottom: true,\n                                sx: {\n                                    color: \"text.secondary\"\n                                },\n                                children: \"Find Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/findsong.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        shrink: true,\n                                        children: \"Song Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                        label: \"Song Name\",\n                                        variant: \"outlined\",\n                                        value: songName,\n                                        onChange: (e)=>setSongName(e.target.value),\n                                        fullWidth: true,\n                                        InputProps: {\n                                            style: {\n                                                color: \"#ffffff\",\n                                                backgroundColor: \"#333\"\n                                            }\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/findsong.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        shrink: true,\n                                        children: \"Song Type (Genre)\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                        value: songType,\n                                        onChange: (e)=>setSongType(e.target.value),\n                                        sx: {\n                                            backgroundColor: \"#333\",\n                                            color: \"#fff\"\n                                        },\n                                        label: \"Song Type (Genre)\",\n                                        children: allowedGenres.map((genre)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                value: genre,\n                                                children: genre\n                                            }, genre, false, {\n                                                fileName: \"/src/pages/findsong.js\",\n                                                lineNumber: 139,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/findsong.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        shrink: true,\n                                        children: \"Language\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 148,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                        value: language,\n                                        onChange: (e)=>setLanguage(e.target.value),\n                                        sx: {\n                                            backgroundColor: \"#333\",\n                                            color: \"#fff\"\n                                        },\n                                        label: \"Language\",\n                                        children: allowedLanguages.map((lang)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                value: lang,\n                                                children: lang\n                                            }, lang, false, {\n                                                fileName: \"/src/pages/findsong.js\",\n                                                lineNumber: 156,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/findsong.js\",\n                                lineNumber: 147,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"contained\",\n                                onClick: handleFindSong,\n                                fullWidth: true,\n                                sx: {\n                                    backgroundColor: \"primary.main\",\n                                    color: \"#ffffff\"\n                                },\n                                children: \"Find Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/findsong.js\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/src/pages/findsong.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    topSongs.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                        component: _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper,\n                        sx: {\n                            marginTop: 4,\n                            backgroundColor: \"background.paper\",\n                            width: \"100%\",\n                            maxWidth: \"900px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/findsong.js\",\n                                                lineNumber: 179,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Type (Genre)\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/findsong.js\",\n                                                lineNumber: 180,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Language\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/findsong.js\",\n                                                lineNumber: 181,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/src/pages/findsong.js\",\n                                        lineNumber: 178,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/findsong.js\",\n                                    lineNumber: 177,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                                    children: topSongs.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songName\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/findsong.js\",\n                                                    lineNumber: 187,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songType\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/findsong.js\",\n                                                    lineNumber: 188,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.language\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/findsong.js\",\n                                                    lineNumber: 189,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/src/pages/findsong.js\",\n                                            lineNumber: 186,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/findsong.js\",\n                                    lineNumber: 184,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/src/pages/findsong.js\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/src/pages/findsong.js\",\n                        lineNumber: 175,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/findsong.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/findsong.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkQsOERBQUM3Qix3UUFBU0E7b0RBQUNvRCxJQUFJO3dEQUFFSSxPQUFPO29EQUFVOzhEQUFJZCxLQUFLWCxRQUFROzs7Ozs7OERBQ25ELDhEQUFDL0Isd1FBQVNBO29EQUFDb0QsSUFBSTt3REFBRUksT0FBTztvREFBVTs4REFBSWQsS0FBS1QsUUFBUTs7Ozs7OzsyQ0FIdENtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vcGFnZXMvZmluZHNvbmcuanM/OTJlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dEZpZWxkLCBNZW51SXRlbSwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgUGFwZXIsIFR5cG9ncmFwaHksIGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSwgU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgQXBwQmFyLCBUb29sYmFyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBEYXJrIHRoZW1lIHdpdGggYmxhY2sgYW5kIG9yYW5nZVxyXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgbW9kZTogJ2RhcmsnLFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBkZWZhdWx0OiBcIiMwMDAwMDBcIiwgLy8gQmxhY2sgYmFja2dyb3VuZFxyXG4gICAgICBwYXBlcjogXCIjMWUxZTFlXCIsICAgLy8gRGFyayBncmV5IGJveCBjb2xvciBmb3IgY29udGFpbmVyc1xyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyNmZjhjMDAnLCAvLyBPcmFuZ2UgZm9yIHByaW1hcnkgYWNjZW50cyAoYnV0dG9ucywgbGFiZWxzKVxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgcHJpbWFyeTogXCIjZmZmZmZmXCIsICAvLyBXaGl0ZSB0ZXh0XHJcbiAgICAgIHNlY29uZGFyeTogXCIjZmY4YzAwXCIsIC8vIE9yYW5nZSB0ZXh0IGZvciBlbXBoYXNpc1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIExpc3Qgb2YgYWxsb3dlZCBsYW5ndWFnZXNcclxuY29uc3QgYWxsb3dlZExhbmd1YWdlcyA9IFtcclxuICBcIk1hbmRhcmluIENoaW5lc2VcIixcclxuICBcIkVuZ2xpc2hcIixcclxuICBcIlNwYW5pc2hcIixcclxuICBcIlBvcnR1Z3Vlc2VcIixcclxuICBcIlJ1c3NpYW5cIixcclxuICBcIkhpbmRpXCIsXHJcbiAgXCJKYXBhbmVzZVwiLFxyXG4gIFwiQXJhYmljXCIsXHJcbiAgXCJGcmVuY2hcIixcclxuICBcIlRoYWlcIixcclxuXTtcclxuXHJcbi8vIExpc3Qgb2YgYWxsb3dlZCBnZW5yZXNcclxuY29uc3QgYWxsb3dlZEdlbnJlcyA9IFtcclxuICBcIlBvcFwiLFxyXG4gIFwiSGlwIEhvcFwiLFxyXG4gIFwiUiZCXCIsXHJcbiAgXCJEYW5jZVwiLFxyXG4gIFwiQ2xhc3NpYyBSb2NrXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaW5kU29uZ1BhZ2UoKSB7XHJcbiAgY29uc3QgW3NvbmdOYW1lLCBzZXRTb25nTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc29uZ1R5cGUsIHNldFNvbmdUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NvbmdMaXN0LCBzZXRTb25nTGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICB7IHNvbmdOYW1lOiBcIlNvbmcgMVwiLCBzb25nVHlwZTogXCJQb3BcIiwgbGFuZ3VhZ2U6IFwiRW5nbGlzaFwiIH0sXHJcbiAgICB7IHNvbmdOYW1lOiBcIlNvbmcgMlwiLCBzb25nVHlwZTogXCJSJkJcIiwgbGFuZ3VhZ2U6IFwiTWFuZGFyaW4gQ2hpbmVzZVwiIH0sXHJcbiAgICB7IHNvbmdOYW1lOiBcIlNvbmcgM1wiLCBzb25nVHlwZTogXCJEYW5jZVwiLCBsYW5ndWFnZTogXCJTcGFuaXNoXCIgfSxcclxuICBdKTtcclxuICBjb25zdCBbdG9wU29uZ3MsIHNldFRvcFNvbmdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmluZFNvbmcgPSAoKSA9PiB7XHJcbiAgICAvLyBGaWx0ZXJpbmcgbG9naWNcclxuICAgIGNvbnN0IGZpbHRlcmVkU29uZ3MgPSBzb25nTGlzdC5maWx0ZXIoKHNvbmcpID0+XHJcbiAgICAgICghc29uZ05hbWUgfHwgc29uZy5zb25nTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNvbmdOYW1lLnRvTG93ZXJDYXNlKCkpKSAmJlxyXG4gICAgICAoIXNvbmdUeXBlIHx8IHNvbmcuc29uZ1R5cGUgPT09IHNvbmdUeXBlKSAmJlxyXG4gICAgICAoIWxhbmd1YWdlIHx8IHNvbmcubGFuZ3VhZ2UgPT09IGxhbmd1YWdlKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3QgdG9wIDMgbWF0Y2hpbmcgc29uZ3NcclxuICAgIGNvbnN0IHJhbmRvbVRvcFNvbmdzID0gZmlsdGVyZWRTb25nc1xyXG4gICAgICAuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKVxyXG4gICAgICAuc2xpY2UoMCwgMyk7XHJcbiAgICBzZXRUb3BTb25ncyhyYW5kb21Ub3BTb25ncyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrVGhlbWV9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuXHJcbiAgICAgIHsvKiBOYXZpZ2F0aW9uIEJhciAqL31cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxZTFlMWUnIH19PlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIE11c2ljQXBwXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvbWFpbnBhZ2VcIiBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PlxyXG4gICAgICAgICAgICBCYWNrIHRvIE1haW4gUGFnZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5kZWZhdWx0XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEZpbmQgU29uZyBJbnB1dCBGb3JtICovfVxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIGdhcDogMixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcclxuICAgICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogJzYwMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIFRpdGxlICovfVxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tIHN4PXt7IGNvbG9yOiBcInRleHQuc2Vjb25kYXJ5XCIgfX0+XHJcbiAgICAgICAgICAgIEZpbmQgU29uZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIHsvKiBTb25nIE5hbWUgSW5wdXQgKi99XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fSBzaHJpbms+U29uZyBOYW1lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb25nIE5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NvbmdOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29uZ05hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIElucHV0UHJvcHM9e3sgc3R5bGU6IHsgY29sb3I6ICcjZmZmZmZmJywgYmFja2dyb3VuZENvbG9yOiAnIzMzMycgfSB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICB7LyogRHJvcGRvd24gZm9yIEdlbnJlIChTb25nIFR5cGUpIFNlbGVjdGlvbiAqL31cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknIH19IHNocmluaz5Tb25nIFR5cGUgKEdlbnJlKTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzb25nVHlwZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvbmdUeXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgY29sb3I6ICcjZmZmJyB9fVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU29uZyBUeXBlIChHZW5yZSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbG93ZWRHZW5yZXMubWFwKChnZW5yZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICB7LyogRHJvcGRvd24gZm9yIExhbmd1YWdlIFNlbGVjdGlvbiAqL31cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknIH19IHNocmluaz5MYW5ndWFnZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgY29sb3I6ICcjZmZmJyB9fVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbG93ZWRMYW5ndWFnZXMubWFwKChsYW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsYW5nfSB2YWx1ZT17bGFuZ30+XHJcbiAgICAgICAgICAgICAgICAgIHtsYW5nfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaW5kU29uZ31cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnkubWFpbicsIGNvbG9yOiAnI2ZmZmZmZicgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmluZCBTb25nXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgey8qIFRvcCAzIFNvbmdzIFRhYmxlICovfVxyXG4gICAgICAgIHt0b3BTb25ncy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyBtYXJnaW5Ub3A6IDQsIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnOTAwcHgnIH19PlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PlNvbmcgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmOGMwMCcgfX0+U29uZyBUeXBlIChHZW5yZSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19Pkxhbmd1YWdlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICB7dG9wU29uZ3MubWFwKChzb25nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZmZmZmYnIH19Pntzb25nLnNvbmdOYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6ICcjZmZmZmZmJyB9fT57c29uZy5zb25nVHlwZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmZmZmZicgfX0+e3NvbmcubGFuZ3VhZ2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiTWVudUl0ZW0iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlNlbGVjdCIsIklucHV0TGFiZWwiLCJGb3JtQ29udHJvbCIsIkFwcEJhciIsIlRvb2xiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZGFya1RoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInBhcGVyIiwicHJpbWFyeSIsIm1haW4iLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiYWxsb3dlZExhbmd1YWdlcyIsImFsbG93ZWRHZW5yZXMiLCJGaW5kU29uZ1BhZ2UiLCJzb25nTmFtZSIsInNldFNvbmdOYW1lIiwic29uZ1R5cGUiLCJzZXRTb25nVHlwZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzb25nTGlzdCIsInNldFNvbmdMaXN0IiwidG9wU29uZ3MiLCJzZXRUb3BTb25ncyIsImhhbmRsZUZpbmRTb25nIiwiZmlsdGVyZWRTb25ncyIsImZpbHRlciIsInNvbmciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicmFuZG9tVG9wU29uZ3MiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwidGhlbWUiLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwidmFyaWFudCIsImZsZXhHcm93IiwiY29sb3IiLCJocmVmIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJndXR0ZXJCb3R0b20iLCJmdWxsV2lkdGgiLCJzaHJpbmsiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiSW5wdXRQcm9wcyIsInN0eWxlIiwibWFwIiwiZ2VucmUiLCJsYW5nIiwib25DbGljayIsImxlbmd0aCIsImNvbXBvbmVudCIsIm1hcmdpblRvcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/findsong.js\n");

/***/ }),

/***/ "@mui/material-nextjs/v13-pagesRouter":
/*!*******************************************************!*\
  !*** external "@mui/material-nextjs/v13-pagesRouter" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/material-nextjs/v13-pagesRouter");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createBreakpoints");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/appendOwnerState");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/extractEventHandlers");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getReactNodeRef":
/*!*********************************************!*\
  !*** external "@mui/utils/getReactNodeRef" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/getReactNodeRef");

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/getScrollbarSize");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/mergeSlotProps");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/resolveComponentProps");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useSlotProps");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffindsong&preferredRegion=&absolutePagePath=.%2Fpages%2Ffindsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();