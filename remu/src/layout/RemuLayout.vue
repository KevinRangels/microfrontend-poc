<script setup>
  import { RouterView } from 'vue-router'
  import HeaderTalana from "shared/HeaderTalana"
  import SidebarTalana from "shared/SidebarTalana"
  import { remuStore } from '../store'

  const remu = remuStore()
</script>
<template>
  <div class="main-layout-saas">
    <HeaderTalana />

    <section class="t-sub-header">
      <div class="talana-breadcrumbs-container m-t-10 talana-breadcrumbs">
        <ul class="sub-header-inner">
          <li class="talana-breadcrumbs-world">
            <a
              href="#"
            >
              REMUNERACIONES
            </a>
          </li>
        </ul>
      </div>
    </section>

    <div
      id="sidebar-wrapper"
      class="t-sidebar"
    >
      <SidebarTalana />
    </div>
    <div class="t-main-view-fluid">
      <div id="main w-100">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

html {
    overflow: auto !important;
}

/* Declarando variables */
:root {
    --font-family: 'Inter', sans-serif;
    /* Colores Talana */
    --talana-blue-lighter: #4e4eff;
    --talana-blue-light: #3030FF;
    --talana-blue: #6344DD;
    --talana-blue-darker: #000090;
    --talana-yellow: #F5B623;
    --talana-yellow-darker: #FF9100;
    /* Colores paleta Talana */
    --talana-purple: #5C6BC0;
    --talana-turquoise-darker: #0097A7;
    --talana-turquoise: #00BFA5;
    --talana-red: #EE4E4F;
    --talana-green: #46C089;
    --talana-pink: #EC407A;
    --talana-orange-darker: #FF5252;
    --talana-orange: #FF6938;
    --text-color: #4b4b4b;
    --talana-gray: #777;
    --talana-gray-70: #7C8DB0;
    --talana-gray-light: #9e9e9e;
    --talana-gray-lighter: #eee;
    --background: white;
    --remuneraciones-color-lighter: rgba(147, 197, 125, .5);
    --remuneraciones-color-light: rgba(147, 197, 125, .8);
    --remuneraciones-color: #388E3C;
    /* Tamaños Tipografía */
    --font-size-body: 14px;
    --font-size-body-bigger: 16px;
    --font-size-table: 13px;
    --card-radius: 6px;
    --bg-aside-icons: transparent;
    --c-aside-icons: white;
    --headers-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    --haunter-purple: #6344DD;
    --gengar-purple: #8567FF;
    
    /* Swal alert */
    --swal-confirm: #3085d6;
    --swal-cancel: #d33;
    
}

* {
    font-family: var(--font-family);
}

body {
    padding: 0px !important;
}

body #content {
    padding: 0
}

#call-us-btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    z-index: 350;
    border-radius: 50%;
    box-shadow: 0 1px 10px rgba(0,0,0,.12);
    background-color: var(--brand-primary-color);
}

#call-us-btn:hover {
    cursor: pointer;
}

#call-us-btn i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    line-height: 60px;
    font-size: 35px;
    color: white;
    border-radius: 50%;
    z-index: 31;
    text-align: center;
}

#call-us-btn span{
    z-index: 29;
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50%;
    transition: 0.5s;
    font-size: 14px;
    line-height: 30px;
    background-color: white;
    box-shadow: 0 1px 10px rgba(0,0,0,.12);
    font-weight: 600;
    padding: 0;
    border-radius: 10px;
}

#call-us-btn.active span {
    width: max-content;
    padding: 10px 15px;
    right: 120%;
    height: auto;
}

.monster-tip {
    margin-right: 10px;
}

/*==============================*/

/* INTRO HELP */
/*==============================*/

.intro-help {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 100%;
    left: 0;
    right: 0;
    padding: 0;
    background-color: rgba(255, 255, 255, .9);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .5s ease all;
}

.intro-help.show-intro {
    padding: 40px 60px;
    bottom: 0;
    transition: .5s ease all;
}

.intro-help > div {
    display: none;
    transition: .5s ease all;
}

.intro-help.show-intro > div {
    display: block;
}

.intro-help > div {
    width: 100%;
}

.intro-help .intro-help-header {
    text-align: center;
    margin-bottom: 1rem;
}

.intro-help .intro-help-header .intro-help-title {
    color: var(--haunter-purple);
    margin-bottom: 2rem;
    font-weight: 600;
}

.intro-help .intro-help-actions {
    list-style: none;
    text-align: right;
}

.intro-help .intro-help-actions li {
    display: inline-block;
}

.intro-help .intro-help-body {
    text-align: center;
}

.intro-help .intro-help-change .intro-help-change-title {
    color: var(--talana-yellow-darker);
    margin-bottom: 2rem;
}

.intro-help .intro-help-change .intro-help-change-image {
    height: 45vh;
    margin-bottom: 2rem;
}

.intro-help .intro-help-change .intro-help-change-image img {
    height: 100%;
}

.intro-help .intro-help-change .intro-help-change-description {
    max-width: 60%;
    margin: 15px auto;
    font-size: 16px;
}

.intro-help-change-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 60%;
    margin: 0 auto;

}

.intro-help-change-footer .intro-help-change-actions {
    list-style: none;
}

.intro-help-change-footer .intro-help-change-actions li {
    display: inline-block;
}

.intro-help-footer {
    margin-top: 2rem;
    text-align: center;
}

.intro-help-footer img {
    max-height: 20px;
}

/* FIXED TABLES */


.table-wrapper {
    overflow-x: auto;
}

.table-wrapper.table-fixed {
    max-width: 100%;
    max-height: calc(100vh - 350px);
    overflow: scroll;
    position: relative;
}

.table-wrapper.table-fixed table {
    position: relative;
    border-collapse: collapse;
}

.table-wrapper.table-fixed td, th {
    padding: 0.25em;
    border: 1px solid #f5f5f5;
}

.table-wrapper.table-fixed thead th {
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    top: 0;
    background-color: #F5F5F5;
}


.table-wrapper.table-fixed.thead-all-fixed thead th {
    z-index: 2;
}

.table-wrapper.table-fixed.thead-all-fixed thead th:first-child {
    z-index: 4;
}

.table-wrapper.table-fixed thead th:first-child {
    left: 0;
    z-index: 2;
    min-width: 110px;
    border: 1px solid #f5f5f5;
}


.table-wrapper.table-fixed thead th:nth-child(2) {
    left: 110px;
    z-index: 2;
    border: 1px solid #f5f5f5;
}

.table-wrapper.table-fixed tbody th {
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    left: 0;
    font-weight: 400;
    z-index: 1;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
}

.table-wrapper.table-fixed tbody th:nth-child(2) {
    left: 110px;
}

.empty-graph {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #777;
}

.empty-graph i {
    color: #ccc;
    font-size: 60px;
    background-color: transparent !important;

}

.spring-spinner, .spring-spinner * {
    box-sizing: border-box;
}

.spring-spinner {
    height: 60px;
    width: 60px;
    margin: 0 auto;
}

.spring-spinner .spring-spinner-part {
    overflow: hidden;
    height: calc(60px / 2);
    width: 60px;
}

.spring-spinner .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
}

.spring-spinner .spring-spinner-rotator {
    width: 60px;
    height: 60px;
    border: calc(60px / 7) solid transparent;
    border-right-color: var(--haunter-purple);
    border-top-color: var(--haunter-purple);
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 3s ease-in-out infinite;
    transform: rotate(-200deg);
}

@keyframes spring-spinner-animation {
    0% {
        border-width: calc(60px / 7);
    }
    25% {
        border-width: calc(60px / 23.33);
    }
    50% {
        transform: rotate(115deg);
        border-width: calc(60px / 7);
    }
    75% {
        border-width: calc(60px / 23.33);
    }
    100% {
        border-width: calc(60px / 7);
    }
}

/* ================= */

/*==============================*/
/* RESUMEN DE PROCESO */

.section-title {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}

.section-title .btn-type-back {
    margin-right: 15px;
}

g text {
    text-transform: capitalize !important;
}

.table-graph-wrapper {
    overflow-y: auto;
}

.rotacion-gerencia-full {
    height: calc(100vh - 300px);
}

/*==============================*/

.herramientas-alert-messages {
    margin: 10px;
    background-color: rgba(70, 192, 137, 0.2);
    color: var(--talana-green);
    padding: 15px;
    list-style: none;
    border-radius: 8px;
    border: 1px solid;
}

.recordatoriosContainer {
    display: inline-block;
    position: relative;
    width: 100%;
    border-radius: 2px;
    color: rgba(0, 0, 0, .84);
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;
}

.recordatoriosContainer {
    background: #fff;
}

.recordatoriosContainer .media label {
    font-size: 14px;
}

.recordatoriosContainer h2 {
    color: #000;
}

.recordatoriosContainer #add-tl-item {
    background: #4285F4;

}

.recordatoriosContainer #add-tl-item:not(.toggled) .add-new-item {
    color: #fff !important;
}

.recordatoriosContainer .tl-body .checkbox .input-helper:before {
    border-color: #fff;
}

.recordatoriosContainer .tl-body .checkbox .input-helper:after {
    border-color: #fff;
}

.recordatoriosContainer .tl-body {
    /* background: rgba(66, 133, 244, 0.5); */
    background: #ffffff;
}

.recordatoriosContainer .tl-body {
    color: #000000;
}


.rule-container input {
    border-radius: 0 !important;
}

.rule-container.has-error input {
    border-bottom: 2px solid red;
}

/* Mi Perfil */
.profile-view .pv-body .pv-contact > li, .profile-view .pv-body .pv-follow > li {
    display: list-item;
    margin: 10px 0;
}

@media (max-width: 1500px) {
    .miPerfilTab .tab-nav > li > a {
        font-size: 11px;
        padding: 8px;
    }

}

.tab-nav.tn-icon > li .mdi {
    font-size: 22px;
    line-height: 100%;
    min-height: 25px;
    color: #7a7a7a;
}

.tab-nav.tn-icon > li.active .mdi {
    color: #337ab7;
}

.miPerfilTab {
    min-height: 520px;

}

.actionsCard a.lv-item {
    color: #333;
}

.actionsCard a.lv-item .lv-img-sm {
    margin: 0 auto 15px;
}

.actionsCard a.lv-item .media-body {
    text-align: center;
    /*   width: 70%; */
    margin: 0 auto;
}

.actionsCard a.lv-item .media-body .lv-title {
    font-size: 12px;
    font-weight: bold;
    /* border-top: 1px solid #ccc; */
    padding-top: 10px;
}

@media (max-width: 1400px) {
    .actionsCard a.lv-item .media-body .lv-title {
        font-size: 12px;
    }

}

.hrDark {
    border-color: #ccc;
}

.overAuto {

}

.nombreHeader {
    color: var(--brand-primary-color);
    display: block;
    font-size: 16px;
    padding: 8px;

}


.big-round-icon {
    /* border-radius: 81px; */
    /*padding: 16px;*/
    height: 105px;
    width: 105px;
    /*color: #ffffff; */
    color: #999;
    /*background-color: #aaaaaa;*/
    /*border: solid 2px #999;*/
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    /*border-radius: 3px;*/
}

.big-round-icon:hover {

    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);

}

.media-body .lv-title {
    width: 105px;
    display: block !important;
    margin-left: -18px;
    float: left !important;
    position: absolute !important;
    /* bottom:13px !important; */
    padding-top: 2px !important;
    padding-bottom: 2px !important;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    line-height: 14px !important;
    height: 36px;

}


.over-red:hover .media-body .lv-title {
    color: #fff;
    background-color: #F44336;;

}

.over-red:hover {
    color: #F44336;
    border-color: #F44336;
}

.over-purple:hover {
    color: #673AB7;
    border-color: #673AB7;
}

.over-purple:hover .media-body .lv-title {
    color: #fff;
    background-color: #673AB7;

}

.over-blue:hover {
    color: #3F51B5;
    border-color: #3F51B5;
}

.over-blue:hover .media-body .lv-title {
    color: #fff;
    background-color: #3F51B5;

}

.over-orange:hover {
    color: #FF5722;
    border-color: #FF5722;
}

.over-orange:hover .media-body .lv-title {
    color: #fff;
    background-color: #FF5722;
}

