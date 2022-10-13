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
      slider: [],
      imgs: [],
      imgsAfter: [],
      imgsBefore: [],
      imgsProcess: [],
      imgsRender: [],
      auxTexto: "",
      activeTag: ""
    };
  },
  computed: {},
  mounted: function mounted() {
    if (this.$route.params.proyect) {
      this.proyecto = this.$route.params.proyect;
      this.texto = this.proyecto.body;
      console.log(this.proyecto);
    } else {
      if (localStorage.slug) {
        var proy = {
          slug: "",
          body: "",
          created_at: "",
          featured_image: "",
          id: "",
          published_at: "",
          summary: "",
          title: "",
          updated_at: ""
        };
        proy.slug = localStorage.slug;
        proy.body = localStorage.body;
        proy.created_at = localStorage.created_at;
        proy.featured_image = localStorage.featured_image;
        proy.id = localStorage.id;
        proy.published_at = localStorage.published_at;
        proy.summary = localStorage.summary;
        proy.title = localStorage.title;
        proy.updated_at = localStorage.updated_at;
        this.proyecto = proy;
        this.texto = this.proyecto.body;
      } else {
        this.$router.push('/portfolio');
      }
    }

    this.bodyset();
    this.getImg();
  },
  methods: {
    bodyset: function bodyset() {
      var body = document.querySelector('body');
      body.style.overflow = "hidden";
      body.style.margin = "0 -15px";
    },
    renderSlider: function renderSlider() {
      console.log("IMGS; ");
      console.log(this.imgs);
      this.texto = this.auxtext;
      this.programa = [];
      this.getTitles();
      this.getPrograma();
      this.slider = [];

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
                var continuar = true;

                while (continuar) {
                  if (aux.length + this.programa[j].length < max) {
                    aux = aux + "<p>" + this.programa[j] + "</p>";
                    this.programa.shift();

                    if (this.programa[j]) {
                      continuar = true;
                    } else {
                      continuar = false;
                    }
                  } else {
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

      console.log("SLIDER; ");
      console.log(this.slider);
    },
    getImg: function getImg() {
      var res = "";
      var ini = 0;
      var fin = 0;
      var url = "";
      var tag = "";
      this.texto.trim();

      if (this.proyecto.featured_image) {
        var img = {
          url: "",
          tag: ""
        };
        img.url = this.proyecto.featured_image;
        img.tag = "Despues";
        this.imgsAfter.unshift(img);
      }

      while (this.texto.indexOf('<img ') != -1) {
        var _img = {
          url: "",
          tag: ""
        };
        ini = this.texto.indexOf('<img ');
        fin = this.texto.indexOf('>', ini);
        res = this.texto.substring(ini, fin + 1);
        this.texto = this.texto.replace(res, '');
        ini = res.indexOf('alt=');
        fin = res.indexOf('src=', ini + 5);
        tag = res.substring(ini + 5, fin - 2);
        ini = res.indexOf('src=');
        fin = res.indexOf('">', ini + 5);
        url = res.substring(ini + 5, fin);
        _img.url = url;
        _img.tag = tag;

        if (_img.tag.indexOf('Before') != -1) {
          this.imgsBefore.push(_img);
        } else if (_img.tag.indexOf('Render') != -1) {
          this.imgsRender.push(_img);
        } else if (_img.tag.indexOf('Process') != -1) {
          this.imgsProcess.push(_img);
        } else {
          this.imgsAfter.push(_img);
        }
      }

      this.auxtext = this.texto;
      /*para retomar el body despues de quitarle las imagenes*/

      if (this.imgsAfter.length != 0) {
        this.imgs = this.imgsAfter;
        this.activeTag = "After";
      } else if (this.imgsRender != 0) {
        this.imgs = this.imgsRender;
        this.activeTag = "Render";
      } else if (this.imgsProcess != 0) {
        this.imgs = this.imgsProcess;
        this.activeTag = "Process";
      } else if (this.imgsBefore != 0) {
        this.imgs = this.imgsBefore;
        this.activeTag = "Before";
      } else {
        this.$router.push('/portfolio');
      }

      this.renderSlider();
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
    },
    setSlisder: function setSlisder(tag) {
      if (tag == 'Before') {
        if (this.activeTag != "Before") {
          this.imgs = this.imgsBefore;
          this.renderSlider();
          this.activeTag = "Before";
        }
      } else if (tag == 'Process') {
        if (this.activeTag != "Process") {
          this.imgs = this.imgsProcess;
          this.renderSlider();
          this.activeTag = "Process";
        }
      } else if (tag == 'Render') {
        if (this.activeTag != "Render") {
          this.imgs = this.imgsRender;
          this.renderSlider();
          this.activeTag = "Render";
        }
      } else {
        if (this.activeTag != "After") {
          this.imgs = this.imgsAfter;
          this.renderSlider();
          this.activeTag = "After";
        }
      }
    }
  },
  watch: {
    "proyecto.slug": function function_name() {
      localStorage.slug = this.proyecto.slug;
      localStorage.body = this.proyecto.body;
      localStorage.created_at = this.proyecto.created_at;
      localStorage.featured_image = this.proyecto.featured_image;
      localStorage.id = this.proyecto.id;
      localStorage.published_at = this.proyecto.published_at;
      localStorage.summary = this.proyecto.summary;
      localStorage.title = this.proyecto.title;
      localStorage.updated_at = this.proyecto.updated_at;
    },
    "imgs": function imgs() {
      var myCarousel = document.querySelector('#carousel');
      var carousel = new bootstrap.Carousel(myCarousel);
      carousel.to("0");
    }
  }
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
      },
      alt: "Volver"
    }
  }, [_c("div", {
    staticClass: "leftarrow",
    attrs: {
      alt: "Volver"
    }
  }, [_vm._v(" ⇽")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "botones"
  }, [_vm.imgsBefore.length > 0 ? _c("a", {
    on: {
      click: function click($event) {
        return _vm.setSlisder("Before");
      }
    }
  }, [_c("h6", [_vm._v("Antes")])]) : _vm._e(), _vm._v(" "), _vm.imgsAfter.length > 0 ? _c("a", {
    on: {
      click: function click($event) {
        return _vm.setSlisder("After");
      }
    }
  }, [_c("h6", [_vm._v("Despues")])]) : _vm._e(), _vm._v(" "), _vm.imgsProcess.length > 0 ? _c("a", {
    on: {
      click: function click($event) {
        return _vm.setSlisder("Process");
      }
    }
  }, [_c("h6", [_vm._v("Proceso")])]) : _vm._e(), _vm._v(" "), _vm.imgsRender.length > 0 ? _c("a", {
    on: {
      click: function click($event) {
        return _vm.setSlisder("Render");
      }
    }
  }, [_c("h6", [_vm._v("Render")])]) : _vm._e()])])]), _vm._v(" "), _c("div", [_c("div", {
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
        backgroundImage: "url(".concat(hoja.img.url, ")")
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
    staticClass: "carousel-control-prev btn-lg",
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