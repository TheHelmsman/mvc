/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(model, view) {
  _classCallCheck(this, Controller);

  console.log("Controller initialized...");
  this.model = model;
  this.view = view;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");



var app = new _controller__WEBPACK_IMPORTED_MODULE_0__["Controller"](new _model__WEBPACK_IMPORTED_MODULE_1__["Model"](), new _view__WEBPACK_IMPORTED_MODULE_2__["View"]());
window.app = app;

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    console.log("Model initialized...");
    this.todos = [{
      id: 1,
      text: "Participate in Architectural meetup",
      complete: true
    }, {
      id: 2,
      text: "Participate in FrontEnd meetup",
      complete: false
    }];
  }

  _createClass(Model, [{
    key: "addTodo",
    value: function addTodo(todoText) {
      console.log("Model addTodo - todoText: ", todoText);
      var todo = {
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        text: todoText,
        complete: false
      };
      this.todos.push(todo);
    }
  }, {
    key: "editTodo",
    value: function editTodo(id, todoText) {
      console.log("Model editTodo - id: " + id + " todoText: " + todoText);
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo(id) {
      console.log("Model deleteTodd - id: ", id);
      this.todos = this.todos.filter(function (todo) {
        return todo.id !== id;
      });
    }
  }, {
    key: "toggleToto",
    value: function toggleToto(id) {
      console.log("Model toggleToto - id: ", id);
      this.todos = this.todos.map(function (todo) {
        return todo.id === id ? {
          id: todo.id,
          text: todo.text,
          complete: !todo.complete
        } : todo;
      });
    }
  }]);

  return Model;
}();

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);

    console.log("View initialized..."); //  the root element

    this.app = this.getElement("#root"); //  app title

    this.title = this.createElement("h1");
    this.title.textContent = "Todos"; //  the form, with a [type="text"] input and submit button

    this.form = this.createElement("form");
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit"; //  the visual representation of the todo list

    this.todoList = this.createElement("ul", "todo-list"); // append the input and submit button to the form

    this.form.append(this.input, this.submitButton); //  append the title, form and todo list to the app

    this.app.append(this.title, this.form, this.todoList);
  }

  _createClass(View, [{
    key: "_resetInput",
    value: function _resetInput() {
      this.input.value = "";
    }
  }, {
    key: "displayTodos",
    value: function displayTodos(todos) {
      var _this = this;

      //  delete all nodes
      while (this.todoList.firstChild) {
        this.todoList.removeChild(this.todoList.firstChild);
      } //  show default message if list is empty


      if (todos.length === 0) {
        var p = this.createElement("p");
        p.textContent = "Nothing to do. Add a task?";
        this.todoList.append(p);
      } else {
        // create todo item nodes for each todo in state
        todos.forEach(function (todo) {
          var li = _this.createElement("li");

          li.id = todo.id; //  each todo item will have a checkbox you can toggle

          var checkbox = _this.createElement("input");

          checkbox.type = "checkbox";
          checkbox.checked = todo.complete; //  the todo item text will be in a contenteditable span

          var span = _this.createElement("span");

          span.contentEditable = true;
          span.classList.add("editable"); //  if the todo is complete, it will have a striethrough

          if (todo.complete) {
            var strike = _this.createElement("s");

            strike.textContent = todo.text;
            span.append(strike);
          } else {
            // otherwise - just diplay the text
            span.textContent = todo.text;
          } // the todos will also have a delete button


          var deleteButton = _this.createElement("button", "delete");

          deleteButton.textContent = "Delete";
          li.append(checkbox, span, deleteButton); //  append all nodes to the todo list

          _this.todoList.append(li);
        });
      }
    } //  create an element with an optional CSS class

  }, {
    key: "createElement",
    value: function createElement(tag, className) {
      var element = document.createElement(tag);
      if (className) element.classList.add(className);
      return element;
    } //  retrieve an element from the DOM

  }, {
    key: "getElement",
    value: function getElement(selector) {
      var element = document.querySelector(selector);
      return element;
    }
  }, {
    key: "_todoText",
    get: function get() {
      return this.input.value;
    }
  }]);

  return View;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map