.over-green:hover {
    color: #4CAF50;
    border-color: #4CAF50;
}

.over-green:hover .media-body .lv-title {
    color: #fff;
    background-color: #4CAF50;
}

.over-cyan:hover {
    color: #00BCD4;
    border-color: #00BCD4;
}

.over-cyan:hover .media-body .lv-title {
    color: #fff;
    background-color: #00BCD4;
}


.over-lightblue:hover {
    color: #03A9F4;
    border-color: #03A9F4;
}

.over-lightblue:hover .media-body .lv-title {
    color: #fff;
    background-color: #03A9F4;
}


.over-pink:hover {
    color: #E91E63;
    border-color: #E91E63;
}

.over-pink:hover .media-body .lv-title {
    color: #fff;
    background-color: #E91E63;
}


.over-amber:hover {
    color: #FFC107;
    border-color: #FFC107;
}

.over-amber:hover .media-body .lv-title {
    color: #fff;
    background-color: #FFC107;
}

.big-round-icon .media-body {
    /* margin-top: -20px !important; */
    /*min-width: 82px;*/
}

.iconoEmpresa {
    font-size: 35px;
}

.iconHelp {
    color: var(--haunter-purple);
    cursor: pointer;
}

input.inputAsistente {
    width: 80px;

}

.asistenteWidgets .mini-charts-item {
    margin-bottom: 0px;
}

/*
.alert {
    padding-left: 30px;
    font-size: 13px;
    padding: 15px;
    margin-bottom: 18px;
    border: 1px solid transparent;
    border-radius: 2px;
}

.alert-success {

    background-color: #4CAF50;
    color: #fff;
}


.alert-success hr {
  border-top-color: #d0e9c6;
}

.alert-success .alert-link {
  color: #3d8b40;
}

.alert-info {

  background-color: #2196f3;
  color: #fff;
}

.alert-info hr {
  border-top-color: #c4e3f3;
}

.alert-info .alert-link {
  color: #0c7cd5;
}

.alert-warning {
  background-color: #ff9800;
  color: #fff;
}

.alert-warning hr {
  border-top-color: #ffe2bd;
}

.alert-warning .alert-link {
  color: #cc7a00;
}

.alert-danger {
  background-color: #f44336;
  color: #fff;
}

.alert-danger hr {
  border-top-color: #ebcccc;
}

.alert-danger .alert-link {
  color: #ea1c0d;
}
*/

.alert {
    font-size: 14px;
    width: 100%;
    height: 80px;
    border: none;

    margin-bottom: 15px;
    position: relative;
    background-color: #fff;
    /* height: inherit; */ /* se veian horribles en el cierre de mes */
}

.alert-danger {
    border-bottom: solid 1px #f44336;
}

.alert-warning {
    border-bottom: solid 1px #cc7a00;
}

.alert-success {
    border-bottom: solid 1px #4CAF50;
}


.alert-danger .icono-block {
    width: 50px;
    color: #f44336;
    padding: 15px;
    float: left;
    position: absolute;
    left: 0px;
}

.alert-warning .icono-block {
    width: 50px;
    color: #cc7a00;
    padding: 15px;
    float: left;
    position: absolute;
    left: 0px;
}

.alert-success .icono-block {
    width: 50px;
    color: #4CAF50;
    padding: 15px;
    float: left;
    position: absolute;
    left: 0px;
}

.alert-texto {
    width: 100%;
    padding: 15px;
    text-align: left;
    float: left;
    position: absolute;
    left: 80px;
    color: #000;

}


.botoneraHome .lv-item {
    padding-left: 35px;

}

.generic_form select {
    width: 100%;
}

.generic_form .select2-container {
    width: 100%;
}

.editParametro {
    display: none;
}


.botonSiguienteAsistente {
    bottom: 0px;
    float: initial;
    position: absolute;
    width: 100%;
}

.resumen-proceso-table td, .resumen-proceso-table th {
    font-size: 14px;
}

.resumen-proceso-table th {
    text-align: right;
}

#listaDeRecordatorios {
    padding-top: 0px;
    /*margin-top:-28px;*/
}

#listaDeRecordatorios label {
    margin-bottom: 10px;
}

#listaDeRecordatorios label a i.fa {
    position: relative;
    margin-left: -28px;
    display: block;
    float: left;
    font-size: 20px;
    color: #444;
}

#listaDeRecordatorios label span {
    color: #444;
}

ul.arbolEditable li {
    font-size: 15px;

}

.tdMontoPactadoIsapre div.bootstrap-select button {
    width: 80px !important;
    float: left;
}

.tdMontoPactadoIsapre div.bootstrap-select {
    width: 80px !important;
    float: left;
    display: block !important;
}

.tdMontoPactadoIsapre input {
    float: left;
    width: 80px;
    margin: 20px;
    margin-top: 4px;
    margin-bottom: 4px;
}

.panel-collapse .panel-heading:before {

    font-size: 20px;
}

.table-resumen-datos-entrada {
    font-size: 10px;
}

header {
    z-index: 200 ! important;
    height: 40px !important;
}

#header .select2-choice {
    background-color: rgba(255, 255, 255, .2); /*0099C6 */
    font-size: 14px !important;
}

#header.corp-color .select2-choice {
    background-color: rgba(255, 255, 255, .2);
    height: 30px;
    border-radius: 2px;
    min-width: 140px;
}

ul.actions-list {
    background: #fff;
    box-shadow: 0 1px 7px rgba(0, 0, 0, .12);
    border-radius: 0 8px 8px 8px;
    padding-left: 0;
    list-style: none;
    overflow: hidden;
    position: absolute;
    top: 30px;
    z-index: 800;
}

.actions-list li {
    padding: 5px 10px;
    color: var(--text-color);
}

.actions-list li:hover {
    background-color: rgba(0, 0, 0, .03);
}

.actions-wrapper .actions-list {
    display: none;
}

.actions-wrapper {
    position: relative;
}

.actions-wrapper.active .actions-list {
    display: block;
}

/* select2 start - homologación */
/* =================================================== */

/* .select2-choice {
  background-color: #2196F3 !important;
  border: none !important;
  border-radius: 0px !important;
  color: white !important;
  font-size: 15px !important;
  font-weight: 500 !important;
} */


/* .select2-arrow {
  color: white !important;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

/* .select2-arrow:focus {
  color: #1976d2;
}


.select2-arrow {
  color: #9e9e9e !important;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.select2-arrow b {
  background:none !important;
  display: block;
  margin-top: 50%;
}

.select2-arrow b::before {
  content: "\f0d7";
} */


/* homologación: Select2 start*/
/* ========================================================== */

/* Texto del select */
.select2-container .select2-choice {
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0px;
    transition: all .2s;
    font-size: 15px !important;
    box-shadow: none !important;
    color: var(--haunter-purple) !important;
    max-width: 350px;
}

.select2-container .select2-choice:hover {
    border-bottom: 1px solid var(--text-color);
}

.select2-results .select2-result-selectable:before {
    opacity: .12;
}
.select2-results .select2-highlighted:before {
    opacity: .12;
}

.select2-results .select2-highlighted {
    border-bottom: 1px solid var(--text-color) !important;
    background-color: #E3E3E3 !important;
    color: var(--haunter-purple) !important;
}

.select2-container .select2-choice:focus, .select2-container .select2-choice:active {
    border: none !important;
    border-bottom: 2px solid var(--haunter-purple) !important;
    border-radius: 0px !important;
}

/* arrow de los select2 */
.select2-arrow {
    color: var(--haunter-purple) !important;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.select2-arrow:focus {
    color: var(--haunter-purple);
}

.select2-arrow b {
    background: none !important;
    display: block;
    margin-top: 50%;
}

.select2-arrow b::before {
    content: "\f0d7";
    font-family: FontAwesome;
}

/* DROPDOWN */
/* caja dropdown */
div#select2-drop {
    box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
    font-size: 15px;
    line-height: 20px;
    padding: 8px 0 0 0;
    border: 0px !important;
    min-width: 200px !important;
}

.select2-drop-active {
    border: 0px;
    border-radius: 0px;
    box-shadow: 0 -16px -24px -2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
}

.select2-dropdown-open.select2-drop-above .select2-choice {
    border: none;
    border-radius: 0px;
    border-bottom: 2px solid #1976d2;
    margin: 0px;
}

.select2-dropdown-open.select2-drop-above [class^="select2-choice"] {
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
}

/* Input del buscador dentro del dropdown */
.select2-search .select2-input {
    font-weight: 400;
    background: white;
    border: none;
    border-radius: 0px;
    margin-bottom: 10px;
    box-shadow: none;
    border-bottom: 1px solid #9e9e9e;
    transition: all .2s;
    color: black;
    font-size: 16px;
}

.select2-search .select2-input:hover {
    border-bottom: 1px solid #000;
}

.select2-search .select2-input:focus {
    border-bottom: 2px solid var(--haunter-purple);
    font-weight: 400;
    color: #000;
}


/* items del dropdown*/
.select2-results {
    max-height: 200px;
    padding: 0;
    margin: 0;
}


.select2-results li {
    margin-bottom: 8px;
    padding: 0 16px;
}

.select2-drop.select2-drop-above {
    border-radius: 0;
    border-top: none;
}


/* boton group select2 de los acordeones fragment.html */

#selector_grupo {
    background-color: #03a9f4;
    height: 30px;
    font-size: 13px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    color: rgba(255, 255, 255, .84);
    font-weight: 400;
    border-radius: 2px !important;
    border: none !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;
    /* width: 100px; */
}


/* REPORTES PERSONALIZADOS */
/* Select con categorias dentro del dropdown 1er tab */
li .select2-results-dept-1 .select2-result-label {
    padding-left: 8px;
    color: black;
}

li .select2-results-dept-1 .select2-result-label:hover {
    font-weight: 700;
    color: #1976d2;
}

.select-large-width {
    min-width: 150px;
    max-width: none !important;
}


/* .form-persona-edit .select2-container-multi{
  min-width: 300px;
} */


/* #s2id_selector_grupo .select2-choice .select2-chosen {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #fff;
} */

/*
#s2id_selector_grupo #select2-chosen-2{
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 13px!important;
  margin-top: 3px;
  /* color: rgba(255,255,255,.84)!important;
  color: red!important;
} */

/* #s2id_selector_grupo .select2-chosen {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 13px!important;
  margin-top: 3px;
  color: red!important;
} */


#header .select2-choice {
    color: white;
    border: none;
    font-weight: 500;
    font-size: 16px !important;
    min-width: 100px;
    max-width: 300px;
}

#header .select2-choice .select2-arrow {
    color: white;
}


/* .btn-info:not(.btn-link):not(.btn-flat) */


/* Select acordeon */
/* #selector_grupo .select2 {
  color: blueviolet;
} */

/* =================================================== */
/* select2 end- hmologación */

#s2id_id_empresa-apvMoneda {
    width: 140px;
}

#s2id_id_empresa-apvCuentaDosMoneda, #s2id_id_empresa-depositoConvenidoMoneda {
    width: 210px;
}

.card {
    border-radius: var(--card-radius);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.card-light {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

/* Login */

#l-login {
    z-index: 100;
    padding: 30px;
}

#l-login input {
    padding: 3px;
    border: solid 1px #999;
}

/* recuperar contraseña*/
@media screen and (max-width: 768px) {

}

@media print {
    a[href]:after {
        content: ""
    }

    .informe_liquidaciones {
        size: 10px;
        font-size: 10px;
    }

    table tbody tr {
        page-break-inside: avoid;
    }
}

.ficha-flecha {
    z-index: 180;
    opacity: 0;
    border-radius: 10px;
    font-size: 40px;
    padding-top: 12px;
    padding-left: 20px;
    position: fixed;
    top: 50%;
    background-color: #000;
    width: 80px;
    height: 80px;
    color: #fff;
    transition: all 0.5s ease;
}

.ficha-flecha:hover {
    opacity: 1;
    transform: scale(1.2);
}

.ficha-flecha-izquierda {
    left: 1px;
}

.ficha-flecha-derecha {
    right: 1px;
}

a.balloonYaProcesada i {
    font-size: 18px;
    padding: 2px;
}

.danger a.balloonYaProcesada i {
    color: red !important;

}

