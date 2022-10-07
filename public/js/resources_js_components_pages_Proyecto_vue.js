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
/*import { proyectbodytext } from './devutil'*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      proyecto: [],
      texto: "",
      imgs: [],
      disciplina: "",
      nombreProyecto: "",
      tipología: "",
      superficie: "",
      estado: "",
      disenoProyecto: "",
      cliente: "",
      programa: [],

      /*arreglo de parrafos*/
      activeClass: 'active',
      carouselitem: 'carousel-item',
      slider: []
    };
  },
  computed: {},
  mounted: function mounted() {
    if (this.$route.params.proyect) {
      this.proyecto = this.$route.params.proyect;
      this.texto = this.proyecto.body;
    } else {
      this.texto = '<div class=\"embedded_image\" data-layout=\"wide\" contenteditable=\"false\"><img alt=\"imagen 2 en imagen amplia\" src=\"/storage/canvas/images/orDO51VCREf3Srd0QDq5UoSMve9rf5dIyiZrkvnB.jpg\"><p>imagen 2 en imagen amplia</p></div><p><br></p><p><br></p><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"Imagen 1  en diseño predeterminado\" src=\"/storage/canvas/images/SmEL4W0WybEYQRfjNzMK253tTFG6ORGJXeN2423B.jpg\"><p>Imagen 1  en diseño predeterminado</p></div><p class=\"ql-align-justify\"><br></p><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"imagen 3 en diseño predeterminado\" src=\"/storage/canvas/images/TsdQzYZgWWJwGAVb75MRvvHr1bPJaVaHvWWqMzXc.jpg\"><p>imagen 3 en diseño predeterminado</p></div><div class=\"embedded_image\" data-layout=\"default\" contenteditable=\"false\"><img alt=\"Imagen 4 en diseño amplio\" src=\"/storage/canvas/images/P7spTs77N39vJMLWv6d7fYjUUUeWzoa3JJ2GGtUR.jpg\"><p>Imagen 4 en diseño amplio</p></div><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong>Disciplina: </strong>Arquitectura e Interiorismo</p><p class=\"ql-align-justify\"><strong>Nombre del Proyecto: </strong>Banco de Venezuela, Sede La Castellana</p><p class=\"ql-align-justify\"><strong>Tipología: </strong>oficinas</p><p class=\"ql-align-justify\"><strong>Superficie:&nbsp;</strong>200 m2</p><p class=\"ql-align-justify\"><strong>Estado: </strong>Construido</p><p class=\"ql-align-justify\"><strong>Diseño de proyecto: </strong>2022</p><p class=\"ql-align-justify\"><strong>Cliente: </strong>Banco de Venezuela</p><p class=\"ql-align-justify\"><strong>&nbsp;</strong></p><p class=\"ql-align-justify\"><strong>Programa</strong></p><p class=\"ql-align-justify\">Proyecto de remodelación de sede bancaria incluye proyecto de interiorismo, hall de acceso, área de cafetín para todo público, nuevos espacios de encuentro, pantallas digitales, nuevas oficinas para Gerente de Negocios y Servicios, Gerente General y oficinas de Atención al Público.</p><p class=\"ql-align-justify\">La sede de La Castellana corresponde al proyecto piloto del Banco de Venezuela para la implementación de BDV Digital, tomando como referencia la renovación previa de la marca, imagen y colores corporativos que esta nueva propuesta debía considerar.</p><p class=\"ql-align-justify\">El desafío mas relevante fue el tiempo acotado de ejecución, se debió elaborar una estrategia de la adaptación de lo existente y el diseño de elementos prefabricados en madera para ser instalados en sitio.</p><p class=\"ql-align-justify\">La idea consistió en una mimetización entre los elementos originales y contemporáneos, recuperando un gran espacio central con una doble altura, que conecta dos niveles en el cual se elaboró un diseño geométrico a modo de trama en madera con variantes en sus disposiciones logrando una imagen dinámica y versátil que simboliza la velocidad de los cambios en la era digital.</p><p class=\"ql-align-justify\">El Hall de acceso tiene un diseño de iluminación que mejora la escala del espacio. Para afianzar la condición de amplitud se eliminó un tabique largo que ocultaba toda la planta alta y en su lugar se diseñó una fachada de vidrio zigzagueante que logró una amplitud espacial considerable.</p><p class=\"ql-align-justify\">Para el hall de acceso que vincula la planta baja y primer piso se incorporaron los nuevos modelos de sucursal bancaria work/café/banco que ofrece espacios abiertos y contemporáneos para clientes y visitantes, integrándolos con lugares de encuentro, trabajo colaborativo y gestión bancaria accesible para todo público. </p><p class=\"ql-align-justify\">Espacios renovados para las taquillas, atención al público, oficinas de gerencia negocios y servicios, áreas para personal operativo buscando que la atención a los clientes sea más cercana y mejor atendida.</p><p class=\"ql-align-justify\">El uso de revestimientos grises y maderas claras crean la combinación perfecta entre lo original y lo contemporáneo con un edificio atemporal que no pasará de moda, con la entrega de nuevos servicios, espacios versátiles para trabajadores y clientes, mobiliario flexible y alta tecnología. </p><p><br></p>';
      /*this.$router.push('/portfolio');*/
    }
    /*console.log(this.proyecto.body)DE AQUI HAY Q SACAR EL CONTENIDO DEL PROYECTO*/


    this.bodyset();
    this.getDesc();
  },
  methods: {
    bodyset: function bodyset() {
      var body = document.querySelector('body');
      body.style.overflow = "hidden";
      body.style.margin = "0 -15px";
    },
    getDesc: function getDesc() {
      /*console.log(this.slider)*/

      /*console.log("TAMAÑO DEL ARERGLO IMGS ANTES = "+this.imgs.length)*/
      this.getImg();
      this.getTitles();
      this.getPrograma();
      /*/////////////////////////////////////////////////////////*/

      /*/////////////////////////////////////////////////////////*/

      if (this.proyecto.featured_image) {
        this.imgs.unshift(this.proyecto.featured_image);
      }

      if (this.imgs.length > 0) {
        for (var i = 0; i < this.imgs.length; i++) {
          var slide = {
            index: 0,
            img: "",
            content: "",
            classActive: "",
            classcontent: ""
          };
          slide.index = i;
          slide.img = this.imgs[i];

          if (i == 0) {
            slide.content = '<p> <strong>Disciplina: </strong> ' + this.disciplina + ' </p><p> <strong>Nombre del Proyecto: </strong>' + this.nombreProyecto + ' </p><p> <strong>Tipología: </strong> ' + this.tipología + '</p><p> <strong>Superficie: </strong>' + this.superficie + ' </p><p> <strong>Estado: </strong>' + this.estado + ' </p><p> <strong>Diseño de proyecto: </strong>' + this.disenoProyecto + ' </p><p> <strong>Cliente: </strong>' + this.cliente + '  </p>';
            slide.classActive = "active";
            slide.classcontent = "cover";
          } else {
            var aux = "";
            var j = 0;
            var contador = 0;
            var max = 1000;

            if (this.programa.length > 0) {
              aux = "<p>" + this.programa[j] + "</p>";
              contador = aux.length;
              this.programa.shift();

              if (this.programa[j]) {
                /*console.log("ENTRO A LA MIERDAA")*/
                var continuar = true;

                while (continuar) {
                  /*console.log("TAM DE AUX ANTES DE VER LA SUMA = "+aux.length)*/
                  if (aux.length + this.programa[j].length < max) {
                    /*console.log("aux antes= "+aux)*/
                    aux = aux + "<p>" + this.programa[j] + "</p>";
                    /*console.log("aux despues= "+aux)*/

                    this.programa.shift();

                    if (this.programa[j]) {
                      continuar = true;
                    } else {
                      continuar = false;
                    }
                  } else {
                    /*console.log("ENTRO A TIENE MAS DE MAX")*/
                    continuar = false;
                  }
                }

                slide.content = aux;
              } else {
                slide.content = aux;
              }
            } else {}

            slide.classActive = false;
            slide.classcontent = "programa";
          }

          this.slider.push(slide);
        }
      } else
        /*NO HAY SLIDERS*/
        {
          this.slider = null;
        }
      /*/////////////////////////////////////////////////////////*/

      /*/////////////////////////////////////////////////////////*/

      /*			console.log("CAntidad de parrafos : "+ this.programa.length)*/

      /*			console.log("parrafos de programa: "+ this.programa)*/


      console.log(this.slider.length);
      console.log(this.slider);
      console.log("////////////////////");
      /*			console.log("////////////////////")
      
      			console.log ("****disciplina= " + this.disciplina)
      			console.log ("****Nombre= " + this.nombreProyecto)
      			console.log ("****tipo= " + this.tipología)
      			console.log ("****super = " + this.superficie)
      			console.log ("****estado = " + this.estado)
      			console.log ("****diseño = " + this.disenoProyecto)
      			console.log ("****cliente = " + this.cliente)
      			console.log (this.programa)*/
    },
    getImg: function getImg() {
      var res = "";
      var ini = 0;
      var fin = 0;
      var url = "";
      this.texto.trim();

      while (this.texto.indexOf('<img ') != -1) {
        ini = this.texto.indexOf('<img ');
        fin = this.texto.indexOf('>', ini);
        res = this.texto.substring(ini, fin + 1);
        this.texto = this.texto.replace(res, '');
        ini = res.indexOf('src=');
        fin = res.indexOf('">', ini + 5);
        url = res.substring(ini + 5, fin);
        this.imgs.push(url);
      }
    },
    removeTags: function removeTags() {
      var str;
      if (this.texto === null || this.text === '') return false;else while (this.texto.indexOf('&nbsp;') != -1) {
        this.texto = this.texto.replace('&nbsp;', '');
      }
      str = this.texto.toString(); // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.

      return str.replace(/(<([^>]+)>)/ig, '');
    },
    getTitles: function getTitles() {
      var begin = "";
      var borra = "";
      var auxtext = this.texto;
      auxtext = this.removeTags(this.text);
      /*quita html
      /*-----------quita texto hasta disciplina--------------------*/

      begin = auxtext.indexOf('Disciplina:');
      borra = auxtext.substring(0, begin);
      auxtext = auxtext.replace(borra, '');
      /*-----------quita texto hasta disciplina--------------------*/

      var ini = 0;
      var del = "";
      ini = auxtext.indexOf('Nombre del Proyecto:');
      del = auxtext.substring(0, ini);
      this.disciplina = del.replace('Disciplina:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Tipología:');
      del = auxtext.substring(0, ini);
      this.nombreProyecto = del.replace('Nombre del Proyecto:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Superficie:');
      del = auxtext.substring(0, ini);
      this.tipología = del.replace('Tipología:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Estado:');
      del = auxtext.substring(0, ini);
      this.superficie = del.replace('Superficie:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Diseño de proyecto:');
      del = auxtext.substring(0, ini);
      this.estado = del.replace('Estado:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Cliente:');
      del = auxtext.substring(0, ini);
      this.disenoProyecto = del.replace('Diseño de proyecto:', '').trim();
      auxtext = auxtext.replace(del, '');
      ini = auxtext.indexOf('Programa');
      del = auxtext.substring(0, ini);
      this.cliente = del.replace('Cliente:', '').trim();
      auxtext = auxtext.replace(del, '');
    },
    getPrograma: function getPrograma() {
      var ini = 0;
      var fin = 0;
      var del = "";
      ini = this.texto.indexOf('Programa');
      del = this.texto.substring(0, ini);
      this.texto = this.texto.replace(del, '');

      while (this.texto.indexOf('<strong>') != -1) {
        this.texto = this.texto.replace('<strong>', '');
      }

      while (this.texto.indexOf('</strong>') != -1) {
        this.texto = this.texto.replace('</strong>', '');
      }

      while (this.texto.indexOf('<br>') != -1) {
        this.texto = this.texto.replace('<br>', '');
      }

      while (this.texto.indexOf('</br>') != -1) {
        this.texto = this.texto.replace('</br>', '');
      }
      /*-----quitar basura antes del primer parrafo*/


      ini = this.texto.indexOf('<p');
      del = this.texto.substring(0, ini);
      this.texto = this.texto.replace(del);

      while (this.texto.indexOf('<p') != -1) {
        ini = this.texto.indexOf('<p');
        fin = this.texto.indexOf('</p>');
        del = this.texto.substring(ini, fin + 4);
        this.texto = this.texto.replace(del, '');

        if (del.length >= 10) {
          this.programa.push(del);
        }
      }

      for (var i = 0; i < this.programa.length; i++) {
        while (this.programa[i].indexOf('<') != -1) {
          ini = this.programa[i].indexOf('<');
          fin = this.programa[i].indexOf('>');
          del = this.programa[i].substring(ini, fin + 1);
          this.programa[i] = this.programa[i].replace(del, '');
        }
      }
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
  }, [_c("div", {
    staticClass: "carousel-indicators"
  }, _vm._l(_vm.slider, function (slide, index) {
    return _c("button", {
      "class": [index == 0 ? _vm.activeClass : ""],
      attrs: {
        type: "button",
        "data-bs-target": "#carouselExampleIndicators",
        "data-bs-slide-to": index,
        "aria-current": "true",
        "aria-label": "Slide " + (index + 1)
      }
    });
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner"
  }, _vm._l(_vm.slider, function (hoja) {
    return _c("div", {
      "class": "carousel-item " + hoja.classActive
    }, [_c("div", {
      staticClass: "row hoja",
      style: {
        backgroundImage: "url(".concat(hoja.img, ")")
      }
    }, [_c("div", {
      staticClass: "col-md-5"
    }), _vm._v(" "), _c("div", {
      staticClass: "col-md-7"
    }, [_c("div", {
      "class": hoja.classcontent
    }, [hoja.index == 1 ? _c("div", [_c("h2", [_vm._v("Programa")])]) : _vm._e(), _vm._v(" "), _c("div", {
      domProps: {
        innerHTML: _vm._s(hoja.content)
      }
    })])])])]);
  }), 0), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])])])]);
};

var staticRenderFns = [function () {
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