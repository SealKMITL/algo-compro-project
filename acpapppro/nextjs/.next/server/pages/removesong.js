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
exports.id = "pages/removesong";
exports.ids = ["pages/removesong"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport safe */ _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   FormControl: () => (/* reexport safe */ _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Paper: () => (/* reexport safe */ _Paper_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Table: () => (/* reexport safe */ _Table_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   TableBody: () => (/* reexport safe */ _TableBody_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   TableCell: () => (/* reexport safe */ _TableCell_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   TableContainer: () => (/* reexport safe */ _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   TableHead: () => (/* reexport safe */ _TableHead_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   TableRow: () => (/* reexport safe */ _TableRow_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider),\n/* harmony export */   Toolbar: () => (/* reexport safe */ _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   createTheme: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_13__.createTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar/index.js */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CssBaseline/index.js */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormControl/index.js */ \"./node_modules/@mui/material/FormControl/index.js\");\n/* harmony import */ var _Paper_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paper/index.js */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _Table_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table/index.js */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _TableBody_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableBody/index.js */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _TableCell_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableCell/index.js */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableContainer/index.js */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* harmony import */ var _TableHead_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableHead/index.js */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _TableRow_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableRow/index.js */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextField/index.js */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Toolbar/index.js */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_5__, _Table_index_js__WEBPACK_IMPORTED_MODULE_6__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_7__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_8__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_11__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_14__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_15__]);\n([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_5__, _Table_index_js__WEBPACK_IMPORTED_MODULE_6__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_7__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_8__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_11__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_14__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQm94LEJ1dHRvbixDc3NCYXNlbGluZSxGb3JtQ29udHJvbCxQYXBlcixUYWJsZSxUYWJsZUJvZHksVGFibGVDZWxsLFRhYmxlQ29udGFpbmVyLFRhYmxlSGVhZCxUYWJsZVJvdyxUZXh0RmllbGQsVGhlbWVQcm92aWRlcixUb29sYmFyLFR5cG9ncmFwaHksY3JlYXRlVGhlbWUhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDTjtBQUNNO0FBQ1U7QUFDQTtBQUNaO0FBQ0E7QUFDUTtBQUNBO0FBQ1U7QUFDVjtBQUNGO0FBQ0U7QUFDb0I7QUFDeEI7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzPzk1YTIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvbi9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtQ29udHJvbCB9IGZyb20gXCIuL0Zvcm1Db250cm9sL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFwZXIgfSBmcm9tIFwiLi9QYXBlci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSBcIi4vVGFibGUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUJvZHkgfSBmcm9tIFwiLi9UYWJsZUJvZHkvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNlbGwgfSBmcm9tIFwiLi9UYWJsZUNlbGwvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNvbnRhaW5lciB9IGZyb20gXCIuL1RhYmxlQ29udGFpbmVyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVIZWFkIH0gZnJvbSBcIi4vVGFibGVIZWFkL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVSb3cgfSBmcm9tIFwiLi9UYWJsZVJvdy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gXCIuL1RleHRGaWVsZC9pbmRleC5qc1wiXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi9zcmMvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiXG5leHBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCIvc3JjL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fremovesong&preferredRegion=&absolutePagePath=.%2Fpages%2Fremovesong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fremovesong&preferredRegion=&absolutePagePath=.%2Fpages%2Fremovesong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./node_modules/next/dist/pages/_app.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/removesong.js */ \"./pages/removesong.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/removesong\",\n        pathname: \"/removesong\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: (private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_removesong_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGcmVtb3Zlc29uZyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGcmVtb3Zlc29uZy5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUNrRDtBQUNsRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsaURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsaURBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsaURBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsaURBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLGlEQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLGlEQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsaURBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsaURBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvPzJmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9yZW1vdmVzb25nLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvcmVtb3Zlc29uZ1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvcmVtb3Zlc29uZ1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcCxcbiAgICAgICAgRG9jdW1lbnRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fremovesong&preferredRegion=&absolutePagePath=.%2Fpages%2Fremovesong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material-nextjs/v13-pagesRouter */ \"@mui/material-nextjs/v13-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Document(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.DocumentHeadTags, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/src/pages/_document.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/_document.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nDocument.getInitialProps = async (ctx)=>{\n    const finalProps = await (0,_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.documentGetInitialProps)(ctx);\n    return finalProps;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkQ7QUFJZjtBQUUvQixTQUFTTSxTQUFTQyxLQUFLO0lBQ3BDLHFCQUNFLDhEQUFDUCwrQ0FBSUE7UUFBQ1EsTUFBSzs7MEJBQ1QsOERBQUNQLCtDQUFJQTswQkFDSCw0RUFBQ0csa0ZBQWdCQTtvQkFBRSxHQUFHRyxLQUFLOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUNFOztrQ0FDQyw4REFBQ1AsK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtBQUVBRyxTQUFTSSxlQUFlLEdBQUcsT0FBT0M7SUFDaEMsTUFBTUMsYUFBYSxNQUFNUCw2RkFBdUJBLENBQUNNO0lBQ2pELE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudEhlYWRUYWdzLFxyXG4gIGRvY3VtZW50R2V0SW5pdGlhbFByb3BzLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsLW5leHRqcy92MTMtcGFnZXNSb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8RG9jdW1lbnRIZWFkVGFncyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE1haW4gLz5cclxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L0h0bWw+XHJcbiAgKTtcclxufVxyXG5cclxuRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGZpbmFsUHJvcHMgPSBhd2FpdCBkb2N1bWVudEdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIHJldHVybiBmaW5hbFByb3BzO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkRvY3VtZW50SGVhZFRhZ3MiLCJkb2N1bWVudEdldEluaXRpYWxQcm9wcyIsIkRvY3VtZW50IiwicHJvcHMiLCJsYW5nIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZpbmFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./pages/removesong.js":
/*!*****************************!*\
  !*** ./pages/removesong.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveSongPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__]);\n_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Dark theme with black and orange\nconst darkTheme = (0,_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n    palette: {\n        mode: \"dark\",\n        background: {\n            default: \"#000000\",\n            paper: \"#1e1e1e\"\n        },\n        primary: {\n            main: \"#ff8c00\"\n        },\n        text: {\n            primary: \"#ffffff\",\n            secondary: \"#ff8c00\"\n        }\n    }\n});\nfunction RemoveSongPage() {\n    const [songNameToRemove, setSongNameToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [songList, setSongList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            songName: \"Song 1\",\n            songType: \"Pop\",\n            language: \"English\"\n        },\n        {\n            songName: \"Song 2\",\n            songType: \"R&B\",\n            language: \"Mandarin Chinese\"\n        }\n    ]);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRemoveSong = ()=>{\n        if (!songNameToRemove) {\n            setErrorMessage(\"Please enter a song name to remove.\");\n            return;\n        }\n        const filteredSongs = songList.filter((song)=>song.songName !== songNameToRemove);\n        if (filteredSongs.length === songList.length) {\n            setErrorMessage(\"Song not found.\");\n            return;\n        }\n        setSongList(filteredSongs);\n        setSongNameToRemove(\"\");\n        setErrorMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: darkTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {\n                fileName: \"/src/pages/removesong.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {\n                position: \"static\",\n                sx: {\n                    backgroundColor: \"#1e1e1e\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"h6\",\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: \"MusicApp\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/removesong.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: \"inherit\",\n                            href: \"/mainpage\",\n                            sx: {\n                                color: \"#ff8c00\"\n                            },\n                            children: \"Back to Main Page\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/removesong.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/src/pages/removesong.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/removesong.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    height: \"100vh\",\n                    width: \"100vw\",\n                    backgroundColor: \"background.default\",\n                    padding: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 2,\n                            backgroundColor: \"background.paper\",\n                            padding: 4,\n                            borderRadius: 2,\n                            width: \"100%\",\n                            maxWidth: \"600px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"h5\",\n                                gutterBottom: true,\n                                sx: {\n                                    color: \"text.secondary\"\n                                },\n                                children: \"Remove Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/removesong.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    color: \"red\",\n                                    marginBottom: 2\n                                },\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/src/pages/removesong.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                fullWidth: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    label: \"Song Name\",\n                                    variant: \"outlined\",\n                                    value: songNameToRemove,\n                                    onChange: (e)=>setSongNameToRemove(e.target.value),\n                                    fullWidth: true,\n                                    InputLabelProps: {\n                                        shrink: true\n                                    },\n                                    InputProps: {\n                                        style: {\n                                            color: \"#fff\",\n                                            backgroundColor: \"#333\"\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/removesong.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/src/pages/removesong.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"contained\",\n                                onClick: handleRemoveSong,\n                                fullWidth: true,\n                                sx: {\n                                    backgroundColor: \"primary.main\",\n                                    color: \"#fff\",\n                                    \"&:hover\": {\n                                        backgroundColor: \"#ff9c33\"\n                                    }\n                                },\n                                children: \"Remove Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/removesong.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/src/pages/removesong.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                        component: _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper,\n                        sx: {\n                            marginTop: 4,\n                            backgroundColor: \"background.paper\",\n                            width: \"100%\",\n                            maxWidth: \"900px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/removesong.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Type (Genre)\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/removesong.js\",\n                                                lineNumber: 128,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Language\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/removesong.js\",\n                                                lineNumber: 129,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/src/pages/removesong.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/removesong.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                                    children: songList.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songName\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/removesong.js\",\n                                                    lineNumber: 135,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songType\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/removesong.js\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.language\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/removesong.js\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/src/pages/removesong.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/removesong.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/src/pages/removesong.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/src/pages/removesong.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/removesong.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/removesong.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQVkvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3BhZ2VzL3JlbW92ZXNvbmcuanM/YTQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dEZpZWxkLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBQYXBlciwgVHlwb2dyYXBoeSwgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIsIENzc0Jhc2VsaW5lLCBGb3JtQ29udHJvbCwgQXBwQmFyLCBUb29sYmFyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBEYXJrIHRoZW1lIHdpdGggYmxhY2sgYW5kIG9yYW5nZVxyXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgbW9kZTogJ2RhcmsnLFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBkZWZhdWx0OiBcIiMwMDAwMDBcIiwgLy8gQmxhY2sgYmFja2dyb3VuZFxyXG4gICAgICBwYXBlcjogXCIjMWUxZTFlXCIsICAgLy8gRGFyayBncmV5IGJveCBjb2xvciBmb3IgY29udGFpbmVyc1xyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyNmZjhjMDAnLCAvLyBPcmFuZ2UgZm9yIHByaW1hcnkgYWNjZW50cyAoYnV0dG9ucywgbGFiZWxzKVxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgcHJpbWFyeTogXCIjZmZmZmZmXCIsICAvLyBXaGl0ZSB0ZXh0XHJcbiAgICAgIHNlY29uZGFyeTogXCIjZmY4YzAwXCIsIC8vIE9yYW5nZSB0ZXh0IGZvciBlbXBoYXNpc1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbW92ZVNvbmdQYWdlKCkge1xyXG4gIGNvbnN0IFtzb25nTmFtZVRvUmVtb3ZlLCBzZXRTb25nTmFtZVRvUmVtb3ZlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzb25nTGlzdCwgc2V0U29uZ0xpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBzb25nTmFtZTogXCJTb25nIDFcIiwgc29uZ1R5cGU6IFwiUG9wXCIsIGxhbmd1YWdlOiBcIkVuZ2xpc2hcIiB9LFxyXG4gICAgeyBzb25nTmFtZTogXCJTb25nIDJcIiwgc29uZ1R5cGU6IFwiUiZCXCIsIGxhbmd1YWdlOiBcIk1hbmRhcmluIENoaW5lc2VcIiB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlU29uZyA9ICgpID0+IHtcclxuICAgIGlmICghc29uZ05hbWVUb1JlbW92ZSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSBzb25nIG5hbWUgdG8gcmVtb3ZlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkU29uZ3MgPSBzb25nTGlzdC5maWx0ZXIoKHNvbmcpID0+IHNvbmcuc29uZ05hbWUgIT09IHNvbmdOYW1lVG9SZW1vdmUpO1xyXG4gICAgaWYgKGZpbHRlcmVkU29uZ3MubGVuZ3RoID09PSBzb25nTGlzdC5sZW5ndGgpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiU29uZyBub3QgZm91bmQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29uZ0xpc3QoZmlsdGVyZWRTb25ncyk7XHJcbiAgICBzZXRTb25nTmFtZVRvUmVtb3ZlKFwiXCIpO1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lfT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcblxyXG4gICAgICB7LyogTmF2aWdhdGlvbiBCYXIgKi99XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWUxZTFlJyB9fT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICBNdXNpY0FwcFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiL21haW5wYWdlXCIgc3g9e3sgY29sb3I6ICcjZmY4YzAwJyB9fT5cclxuICAgICAgICAgICAgQmFjayB0byBNYWluIFBhZ2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQuZGVmYXVsdFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgLy8gU2V0IHJlbGF0aXZlIHBvc2l0aW9uIGZvciBwYXJlbnRcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIFJlbW92ZSBTb25nIElucHV0IEZvcm0gYW5kIFRpdGxlIGluIHRoZSBzYW1lIGJveCAqL31cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBnYXA6IDIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbSBzeD17eyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH19PlxyXG4gICAgICAgICAgICBSZW1vdmUgU29uZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW5Cb3R0b206IDIgfX0+XHJcbiAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBJbnB1dCBmb3IgU29uZyBOYW1lIHRvIFJlbW92ZSAqL31cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlNvbmcgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c29uZ05hbWVUb1JlbW92ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvbmdOYW1lVG9SZW1vdmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7IHN0eWxlOiB7IGNvbG9yOiAnI2ZmZicsIGJhY2tncm91bmRDb2xvcjogJyMzMzMnIH0gfX0gLy8gTWF0Y2hlcyBpbnB1dCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVNvbmd9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5Lm1haW4nLCBjb2xvcjogJyNmZmYnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiAnI2ZmOWMzMycgfSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZW1vdmUgU29uZ1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHsvKiBTb25nIExpc3QgVGFibGUgKi99XHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IG1hcmdpblRvcDogNCwgYmFja2dyb3VuZENvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIiwgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc5MDBweCcgfX0+XHJcbiAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PlNvbmcgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PlNvbmcgVHlwZSAoR2VucmUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmOGMwMCcgfX0+TGFuZ3VhZ2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICB7c29uZ0xpc3QubWFwKChzb25nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmZmZmZicgfX0+e3Nvbmcuc29uZ05hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6ICcjZmZmZmZmJyB9fT57c29uZy5zb25nVHlwZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZmZmZmYnIH19Pntzb25nLmxhbmd1YWdlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiRm9ybUNvbnRyb2wiLCJBcHBCYXIiLCJUb29sYmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImRhcmtUaGVtZSIsInBhbGV0dGUiLCJtb2RlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInByaW1hcnkiLCJtYWluIiwidGV4dCIsInNlY29uZGFyeSIsIlJlbW92ZVNvbmdQYWdlIiwic29uZ05hbWVUb1JlbW92ZSIsInNldFNvbmdOYW1lVG9SZW1vdmUiLCJzb25nTGlzdCIsInNldFNvbmdMaXN0Iiwic29uZ05hbWUiLCJzb25nVHlwZSIsImxhbmd1YWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlUmVtb3ZlU29uZyIsImZpbHRlcmVkU29uZ3MiLCJmaWx0ZXIiLCJzb25nIiwibGVuZ3RoIiwidGhlbWUiLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwidmFyaWFudCIsImZsZXhHcm93IiwiY29sb3IiLCJocmVmIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJndXR0ZXJCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJmdWxsV2lkdGgiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiSW5wdXRQcm9wcyIsInN0eWxlIiwib25DbGljayIsImNvbXBvbmVudCIsIm1hcmdpblRvcCIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/removesong.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fremovesong&preferredRegion=&absolutePagePath=.%2Fpages%2Fremovesong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();