.ficha_historial_detalle tr td {
    padding: 4px;
}

.panelCarpetaTrabajador table a.btn {
    margin-top: -5px;
}

#modalPreview table.table tr td, #modalPreview table.table tr th {
    padding-bottom: 8px;
}

#listaOtrosContratos .contrato {
    line-height: 32px;
    width: 100%;
    background-color: #eeeeee;
    margin: 6px;
    padding: 5px;
    list-style: none;
}

#listaOtrosContratos .contrato i {
    margin-left: 15px;
}

#listaOtrosContratos .contrato a {
    display: block;
    text-align: right;
}

.panelContratos h2 {
    margin-top: -8px;
}

#s2id_id_centroCosto {
    min-width: 200px;
    width: 100%;
}

.top-menu {
    padding-right: 10px;

}

a.tm-invoices {
    color: #fff;
    font-size: 28px;
    font-weight: 800;
    top: -5px;
    padding: 2px 5px 0px 5px;
}

a.tm-onboarding-tasks {
    color: #fff;
    font-size: 28px;
    font-weight: 800;
    top: -2px;
    padding: 2px 5px 0px 5px;
}

.top-menu > li > a {
    height: 30px;
    min-width: 40px;
    text-align: center;
}

.tm-invoices .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 13px;
    line-height: 1.42857143;
    border-radius: 2px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.tm-onboarding-tasks .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 13px;
    line-height: 1.42857143;
    border-radius: 2px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

a.btn.btn-logout.waves-effect {
    background-color: #c1c1c1;
    color: #fff;
    display: inline-block;
    text-align: center;
    padding: 11px 12px;
font-size: 13px;
text-transform: uppercase;

}

a.btn.btn-logout.waves-effect:hover {
    background-color: #696868 !important;
    color: #fff;

}

.col-xs-12.logout {
    padding-bottom: 15px;
}

.top-menu > li .dropdown-menu-lg .lv-body {
    min-height: auto;
    overflow-x: hidden;
}

.lg-header {
    text-align: center;
    padding: 15px 10px 13px;
    line-height: 100%;
    border-bottom: 1px solid #F0F0F0;
    color: #4C4C4C;
    margin-bottom: 10px;
}

.lg-header {
    font-weight: 500;
    text-transform: uppercase;
}

.balloon-txt-balance {
    text-transform: uppercase;
}

.balloon-num-balance {
    text-transform: uppercase;
    margin-left: 0px;
    text-align: right;
}

.no-margin-top {
    margin-top: 0px !important;

}

.no-padding-top {
    padding-top: 0px !important;
}

.lv-body .lgi-img {
    border-radius: 50%;
}

.total-row {
    padding-top: 5px;
    border-top: 1px solid #eee;
    margin-top: 5px;
}

.btn-pagar {
    margin-left: 0px;
    margin-right: 0px;
    float: right;
}

.listview .lv-header {
    border-bottom: none;
    vertical-align: middle;
    margin-top: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0px;
}

small.lgi-text {
    text-transform: uppercase;
    font-weight: 600;
}

a.btn.btn-default.btn-sm.m-t-0.waves-effect {
    box-shadow: none;
}

.btn-cerrar-mes {
    padding-top: 2px;
    color: var(--haunter-purple) !important;
    text-decoration: underline !important;
    padding: 0px;
}

.btn-cerrar-mes:hover {
    font-weight: 900;

}

/* AAAA */

/* body{
  font-family: 'Roboto', sans-serif !important;
} */
.pre-main {
    padding-top: 5px;
    padding-bottom: 3px;
}

.tm-invoices i.tmn-counts {
    top: 5px !important;
}

.tm-onboarding-tasks i.tmn-counts {
    top: 2px !important;
}

.box-air {
    padding-left: 30px;
    padding-right: 30px;
}

.select2-search .select2-input {
    font-weight: 400;
}

.eula {
    top: 0;
    position: absolute;
    width: 100%;
    left: 0px;
    margin-left: -100px;
}

.eula aside#sidebar {
    left: 0px;
    position: fixed;
    top: 50px;
}

.eula .card-body {
    position: relative;
    max-height: calc(100vh - 250px);
    overflow: scroll;
}

.eula .card-footer {
    border-top: 1px solid #ccc;

}

.eula .card-padding p {
    width: 90%;
}

.eula .eula-title {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: solid 2px #399BEF;
    padding-bottom: 5px;
    width: 95%;
}

.eula .upper-bold {
    text-transform: uppercase;
    font-weight: bold;
}

.eula .indent {
    padding-left: 50px;

}

.eula p.pie-1 {
    margin-left: 20px;
}

.eula p.pie-descripcion {
    margin-left: -40px;
}

.eula .under-line {
    text-decoration: underline;
}

.eula .eula-subtitle {
    padding-top: 10px;
    padding-bottom: 10px;
}

.eula .eula-content {
    padding-left: 400px;
    position: absolute;
    float: left;
    width: 100%;
    top: 80px;
}

.eula .navbar.navbar {
    background-color: transparent;
}

.talana-eula-logo {
    position: absolute;
    top: 5px;
    left: 120px;
}

.eula li > a:hover, .eula li > a:focus, .eula li.active a {
    background-color: #399BEF;
    color: #fff;
}

.eula .card-header {
    color: var(--haunter-purple);
    border-bottom: 1px solid var(--talana-gray-light);
    font-size: 24px;
}

.eula .navbar {
    background-color: transparent;
}

.eula .nav {
    background-color: transparent;

}

.eula .main-menu > li a {
    padding: 5px 20px 5px 20px;
    font-size: 12px;
    text-transform: capitalize !important;
}

.eula .btn-continuar {
    margin-left: 20px;
    text-transform: none;
    font-weight: bold;
    color: #ffffff;
    position: static !important;
    background-color: var(--talana-green) !important;
}

.eula .btn-continuar:hover {
    background-color: #2c6a62 !important;

}

.eula #acepto-terminos {
    margin-right: 0px !important;
    padding-top: 0px;


}

.checkbox label {
    padding-right: 15px;
}

#sidebarEula {
    position: fixed;
    top: 80px;
    height: calc(100% - 5px);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 5;
    width: 250px;
    overflow: hidden;
    opacity: 1;
    filter: alpha(opacity=1);
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    overflow: visible;
    width: 250px !important;
    margin-left: 0px;
    left: 0px;
}

/* modulo administración de empresas */
#administracion-empresa .card-header {
    background-color: #3F51B5;
}

#administracion-empresa i.fa {
    font-size: 24px;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
    background-color: #3F51B5;
}

#administracion-empresa .lv-title {
    padding-top: 14px !important;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#administracion-empresa a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#administracion-empresa .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#administracion-empresa .big-round-icon i.fa {
    background-color: #3F51B5;
    opacity: 0.6;
    /* material transition */
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

#administracion-empresa a:hover .big-round-icon i.fa {
    background-color: #3F51B5;
    opacity: 1;
}

#administracion-empresa i.mdi {
    font-size: 24px;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
    background-color: #3F51B5;
}

#administracion-empresa .big-round-icon i.mdi {
    /*background-color: #3F51B5;*/
    background-color: #3F51B5;
    opacity: 0.6;
    /* material transition */
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

#administracion-empresa a:hover .big-round-icon i.mdi {
    background-color: #3F51B5;
    opacity: 1;
}


/* módulo herramientas-internas*/

.herramientas-internas .card-header {
    background-color: #FF5722;
}

.herramientas-internas i.fa {
    font-size: 24px;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
    background-color: #FF5722;
}

.herramientas-internas .lv-title {
    padding-top: 14px !important;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

.herramientas-internas a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

.herramientas-internas .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

.herramientas-internas .big-round-icon i.fa {
    background-color: #FF5722;
    opacity: 0.6;
    /* material transition */
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

.herramientas-internas a:hover .big-round-icon i.fa {
    background-color: #FF5722;
    opacity: 1;
}

.herramientas-internas i.mdi {
    font-size: 24px;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 11px;
    text-align: center;
    background-color: #FF5722;
}

.herramientas-internas .big-round-icon i.mdi {
    background-color: #FF5722;
    opacity: 0.6;
    /* material transition */
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

.herramientas-internas a:hover .big-round-icon i.zmdi {
    background-color: #FF5722;
    opacity: 1;
}

.herramientas-internas i.zmdi {
    font-size: 24px;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
    background-color: #FF5722;
}

.herramientas-internas .big-round-icon i.zmdi {
    background-color: #FF5722;
    opacity: 0.6;
    /* material transition */
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

.herramientas-internas a:hover .big-round-icon i.zmdi {
    background-color: #FF5722;
    opacity: 1;
}


/*SIDEBAR CSS*/
#sidebar {
    position: fixed;
    background: #fff;
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.38);
    top: 42px;
    height: calc(100% - 5px);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 5;
    width: 250px;
    /*overflow: hidden;*/
    opacity: 1;
    filter: alpha(opacity=1);
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    z-index: 5;
}

#sidebar .sidebar-inner {
    height: 100%;
    overflow-y: auto;
    /*overflow-x: hidden;*/
    width: 250px;
}

#sidebar.toggled {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
    filter: alpha(opacity=100);
}

/*#sidebar-block{
  background: #fff;
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.38);
  margin-top: 0px;
  /*height: calc(100% - 65px);*/
/*height: 100%;
width:205px;

}*/


#sidebar.collapsed {
    width: 50px;
    position: fixed;
    height: calc(100% - 5px);
}

/*#sidebar.collapsed:hover{
  width: 268px;
}*/

.main-menu > li > a {
    padding: 12px 20px 12px 52px;
}

.main-menu .collapse-aside {
    font-size: 10px;
    height: 30px;
    padding-top: 0px;
    margin-top: 0px;
    text-align: right;

}

.main-menu .collapsed-aside {
    font-size: 10px;
    height: 30px;
    padding-top: 0px;
    /* margin-top: 37px; */
    margin-top: 0px;
    text-align: left;
}

.main-menu .collapse-aside a {
    color: #989898;
    font-weight: 900;
}

.main-menu > li.collapse-aside > a:before {
    content: "\f2fa";
    color: #aaa;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}

.main-menu > li.collapse-aside > a:before {

    position: absolute;
    top: 3px;
    font-family: 'Material-Design-Iconic-Font';
    font-size: 25px;
    right: 6px;
}

/* PARA COLAPSAR aside */

.main-menu > li.collapsed-aside > a:before {
    content: "\f2fb";
    color: #aaa;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}

.main-menu > li.collapsed-aside > a:before {
    position: absolute;
    top: 0px;

    font-family: 'Material-Design-Iconic-Font';
    font-size: 25px;
    left: 20px;
}


.main-menu i.zmdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 15px;
    padding-top: 7px;
    /*background-color: red;*/

}

.main-menu i.mdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 15px;
    padding-top: 2px;
    /*background-color: red;*/

}

.main-menu i.zmdi.zmdi-apps {
    background-color: #673AB7;
}

.main-menu i.mdi.mdi-apps {
    background-color: #673AB7;
}

.main-menu i.zmdi.zmdi-accounts {
    background-color: #FF9800;
}

.main-menu i.mdi.mdi-account-multiple {
    background-color: #FF9800;
}

.main-menu i.mdi.mdi-transfer {
    background-color: #795548;
}

.main-menu i.zmdi.zmdi-city-alt {
    background-color: #03A9F4;

}

.main-menu i.mdi.mdi-domain {
    background-color: #03A9F4;

}

.main-menu i.zmdi.zmdi-play {
    background-color: #3F51B5;
}

.main-menu i.mdi.mdi-play {
    background-color: #3F51B5;
}

.main-menu i.zmdi.zmdi-format-list-bulleted {
    background-color: #4CAF50;
}

.main-menu i.mdi.mdi-format-list-bulleted {
    background-color: #4CAF50;
}

.main-menu i.mdi.mdi-chart-gantt {
    background-color: #E04B2A;
}

.main-menu i.mdi.mdi-view-dashboard {
    background-color: #FFC107;
}

.main-menu i.zmdi.zmdi-sun {
    background-color: #FFC107;
}

.main-menu i.mdi.mdi-timelapse {
    background-color: #FFC107;
}

.main-menu i.mdi.mdi-white-balance-sunny {
    background-color: #FFC107;
}

