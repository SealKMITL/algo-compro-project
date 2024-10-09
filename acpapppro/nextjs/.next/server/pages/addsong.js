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
exports.id = "pages/addsong";
exports.ids = ["pages/addsong"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport safe */ _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   FormControl: () => (/* reexport safe */ _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   InputLabel: () => (/* reexport safe */ _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   MenuItem: () => (/* reexport safe */ _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Paper: () => (/* reexport safe */ _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Select: () => (/* reexport safe */ _Select_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   Table: () => (/* reexport safe */ _Table_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   TableBody: () => (/* reexport safe */ _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   TableCell: () => (/* reexport safe */ _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   TableContainer: () => (/* reexport safe */ _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   TableHead: () => (/* reexport safe */ _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   TableRow: () => (/* reexport safe */ _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__.ThemeProvider),\n/* harmony export */   Toolbar: () => (/* reexport safe */ _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n/* harmony export */   createTheme: () => (/* reexport safe */ _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__.createTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar/index.js */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CssBaseline/index.js */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormControl/index.js */ \"./node_modules/@mui/material/FormControl/index.js\");\n/* harmony import */ var _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputLabel/index.js */ \"./node_modules/@mui/material/InputLabel/index.js\");\n/* harmony import */ var _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuItem/index.js */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Paper/index.js */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _Select_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Select/index.js */ \"./node_modules/@mui/material/Select/index.js\");\n/* harmony import */ var _Table_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table/index.js */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableBody/index.js */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableCell/index.js */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TableContainer/index.js */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* harmony import */ var _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TableHead/index.js */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TableRow/index.js */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextField/index.js */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _src_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Toolbar/index.js */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__, _Select_index_js__WEBPACK_IMPORTED_MODULE_8__, _Table_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__]);\n([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_4__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_5__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_6__, _Paper_index_js__WEBPACK_IMPORTED_MODULE_7__, _Select_index_js__WEBPACK_IMPORTED_MODULE_8__, _Table_index_js__WEBPACK_IMPORTED_MODULE_9__, _TableBody_index_js__WEBPACK_IMPORTED_MODULE_10__, _TableCell_index_js__WEBPACK_IMPORTED_MODULE_11__, _TableContainer_index_js__WEBPACK_IMPORTED_MODULE_12__, _TableHead_index_js__WEBPACK_IMPORTED_MODULE_13__, _TableRow_index_js__WEBPACK_IMPORTED_MODULE_14__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_15__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_17__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQm94LEJ1dHRvbixDc3NCYXNlbGluZSxGb3JtQ29udHJvbCxJbnB1dExhYmVsLE1lbnVJdGVtLFBhcGVyLFNlbGVjdCxUYWJsZSxUYWJsZUJvZHksVGFibGVDZWxsLFRhYmxlQ29udGFpbmVyLFRhYmxlSGVhZCxUYWJsZVJvdyxUZXh0RmllbGQsVGhlbWVQcm92aWRlcixUb29sYmFyLFR5cG9ncmFwaHksY3JlYXRlVGhlbWUhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDTjtBQUNNO0FBQ1U7QUFDQTtBQUNGO0FBQ0o7QUFDTjtBQUNFO0FBQ0Y7QUFDUTtBQUNBO0FBQ1U7QUFDVjtBQUNGO0FBQ0U7QUFDb0I7QUFDeEI7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzPzI3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvbi9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtQ29udHJvbCB9IGZyb20gXCIuL0Zvcm1Db250cm9sL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRMYWJlbCB9IGZyb20gXCIuL0lucHV0TGFiZWwvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51SXRlbSB9IGZyb20gXCIuL01lbnVJdGVtL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFwZXIgfSBmcm9tIFwiLi9QYXBlci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSBcIi4vVGFibGUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUJvZHkgfSBmcm9tIFwiLi9UYWJsZUJvZHkvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNlbGwgfSBmcm9tIFwiLi9UYWJsZUNlbGwvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZUNvbnRhaW5lciB9IGZyb20gXCIuL1RhYmxlQ29udGFpbmVyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVIZWFkIH0gZnJvbSBcIi4vVGFibGVIZWFkL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGVSb3cgfSBmcm9tIFwiLi9UYWJsZVJvdy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gXCIuL1RleHRGaWVsZC9pbmRleC5qc1wiXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi9zcmMvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiXG5leHBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCIvc3JjL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Faddsong&preferredRegion=&absolutePagePath=.%2Fpages%2Faddsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Faddsong&preferredRegion=&absolutePagePath=.%2Fpages%2Faddsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./node_modules/next/dist/pages/_app.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/addsong.js */ \"./pages/addsong.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/addsong\",\n        pathname: \"/addsong\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: (private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_addsong_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGYWRkc29uZyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYWRkc29uZy5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUMrQztBQUMvQztBQUNBLGlFQUFlLHdFQUFLLENBQUMsOENBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsOENBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsOENBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsOENBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDhDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDhDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsOENBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsOENBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsOENBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsOENBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsOENBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvPzZlZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hZGRzb25nLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvYWRkc29uZ1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYWRkc29uZ1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcCxcbiAgICAgICAgRG9jdW1lbnRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Faddsong&preferredRegion=&absolutePagePath=.%2Fpages%2Faddsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material-nextjs/v13-pagesRouter */ \"@mui/material-nextjs/v13-pagesRouter\");\n/* harmony import */ var _mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Document(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.DocumentHeadTags, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/src/pages/_document.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/src/pages/_document.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/_document.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/_document.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nDocument.getInitialProps = async (ctx)=>{\n    const finalProps = await (0,_mui_material_nextjs_v13_pagesRouter__WEBPACK_IMPORTED_MODULE_2__.documentGetInitialProps)(ctx);\n    return finalProps;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkQ7QUFJZjtBQUUvQixTQUFTTSxTQUFTQyxLQUFLO0lBQ3BDLHFCQUNFLDhEQUFDUCwrQ0FBSUE7UUFBQ1EsTUFBSzs7MEJBQ1QsOERBQUNQLCtDQUFJQTswQkFDSCw0RUFBQ0csa0ZBQWdCQTtvQkFBRSxHQUFHRyxLQUFLOzs7Ozs7Ozs7OzswQkFFN0IsOERBQUNFOztrQ0FDQyw4REFBQ1AsK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtBQUVBRyxTQUFTSSxlQUFlLEdBQUcsT0FBT0M7SUFDaEMsTUFBTUMsYUFBYSxNQUFNUCw2RkFBdUJBLENBQUNNO0lBQ2pELE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudEhlYWRUYWdzLFxyXG4gIGRvY3VtZW50R2V0SW5pdGlhbFByb3BzLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsLW5leHRqcy92MTMtcGFnZXNSb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8RG9jdW1lbnRIZWFkVGFncyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE1haW4gLz5cclxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L0h0bWw+XHJcbiAgKTtcclxufVxyXG5cclxuRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGZpbmFsUHJvcHMgPSBhd2FpdCBkb2N1bWVudEdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIHJldHVybiBmaW5hbFByb3BzO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkRvY3VtZW50SGVhZFRhZ3MiLCJkb2N1bWVudEdldEluaXRpYWxQcm9wcyIsIkRvY3VtZW50IiwicHJvcHMiLCJsYW5nIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZpbmFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./pages/addsong.js":
/*!**************************!*\
  !*** ./pages/addsong.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddSongPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Box,Button,CssBaseline,FormControl,InputLabel,MenuItem,Paper,Select,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,ThemeProvider,Toolbar,Typography,createTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__]);\n_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Dark theme with black and orange\nconst darkTheme = (0,_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n    palette: {\n        mode: \"dark\",\n        background: {\n            default: \"#000000\",\n            paper: \"#1e1e1e\"\n        },\n        primary: {\n            main: \"#ff8c00\"\n        },\n        text: {\n            primary: \"#ffffff\",\n            secondary: \"#ff8c00\"\n        }\n    }\n});\n// List of allowed languages\nconst allowedLanguages = [\n    \"Mandarin Chinese\",\n    \"English\",\n    \"Spanish\",\n    \"Portuguese\",\n    \"Russian\",\n    \"Hindi\",\n    \"Japanese\",\n    \"Arabic\",\n    \"French\",\n    \"Thai\"\n];\n// List of allowed genres\nconst allowedGenres = [\n    \"Pop\",\n    \"Hip Hop\",\n    \"R&B\",\n    \"Dance\",\n    \"Classic Rock\"\n];\n// List of allowed keywords\nconst allowedKeywords = [\n    \"Joy\",\n    \"Beauty\",\n    \"Relaxation\",\n    \"Sadness\",\n    \"Dreaminess\",\n    \"Scariness\",\n    \"Feeling Pumped Up\"\n];\nfunction AddSongPage() {\n    const [songName, setSongName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [songType, setSongType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Added state for keyword\n    const [songList, setSongList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddSong = ()=>{\n        if (!songName || !songType || !language || !keyword) {\n            setErrorMessage(\"All fields are required.\");\n            return;\n        }\n        const newSong = {\n            songName,\n            songType,\n            language,\n            keyword\n        };\n        setSongList([\n            ...songList,\n            newSong\n        ]);\n        setSongName(\"\");\n        setSongType(\"\");\n        setLanguage(\"\");\n        setKeyword(\"\");\n        setErrorMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: darkTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {\n                fileName: \"/src/pages/addsong.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {\n                position: \"static\",\n                sx: {\n                    backgroundColor: \"#1e1e1e\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"h6\",\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: \"MusicApp\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/addsong.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: \"inherit\",\n                            href: \"/mainpage\",\n                            sx: {\n                                color: \"#ff8c00\"\n                            },\n                            children: \"Back to Main Page\"\n                        }, void 0, false, {\n                            fileName: \"/src/pages/addsong.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/src/pages/addsong.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/src/pages/addsong.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    height: \"100vh\",\n                    width: \"100vw\",\n                    backgroundColor: \"background.default\",\n                    padding: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: 2,\n                            backgroundColor: \"background.paper\",\n                            padding: 4,\n                            borderRadius: 2,\n                            width: \"100%\",\n                            maxWidth: \"600px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"h5\",\n                                gutterBottom: true,\n                                sx: {\n                                    color: \"text.secondary\"\n                                },\n                                children: \"Add Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    color: \"red\",\n                                    marginBottom: 2\n                                },\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        shrink: true,\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        children: \"Song Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                        label: \"Song Name\",\n                                        variant: \"outlined\",\n                                        value: songName,\n                                        onChange: (e)=>setSongName(e.target.value),\n                                        fullWidth: true,\n                                        InputProps: {\n                                            style: {\n                                                color: \"#ffffff\",\n                                                backgroundColor: \"#333\"\n                                            }\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        shrink: true,\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        children: \"Song Type (Genre)\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                        value: songType,\n                                        onChange: (e)=>setSongType(e.target.value),\n                                        sx: {\n                                            backgroundColor: \"#333\",\n                                            color: \"#fff\"\n                                        },\n                                        label: \"Song Type (Genre)\",\n                                        children: allowedGenres.map((genre)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                value: genre,\n                                                children: genre\n                                            }, genre, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 137,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        shrink: true,\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        children: \"Language\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                        value: language,\n                                        onChange: (e)=>setLanguage(e.target.value),\n                                        sx: {\n                                            backgroundColor: \"#333\",\n                                            color: \"#fff\"\n                                        },\n                                        label: \"Language\",\n                                        children: allowedLanguages.map((lang)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                value: lang,\n                                                children: lang\n                                            }, lang, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 154,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 147,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                variant: \"outlined\",\n                                fullWidth: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {\n                                        shrink: true,\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        children: \"Keyword\"\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                        value: keyword,\n                                        onChange: (e)=>setKeyword(e.target.value),\n                                        sx: {\n                                            backgroundColor: \"#333\",\n                                            color: \"#fff\"\n                                        },\n                                        label: \"Keyword\",\n                                        children: allowedKeywords.map((kw)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                value: kw,\n                                                children: kw\n                                            }, kw, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 171,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 164,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"contained\",\n                                onClick: handleAddSong,\n                                fullWidth: true,\n                                sx: {\n                                    backgroundColor: \"primary.main\",\n                                    color: \"#ffffff\"\n                                },\n                                children: \"Add Song\"\n                            }, void 0, false, {\n                                fileName: \"/src/pages/addsong.js\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/src/pages/addsong.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                        component: _barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper,\n                        sx: {\n                            marginTop: 4,\n                            backgroundColor: \"background.paper\",\n                            width: \"100%\",\n                            maxWidth: \"900px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 193,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Song Type (Genre)\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 194,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Language\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 195,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                sx: {\n                                                    color: \"#ff8c00\"\n                                                },\n                                                children: \"Keyword\"\n                                            }, void 0, false, {\n                                                fileName: \"/src/pages/addsong.js\",\n                                                lineNumber: 196,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/src/pages/addsong.js\",\n                                        lineNumber: 192,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/addsong.js\",\n                                    lineNumber: 191,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                                    children: songList.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songName\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/addsong.js\",\n                                                    lineNumber: 202,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.songType\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/addsong.js\",\n                                                    lineNumber: 203,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.language\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/addsong.js\",\n                                                    lineNumber: 204,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_CssBaseline_FormControl_InputLabel_MenuItem_Paper_Select_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_TextField_ThemeProvider_Toolbar_Typography_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                    sx: {\n                                                        color: \"#ffffff\"\n                                                    },\n                                                    children: song.keyword\n                                                }, void 0, false, {\n                                                    fileName: \"/src/pages/addsong.js\",\n                                                    lineNumber: 205,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \"\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/src/pages/addsong.js\",\n                                            lineNumber: 201,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/src/pages/addsong.js\",\n                                    lineNumber: 199,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/src/pages/addsong.js\",\n                            lineNumber: 190,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/src/pages/addsong.js\",\n                        lineNumber: 189,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/src/pages/addsong.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/src/pages/addsong.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtvREFBRUksT0FBTztnREFBVTswREFBRzs7Ozs7OzBEQUNyQyw4REFBQ2xELHdRQUFTQTtnREFBQzhDLElBQUk7b0RBQUVJLE9BQU87Z0RBQVU7MERBQUc7Ozs7OzswREFDckMsOERBQUNsRCx3UUFBU0E7Z0RBQUM4QyxJQUFJO29EQUFFSSxPQUFPO2dEQUFVOzBEQUFHOzs7Ozs7MERBQ3JDLDhEQUFDbEQsd1FBQVNBO2dEQUFDOEMsSUFBSTtvREFBRUksT0FBTztnREFBVTswREFBRzs7Ozs7OzRDQUFtQjs7Ozs7Ozs7Ozs7OzhDQUc1RCw4REFBQ25ELHdRQUFTQTs4Q0FDUHVDLFNBQVNrQyxHQUFHLENBQUMsQ0FBQ08sTUFBTUMsc0JBQ25CLDhEQUFDN0UsdVFBQVFBOzs4REFDUCw4REFBQ0gsd1FBQVNBO29EQUFDOEMsSUFBSTt3REFBRUksT0FBTztvREFBVTs4REFBSTZCLEtBQUtqRCxRQUFROzs7Ozs7OERBQ25ELDhEQUFDOUIsd1FBQVNBO29EQUFDOEMsSUFBSTt3REFBRUksT0FBTztvREFBVTs4REFBSTZCLEtBQUsvQyxRQUFROzs7Ozs7OERBQ25ELDhEQUFDaEMsd1FBQVNBO29EQUFDOEMsSUFBSTt3REFBRUksT0FBTztvREFBVTs4REFBSTZCLEtBQUs3QyxRQUFROzs7Ozs7OERBQ25ELDhEQUFDbEMsd1FBQVNBO29EQUFDOEMsSUFBSTt3REFBRUksT0FBTztvREFBVTs4REFBSTZCLEtBQUszQyxPQUFPOzs7Ozs7Z0RBQWE7OzJDQUpsRDRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9wYWdlcy9hZGRzb25nLmpzPzhiMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHRGaWVsZCwgTWVudUl0ZW0sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVSb3csIFBhcGVyLCBUeXBvZ3JhcGh5LCBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUsIFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIEFwcEJhciwgVG9vbGJhciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gRGFyayB0aGVtZSB3aXRoIGJsYWNrIGFuZCBvcmFuZ2VcclxuY29uc3QgZGFya1RoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIG1vZGU6ICdkYXJrJyxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogXCIjMDAwMDAwXCIsIC8vIEJsYWNrIGJhY2tncm91bmRcclxuICAgICAgcGFwZXI6IFwiIzFlMWUxZVwiLCAgIC8vIERhcmsgZ3JleSBib3ggY29sb3IgZm9yIGNvbnRhaW5lcnNcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjZmY4YzAwJywgLy8gT3JhbmdlIGZvciBwcmltYXJ5IGFjY2VudHMgKGJ1dHRvbnMsIGxhYmVscylcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IFwiI2ZmZmZmZlwiLCAgLy8gV2hpdGUgdGV4dFxyXG4gICAgICBzZWNvbmRhcnk6IFwiI2ZmOGMwMFwiLCAvLyBPcmFuZ2UgdGV4dCBmb3IgZW1waGFzaXNcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBMaXN0IG9mIGFsbG93ZWQgbGFuZ3VhZ2VzXHJcbmNvbnN0IGFsbG93ZWRMYW5ndWFnZXMgPSBbXHJcbiAgXCJNYW5kYXJpbiBDaGluZXNlXCIsIFwiRW5nbGlzaFwiLCBcIlNwYW5pc2hcIiwgXCJQb3J0dWd1ZXNlXCIsIFwiUnVzc2lhblwiLCBcclxuICBcIkhpbmRpXCIsIFwiSmFwYW5lc2VcIiwgXCJBcmFiaWNcIiwgXCJGcmVuY2hcIiwgXCJUaGFpXCIsXHJcbl07XHJcblxyXG4vLyBMaXN0IG9mIGFsbG93ZWQgZ2VucmVzXHJcbmNvbnN0IGFsbG93ZWRHZW5yZXMgPSBbXHJcbiAgXCJQb3BcIiwgXCJIaXAgSG9wXCIsIFwiUiZCXCIsIFwiRGFuY2VcIiwgXCJDbGFzc2ljIFJvY2tcIixcclxuXTtcclxuXHJcbi8vIExpc3Qgb2YgYWxsb3dlZCBrZXl3b3Jkc1xyXG5jb25zdCBhbGxvd2VkS2V5d29yZHMgPSBbXHJcbiAgXCJKb3lcIiwgXCJCZWF1dHlcIiwgXCJSZWxheGF0aW9uXCIsIFwiU2FkbmVzc1wiLCBcclxuICBcIkRyZWFtaW5lc3NcIiwgXCJTY2FyaW5lc3NcIiwgXCJGZWVsaW5nIFB1bXBlZCBVcFwiXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRTb25nUGFnZSgpIHtcclxuICBjb25zdCBbc29uZ05hbWUsIHNldFNvbmdOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzb25nVHlwZSwgc2V0U29uZ1R5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShcIlwiKTsgIC8vIEFkZGVkIHN0YXRlIGZvciBrZXl3b3JkXHJcbiAgY29uc3QgW3NvbmdMaXN0LCBzZXRTb25nTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRTb25nID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzb25nTmFtZSB8fCAhc29uZ1R5cGUgfHwgIWxhbmd1YWdlIHx8ICFrZXl3b3JkKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIkFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1NvbmcgPSB7IHNvbmdOYW1lLCBzb25nVHlwZSwgbGFuZ3VhZ2UsIGtleXdvcmQgfTtcclxuICAgIHNldFNvbmdMaXN0KFsuLi5zb25nTGlzdCwgbmV3U29uZ10pO1xyXG5cclxuICAgIHNldFNvbmdOYW1lKFwiXCIpO1xyXG4gICAgc2V0U29uZ1R5cGUoXCJcIik7XHJcbiAgICBzZXRMYW5ndWFnZShcIlwiKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrVGhlbWV9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuXHJcbiAgICAgIHsvKiBOYXZpZ2F0aW9uIEJhciAqL31cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMxZTFlMWUnIH19PlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIE11c2ljQXBwXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvbWFpbnBhZ2VcIiBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PlxyXG4gICAgICAgICAgICBCYWNrIHRvIE1haW4gUGFnZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5kZWZhdWx0XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIFNvbmcgSW5wdXQgRm9ybSAqL31cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBnYXA6IDIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbSBzeD17eyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH19PlxyXG4gICAgICAgICAgICBBZGQgU29uZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW5Cb3R0b206IDIgfX0+XHJcbiAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBTb25nIE5hbWUgSW5wdXQgKi99XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBzaHJpbmsgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+U29uZyBOYW1lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb25nIE5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NvbmdOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29uZ05hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIElucHV0UHJvcHM9e3sgc3R5bGU6IHsgY29sb3I6ICcjZmZmZmZmJywgYmFja2dyb3VuZENvbG9yOiAnIzMzMycgfSB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICB7LyogRHJvcGRvd24gZm9yIEdlbnJlIChTb25nIFR5cGUpIFNlbGVjdGlvbiAqL31cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHNocmluayBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5Tb25nIFR5cGUgKEdlbnJlKTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzb25nVHlwZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvbmdUeXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgY29sb3I6ICcjZmZmJyB9fVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU29uZyBUeXBlIChHZW5yZSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbG93ZWRHZW5yZXMubWFwKChnZW5yZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Z2VucmV9IHZhbHVlPXtnZW5yZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtnZW5yZX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICB7LyogRHJvcGRvd24gZm9yIExhbmd1YWdlIFNlbGVjdGlvbiAqL31cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHNocmluayBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5MYW5ndWFnZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgY29sb3I6ICcjZmZmJyB9fVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbG93ZWRMYW5ndWFnZXMubWFwKChsYW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsYW5nfSB2YWx1ZT17bGFuZ30+XHJcbiAgICAgICAgICAgICAgICAgIHtsYW5nfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIHsvKiBEcm9wZG93biBmb3IgS2V5d29yZCBTZWxlY3Rpb24gKi99XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBzaHJpbmsgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+S2V5d29yZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0S2V5d29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsIGNvbG9yOiAnI2ZmZicgfX1cclxuICAgICAgICAgICAgICBsYWJlbD1cIktleXdvcmRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FsbG93ZWRLZXl3b3Jkcy5tYXAoKGt3KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtrd30gdmFsdWU9e2t3fT5cclxuICAgICAgICAgICAgICAgICAge2t3fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFNvbmd9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5Lm1haW4nLCBjb2xvcjogJyNmZmZmZmYnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBTb25nXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgey8qIFNvbmcgTGlzdCBUYWJsZSAqL31cclxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gc3g9e3sgbWFyZ2luVG9wOiA0LCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLCB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzkwMHB4JyB9fT5cclxuICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmOGMwMCcgfX0+U29uZyBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmOGMwMCcgfX0+U29uZyBUeXBlIChHZW5yZSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6ICcjZmY4YzAwJyB9fT5MYW5ndWFnZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZjhjMDAnIH19PktleXdvcmQ8L1RhYmxlQ2VsbD4gey8qIEFkZGVkIGNvbHVtbiBmb3Iga2V5d29yZCAqL31cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICB7c29uZ0xpc3QubWFwKChzb25nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmZmZmZicgfX0+e3Nvbmcuc29uZ05hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgY29sb3I6ICcjZmZmZmZmJyB9fT57c29uZy5zb25nVHlwZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBjb2xvcjogJyNmZmZmZmYnIH19Pntzb25nLmxhbmd1YWdlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAnI2ZmZmZmZicgfX0+e3Nvbmcua2V5d29yZH08L1RhYmxlQ2VsbD4gey8qIERpc3BsYXkga2V5d29yZCAqL31cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0RmllbGQiLCJNZW51SXRlbSIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiU2VsZWN0IiwiSW5wdXRMYWJlbCIsIkZvcm1Db250cm9sIiwiQXBwQmFyIiwiVG9vbGJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJkYXJrVGhlbWUiLCJwYWxldHRlIiwibW9kZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJwcmltYXJ5IiwibWFpbiIsInRleHQiLCJzZWNvbmRhcnkiLCJhbGxvd2VkTGFuZ3VhZ2VzIiwiYWxsb3dlZEdlbnJlcyIsImFsbG93ZWRLZXl3b3JkcyIsIkFkZFNvbmdQYWdlIiwic29uZ05hbWUiLCJzZXRTb25nTmFtZSIsInNvbmdUeXBlIiwic2V0U29uZ1R5cGUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJzb25nTGlzdCIsInNldFNvbmdMaXN0IiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlQWRkU29uZyIsIm5ld1NvbmciLCJ0aGVtZSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YXJpYW50IiwiZmxleEdyb3ciLCJjb2xvciIsImhyZWYiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJnYXAiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsImd1dHRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImZ1bGxXaWR0aCIsInNocmluayIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJJbnB1dFByb3BzIiwic3R5bGUiLCJtYXAiLCJnZW5yZSIsImxhbmciLCJrdyIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJtYXJnaW5Ub3AiLCJzb25nIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/addsong.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Faddsong&preferredRegion=&absolutePagePath=.%2Fpages%2Faddsong.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();