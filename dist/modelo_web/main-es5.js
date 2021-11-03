(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\gabrielalmeida\Desktop\Nova pasta (2)\crud-front\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0bpM":
    /*!***********************************************!*\
      !*** ./src/app/core/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bpM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/auth.service */
      "Vurf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _compartilhado_componentes_app_msg_erro_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../compartilhado/componentes/app-msg-erro/app-msg-erro.component */
      "qLKG");

      function LoginComponent_app_msg_erro_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg-erro", 9);
        }
      }

      function LoginComponent_app_msg_erro_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg-erro", 10);
        }
      }

      function LoginComponent_app_msg_erro_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg-erro", 11);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, authService, router) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.router = router;
          this.loginError = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            var login = this.loginForm.get('login').value;
            var password = this.loginForm.get('password').value;
            this.authService.authenticate(login, password).subscribe(function () {
              return _this.router.navigate(['home']);
            }, //informe a rota que irá abrir após o login 
            //informe a rota que irá abrir após o login 
            function (err) {
              console.log(err);
              _this.loginError = true;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        inputs: {
          loginError: "loginError"
        },
        decls: 13,
        vars: 4,
        consts: [[1, "form-signin", 3, "formGroup", "submit"], ["form", "ngForm"], [1, "form-group"], ["formControlName", "login", "type", "text", "placeholder", "Usu\xE1rio", 1, "form-control"], ["mensagem", "O usu\xE1rio \xE9 obrigat\xF3rio!", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Senha", 1, "form-control"], ["mensagem", "A senha \xE9 obrigat\xF3ria!", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["mensagem", "Usu\xE1rio ou senha inv\xE1lidos!", 4, "ngIf"], ["mensagem", "O usu\xE1rio \xE9 obrigat\xF3rio!"], ["mensagem", "A senha \xE9 obrigat\xF3ria!"], ["mensagem", "Usu\xE1rio ou senha inv\xE1lidos!"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Acesso ao sistema");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_app_msg_erro_6_Template, 1, 0, "app-msg-erro", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_app_msg_erro_9_Template, 1, 0, "app-msg-erro", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Entrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_app_msg_erro_12_Template, 1, 0, "app-msg-erro", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("login").errors == null ? null : ctx.loginForm.get("login").errors.required) && (_r0.submitted || ctx.loginForm.get("login").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("password").errors == null ? null : ctx.loginForm.get("password").errors.required) && (_r0.submitted || ctx.loginForm.get("password").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _compartilhado_componentes_app_msg_erro_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_5__["AppMsgErroComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './login.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          loginError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "2pca":
    /*!************************************************************!*\
      !*** ./src/app/aluno/lista-aluno/lista-aluno.component.ts ***!
      \************************************************************/

    /*! exports provided: ListaAlunoComponent */

    /***/
    function pca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaAlunoComponent", function () {
        return ListaAlunoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../aluno.service */
      "Js8o");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListaAlunoComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaAlunoComponent_tr_12_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var aluno_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.editarAluno(aluno_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaAlunoComponent_tr_12_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var aluno_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.deletarAluno(aluno_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Excluir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var aluno_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aluno_r1.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aluno_r1.curso);
        }
      }

      var ListaAlunoComponent = /*#__PURE__*/function () {
        function ListaAlunoComponent(formBuilder, router, AlunoService) {
          _classCallCheck(this, ListaAlunoComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.AlunoService = AlunoService;
          this.ListaAlunos = [];
        }

        _createClass(ListaAlunoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pesquisaTodos();
            this.alunoForm = this.formBuilder.group({
              pesquisarTodos: ['']
            });
          }
        }, {
          key: "pesquisaTodos",
          value: function pesquisaTodos() {
            var _this2 = this;

            this.AlunoService.getAll().subscribe(function (result) {
              _this2.ListaAlunos = result;
            });
          }
        }, {
          key: "editarAluno",
          value: function editarAluno(id) {
            this.router.navigate(['/home/editar/aluno', id]);
          }
        }, {
          key: "deletarAluno",
          value: function deletarAluno(id) {
            var _this3 = this;

            if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
              this.AlunoService["delete"](id).subscribe(function (result) {
                _this3.ListaAlunos = result;
              });
              alert('Aluno excluído.');
              window.location.reload();
            }
          }
        }]);

        return ListaAlunoComponent;
      }();

      ListaAlunoComponent.ɵfac = function ListaAlunoComponent_Factory(t) {
        return new (t || ListaAlunoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"]));
      };

      ListaAlunoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListaAlunoComponent,
        selectors: [["app-lista-aluno"]],
        decls: 13,
        vars: 2,
        consts: [[3, "formGroup"], [1, "container", "text-center"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-primary", "ml-2", 3, "click"], [1, "btn", "btn-outline-danger", "ml-2", 3, "click"]],
        template: function ListaAlunoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Curso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Op\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaAlunoComponent_tr_12_Template, 10, 2, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.alunoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListaAlunos);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1hbHVuby5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaAlunoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-lista-aluno',
            templateUrl: './lista-aluno.component.html',
            styleUrls: ['./lista-aluno.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7qRr":
    /*!******************************************************************!*\
      !*** ./src/app/aluno/cadastro-aluno/cadastro-aluno.component.ts ***!
      \******************************************************************/

    /*! exports provided: CadastroAlunoComponent */

    /***/
    function qRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CadastroAlunoComponent", function () {
        return CadastroAlunoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/user/user.service */
      "ryO2");
      /* harmony import */


      var _aluno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../aluno.service */
      "Js8o");

      var CadastroAlunoComponent = /*#__PURE__*/function () {
        function CadastroAlunoComponent(location, formBuilder, route, listaUsuarios, AlunoService) {
          _classCallCheck(this, CadastroAlunoComponent);

          this.location = location;
          this.formBuilder = formBuilder;
          this.route = route;
          this.listaUsuarios = listaUsuarios;
          this.AlunoService = AlunoService;
        }

        _createClass(CadastroAlunoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) {
              return params['id'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) {
              return _this4.AlunoService.getById(id);
            })).subscribe(function (aluno) {
              return _this4.editarForm(aluno);
            });
            this.alunoForm = this.formBuilder.group({
              id: [null],
              id_user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              curso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "editarForm",
          value: function editarForm(aluno) {
            this.alunoForm.patchValue({
              id: aluno[0].id,
              nome: aluno[0].nome,
              curso: aluno[0].curso
            });
          }
        }, {
          key: "preencheCampos",
          value: function preencheCampos(aluno) {
            this.alunoForm.patchValue({
              nome: aluno.nome,
              curso: aluno.curso
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            if (this.alunoForm.value.id) {
              var atualizarAluno = this.alunoForm.getRawValue();
              this.AlunoService.update(atualizarAluno).subscribe(function (success) {
                alert('Aluno atualizado!');

                _this5.alunoForm.reset();
              }, function (error) {
                alert('Erro ao atualizar.');
              });
            } else {
              var novoAluno = this.alunoForm.getRawValue();
              this.AlunoService.create(novoAluno).subscribe(function (success) {
                alert('Aluno salvo!');

                _this5.alunoForm.reset();
              }, function (error) {
                alert('Erro ao salvar.');
              });
            }
          }
        }]);

        return CadastroAlunoComponent;
      }();

      CadastroAlunoComponent.ɵfac = function CadastroAlunoComponent_Factory(t) {
        return new (t || CadastroAlunoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_aluno_service__WEBPACK_IMPORTED_MODULE_6__["AlunoService"]));
      };

      CadastroAlunoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CadastroAlunoComponent,
        selectors: [["app-cadastro-aluno"]],
        decls: 18,
        vars: 2,
        consts: [[1, "container"], [3, "formGroup", "submit"], [1, "row", "mb-5"], [1, "col-lg-4", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "nome", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], ["type", "text", "formControlName", "curso", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "form-group", "buttons", "text-center"], ["type", "submit", 1, "btn", "btn-success"], [1, "btn", "btn-primary", "ml-2", 3, "routerLink"]],
        template: function CadastroAlunoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CadastroAlunoComponent_Template_form_submit_1_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Curso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Voltar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.alunoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWRhc3Ryby1hbHVuby5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroAlunoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cadastro-aluno',
            templateUrl: './cadastro-aluno.component.html',
            styleUrls: ['./cadastro-aluno.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _aluno_service__WEBPACK_IMPORTED_MODULE_6__["AlunoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './home.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        apiUrl: 'http://localhost:3000/api/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "EcI+":
    /*!*****************************************!*\
      !*** ./src/app/core/auth/auth.guard.ts ***!
      \*****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function EcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user/user.service */
      "ryO2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(userService, router) {
          _classCallCheck(this, AuthGuard);

          this.userService = userService;
          this.router = router;
        }
        /* Guarda de rotas para ser utilizada nas rotas
           que não devem ser acessadas se o usuário não estiver logado*/


        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!this.userService.isLogged()) {
              this.router.navigate(['login'], {
                queryParams: {
                  fromUrl: state.url
                }
              });
              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Js8o":
    /*!****************************************!*\
      !*** ./src/app/aluno/aluno.service.ts ***!
      \****************************************/

    /*! exports provided: AlunoService */

    /***/
    function Js8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlunoService", function () {
        return AlunoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;

      var AlunoService = /*#__PURE__*/function () {
        function AlunoService(http) {
          _classCallCheck(this, AlunoService);

          this.http = http;
        }

        _createClass(AlunoService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(API, "aluno"));
          }
        }, {
          key: "create",
          value: function create(aluno) {
            return this.http.post("".concat(API, "aluno"), aluno).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            if (!id) return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            return this.http.get("".concat(API, "aluno/").concat(id));
          }
        }, {
          key: "update",
          value: function update(_update) {
            console.log(_update);
            return this.http.put("".concat(API, "aluno/").concat(_update.id), _update).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(API, "aluno/").concat(id));
          }
        }]);

        return AlunoService;
      }();

      AlunoService.ɵfac = function AlunoService_Factory(t) {
        return new (t || AlunoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AlunoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AlunoService,
        factory: AlunoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Q1n2":
    /*!***************************************!*\
      !*** ./src/app/aluno/aluno.module.ts ***!
      \***************************************/

    /*! exports provided: AlunoModule */

    /***/
    function Q1n2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlunoModule", function () {
        return AlunoModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro-aluno/cadastro-aluno.component */
      "7qRr");
      /* harmony import */


      var _lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista-aluno/lista-aluno.component */
      "2pca");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.routing.module */
      "lm+D");

      var AlunoModule = function AlunoModule() {
        _classCallCheck(this, AlunoModule);
      };

      AlunoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlunoModule
      });
      AlunoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlunoModule_Factory(t) {
          return new (t || AlunoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlunoModule, {
          declarations: [_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_5__["CadastroAlunoComponent"], _lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_6__["ListaAlunoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
          exports: [_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_5__["CadastroAlunoComponent"], _lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_6__["ListaAlunoComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlunoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_5__["CadastroAlunoComponent"], _lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_6__["ListaAlunoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
            exports: [_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_5__["CadastroAlunoComponent"], _lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_6__["ListaAlunoComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'modelo-app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Vurf":
    /*!*******************************************!*\
      !*** ./src/app/core/auth/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vurf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../user/user.service */
      "ryO2");

      var API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, userService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.userService = userService;
        }

        _createClass(AuthService, [{
          key: "authenticate",
          value: function authenticate(usuario, senha) {
            var _this6 = this;

            return this.http.post(API + 'logon', {
              "usuario": usuario,
              "senha": senha
            }, {
              observe: 'response'
            }) //coloque a rota de login da sua api
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              var authToken = res.headers.get('x-access-token');

              _this6.userService.setToken(authToken);

              console.log("Usu\xE1rio ".concat(usuario, " autenticado com o token ").concat(authToken));
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XGcD":
    /*!*********************************************!*\
      !*** ./src/app/core/token/token.service.ts ***!
      \*********************************************/

    /*! exports provided: TokenService */

    /***/
    function XGcD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // informe a key que será salvo no localhost


      var KEY = 'authTokenmodeloapp';

      var TokenService = /*#__PURE__*/function () {
        function TokenService() {
          _classCallCheck(this, TokenService);
        }

        _createClass(TokenService, [{
          key: "hasToken",
          value: function hasToken() {
            return !!this.getToken(); //!! é utilizado para converter valores em booleanos
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            window.localStorage.setItem(KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return window.localStorage.getItem(KEY);
          }
        }, {
          key: "removeToken",
          value: function removeToken() {
            return window.localStorage.removeItem(KEY);
          }
        }]);

        return TokenService;
      }();

      TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || TokenService)();
      };

      TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenService,
        factory: TokenService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.routing.module */
      "lm+D");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.module */
      "ct+p");
      /* harmony import */


      var _compartilhado_componentes_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./compartilhado/componentes/material/material.module */
      "wvCw");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./aluno/aluno.module */
      "Q1n2");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _compartilhado_componentes_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_10__["AlunoModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _compartilhado_componentes_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_10__["AlunoModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _compartilhado_componentes_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_10__["AlunoModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eH4D":
    /*!*******************************************************************************!*\
      !*** ./src/app/compartilhado/componentes/app-msg-erro/app-msg-erro.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AppMsgErroModule */

    /***/
    function eH4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMsgErroModule", function () {
        return AppMsgErroModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_msg_erro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-msg-erro.component */
      "qLKG");

      var AppMsgErroModule = function AppMsgErroModule() {
        _classCallCheck(this, AppMsgErroModule);
      };

      AppMsgErroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppMsgErroModule
      });
      AppMsgErroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppMsgErroModule_Factory(t) {
          return new (t || AppMsgErroModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMsgErroModule, {
          declarations: [_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_2__["AppMsgErroComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_2__["AppMsgErroComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMsgErroModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_2__["AppMsgErroComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_app_msg_erro_component__WEBPACK_IMPORTED_MODULE_2__["AppMsgErroComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lm+D":
    /*!***************************************!*\
      !*** ./src/app/app.routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function lmD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/login/login.component */
      "0bpM");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/auth/login.guard */
      "skor");
      /* harmony import */


      var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/auth/auth.guard */
      "EcI+");
      /* harmony import */


      var _aluno_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./aluno/cadastro-aluno/cadastro-aluno.component */
      "7qRr");
      /* harmony import */


      var _aluno_lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./aluno/lista-aluno/lista-aluno.component */
      "2pca");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _core_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_core_auth_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [{
          path: 'cadastrar/aluno',
          component: _aluno_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_6__["CadastroAlunoComponent"]
        }, {
          path: 'editar/aluno/:id',
          component: _aluno_cadastro_aluno_cadastro_aluno_component__WEBPACK_IMPORTED_MODULE_6__["CadastroAlunoComponent"]
        }, {
          path: 'lista/aluno',
          component: _aluno_lista_aluno_lista_aluno_component__WEBPACK_IMPORTED_MODULE_7__["ListaAlunoComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true,
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "0bpM");
      /* harmony import */


      var _compartilhado_componentes_app_msg_erro_app_msg_erro_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../compartilhado/componentes/app-msg-erro/app-msg-erro.module */
      "eH4D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/request.interceptor */
      "rQEF");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["RequestInterceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _compartilhado_componentes_app_msg_erro_app_msg_erro_module__WEBPACK_IMPORTED_MODULE_4__["AppMsgErroModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _compartilhado_componentes_app_msg_erro_app_msg_erro_module__WEBPACK_IMPORTED_MODULE_4__["AppMsgErroModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _compartilhado_componentes_app_msg_erro_app_msg_erro_module__WEBPACK_IMPORTED_MODULE_4__["AppMsgErroModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["RequestInterceptor"],
              multi: true
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qLKG":
    /*!**********************************************************************************!*\
      !*** ./src/app/compartilhado/componentes/app-msg-erro/app-msg-erro.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AppMsgErroComponent */

    /***/
    function qLKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMsgErroComponent", function () {
        return AppMsgErroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppMsgErroComponent = function AppMsgErroComponent() {
        _classCallCheck(this, AppMsgErroComponent);

        this.mensagem = '';
      };

      AppMsgErroComponent.ɵfac = function AppMsgErroComponent_Factory(t) {
        return new (t || AppMsgErroComponent)();
      };

      AppMsgErroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppMsgErroComponent,
        selectors: [["app-msg-erro"]],
        inputs: {
          mensagem: "mensagem"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "text-danger", "d-block", "mt-2"]],
        template: function AppMsgErroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mensagem, " ");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMsgErroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-msg-erro',
            templateUrl: './app-msg-erro.component.html'
          }]
        }], null, {
          mensagem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "rQEF":
    /*!**************************************************!*\
      !*** ./src/app/core/auth/request.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: RequestInterceptor */

    /***/
    function rQEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function () {
        return RequestInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../token/token.service */
      "XGcD");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../user/user.service */
      "ryO2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var API = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;

      var RequestInterceptor = /*#__PURE__*/function () {
        function RequestInterceptor(tokenService, userService, router) {
          _classCallCheck(this, RequestInterceptor);

          this.tokenService = tokenService;
          this.userService = userService;
          this.router = router;
        } // intercepta cada requisição feita web para a api, verifica o token, clona e envia para a api


        _createClass(RequestInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this7 = this;

            if (req.url == "".concat(API, "login")) {
              return next.handle(req);
            }

            if (this.tokenService.hasToken()) {
              var token = this.tokenService.getToken();
              req = req.clone({
                setHeaders: {
                  'x-access-token': token
                }
              });
            }

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err.status === 401) {
                console.log('entrou');

                _this7.userService.logout();

                _this7.router.navigate(['login']);

                alert('Sua sessão expirou');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
              }
            }));
          }
        }]);

        return RequestInterceptor;
      }();

      RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) {
        return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RequestInterceptor,
        factory: RequestInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
          }, {
            type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ryO2":
    /*!*******************************************!*\
      !*** ./src/app/core/user/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function ryO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jwt-decode */
      "BOF4");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _token_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../token/token.service */
      "XGcD");

      var UserService = /*#__PURE__*/function () {
        // assim que inicia o serviço, verifica se existe o token e faz a decodificação
        function UserService(tokenService) {
          _classCallCheck(this, UserService);

          this.tokenService = tokenService;
          this.tokenService.hasToken() && this.decodeAndNotify();
        }

        _createClass(UserService, [{
          key: "setToken",
          value: function setToken(token) {
            this.tokenService.setToken(token);
            this.decodeAndNotify();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.user;
          }
        }, {
          key: "decodeAndNotify",
          value: function decodeAndNotify() {
            var token = this.tokenService.getToken();
            this.user = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.tokenService.removeToken();
            this.user = null;
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return this.tokenService.hasToken();
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "skor":
    /*!******************************************!*\
      !*** ./src/app/core/auth/login.guard.ts ***!
      \******************************************/

    /*! exports provided: LoginGuard */

    /***/
    function skor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user/user.service */
      "ryO2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(userService, router) {
          _classCallCheck(this, LoginGuard);

          this.userService = userService;
          this.router = router;
        }
        /* Guarda de rotas utilizada para retornar para a página inicial, caso o usuário já estiver logado */


        _createClass(LoginGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.userService.isLogged()) {
              this.router.navigate(['home']);
              return false;
            }

            return true;
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ɵfac = function LoginGuard_Factory(t) {
        return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginGuard,
        factory: LoginGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wvCw":
    /*!***********************************************************************!*\
      !*** ./src/app/compartilhado/componentes/material/material.module.ts ***!
      \***********************************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function wvCw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr"); // IMPORT ALL MATERIAL COMPONENTS
      // #STEPS
      // 1- Import this file as module in app.module.ts ==> import { MaterialModule } from './xyz/abc';
      // 2- Initialize it in imports:[] array ==> imports:[MaterialModule]
      // *************** FORM CONTROLS ***************
      //FROM ANGULAR CORE
      // *************** NAVIGATION ***************
      // *************** LAYOUT ***************
      // *************** BUTTONS & INDICATORS ***************
      // *************** POPUPS & MODALS ***************
      // *************** DATA TABLE ***************


      var AllMaterialModules = [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[AllMaterialModules], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"]],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [AllMaterialModules],
            exports: [AllMaterialModules]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map