.main-menu i.zmdi.zmdi-book-image {
    background-color: #009688;
}

.main-menu i.mdi.mdi-file-chart {
    background-color: #009688;
}

.main-menu i.zmdi.zmdi-calendar {
    background-color: #E91E63;
}

.main-menu i.mdi.mdi-calendar {
    background-color: #E91E63;
}

.main-menu i.zmdi.zmdi-card-travel {
    background-color: #825243;
}

.main-menu i.zmdi.zmdi-settings {
    background-color: #9E9E9E;
}

.main-menu i.mdi.mdi-settings {
    background-color: #9E9E9E;
}

.main-menu i.mdi.mdi-briefcase {
    background-color: #805244;
}

.main-menu i.mdi.mdi-elevator {
    background-color: #00BCD4;
    border-radius: 0px;

}

/* .main-menu i.mdi.mdi-earth{
  background-color: #000000;
  border-radius: 0px;
} */
.main-menu i.mdi.mdi-key {
    background-color: #607D8B;

}

.main-menu i.mdi.mdi-cellphone-iphone {
    background-color: #AD00B3;


}

/*SIDEBAR ASISTENCIA*/

#aside-asistencia .main-menu i.zmdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 50%;
    /*padding-top: 7px;*/

}

#aside-asistencia .main-menu li a i.mdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: white;
    /* border-radius: 0px; */
    padding-top: 2px;
    line-height: 25px;
    /*background-color: red;*/

}

#aside-asistencia .main-menu i.zmdi.zmdi-code {
    background-color: black;
}

#aside-asistencia .main-menu i.zmdi.zmdi-calendar {
    background-color: #E91E63;
}

#aside-asistencia > ul > li:last-child a {
    padding-top: 15px;
}

#aside-asistencia i.zmdi.zmdi-flip {
    background-color: #00BCD4;
    border-radius: 15px;
}

#aside-asistencia i.mdi.mdi-elevator {
    background-color: #00BCD4;
    border-radius: 15px;
}

#aside-asistencia i.mdi.mdi-account-multiple-plus {
    background-color: #03A9F4;
}

i.zmdi.zmdi-flip {
    background-color: #00BCD4;
    border-radius: 0px;
}

/* landing carga de datos________________________________________________ */

#landing-carga-de-datos {

}

#landing-carga-de-datos .card-header {
    /*background-color: #334BBC !important;*/

}

#landing-carga-de-datos i.fa {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#landing-carga-de-datos i.zmdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
}

#landing-carga-de-datos i.mdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
}


#landing-carga-de-datos .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#landing-carga-de-datos a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    /*padding-top: 5px;*/
}

#landing-carga-de-datos .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}


#landing-carga-de-datos .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

#landing-carga-de-datos a:hover .big-round-icon i.ico-haberes-descuentos {
    background-color: #ccc;
    opacity: 1;
}

#landing-carga-de-datos a:hover .big-round-icon i.ico-ausentismos {
    background-color: #ccc;
    opacity: 1;
}

#landing-carga-de-datos a:hover .big-round-icon i.ico-carga-otros {
    background-color: #ccc;
    opacity: 1;
}

#landing-carga-de-datos i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#landing-carga-de-datos i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-right: 16px;
    padding-top: 15px;
    font-weight: bold;
    color: #334BBC !important;

}

#landing-carga-de-datos i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#landing-carga-de-datos .lv-title.title-stacked {
    margin-top: 26px;
}

#landing-carga-de-datos #botonera-haberes-descuentos i.ico-haberes-descuentos {
    background-color: #3f51b5;
}

#landing-carga-de-datos #botonera-ausentismos i.ico-ausentismos {
    background-color: #9c27b0;
}

#landing-carga-de-datos #botonera-carga-otros i.ico-carga-otros {
    background-color: #4caf50;
}

/* Landing otros cargadores masivos*/
#landing-cargadores-masivos i.fa {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#landing-cargadores-masivos i.zmdi {

}

#landing-cargadores-masivos i.mdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
}

#landing-cargadores-masivos .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#landing-cargadores-masivos a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
}


#landing-cargadores-masivos .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#landing-cargadores-masivos a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
}

#landing-cargadores-masivos .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#landing-cargadores-masivos .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}


#landing-cargadores-masivos a:hover .big-round-icon i.ico-carga-masiva {
    background-color: #ccc;
    opacity: 1;
}

#landing-cargadores-masivos i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#landing-cargadores-masivos i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 8px;
    margin-right: 20px;
    padding-top: 15px;
    font-weight: bold;
    color: #367b39 !important;
}

#landing-cargadores-masivos i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#landing-cargadores-masivos .lv-title.title-stacked {
    margin-top: 26px;
}

#landing-cargadores-masivos #botonera-cargadores-masivos i.ico-carga-masiva {
    background-color: #4caf50;
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 17px;
    text-align: center;
}

#landing-cargadores-masivos #botonera-cargadores-masivos i.ico-carga-masiva.mdi {
    padding-top: 12px;
}

.card .card-header h2.simple-header-with-btn {
    margin-top: 19px;
}

/*   panel agregar personas    */
#acordeonAgregarPersonas .modal-header {
    padding-bottom: 5px;
}

#acordeonAgregarPersonas .hideAlign {
    padding-top: 31px;
    margin-left: -15px;
    font-size: 12px;
}

#acordeonAgregarPersonas #toggleAgregarAvanzadas {
    padding-top: 16px;

}

#acordeonAgregarPersonas #toggleAgregarAvanzadas .btn-group {
    display: block;
    float: left;
    margin: 5px;

}

a.btn.btn-primary.waves-effect.btn-opciones-avanzadas {
    margin-top: 0;
}

/* colores material admin */

.main-menu i.zmdi.zmdi-apps {
    background-color: #673AB7;
}

.main-menu i.zmdi.zmdi-accounts {
    background-color: #FF9800;
}

.main-menu i.zmdi.zmdi-city-alt {
    background-color: #03A9F4;
}

.main-menu i.zmdi.zmdi-play {
    background-color: #3F51B5;
}

.main-menu i.zmdi.zmdi-format-list-bulleted {
    background-color: #4CAF50;
}

.main-menu i.zmdi.zmdi-sun {
    background-color: #FFC107;
}

.main-menu i.zmdi.zmdi-book-image {
    background-color: #009688;
}

.main-menu i.zmdi.zmdi-calendar {
    background-color: #E91E63;
}

.main-menu i.zmdi.zmdi-settings {
    background-color: #9E9E9E;
}

.main-menu i.zmdi.zmdi-smartphone-iphone {
    background-color: #9C27B0;
}

.main-menu i.zmdi.zmdi-key {
    background-color: #607D8B;
}

/* login */
#background_mask {
    background: #0e83cd;
    -webkit-opacity: 0.6;
    -moz-opacity: 0.6;
    opacity: 0.6;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

#background {
    width: 100%;
    height: 100%;
    position: fixed;
    float: left;
    top: 0%;
    left: 0%;
}


.backstretch {
    opacity: 1;
}

.logo-login {
    width: 100%;
    margin-bottom: 40px;
}

.logo-login img {
    /*width: 100%;*/
    width: 550px;
    /*max-width: 95%;*/
    margin: 0 auto;
}

h4.title-login {
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin: auto;
    margin-top: 30px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.50);
    padding-left: 25px;
}

#l-login {
    background-color: #2196F3;
    border: 2px solid #FFC107;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    border-radius: 3px;
}

#l-login .input-group .zmdi {
    color: #FFC107;
}

button.btn.btn-login.btn-primary {
    background-color: #FFC107 !important;
}

.btn-login .zmdi {
    color: #2196F3 !important;
    font-size: 18px;
}

a.olvide-pass {
    color: #ffffff;
    text-decoration: underline;
    padding-top: 15px;
}

#l-login input {
    color: #9E9E9E;
}

/*olvido contraseña*/
div#l-login h2 {
    margin-top: 10px;
    color: white;
    font-weight: bold;
}

#l-login ul.errorlist {
    list-style: none;
}

#l-login ul.errorlist li {
    color: #FFC107;
    text-align: center;
    font-weight: bold;
}

#l-login ul.errorlist li:before {
    font-family: 'Material-Design-Iconic-Font';
    content: '\f1f4';
    padding-right: 5px;
}

#l-login p label {
    color: white;
    text-transform: uppercase;
    margin-top: 20px;
}

#l-login form *:last-child input {
    /* color: #9E9E9E; */
    padding: 10px !important;
    background-color: #FFC107;
    color: #2196F3 !important;
}

@media screen and (max-width: 768px) {
    .login-content {
        overflow: initial;
        height: 100%;
        padding-top: 33px;
    }

    h4.title-login {
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
        margin: auto;
        margin-top: 30px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.50);
        padding-left: 25px;
    }

    .logo-login {
        width: 100%;
        margin-bottom: 20px;
    }

    .logo-login img {
        /*width: 100%;*/
        width: 400px;
        /*max-width: 95%;*/
        margin: 0 auto;
    }


}

/*fin @media para contraseña*/
/*sweet alert*/
.swal2-modal {
  font-family: var(--font-family) !important;
}

.swal2-modal.linqTalana.swal2-show .swal2-content {
    font-weight: 400;
}

.linqTalana h2#modalTitleId {
    padding-top: 20px;
    color: #7dcee6;
}

/* indexMobile.html  *********************                */
#panel-round-btn {

}

#panel-round-btn .card-header {
    /*background-color: #334BBC !important;*/

}

#panel-round-btn i.fa {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#panel-round-btn i.zmdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
}

#panel-round-btn i.mdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
}

#panel-round-btn .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#panel-round-btn a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    /*padding-top: 5px;*/
}


#panel-round-btn .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#panel-round-btn a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    /*padding-top: 5px;*/
}

#panel-round-btn .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#panel-round-btn .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

#panel-round-btn a:hover .big-round-icon i.ico-haberes-descuentos {
    background-color: #ccc;
    opacity: 1;
}

#panel-round-btn a:hover .big-round-icon i.ico-purple {
    background-color: #ccc;
    opacity: 1;
}

#panel-round-btn a:hover .big-round-icon i.ico-carga-otros {
    background-color: #ccc;
    opacity: 1;
}

#panel-round-btn i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#panel-round-btn i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-right: 16px;
    padding-top: 15px;
    font-weight: bold;
    color: #334BBC !important;

}

#panel-round-btn i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#panel-round-btn .lv-title.title-stacked {
    margin-top: 26px;
}


#panel-round-btn #botonera-haberes-descuentos i.ico-indigo {
    background-color: #3f51b5;
}

#panel-round-btn #botonera-purple i.ico-purple {
    background-color: #9c27b0;
}

#panel-round-btn #botonera-carga-otros i.ico-green {
    background-color: #4caf50;
}

#panel-reminder-photo {
    min-height: 300px;
}

#panel-reminder-photo .card-header {
    /*padding: 25px 27px 9px 27px;*/
    /*background-color: #f7f7f7;*/
}

#panel-reminder-photo .card-body {
    padding-left: 0px;
    padding-right: 0px;

}

#panel-reminder-photo .list-group .list-group-item {
    border: 0;
    margin: 0;
    padding: 15px 23px;
}

#panel-reminder-photo .list-group .list-group-item:hover {
    background-color: #f7f7f7;
}

#panel-reminder-photo .list-group-item:first-child {
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
}

#panel-reminder-photo .media-heading, #panel-reminder-photo .media:first-child, #panel-reminder-photo .panel-title {
    margin-top: 0;
}

#panel-reminder-photo a.list-group-item, #panel-reminder-photo button.list-group-item {
    color: #555;
}

#panel-reminder-photo .media {
    overflow: visible;
}

#panel-reminder-photo .lgi-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

#panel-reminder-photo .lgi-subheading {
    color: #AEAEAE;
}

#panel-reminder-photo .lgi-heading {
    font-weight: bold;
}

#panel-reminder-photo .lgi-text {
    font-weight: normal;
    text-transform: inherit;
}

/* postListMobile.html  **************************                */

#postListMobileContainer {
}

#postListMobileContainer .bottomDataTable {
    /*display: flex;*/
}

#postListMobileContainer .select2-choice {
    font-size: 13px !important;
    max-width: 130px;
    min-width: 110px;
}

