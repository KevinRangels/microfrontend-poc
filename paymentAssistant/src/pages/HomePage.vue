<script setup>
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n'
  import { paymentAssistantStore } from '../store/'
  const route = useRoute()
  console.log('route', route);
  console.log('route', route.matched);
  const { t } = useI18n() // use as global scope
  const paymentAssistant = paymentAssistantStore()
</script>

<template>
  <div class="row">
    <div class="col-sm-4">
      <div
        class="card pt-inner"
        style="min-height:600px;"
      >
        <div
          class="pti-header bgm-amber"
          style="cursor:pointer;"
        >
          <h2>Anticipo</h2>
          <div class="ptih-title" />
        </div>

        <div class="pti-body">
          <div class="ptib-item">
            Los anticipos de sueldo no incluyen la elaboración del pago de leyes sociales ni de impuestos, por lo que siempre se debe generar un proceso de sueldo al finalizar el mes.
            <div class="ptib-item" />
            {{ t("text") }}
            <div class="ptib-item" />
            Para eliminar un anticipo ya generado y no pagado tiene que ir a la siguiente opción <a href="">Presionar aquí</a>.
          </div>
        </div>

        <div class="pti-footer botonSiguienteAsistente">
          <router-link
            :to="{ name: 'asistente-de-pagos-paso-1'}"
            class="bgm-amber"
            data-cy="rem-paymentAssistant-advance"
          >
            Go
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div
        class="card pt-inner"
        style="min-height:600px;"
      >
        <div
          class="pti-header bgm-green"
          style="cursor:pointer;"
        >
          <h2>Sueldo</h2>
          <div class="ptih-title" />
        </div>


        <div class="pti-body">
          <div class="ptib-item">
            El pago de sueldo considera el cálculo y liquidación de leyes sociales (AFP, Fonasa, Seguro Cesantía, etc.) e impuestos. Puede ser ejecutado una vez al mes por cada trabajador.
          </div>
          <div class="ptib-item">
            {{ t("text") }}
          </div>
          <div class="ptib-item">
            Para eliminar un sueldo ya generado y no pagado tiene que ir a la siguiente opción" <a href="">Presionar aquí</a>.
          </div>
        </div>

        <div class="pti-footer botonSiguienteAsistente">
          <router-link
            :to="{ name: 'asistente-de-pagos-paso-1'}"
            class="bgm-green"
            data-cy="rem-paymentAssistant-salary"
          >
            Go
          </router-link>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div
        class="card pt-inner"
        style="min-height:600px;"
      >
        <div
          class="pti-header bgm-cyan"
          style="cursor:pointer;"
        >
          <h2>Reproceso</h2>
          <div class="ptih-title" />
        </div>

        <div class="pti-body">
          <div class="ptib-item">
            El reproceso es un recálculo completo de sueldo, para modificar un sueldo ya pagado.
          </div>
          <div class="ptib-item">
            Se vuelven a calcular las leyes sociales e impuestos, y el sueldo ya pagado queda como anticipo.
          </div>
          <div class="ptib-item">
            {{ t("text") }}
          </div>

          <div class="ptib-item">
            Para eliminar un sueldo ya generado y no pagado tiene que ir a la siguiente opción <a href="">Presionar aquí</a>.
          </div>
        </div>

        <div class="pti-footer botonSiguienteAsistente">
          <router-link
            :to="{ name: 'asistente-de-pagos-paso-1'}"
            class="bgm-cyan"
            data-cy="rem-paymentAssistant-reprocess"
          >
            Go
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pricing-table {
  margin-top: 70px;
  max-width: 1170px;
  margin: 70px auto 0;
}
.pt-inner .pti-header {
  padding: 45px 10px 70px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
}
.bgm-cyan {
  background-color: #00bcd4 !important;
}
.bgm-green {
    background-color: #4caf50 !important;
}
.pt-inner {
  text-align: center;
}
.bgm-amber {
    background-color: #ffc107 !important;
}

.pt-inner .pti-header {
  padding: 45px 10px 70px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
}

.pt-inner .pti-header > h2 {
  margin: 0;
  line-height: 100%;
  color: #fff;
  font-weight: 100;
  font-size: 50px;
}

.pt-inner .pti-header > h2 small {
  color: #fff;
  letter-spacing: 0;
  vertical-align: top;
  font-size: 16px;
  font-weight: 100;
}

.pt-inner .pti-header .ptih-title {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 8px 10px 9px;
  text-transform: uppercase;
  margin: 0 -10px;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.pt-inner .pti-body {
  padding: 0 23px;
}

.pt-inner .pti-body .ptib-item {
  padding: 15px 0;
  font-weight: 400;
}

.pt-inner .pti-body .ptib-item:not(:last-child) {
  border-bottom: 1px solid #eee;
}

.pt-inner .pti-footer {
  padding: 10px 20px 30px;
}

.pt-inner .pti-footer > a {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  display: inline-block;
  line-height: 60px;
  font-size: 30px;
  -webkit-transition: all;
  -o-transition: all;
  transition: all;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}

.pt-inner .pti-footer > a:hover {
  opacity: 0.85;
  filter: alpha(opacity=85);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
}

.invoice {
  min-width: 1100px;
  max-width: 1170px;
}

.i-logo {
  width: 150px;
}

.i-table .highlight {
  background-color: #eee;
  border-bottom: 1px solid #e6e6e6;
}

.i-table td.highlight {
  font-size: 14px;
  font-weight: 500;
}

.wall {
  max-width: 1000px;
}
</style>