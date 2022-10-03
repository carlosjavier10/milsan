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
    if (this.$route.params.proyect) {
      this.proyecto = this.$route.params.proyect;
    } else {
      this.$router.push('/portfolio');
    }

    console.log(this.proyecto.body);
    /*DE AQUI HAY Q SACAR EL CONTENIDO DEL PROYECTO*/

    this.bodyset();
  },
  methods: {
    bodyset: function bodyset() {
      var body = document.querySelector('body');
      body.style.overflow = "hidden";
      body.style.margin = "0 -15px";
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
  }, [_vm._v(" ⇽")])])], 1)])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "carousel slide carousel-fade",
    attrs: {
      id: "carousel",
      "data-bs-ride": "false",
      "data-bs-pause": "false",
      "data-bs-interval": "false"
    }
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carouselExampleIndicators",
      "data-bs-ride": "false",
      "data-bs-interval": "false"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("div", {
    staticClass: "row hoja",
    style: {
      backgroundImage: "url(/images/about-header-image.jpg)"
    }
  }, [_c("div", {
    staticClass: "col-md-5"
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("div", {
    staticClass: "row hoja",
    style: {
      backgroundImage: "url(/images/portada/MSarquitecta-cover-image-2.jpg)"
    }
  }, [_c("div", {
    staticClass: "col-md-5"
  }), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("div", {
    staticClass: "row hoja",
    style: {
      backgroundImage: "url(/images/portada/MSarquitecta-cover-image.jpg)"
    }
  }, [_c("div", {
    staticClass: "col-md-5"
  }), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
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
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "cover"
  }, [_c("p", [_c("strong", [_vm._v("Disciplina: ")]), _vm._v(" Arquitectura e Interiorismo")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Nombre del Proyecto: ")]), _vm._v(" Banco de Venezuela, Sede La Castellana")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Tipología: ")]), _vm._v(" oficinas")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Superficie: ")]), _vm._v("  200 m2 ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Estado: ")]), _vm._v(" Construido ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Diseño de proyecto: ")]), _vm._v(" 2022 ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Cliente: ")]), _vm._v(" Banco de Venezuela ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "programa"
  }, [_c("h2", [_vm._v("Programa")]), _vm._v(" "), _c("p"), _c("p", [_vm._v("Proyecto de remodelación de sede bancaria incluye proyecto de interiorismo, hall de acceso, área de cafetín para todo público, nuevos espacios de encuentro, pantallas digitales, nuevas oficinas para Gerente de Negocios y Servicios, Gerente General y oficinas de Atención al Público.")]), _vm._v(" "), _c("p", [_vm._v("La sede de La Castellana corresponde al proyecto piloto del Banco de Venezuela para la implementación de BDV Digital, tomando como referencia la renovación previa de la marca, imagen y colores corporativos que esta nueva propuesta debía considerar.")]), _vm._v(" "), _c("p", [_vm._v("El desafío mas relevante fue el tiempo acotado de ejecución, se debió elaborar una estrategia de la adaptación de lo existente y el diseño de elementos prefabricados en madera para ser instalados en sitio.")]), _vm._v(" "), _c("p", [_vm._v("La idea consistió en una mimetización entre los elementos originales y contemporáneos, recuperando un gran espacio central con una doble altura, que conecta dos niveles en el cual se elaboró un diseño geométrico a modo de trama en madera con variantes en sus disposiciones logrando una imagen dinámica y versátil que simboliza la velocidad de los cambios en la era digital.")]), _vm._v(" "), _c("p")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "programa"
  }, [_c("p", [_vm._v("El Hall de acceso tiene un diseño de iluminación que mejora la escala del espacio. Para afianzar la condición de amplitud se eliminó un tabique largo que ocultaba toda la planta alta y en su lugar se diseñó una fachada de vidrio zigzagueante que logró una amplitud espacial considerable.")]), _c("p"), _vm._v(" "), _c("p", [_vm._v("Para el hall de acceso que vincula la planta baja y primer piso se incorporaron los nuevos modelos de sucursal bancaria work/café/banco que ofrece espacios abiertos y contemporáneos para clientes y visitantes, integrándolos con lugares de encuentro, trabajo colaborativo y gestión bancaria accesible para todo público.")]), _vm._v(" "), _c("p", [_vm._v("Espacios renovados para las taquillas, atención al público, oficinas de gerencia negocios y servicios, áreas para personal operativo buscando que la atención a los clientes sea más cercana y mejor atendida.")]), _vm._v(" "), _c("p", [_vm._v("El uso de revestimientos grises y maderas claras crean la combinación perfecta entre lo original y lo contemporáneo con un edificio atemporal que no pasará de moda, con la entrega de nuevos servicios, espacios versátiles para trabajadores y clientes, mobiliario flexible y alta tecnología.")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
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
  }, [_vm._v("Previous")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
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
  }, [_vm._v("Next")])]);
}];
render._withStripped = true;


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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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


/***/ })

}]);