#postMobileContainer .post-settings {
    border-left: 1px solid #ccc;
}

/*   panel agregar personas    */
#acordeonAgregarPersonas .modal-header {
    padding-bottom: 5px;
}

.card .card-header.ch-alt:not([class*="bgm-"]) {
    background-color: #f7f7f7;
}

/* iconos landing gestion de asistencia ************** */
#mark-main-content i.fa.ico-btn-dashboardMarcas {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#mark-main-content i.zmdi.ico-btn-dashboardMarcas {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;

}

#mark-main-content i.mdi.ico-btn-dashboardMarcas {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
    cursor: pointer;
}

#mark-main-content .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#mark-main-content a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#mark-main-content a.lv-item.col-sm-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#mark-main-content .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#mark-main-content .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}


#mark-main-content a:hover .big-round-icon i.ico-btn-dashboardMarcas {
    background-color: #ccc;
    opacity: 1;
}

#mark-main-content i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#mark-main-content i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 8px;
    margin-right: 20px;
    padding-top: 15px;
    font-weight: bold;
    color: #367b39 !important;
}

#mark-main-content i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#mark-main-content .lv-title.title-stacked {
    margin-top: 26px;
}

#mark-main-content #botonera-landing-dashboardMarcas i.ico-btn-dashboardMarcas {
    background-color: #ffc107;

}

/*fin iconos landing asignación de tunos*/


/* iconos landing gestion de asistencia ************** */
#assignment-dashboard-main-content i.fa {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#assignment-dashboard-main-content i.zmdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;

}

#assignment-dashboard-main-content i.mdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
}

#assignment-dashboard-main-content .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#assignment-dashboard-main-content a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#assignment-dashboard-main-content a.lv-item.col-sm-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#assignment-dashboard-main-content .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#assignment-dashboard-main-content .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}


#assignment-dashboard-main-content a:hover .big-round-icon i.ico-btn-asignacion {
    background-color: #ccc;
    opacity: 1;
}

#assignment-dashboard-main-content i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#assignment-dashboard-main-content i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 8px;
    margin-right: 20px;
    padding-top: 15px;
    font-weight: bold;
    color: #367b39 !important;
}

#assignment-dashboard-main-content i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#assignment-dashboard-main-content .lv-title.title-stacked {
    margin-top: 26px;
}

#assignment-dashboard-main-content #botonera-landing-asignaciones i.ico-btn-asignacion {
    background-color: #2196f3;

}

/*fin iconos landing asignación de tunos*/

/* iconos landing creacion de turnos ************** */
#workshift-dashboard-main-content i.fa {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;
}

#workshift-dashboard-main-content i.zmdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 19px;
    text-align: center;

}

#workshift-dashboard-main-content i.mdi {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 30px;
    padding-top: 18px;
    text-align: center;
}

#workshift-dashboard-main-content .lv-title {
    padding-top: 14px;
    font-size: 13px;
    color: #4D4D4D;
    text-align: center;
    font-weight: bold;
}

#workshift-dashboard-main-content a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#workshift-dashboard-main-content a.lv-item.col-sm-4 {
    display: block;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
}

#workshift-dashboard-main-content .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}

#workshift-dashboard-main-content .big-round-icon i.ico-base {
    font-size: 2em;
    background-color: #ccc;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}


#workshift-dashboard-main-content a:hover .big-round-icon i.ico-btn-asignacion {
    background-color: #ccc;
    opacity: 1;
}

#workshift-dashboard-main-content i.alineacion-stacked {
    display: block;
    margin-left: -9px;
    font-size: 1.6em !important;
    padding-top: 17px;
}

#workshift-dashboard-main-content i.small-ico-stacked-on-top {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 8px;
    margin-right: 20px;
    padding-top: 15px;
    font-weight: bold;
    color: #367b39 !important;
}

#workshift-dashboard-main-content i.small-ico-stacked-on-side {
    font-size: 1em;
    margin: 0 auto;
    padding-left: 3px;
    padding-top: 22px;
    color: #fff !important;

}

#workshift-dashboard-main-content .lv-title.title-stacked {
    margin-top: 26px;
}

#workshift-dashboard-main-content #botonera-landing-asignaciones i.ico-btn-asignacion {
    background-color: #e91e63;

}

/*fin iconos landing creacion de tunos*/


#modalNuevoContrato .unselectedRow {
    background-color: #fafafa;
    margin-left: 25px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

#modalNuevoContrato .unselectedRow label {
    opacity: 0.6;
}

#modalNuevoContrato .unselectedRow .alert {
    display: none;
}

#modalNuevoContrato .selectedRow .alert {
    display: block;
}

#modalNuevoContrato .altRow {
    margin-bottom: 5px;
    padding: 5px;
}

#modalNuevoContrato .selectedRow {
    background-color: #fff;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
}

/* home */
/*#evolucionAnualGrafico .legendColorBox > div  {
  border: none !important;
}
#comparacionMesAnteriorGrafico .legendColorBox > div  {
  border: none !important;
}
#comparacionAnoAnteriorGrafico .legendColorBox > div{
    border: none !important;
}
/*new dashboard */
#add-tl-item .add-tl-body textarea {
    color: #535353;
}

.z-depth-1-bottom {
    box-shadow: 0 2px 5px rgba(0, 0, 0, .16);
}

#header {
    background-color: var(--haunter-purple);
}


#sub-header {
    background: white;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    height: 40px;
    position: fixed;
    z-index: 10;
    width: 100%;
    left: 0;
    top: 40px;
    margin-bottom: 10px;
    -webkit-transition: all;
    -o-transition: all;
    transition: all;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
}

ul.sub-header-inner {
    list-style: none;
    font-size: var(--font-size-body);
    font-family: var(--font-family);
    padding: 0;
}
.talana-breadcrumbs-month {
    font-size: var(--font-size-table);
    font-family: var(--font-family);
}

.sub-header-inner li {
    display: inline-block;
    margin-right: 3px;
}

.sub-header-inner li a {
    text-transform: capitalize;
}

.sub-header-inner li a, .sub-header-inner li strong {
    color: var(--talana-gray-70);
    font-size: 14px;
}

#sidebar {
    top: 40px;
    z-index: 15;
}

.main-menu {
    margin: 0 !important;
}

.hi-menu {
    list-style: none;
    margin-right: 5px;
}

.hi-menu > li {
    display: inline-block;
    margin: 0 1px;
    vertical-align: top;
    min-width: 35px;
}

.hi-menu > li > a,
.hi-menu > li > a > i {
    color: #fff;
    display: block;
    text-align: center;
    z-index: 1;
    position: relative;
    -webkit-transition: background-color;
    -o-transition: background-color;
    transition: background-color;
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
    border-radius: 2px;
    cursor: pointer;
}

.toolbar-icon{
    width: 20px;
}

.hi-menu > li > a:hover {
    text-decoration: none;
    background-color: #00000025;
    border-radius: 2px;
}

.hi-menu > li > a:focus {
    color: rgb(0, 88, 114);
}

.hi-menu > li > a > .him-counts {
    position: absolute;
    font-style: normal;
    background: #ffc107;
    padding: 1px 5px;
    border-radius: 8px;
    right: 2px;
    top: 0px;
    font-size: 9px;
    line-height: 12px;
    color: rgb(0, 88, 114);
    font-weight: bold;
}

.hi-menu > li > a > .him-icon {
    font-size: 20px;
    line-height: 35px;
    margin: 0 auto;
}

.sub-header-inner {
    margin-top: 10px;
}

/* Hide default HTML checkbox */
.switch-ficha-beta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    padding: 8px 12px;
}
.switch-ficha-beta .toggle-switch .ts-helper:before {
    height: 18px;
    width: 18px;
    top: 2px;
    margin-left: 5px;
    background-color: white !important;
}

.switch-ficha-beta .toggle-switch .ts-helper {
    height: 22px !important;
    width: 45px !important;
    border-radius: 16px !important;
    margin-right: 0px !important;
}
.switch-ficha-beta .toggle-switch:not([data-ts-color]) input:not(:disabled):checked + .ts-helper {
    background:  var(--haunter-purple);
}

.switch-ficha-beta p {
    margin: 0px;
    color: #0A0716;
    font-style: normal;
    font-size: 13px;
    line-height: 16px;
    font-family: "Inter", sans-serif;
}

/* Rounded sliders */
#sub-header.expanded {
    width: calc(100% - 47px);
}

#sub-header {
    left: auto;
    right: 0;
    width: calc(100% - 250px);
    box-shadow: none;
    background: white;
}

#sub-header.scrolled {
    background: white;
}

#sub-header.scrolled {
    box-shadow: var(--headers-shadow);
}

.hi-menu > li > a,
.hi-menu > li > a > i {
    color: var(--brand-primary-color, var(--haunter-purple));
}

#sidebar:not(.with-filters) .sidebar-inner {
    overflow-x: hidden;
}

#sidebar {
    background: var(--brand-primary-color, var(--haunter-purple));
    top: 0;
    height: 100%;
    overflow-y: hidden;
}

.main-menu {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.mask-search-value {
    background: rgba(133, 103, 255, 0.32);
    color: #27273F;
    border-radius: 4px;
    padding: 4px 2px;
    display: inline-block;
}
#cliente-moroso .close-icon { 
    position: absolute;
    top: 0px;
    right: 12px;
    cursor: pointer;
}
#cliente-moroso {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 37px;
    background-color: #FFD000 !important;
    border-color: #FFD000 !important;
    z-index: 10000;
    color: #181818;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}


#cliente-moroso .talana-toast-alert-content-body a{
    color: #181818 !important;
    text-decoration: underline;
}

.main-section-moroso .main-menu{
    max-height: calc(100vh - 86px);
}

.main-section-moroso #sidebar{
    top: 37px;
    height: calc(100% - 37px);
}


#modal_banner_cobranza .modal-dialog,
#modal_moroso .modal-dialog {
    position:absolute;
    top:40% !important;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    -ms-transform: translate(-50%, -50%) !important;
    -webkit-transform: translate(-50%, -50%) !important;
    width:90%;
    max-width: 800px;
    height:80%;
    max-height: 540px;
}
#sidebar.collapsed {
    height: 100%;
}

#modal_banner_cobranza .btn,
#modal_moroso .btn{
    margin-top: 0;
    height: 31px;
    width: 109px;
    border-radius: 5px;
    background: #6344DD;
    color:  #fff;
    /* Auto Layout */
    text-transform: initial;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 0px 0px 12px;

}
#modal_banner_cobranza .modal-content,
#modal_moroso .modal-content{
    border-radius: 10px;
}
.modal-cobranza-text{
    height: 508px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
#modal_banner_cobranza h2,
#modal_moroso h2{
    font-family: Ubuntu, sans-serif;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: left;
    color: #000090;
    width: 301px;
}
#modal_banner_cobranza p,
#modal_moroso p{
    font-family: Ubuntu, sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    margin-bottom: 0;
    width: 301px;
}
#modal_banner_cobranza p.smaller,
#modal_moroso p.smaller{
    font-family: Ubuntu, sans-serif;
    font-size: 15px;
    line-height: 18px;
    text-align: left;

}
.modal .modal-body.modal-banner-body-cobranza{
    padding: 16px 15px;
    background-position: top left;
    background-size: contain;
    background-repeat: no-repeat;
    height: 540px;
    max-height: 100%;
}
.modal-banner-body-cobranza .close{
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 25px;
    padding: 10px;
    z-index: 300;
}

.modal-banner-body-cobranza .banner-back img{
    height: 540px;
    position: absolute;
    left: -99px;
    top: -40px;
}
#sidebar.collapsed .talana-brand-container a {
    padding: 15px;
    padding-left: 3px;
    padding-top: 26px;
}


#sidebar .talana-brand-logotipo {
    display: block;
}

#sidebar.collapsed .talana-brand-logotipo {
    display: none;
}

#sidebar .talana-brand-isotipo {
    display: none;
}

#sidebar.collapsed .talana-brand-isotipo {
    display: block;
    margin: 0 auto;
    max-width: 80%;
}

#sidebar.collapsed .main-menu > .talana-btn-hamburger,
#sidebar.collapsed .main-menu > .world-icon {
    display: block;
}

#sidebar li:nth-child(4) {
    margin-top: 15px;
}

