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
      activeTag: "",
      beforeActive: false,
      afterActive: false,
      processActive: false,
      renderActive: false
    };
  },
  computed: {},
  mounted: function mounted() {
    if (this.$route.params.proyect) {
      this.proyecto = this.$route.params.proyect;
      this.texto = this.proyecto.body;
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
      var containerfluid = document.querySelector('.container-fluid');
      containerfluid.style.maxWidth = "100%";
    },
    renderSlider: function renderSlider() {
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
            var max = 700;

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
    },
    getImg: function getImg() {
      var res = "";
      var ini = 0;
      var fin = 0;
      var url = "";
      var tag = "";
      var del = "";
      /*para borrar*/

      this.texto.trim();

      if (this.proyecto.featured_image == null || this.proyecto.featured_image == "null" || this.proyecto.featured_image == undefined) {} else {
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
        ini = this.texto.indexOf('<div ');
        fin = this.texto.indexOf('</div>', ini);
        del = this.texto.substring(ini, fin + 6);
        this.texto = this.texto.replace(del, '').trim();
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
      var hasta = 0;
      var borra = "";
      var auxtext = this.texto;
      auxtext = this.removeTags(this.text);
      console.log("aus antes : " + auxtext);
      /*quita html
      /*-----------quita texto hasta disciplina--------------------*/

      hasta = auxtext.search(/Disciplina:/i) + 11;
      borra = auxtext.substring(0, hasta);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("///////////////QUITO titulo disciplina ////////////");
      /*-----------quita texto hasta disciplina--------------------*/

      hasta = auxtext.indexOf('Nombre del Proyecto:');
      this.disciplina = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 20);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("diciplina : " + this.disciplina);
      console.log("/////QUITO titulo nombre proyecto y guargo this.diciplina ///////");
      hasta = auxtext.search(/Tipología:/i);
      this.nombreProyecto = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 10);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("nombreProyecto : " + this.nombreProyecto);
      console.log("/////QUITO titulo topologia y guargo this.nombreProyecto ///////");
      hasta = auxtext.search(/Superficie:/i);
      this.tipología = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 11);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("tipología : " + this.tipología);
      console.log("/////QUITO titulo superficie y guargo this.nombreProyecto ///////");
      hasta = auxtext.search(/Estado:/i);
      this.superficie = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 7);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("superficie : " + this.superficie);
      console.log("/////QUITO titulo estado y guargo this.superficie ///////");
      hasta = auxtext.search(/Diseño de proyecto:/i);
      this.estado = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 19);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("Estado : " + this.estado);
      console.log("/////QUITO titulo diseño de proye y guargo this.estado ///////");
      hasta = auxtext.search(/Cliente:/i);
      this.disenoProyecto = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta + 8);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("diseño de proyecto : " + this.disenoProyecto);
      console.log("/////QUITO titulo cliente de proye y guargo this.diseñoproyet ///////");
      hasta = auxtext.search(/Programa/i);
      this.cliente = auxtext.substring(0, hasta);
      borra = auxtext.substring(0, hasta);
      auxtext = auxtext.replace(borra, '');
      console.log("begin : " + hasta);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("diseño de proyecto : " + this.disenoProyecto);
      console.log("/////SOlo guarda  this.cliente ///////");
    },
    getPrograma: function getPrograma() {
      var ini = 0;
      var fin = 0;
      var del = "";
      var hasta = 0;
      var borra = "";
      var auxtext = this.texto;
      console.log("//////////////////////////////////");
      console.log("/////get programa ////////////////");
      console.log("//////////////////////////////////");
      console.log("auxtext before: " + auxtext);
      hasta = auxtext.search(/Programa:/i);
      borra = auxtext.substring(0, hasta + 9);
      auxtext = auxtext.replace(borra, '');
      console.log("ini : " + ini);
      console.log("fin : " + fin);
      console.log("del : " + fin);
      console.log("borra : " + borra);
      console.log("auxtext : " + auxtext);
      console.log("//////////////////////////////////");
      console.log("//////////////////////////////////");
      console.log("//////////////////////////////////");

      while (auxtext.indexOf('<strong>') != -1) {
        auxtext = auxtext.replace('<strong>', '');
      }

      while (auxtext.indexOf('</strong>') != -1) {
        auxtext = auxtext.replace('</strong>', '');
      }

      while (auxtext.indexOf('<br>') != -1) {
        auxtext = auxtext.replace('<br>', '');
      }

      while (auxtext.indexOf('</br>') != -1) {
        auxtext = auxtext.replace('</br>', '');
      }
      /*-----quitar basura antes del primer parrafo*/


      console.log("/*-----quitar basura antes del primer parrafo*/");
      console.log(auxtext);
      console.log("auxtextauxtextauxtextauxtextauxtext");
      ini = auxtext.indexOf('<p');
      del = auxtext.substring(0, ini);
      auxtext = auxtext.replace(del, "");
      console.log(" Ini: " + ini);
      console.log(" del: " + del);
      console.log(auxtext);

      while (auxtext.indexOf('<p') != -1) {
        ini = auxtext.indexOf('<p');
        fin = auxtext.indexOf('</p>');
        del = auxtext.substring(ini, fin + 4);
        auxtext = auxtext.replace(del, '');

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

      console.log(this.programa);
    },
    setSlisder: function setSlisder(tag) {
      if (tag == 'Before') {
        if (this.activeTag != "Before") {
          this.imgs = this.imgsBefore;
          this.renderSlider();
          this.activeTag = "Before";
          this.beforeActive = true;
          this.afterActive = false;
          this.processActive = false;
          this.renderActive = false;
        }
      } else if (tag == 'Process') {
        if (this.activeTag != "Process") {
          this.imgs = this.imgsProcess;
          this.renderSlider();
          this.activeTag = "Process";
          this.beforeActive = false;
          this.afterActive = false;
          this.processActive = true;
          this.renderActive = false;
        }
      } else if (tag == 'Render') {
        if (this.activeTag != "Render") {
          this.imgs = this.imgsRender;
          this.renderSlider();
          this.activeTag = "Render";
          this.beforeActive = false;
          this.afterActive = false;
          this.processActive = false;
          this.renderActive = true;
        }
      } else {
        if (this.activeTag != "After") {
          this.imgs = this.imgsAfter;
          this.renderSlider();
          this.activeTag = "After";
          this.beforeActive = false;
          this.afterActive = true;
          this.processActive = false;
          this.renderActive = false;
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
    "class": {
      active: _vm.beforeActive
    },
    on: {
      click: function click($event) {
        return _vm.setSlisder("Before");
      }
    }
  }, [_c("h6", [_vm._v("ANTES")])]) : _vm._e(), _vm._v(" "), _vm.imgsAfter.length > 0 ? _c("a", {
    "class": {
      active: _vm.afterActive
    },
    on: {
      click: function click($event) {
        return _vm.setSlisder("After");
      }
    }
  }, [_c("h6", [_vm._v("DESPUES")])]) : _vm._e(), _vm._v(" "), _vm.imgsProcess.length > 0 ? _c("a", {
    "class": {
      active: _vm.processActive
    },
    on: {
      click: function click($event) {
        return _vm.setSlisder("Process");
      }
    }
  }, [_c("h6", [_vm._v("PROCESO")])]) : _vm._e(), _vm._v(" "), _vm.imgsRender.length > 0 ? _c("a", {
    "class": {
      active: _vm.renderActive
    },
    on: {
      click: function click($event) {
        return _vm.setSlisder("Render");
      }
    }
  }, [_c("h6", [_vm._v("RENDER")])]) : _vm._e()])])]), _vm._v(" "), _c("div", [_c("div", {
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