"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Proyecto_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      proyecto: []
    };
  },
  mounted: function mounted() {
    this.proyecto = this.$route.params.proyect;
    console.log(this.proyecto.body);
    this.bodyset();
  },
  methods: {
    bodyset: function bodyset() {
      var body = document.querySelector('body');
      body.style.overflow = "hidden";
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      id: "proyecto"
    }
  }, [_c("header", {
    attrs: {
      id: "header"
    }
  }, [_c("div", {
    attrs: {
      id: "logo"
    }
  }, [_c("h1", [_c("router-link", {
    staticClass: "scrollto",
    attrs: {
      to: {
        name: "portfolio"
      }
    }
  }, [_c("div", {
    staticClass: "leftarrow"
  }, [_vm._v(" ⇽")])])], 1)])]), _vm._v(" "), _vm._m(0)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "carousel slide carousel-fade",
    attrs: {
      id: "carousel",
      "data-bs-ride": "carousel",
      "data-bs-pause": "false"
    }
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carouselExampleIndicators",
      "data-bs-ride": "true"
    }
  }, [_c("div", {
    staticClass: "carousel-indicators"
  }, [_c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#carouselExampleIndicators",
      "data-bs-slide-to": "0",
      "aria-current": "true",
      "aria-label": "Slide 1"
    }
  }), _vm._v(" "), _c("button", {
    attrs: {
      type: "button",
      "data-bs-target": "#carouselExampleIndicators",
      "data-bs-slide-to": "1",
      "aria-label": "Slide 2"
    }
  }), _vm._v(" "), _c("button", {
    attrs: {
      type: "button",
      "data-bs-target": "#carouselExampleIndicators",
      "data-bs-slide-to": "2",
      "aria-label": "Slide 3"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("div", {
    staticClass: "hoja",
    staticStyle: {
      "background-image": "url('/images/portada/MSarquitecta cover image 1.jpg')"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/images/portada/MSarquitecta cover image 2.jpg",
      alt: "..."
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/images/portada/MSarquitecta cover image 3.jpg",
      alt: "..."
    }
  })])]), _vm._v(" "), _c("button", {
    staticClass: "carousel-control-prev",
    attrs: {
      type: "button",
      "data-bs-target": "#carouselExampleIndicators",
      "data-bs-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Previous")])]), _vm._v(" "), _c("button", {
    staticClass: "carousel-control-next",
    attrs: {
      type: "button",
      "data-bs-target": "#carouselExampleIndicators",
      "data-bs-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Next")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/*WAWAAAWAWAWWAWA*/\nbody{\n\tmargin: 0;\n\n\ttop: 0;\n}\n.logobt{\n\tdisplay: block;\n\tmargin: auto;\n\tz-index: 10100;\n\twidth: 4em;\n}\n.logobt:hover{\n\tfilter: invert(100%);\n\ttransition: 0.5s;\n}\n#proyecto #header {\n\tpadding: 30px 0;\n\theight: 92px;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\ttransition: all 0.5s;\n\tz-index: 997;\n}\n#proyecto #header .header-scrolled {\n\tbackground: rgba(0, 0, 0, 0.9);\n\tpadding: 20px 0;\n\theight: 77px;\n\ttransition: all 0.5s;\n}\n#proyecto #header #logo {\n\t/* position: absolute;*/\n\tz-index: 9 !important;\n}\n#proyecto #header #logo h1 a,\n#proyecto #header #logo h1 a:hover {\n\tcolor: #fff;\n\tpadding-left: 10px;\n\tborder-left: 4px solid #2c2c2c;\n}\n#proyecto #header #logo img {\n\tpadding: 0;\n\tmargin: 0;\n}\n#proyecto #logo {\n\ttext-align: center !important;\n}\n#proyecto .leftarrow{\n\tdisplay: inline-block;\n\tfont-size: 3rem ;\n}\n@media only screen and (min-height: 800px) and (max-width: 1080px){\n}\n@media only screen and (min-height: 600px) and (max-width: 799px){\n}\n@media (max-height: 599px){\n}\n@media (min-width: 1200px) {   /*desktop*/\n.wh-img {\n\t\twidth: 100% !important;\n}\n.logobt{\n\t\ttop: 30%;\n}\n}\n@media (max-width: 1199px) {   /*desktop*/\n.logobt{\n\t\ttop: 22%;\n}\n}\n@media (max-width: 768px) { /*tablets*/\n#header #logo h1 {\n\t\tfont-size: 28px;\n}\n}\n\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_9cc11bca_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_9cc11bca_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_9cc11bca_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/Proyecto.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Proyecto.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=template&id=9cc11bca& */ "./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca&");
/* harmony import */ var _Proyecto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js&");
/* harmony import */ var _Proyecto_vue_vue_type_style_index_0_id_9cc11bca_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& */ "./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Proyecto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Proyecto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_9cc11bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=template&id=9cc11bca& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=template&id=9cc11bca&");


/***/ }),

/***/ "./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_9cc11bca_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Proyecto.vue?vue&type=style&index=0&id=9cc11bca&lang=css&");


/***/ })

}]);