#sidebar .main-menu > .talana-btn-hamburger {
    width: 50px;
}

#sidebar .main-menu > .world-icon a:hover {
    background: rgba(0, 0, 0, .1);

}

#sidebar:not(.collapsed) .main-menu > .world-icon a {
    padding: 6px 15px;
    background: rgba(0, 0, 0, .1);
    border-radius: 6px;
}

#sidebar.collapsed .main-menu > .world-icon:after {
    content: '';
    width: 30px;
    height: 1px;
    background: white;
    position: absolute;
    left: 10px;
    bottom: -10px;
}

#sidebar.collapsed .main-menu > .world-icon {
    display: none;
}

#sidebar.collapsed .main-menu > .world-icon .mdi.bgm-world-green:after {
    border: 2px solid var(--remuneraciones-color-lighter);
}

#sidebar.collapsed .main-menu > .world-icon a:hover .mdi.bgm-world-green:after {
    border: 2px solid var(--remuneraciones-color-light);
}

#sidebar.collapsed .main-menu > .world-icon a:hover {
    background: transparent;
}

#sidebar.collapsed .main-menu > .world-icon .mdi:after {
    content: '';
    width: 36px;
    height: 36px;
    border-radius: 50%;
    top: -3px;
    position: absolute;
    left: -3px;
}

#sidebar .main-menu > .world-icon .mdi.bgm-world-green {
    background: rgba(255, 255, 255, .9) !important;
    color: var(--remuneraciones-color);
}

#sidebar:not(.collapsed) .main-menu > .world-icon .mdi {
    display: none !important;
}

#sidebar .main-menu > .talana-btn-hamburger,
#sidebar .main-menu > .world-icon {
    display: inline-flex;
    color: white;
    margin: 0;
    vertical-align: middle;
}

#sidebar .main-menu > li > a {
    color: white;
    font-size: 14px;
}

#sidebar .main-menu > li > a:hover {
    color: var(--text-color);
    background-color: transparent;
    font-weight: 500;
}

#sidebar .main-menu > li.active {
    position: relative;
}

#sidebar .main-menu > li.active > a {
    background: none;
    color: var(--brand-primary-color);
}

#sidebar .main-menu > li.active:before {
    content: '';
    background-color: white;
    height: 90%;
    width: calc(100% - 4px);
    position: absolute;
    top: 6%;
    left: 4px;
    border-radius: 30px 0 0 30px;
}

#sidebar.collapsed .main-menu,
#sidebar.collapsed .sidebar-inner {
    width: 100% !important;
    transition: .5s all ease;
}

#sidebar a#btn-hamburger-open {
    width: 30px;
    height: 30px;
    padding: 0;
}

#sidebar.collapsed .main-menu > li {
    width: 100%;
    overflow: hidden;
    transition: .25s all ease;
}

#sidebar.collapsed .main-menu > li > a {
    width: 100%;
    padding-right: 0;
    color: transparent;
    white-space: nowrap;
    transition: .25s all ease;
}

#sidebar .main-menu > li {
    position: relative;
}

#sidebar .main-menu > li:hover:not(.active) a:before {
    transition: .25s all ease;
    background: rgba(0, 0, 0, .08);
    content: '';
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 4px;
    right: 4px;
    border-radius: 30px;
}

#sidebar .main-menu > li:hover:not(.active) > a {
    color: white;
}

#sidebar .main-menu > li.active > a:before {
    content: '';
    /* background-image: url(../img/esquina-top.svg); */
    background-size: 100%;
    height: 9px;
    width: 8px;
    position: absolute;
    top: -5px;
    right: -1px;
}

#sidebar .main-menu > li.active > a:after {
    content: '';
    /* background-image: url(../img/esquina-bottom.svg); */
    background-size: cover;
    height: 9px;
    width: 8px;
    position: absolute;
    bottom: -7px;
    right: 0px;
}

#sidebar .main-menu > li:not(.active) i.zmdi.zmdi-accounts {
    background: var(--bg-aside-icons) !important;
    color: var(--c-aside-icons);
    border-radius: 50% !important;
}

#sidebar .main-menu > li:not(.active) i.zmdi.zmdi-city-alt {
    background: var(--bg-aside-icons);
    color: var(--c-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-play {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-format-list-bulleted {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-lime {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-teal {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}


#sidebar .main-menu > li:not(.active) i.zmdi.zmdi-sun {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.zmdi.zmdi-book-image {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-transfer {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.zmdi.zmdi-settings {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons);
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-world-green {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-world-purple {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-pink,
#sidebar .main-menu > li:not(.active) .bgm-blue {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-account-multiple-plus {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-indigo {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-deeporange {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-sync {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-amber {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-file-chart {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-settings {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-world-blue {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}


#sidebar .main-menu > li:not(.active) .bgm-deeppurple-600 {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-pink-600 {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-blue-600 {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-amber-600 {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-world-amber {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-lime-600 {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-world-brown {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-world-cyan {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) .bgm-lightblue {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.mdi-apps {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-purple {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-green {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-red {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .main-menu > li:not(.active) i.mdi.bgm-deeporange {
    color: var(--c-aside-icons);
    background: var(--bg-aside-icons) !important;
}

#sidebar .talana-credits {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 250px;
    color: white;
    text-align: center;
    padding: 10px 0;
}

#sidebar .talana-credits .mdi {
    font-size: 14px !important;
    vertical-align: middle !important;
    color: white;
}

#sidebar .talana-credits-monster {
    max-height: 30px;
}

body #sidebar.collapsed {
    box-shadow: none;
}

.talana-brand-container a {
    padding: 15px;
}

.main-menu > .talana-brand-container > a {
    background: transparent;
    padding-left: 24px;
    margin-bottom: 12px;
}

.main-menu > .talana-btn-hamburger {
    margin-bottom: 15px;
}

.main-menu > .talana-btn-hamburger i.zmdi {
    padding: 0
}

.main-menu > .talana-brand-container:hover a:before,
.main-menu > .talana-btn-hamburger:hover a:before {
    display: none;
}

.main-menu > .talana-btn-hamburger:hover,
.main-menu > .talana-btn-hamburger > a:hover,
.main-menu > .talana-brand-container:hover,
.main-menu > .talana-brand-container > a:hover {
    background: transparent;
}

.talana-brand-container img {
    max-width: 100%;
    max-height: 46px;
}

#fintersContainer {
    background: rgb(251, 251, 251);
    border-radius: 6px;
    margin: 15px;
}

#sidebar .talana-credits {
    max-width: 100%;
    text-align: center;
    background: var(--brand-primary-darker-color ,var(--talana-blue-darker))
}

#sidebar:not(.collapsed) .talana-credits .talana-credits-monster {
    margin-right: 8px;
}

#sidebar.collapsed span {
    display: none;
}

/*==============================*/

#panelGerencial .chart-container {
    border: 1px solid #cccccc;
    border-radius: 6px;
    max-width: 100% !important;
    max-height: 500px !important;
    padding: 20px;
    margin-bottom: 20px;
}

#panelGerencial .chart-container-custom {
    border: 1px solid #cccccc;
    width: 100% !important;
    max-height: 600px;
    padding: 20px;
    margin-bottom: 20px;
}

#panelGerencial /*#treemap canvas {
  width: 100%;
  max-height: 450px;
}*/
#panelGerencial canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

#panelGerencial table > thead > tr > th {
    font-weight: 600 !important;
    font-size: 13px !important;
}

#panelGerencial table > tbody > tr > td {
    font-size: 12px !important;
}

#panelGerencial .mouseoverbox {
    border: 0;
    position: absolute;
    background-color: #111111;
    pointer-events: none;
    display: none;
    opacity: 0.9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

#panelGerencial .mouseoverbox p {
    margin: 0px 2px 0px 2px;
    padding: 5px;
    font-size: 0.9em;
    color: #ffffff;
}

#panelGerencial .workshift-data-container {
    width: 24%;
    height: 73px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
}

#panelGerencial .workshift-data-container .workshift-data-info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
}

#panelGerencial .workshift-data-container .workshift-data-info-container span:first-child {
    font-size: 1.5em;
}

#panelGerencial .workshift-data-container .workshift-data-info-container span.title-widget {
    font-size: 12px;
    color: #616161;
}

#panelGerencial .workshift-data-container i {
    background-color: white !important;
    font-size: 3em;
}

#panelGerencial .workshift-data-container:nth-child(1) {
    border-left: 5px solid #2196F3;
}

#panelGerencial .workshift-data-container:nth-child(1) i {
    color: #2196F3;
}

#panelGerencial .workshift-data-container:nth-child(2) {
    border-left: 5px solid #FF9800;
}

#panelGerencial .workshift-data-container:nth-child(2) i {
    color: #FF9800;
}

#panelGerencial .workshift-data-container:nth-child(3) {
    border-left: 5px solid #4CAF50;
}

#panelGerencial .workshift-data-container:nth-child(3) i {
    color: #4CAF50;
}

#panelGerencial .workshift-data-container:nth-child(4) {
    border-left: 5px solid #F44336;
}

#panelGerencial .workshift-data-container:nth-child(4) i {
    color: #F44336;
}

#panelGerencial .mini-charts-item-no-hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
    position: relative;
    margin-bottom: 25px;
}

tr:hover {
    background-color: #EDEDEE;
}

table.nothover tr:hover {
    background-color: inherit;
}

span.plantilla_activa {
    color: #03A9F4;
}

.text-gray {
    color: #333;
}

.text-green, .text-green:hover {
    color: #4caf50;
}

/*sidebarPanel*/

#error_container {
    display: none;
    margin-top: 20px;

}

#error_container h4 {
    text-align: left;
}

#error_mensaje {
    color: red;
    font-size: 16px;
    text-align: left;
}

#error_lineas {
    font-size: 12px;
    color: black;
    text-align: left;
    padding: 12px;
    background: rgb(250, 254, 174);
}

.sidebarPanel {
    background-color: white;

}

.sidebarPanel.right {
    top: 0;
    right: 0;
    bottom: 0;
    width: 700px;
    z-index: 999;
    /* background: #448AFF; */
}

.sidebars > .sidebarPanel {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.64);
    position: fixed;
    color: white;
    font-size: 2em;
    text-align: center;
}

.sidebarPanelHeader {
    background-color: #2d517c;

}

.sidebarPanelHeader {
    background-color: #2d517c;
    margin-top: -20px;
    width: 100%;
    height: 85px;
    display: block;
    clear: both;
}

.sidebarPanelHeader h4 {
    color: white;
    padding-top: 36px;
    text-align: left;
}

.sidebarPanelHeader a {
    color: white;
}

.sidebarPanelBody {
    padding: 30px;
}

.closePreviewPanel {
    margin-top: 39px;
}

iframe#preview_container {
    border: 1px #ccc solid;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .16), 0 2px 10px rgba(0, 0, 0, .12);


}

#field_cuerpo .ace_editor {
    height: 600px;
    width: 1000px;
}

.tags_disponibles {
    width: 280px;
    margin-top: 35px;


}

.tags_disponibles_head * {
    color: #5e5e5e;

}

.tags_disponibles_head {
    padding: 0px 10px 10px 10px;
}


.tags_disponibles_head p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 5px;
}

.listado_tags {
    height: 600px;
    overflow-y: auto;
    padding: 10px;
    width: 280px;
    border: 1px #ccc solid;
    font-size: 13px;
}

.listado_tags hr {
    margin-top: 3px;
    margin-bottom: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
}

.listado_tags strong {
    margin-bottom: 3px;
    padding-bottom: 3px;
    display: block;

}

.listado_tags small {
    margin-bottom: 3px;
    padding-bottom: 3px;
    display: block;

}

#selector_grupo {
    min-width: 150px;
}

.top-menu > li > a.tm-facturas {
    /* background-image: url(../img/icons/peso.png); */
}

.dropzone {
    min-height: 150px;
    border: 3px dashed #2392ec !important;
    /* background: #f1eeee; */
    padding: 20px 20px;
    font-size: 40px;
    border-radius: 15px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.dropzone:hover {

    background: #f1eeee !important;

}

/* CAMBIO DE MUNDO */
#main {
    margin-top: 15px;
    margin-bottom: 70px;
}

.talana-breadcrumbs {
    font-size: 14px;
    padding-left: 0px;
}

.talana-breadcrumbs-world {
    text-transform: uppercase;
}

.talana-breadcrumbs i.zmdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 15px;
    padding-top: 7px;
    margin-left: -5px;
    /* background-color: red; */

}

.talana-breadcrumbs i.mdi {
    font-size: 18px;
    width: 30px;
    height: 30px;
    color: green;
    border-radius: 15px;
    padding-top: 7px;
    margin-left: -5px;
    /* background-color: red; */

}

.talana-breadcrumbs-container {
    margin-right: auto;
    padding-right: 15px;
}

/* reaher top*/

.zmdi {
    display: inline-block;
    font: normal normal normal 14px/1 'Material-Design-Iconic-Font';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.view-more {
    display: block;
    padding: 10px 10px 11px;
    line-height: 100%;
    font-size: 11px;
    margin-top: 20px;
    text-transform: uppercase;
    color: #777;
    text-align: center;
}

.lg-header {
    text-align: center;
    padding: 15px 10px 13px;
    line-height: 100%;
    border-bottom: 1px solid #F0F0F0;
    color: #4C4C4C;
    margin-bottom: 10px;
}

/* Estilos para select Company */
.worldSelected {
    display: flex;
    align-items: center;
    gap: 8px;
}

#selectCompany {
    position: relative;
    min-width: 252px;
}

#selectCompany .inputValueWrapper {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 28px;
    border: 1px solid var(--gengar-purple);
    justify-content: space-between;
}
#selectCompany .inputValueWrapper:focus-within, #selectCompany .inputValueWrapper:hover {
    outline: 3px solid rgba(133, 103, 255, 0.48) !important;
}

#selectCompany i {
    cursor: pointer;
    font-size: 20px;
    z-index: 1000;
    color: var(--gengar-purple);
}

#selectCompany i.arrow-icon.showList {
    transform: rotate(180deg);
    transition: .3s cubic-bezier(.25,.8,.5,1);
}

#selectCompany i.close-icon {
    right: 38px !important;
    color: rgba(10,7,22, 0.48) !important;
    visibility: hidden;
}

#selectCompany i.arrow-icon {
    transition: .3s cubic-bezier(.25,.8,.5,1);
    padding: 8px 12px;
    transform: rotate(0deg);
}

#selectCompany .select-actions {
    display: flex;
    align-items: center;
}

#selectCompany input {
    line-height: 16px;
    font-size: 14px;
    color: var(--gengar-purple);
    font-weight: 700;
    z-index: 1010;
    position: relative;
    background: transparent;
    cursor: pointer;
    padding: 8px 12px;
    max-width: 100%;
    border: none;
}
#selectCompany ul {
    min-width: 252px;
    max-height: 304px;
    overflow-y: auto;
    z-index: 1011;
    padding: 4px;
    background-color: white;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12);
    position: absolute;
    top: 38px;
    left: 0px;
    border-radius: 8px;
    visibility: hidden;
}
#selectCompany ul li {
    list-style-type: none;
    font-weight: 500;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    padding: 12px 4px;
}

#selectCompany ul.showList, i.showList {
    visibility: visible !important;
}

#selectCompany ul li:hover {
    background-color: rgba(133,103,255,.05)!important;
}
#selectCompany ul li.selected {
    background-color: rgba(133,103,255,.08)!important;
    color:  var(--haunter-purple) !important;
    font-weight: 600;
}



#sidebar:not(.collapsed) #main-menu-style .aside-menu-item{
    margin-left: 8px;
}

#main-menu-style .world-icon {
    margin-top: 8px!important;
    font-size: 16px !important;
}

#main-menu-style hr {
    margin-top: 5px !important;
    margin-bottom: 5px !important;

}

#clock-list-main-content .close-icon {
    color: red;
    font-size: 1.5em;
    margin-left: 35px;
}

#clock-list-main-content .check-icon {
    color: green;
    font-size: 1.5em;
    margin-left: 35px;
}

.card {
    /*elevation 2 de vuetify*/
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
}

/* estilos de tablas*/
/* datatable start - Homologación tablas/listas */
/* =================================================== */
@media (max-width: 1400px) {
    div#tablaDocumentos_wrapper {
        width: 100%;
        overflow: auto;
    }
    
    .dataTables_wrapper {
        width: 100%;
        overflow: auto;
    }
}

.table {
    font-size: 12.5px;
    line-height: 1.8;
    width: 100%;
}

.table > thead > tr > th {
    text-transform: capitalize;
}

.table > thead > tr > td {
    text-transform: capitalize;
}

/* sorting */
table.table thead .sorting:after {
    /* content: '\e150'; */
    opacity: 0.3;
    margin-left: 7px;
    font-size: 11px;
}

table.table thead .sorting_asc:after {
    /* content: '\e155'; */
    margin-left: 7px;
    font-size: 11px;
}

table.table thead .sorting_desc:after {
    /* content: '\e155'; */
    margin-left: 7px;
    font-size: 11px;
}

.card-header-table-actions {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.card-header-table-actions label {
    margin-bottom: 0;
}

.card-header-table-actions input.form-control.input-sm.new-search-input {
    padding-bottom: 4px;
}

.card-header-actions {
    max-width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;
}

.card-header-actions > div {
    margin-left: 15px;
    margin-bottom: 15px;
}

.card-header-actions .select2 {
    width: 140px;
}


.card .card-padding .table > tbody > tr > th,
.card .card-padding .table > thead > tr > th,
.card .card-padding .table > tfoot > tr > th,
.card .card-padding .table > thead > tr > td,
.card .card-padding .table > tbody > tr > td,
.card .card-padding .table > tfoot > tr > td {
    padding-left: 0px;
}


/* tablas con tab */
.tab-nav li a {
    padding-top: 35px !important;
}

/* =================================================== */
/* datatable end - Homologación tablas/listas*/


/* searching input start - buscador*/
/* =================================================== */
input.form-control.input-sm.new-search-input {
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    transition: all .2s;
    width: 200px;
    padding-left: 3px;
    font-size: 16px;
}

input.form-control.input-sm.new-search-input:hover {
    border-bottom: 1px solid #000;
}

input.form-control.input-sm.new-search-input:active, input.form-control.input-sm.new-search-input:focus {
    border-bottom: 2px solid var(--haunter-purple);
    font-weight: 400;
    color: #000;
}

/* Clase de addClass de jquery del bucador */
/* .new-search-input-click {
  border-bottom: 2px solid #2196F3;
  font-weight: 400;
  color: #000 !important;
} */

i.mdi.mdi-magnify.pull-right.new-search-icon::before {
    margin-left: -32px;
    color: #9e9e9e;
    font-size: 24px;
}

/* =================================================== */
/* searching input end - buscador*/


/* Botones de texto start */
/* =================================================== */
.btn-txt-general {
    /* padding: 0 16px !important; */
    height: 40px;
    font-size: 14px !important;
    font-weight: 500 !important;
    min-width: 88px;
    /* transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1); */
}

.btn-type-action {
    color: var(--haunter-purple) !important;
    border: 1px solid var(--haunter-purple) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 10px 16px !important;
}

.btn-type-advanced-options {
    color: var(--haunter-purple) !important;
    border: 1px solid transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
    text-transform: none !important;
}

.btn-type-talana-outline {
    background-color: #fff !important;
    border: 1px solid var(--haunter-purple) !important;
    color: var(--haunter-purple) !important;
    height: 40px;
    padding: 10px 16px !important;
    box-shadow: none !important;
}

.btn-type-talana-principal {
    background-color: var(--haunter-purple) !important;
    border: 1px solid transparent !important;
    color: #fff !important;
    height: 40px;
    padding: 10px 30px !important;
    font-weight: 600 !important;
}


.btn-type-clean {
    background-color: #fff !important;
    border: 1px solid #f44336 !important;
    color: #f44336 !important;
    height: 40px;
    box-shadow: none !important;
    padding: 10px 16px !important;
    box-shadow: none !important;
}

.btn-type-save {
    border: 1px solid #4caf50 !important;
    background-color: #4caf50 !important;
    color: #fff !important;
    height: 40px;
    padding: 10px 16px !important;
}

.btn-type-save-outline {
    border: 1px solid #4caf50 !important;
    background-color: #fff !important;
    color: #4caf50 !important;
    height: 40px;
    box-shadow: none !important;
    padding: 10px 16px !important;
}

.btn-type-back {
    border: 1px solid #ff9800 !important;
    background-color: #ff9800 !important;
    color: #fff !important;
    height: 40px;
    padding: 10px 16px !important;
}

.btn-with-flex {
    padding: 0 !important;
}

.btn-with-flex > span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    letter-spacing: 1px;
}

[class*="btn-type"] {
    font-weight: 600 !important;
}

[class*="btn-type"] {
    letter-spacing: 1.5px;
}

.btn-type-advanced-options {
    letter-spacing: 1px;
}

[class*="btn-type"] .mdi {
    font-size: 14px !important;
    vertical-align: middle !important;
    color: inherit !important;
}

[class*="btn-type"] .zmdi {
    font-size: 20px !important;
    vertical-align: middle !important;
}

[class*="btn-type"] .fa {
    font-size: 16px !important;
}


[class*="btn-type"] .icon-right {
    margin-left: 10px;
}


[class*="btn-type"] .icon-left {
    margin-right: 10px;
}

.btn-with-flex > span .mdi {
    font-size: 20px !important;
}

/* =================================================== */
/* Botones de texto end */

.tree_select {
    width: 100%;
}


.tree_select .select2-container {
    width: 100%;
}

#tree_empresa-centroCosto select {
    width: 100%;
}

/* THE NEW ERA */

.select2-container .select2-choices .select2-search-field input,
.select2-container .select2-choice, .select2-container .select2-choices {
    font-family: var(--font-family);
    min-width: 200px !important;
}

/*==============================*/


/* HOMOLOGACIÓN TIPOGRÁFICA */
/* =================================================== */

.talana-super-h1 {
    font-size: 35px;
}

.talana-h1 {
    font-size: 24px;
    font-weight: 500;
}

.talana-h2 {
    font-size: 20px;
    font-weight: 400;
}

.talana-h3 {
    font-size: 18px;
    font-weight: 600;
}

.talana-h4 {
    font-size: 16px;
}

.talana-h5 {
    font-size: 15px;
}

.talana-h6 {
    font-size: 14px;
    font-weight: 400;
}

.talana-table-font-big {
    font-size: 14px;
}

.talana-table-font-small {
    font-size: 12px;
}

.talana-general-font-size {
    font-size: 14px;
}


/* =================================================== */

/* HOMOLOGACIÓN BOTONES */
/* =================================================== */

.btn {
    border-radius: 5px;
}

/* =================================================== */

/* MATERIAL CHECKBOXES */
/* =================================================== */

.talana-checkbox {
    z-index: 0;
    position: relative;
    display: inline-block;
    color: var(--text-color);
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.talana-checkbox > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
}

.talana-checkbox > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
}

.talana-checkbox > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: #ccc;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    transition: border-color 0.2s, background-color 0.2s;
}

.talana-checkbox > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(4px, 4px) rotate(-45deg);
}

.talana-checkbox > input:checked,
.talana-checkbox > input:indeterminate {
    background-color: var(--haunter-purple);
}

.talana-checkbox > input:checked + span::before,
.talana-checkbox > input:indeterminate + span::before {
    border-color: var(--haunter-purple);
    background-color: var(--haunter-purple);
}

.talana-checkbox > input:checked + span::after,
.talana-checkbox > input:indeterminate + span::after {
    border-color: #fff;
}

.talana-checkbox > input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
}

.talana-checkbox:hover > input {
    opacity: 0.04;
}

.talana-checkbox > input:focus {
    opacity: 0.12;
}

.talana-checkbox:hover > input:focus {
    opacity: 0.16;
}

.talana-checkbox > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
}

.talana-checkbox > input:active + span::before {
    border-color: var(--haunter-purple);
}

.talana-checkbox > input:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(var(--haunter-purple), 0.6);
}


.talana-checkbox > input:disabled {
    opacity: 0;
}

.talana-checkbox > input:disabled + span {
    color: rgba(var(--haunter-purple), 0.38);
    cursor: initial;
}

.talana-checkbox > input:disabled + span::before {
    border-color: currentColor;
}

.talana-checkbox > input:checked:disabled + span::before,
.talana-checkbox > input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
}

/* =================================================== */

/* SEARCHER */
/* =================================================== */


#seleccionParametrosModal .modal-footer,
#seleccionParametrosModal .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#seleccionParametrosModal .modal-footer {
    padding: 10px 26px;
}

#seleccionParametrosModal .modal-footer:before,
#seleccionParametrosModal .modal-footer:after {
    display: none;
}

/* =================================================== */

/* SOBREESCRIBIENDO STYLES DE LIBRERIAS JS O INLINES EXTERNOS */
/* =================================================== */

/* Selects */

.select2-search input,
.select2-container .select2-choice abbr,
.select2-container .select2-choice .select2-arrow b {
    background-image: none !important;
}

.select2-drop {
    color: var(--text-color) !important;
}

.select2-results li:hover {
    background-color: #f1f1f1;
    color: var(--haunter-purple);
}

.select2-container .select2-choice {
    color: var(--haunter-purple);
}

/* Font del drop del buscador */

.ui-widget {
    font-family: var(--font-family) !important;
}

.ui-menu-item{
    padding: 3px;
}

.ui-menu-item span {
    font-size: 14px !important;
}

.ui-menu-item .zmdi {
    vertical-align: middle;
}

/*==============================*/

/* HELPERS */

.indent-20 {
    margin-left: 20px;
}

.talana-bg {
    background-color: var(--haunter-purple);
}

.outline-gray {
    border: 1px solid #4B4B4B;
    color: #4B4B4B;
}

.width-100 {
    width: 100%;
}

.select-width {
    width: 160px;
}

/* FRAGMENTS */
/*==============================*/

.card-actions {
    padding: 18px;
    display: flex;
    justify-content: space-between;
}

.card-actions-list {
    list-style: none;
}

.card-actions-list > li {
    display: inline-block;
    vertical-align: bottom;
    margin-right: 15px;
}

.card-actions-list > li:last-child {
    margin-right: 0;
}

.card-actions-list > li .dataTables_filter label {
    margin-bottom: 0;
}

.card-actions-list .btn-group {
    box-shadow: none !important;
    margin: 0 !important;
}

.progress-container {
    padding: 15px 0;
    margin-bottom: 15px;
}

.progress-container .fragment-step {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
}

.progress-container .fragment-step.inactive-step {
    color: #4b4b4b;
    border: 2px solid #4b4b4b;
}

.progress-container .fragment-step.active-step {
    color: #fff;
    background-color: var(--haunter-purple);
}

.progress-container .active-step-text {
    font-weight: 600;
}

.fragment-1 .card-body {
    padding-top: 0;
}

.filter-form-inline label {
    font-weight: 400;
}

.fragment-1-header p {
    margin-bottom: 0;
}

.fragment-1-header {
    display: flex;
    justify-content: space-between;
}

.fragment-1-header .principal-actions > li {
    display: inline-block;
    list-style: none;
    margin-right: 15px;
    vertical-align: top;
}

.fragment-1-header .principal-actions > li:last-child {
    margin-right: 0;
}

.fragment-1-header .principal-actions > li .btn {
    margin-top: 0;
    display: flex;
    align-items: center;
}

.fragment-1-filters .select2-container > a {
    width: 100%;
}


.fragment-1-filters #s2id_selector_grupo .select2-choice {
    background-color: transparent;
    border-radius: 0 !important;
    box-shadow: none !important;
}

.fragment-1-filters #s2id_selector_grupo .select2-chosen {
    text-transform: capitalize;
    font-family: var(--font-family);
    font-size: 14x;
    color: var(--haunter-purple);
    font-weight: 400;
}

.fragment-2-header {
    margin-top: 10px;
    padding-bottom: 0;
}

.fragment-4-bulk-load .fragment-4-filters {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.fragment-4-bulk-load .fragment-4-filters .filter-form-inline {
    display: inline-flex;
    margin-bottom: 0;
    align-items: center;
    flex-wrap: wrap;
}

.fragment-4-bulk-load .fragment-4-filters .filter-form-inline > div {
    margin-right: 15px;
}

.fragment-4-bulk-load .fragment-4-filters .filter-form-inline > div:last-child {
    margin-right: 0;
}

.fragment-4-bulk-load .fragment-4-filters .filter-form-inline > div > a {
    margin-top: 0;
}

.fragment-4-bulk-load .btn {
    margin-top: 0;
}

.filter-form-inline {
    margin-bottom: 30px;
}

.filter-form-inline .calendar-group {
    width: 250px;
    position: relative;
}

.filter-form-inline .calendar-group input {
    color: var(--haunter-purple);
    border-bottom: 1px solid #9e9e9e;
}

.filter-form-inline .calendar-group .select2-arrow {
    position: absolute;
    bottom: 10px;
    z-index: 3;
    right: 20px;
}

.filter-form-inline .calendar-group .icon-calendar {
    position: absolute;
    left: 3px;
    z-index: 3;
    bottom: 9px;
}

.fragment-1-filters .filter-form-inline > div {
    display: inline-flex;
    vertical-align: bottom;
    margin-right: 15px;
}


.fragment-1-filters .filter-form-inline input {
    padding: 6px 12px;
    font-size: 14px;
}

.fragment-1-filters .filter-form-inline .btn {
    margin-top: 0;
}

.fragment-1-filters .search-person-wrapper {
    width: 400px;
    align-items: flex-end;
}

.fragment-1-filters .search-person-wrapper .input-wrapper {
    margin-right: 10px;
    width: 60%;
    position: relative;
}

.fragment-1-filters .search-person-wrapper input {
    border-radius: 0;
}

.fragment-1-expand-advanced-options {
    position: absolute;
    bottom: 20px;
    right: 15px;
}

.fragment-1-advanced-options {
    padding-bottom: 35px;
}

.fragment-1-advanced-options {
    width: 100%;
}

.fragment-1-advanced-options .talana-h4 {
    font-weight: 600;
    margin: 20px 0 10px 0;
}

.fragment-1-advanced-options .btn-cascade-rules-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.fragment-1-advanced-options .query-builder .rules-group-container {
    border-color: transparent !important;
}

.fragment-1-advanced-options .advanced-options-inline-filters {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.fragment-1-advanced-options .advanced-options-inline-filters.title-with-toggle {
    align-items: baseline;
}

.fragment-1-advanced-options .advanced-options-inline-filters:last-child {
    margin-bottom: 0;
}

.fragment-1-advanced-options .advanced-options-inline-filters > div {
    margin-right: 15px;
}

.fragment-1-expand-advanced-options.show-ao .shown-ao {
    display: none;
}

.fragment-1-expand-advanced-options.show-ao .hidden-ao {
    display: inline-block;
}

.fragment-1-expand-advanced-options .shown-ao {
    display: inline-block;
}

.fragment-1-expand-advanced-options .hidden-ao {
    display: none;
}

.fragment-1-notes {
    position: absolute;
    bottom: 20px;
    left: 15px;
    max-width: calc(100% - 240px);
    background-color: #fff;
}
.card-description {
    color: #777;
}

/*==============================*/


/* CONTEXTUAL HELP */
/*==============================*/

.page-help ol li {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 7px;
}

.page-help ol, .page-help ul {
    padding-left: 15px;
}

.page-help p {
    margin-bottom: 15px;
}

#top-help .dropdown-menu.dropdown-menu-lg {
    width: 370px;
}

#top-help .list-group-item {
    border: 0;
    padding: 20px 20px;
}

#top-help .lv-header {
    padding: 20px 20px;
}

#top-help .list-group-item:first-child {
    padding-top: 0;
}

/*==============================*/

/* ITEMS DE PAGO */
/*==============================*/

#items-pago-card .panel-title {
    text-transform: capitalize;
}

#items-pago-card .panel-title > a {
    font-size: 18px;
}

/*==============================*/

/* RESUMEN DE ITEMS CARGADOS */
/*==============================*/


#cambio-mundo .table-resumen-datos-entrada .popover,
#cambio-mundo .card .popover {
    min-width: 0;
    min-height: 0;
    border-radius: 5px;
    padding: 15px;
}

.inline-block {
    display: inline-block;
}

.block {
    display: block;
}

@keyframes show-panel {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes hide-panel {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

#hide-panels {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 8000;
}

.panel-right {
    position: fixed;
    transform: translateX(100%);
    top: 0;
    right: 0;
    background: #fff;
    bottom: 100px;
    width: 400px;
    max-width: 75%;
    border-radius: 0 0 0 5px;
    z-index: 9999;
    -webkit-animation: hide-panel .65s;
    -o-animation: hide-panel .65s;
    animation: hide-panel .65s;
}

.panel-right .panel-search label {
    position: relative;
    width: 100%;
}

.panel-right .panel-search input.form-control.input-sm.new-search-input {
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 3px;
    margin-bottom: 1rem;
    border: 0;
    padding: 0 30px 0 10px;
    box-sizing: border-box;
    height: 35px;
}

.panel-right .panel-search i.mdi {
    position: absolute;
    right: 0;
    top: -3px;
}

.panel-right-wrapper.shown .panel-right {
    transform: translateX(0);
    -webkit-animation: show-panel .65s;
    -o-animation: show-panel .65s;
    animation: show-panel .65s;
}

.panel-right .panel-header, .panel-right .panel-body, .panel-right .panel-footer {
    padding: 15px;
}

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.panel-header .talana-h3 {
    margin: 0;
}

.panel-body {
    height: calc(100% - 136px);
}

.panel-body .filter-list {
    list-style: none;
}

.panel-body .talana-checkbox {
    font-weight: 400;
    font-size: 14px;
}

.panel-footer {
    background: #fff;
    border-radius: 0 0 0 5px;
}

.panel-footer .btn {
    margin-top: 0;
}

.flot-graph, .flot-graph text {
    font-family: var(--font-family) !important;
}

/* MARCAS */
/*==============================*/

/* Modal Corrección de Marcas */

#modalCorregirMarca .modal-header > .row {
    border-bottom: 1px solid #ccc;
    padding-bottom: 26px;
}

#modalCorregirMarca .modal-header h4[class*="talana-h"] {
    margin: 0;
}


/*==============================*/

/* Externalización sin variables
WARNING, CAMBIAR MANUAL SI SE CAMBIAN LAS VARIABLES */
/*==============================*/

body.login-content {
    font-family: Ubuntu, sans-serif;
}


/* vistas de facturacion */

.facturacion-filter-form {
    float: right;
}

.facturacion-filter-form .search {
    margin-top: 10px;
    display: inline-block;
    vertical-align: middle;
}

.facturacion-filter-form .btn {
    display: inline-block;
}
.container-cards, .talana-card.container-cards{
    z-index: 10;
}



/*==============================*/

/* NUEVO HEADER Y SIDEBAR */
/*==============================*/
.main-layout-saas {
    display: grid;
    background-color: #f5f3ff;
    height: 100vh;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px auto 1fr;
    grid-template-areas: "header header" "sidebar subHeader" "sidebar content";
}
.main-layout-saas .t-header {
    grid-area: header;
}
.main-layout-saas .t-sidebar i {
    font-size: 20px;
}
.main-layout-saas .t-sidebar {
    grid-area: sidebar;
}
.main-layout-saas .t-sub-header {
    grid-area: subHeader;
    display: flex;
    align-items: center;
    padding: 8px 16px;
}
.main-layout-saas .t-main-view-fluid {
    grid-area: content;
    width: 100%;
    margin: 0 auto;
    padding: 24px 16px;
    overflow-x: auto;
    max-width: 100% !important;
}

@media (max-width: 768px) {
    .main-layout-saas .t-main-view-fluid {
        max-width: 100%;
    }
}
/* Descomentar cuando se haga la version mobile */
/* @media screen and (max-width: 1024px) {
    .main-layout-saas {
        grid-template-areas: "header header" "subHeader subHeader" "content content" !important;
    }
    .main-layout-saas .t-sidebar {
        display: none;
    }
} */

.t-header-options-world-selection .v-btn{
    margin: inherit !important;
}

#sidebar-wrapper i {
    color: inherit;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-thumb {
    background: #7C8DB0;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background: #CED4E1;
}
</style>