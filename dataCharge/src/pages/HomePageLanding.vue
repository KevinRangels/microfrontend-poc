<script setup>
  import { dataChargeStore } from '../store/';

  const dataCharge = dataChargeStore()
</script>

<template>
    <div id="landing-carga-de-datos" class="row">

    
<div id="botonera-haberes-descuentos" class="col-xs-12 col-sm-12 col-md-6">
    <!-- botones -->
    <div class="card" style="height:500px">
        <div class="card-header ch-alt bgm-indigo">
            <h2>Haberes y Descuentos</h2>
        </div>
        <div class="card-body actionsCard" style="min-height:250px">
            <div class="row">

              
                <router-link :to="{ name: 'carga-items-pago'}" class="lv-item  col-xs-4" title="Los valores son sólo válidos por éste mes">
                  <div class="big-round-icon">
                    <i class="mdi mdi-login-variant ico-base ico-haberes-descuentos"></i>
                    <div class="lv-title">Ingreso Simple</div>
                  </div>
                </router-link>

                <router-link :to="{ name: 'carga-items-pago-cuota'}" class="lv-item col-xs-4" title="Los valores se repartirán en varios meses">
                  <div class="big-round-icon">
                    <i class="mdi mdi-repeat ico-base ico-haberes-descuentos"></i>
                    <div class="lv-title">Ingreso En Cuotas</div>
                  </div>
                </router-link>

                <router-link :to="{ name: 'carga-items-pago-permanente'}" class="lv-item col-xs-4" title="Los valores se asignarán sin fecha de cambio">
                  <div class="big-round-icon">
                    <i class="mdi mdi-all-inclusive ico-base ico-haberes-descuentos"></i>
                    <div class="lv-title">Ingreso Permanente</div>
                  </div>
                </router-link>
              

              
                <a class="lv-item  col-xs-4" href="/es/remuneraciones/carga-de-datos/haberes-descuentos/masivo/" title="Carga desde planilla. Los valores son sólo válidos por éste mes">
                  <div class="big-round-icon">
                    <i class="mdi mdi-grid ico-base ico-haberes-descuentos"></i>
                    <div class="lv-title">&nbsp;Importación Simple</div>
                  </div>
                </a>         
            </div>
        </div>
    </div>
    <!-- fin botones -->
</div>



<div id="botonera-ausentismos" class="col-xs-12 col-sm-6
  
    col-md-3
  
">
  <!-- Recodatorios -->
   <div class="recordatoriosContainer card" style="height:500px">
      <div class="card-header ch-alt bgm-purple">
          <h2>Ausentismos</h2>
      </div>
      <div class="tl-body card-body actionsCard" style="">
        <div class="row">
          <a class="lv-item
              
                col-xs-12
              
            " href="/es/remuneraciones/carga-de-datos/ausentismo-ingreso/ausentismo-ingreso/remuneraciones" title="">
            <div class="big-round-icon">
              <i class="mdi mdi-hospital ico-base ico-ausentismos"></i>
              <div class="lv-title">Licencias Médicas</div>
            </div>
          </a>
          <a class="lv-item
              
                col-xs-12
              
            " href="/es/remuneraciones/carga-de-datos/vacaciones-ingreso-masivo/remuneraciones" title="">
            <div class="big-round-icon">
              <i class="mdi mdi-white-balance-sunny ico-base ico-ausentismos"></i>
              <div class="lv-title">Vacaciones</div>
            </div>
          </a>
          <a class="lv-item
              
                col-xs-12
              
            " href="/es/remuneraciones/carga-de-datos/permisos-ingreso/remuneraciones" title="">
            <div class="big-round-icon">
              <i class="mdi mdi-note-text ico-base ico-ausentismos"></i>
              <div class="lv-title">Permisos y Faltas</div>
            </div>
          </a>
      </div>
    </div>
  </div>
  <!-- fin Recodatorios -->
</div>



<div id="botonera-carga-otros" class="col-xs-12 col-sm-6
  
    col-md-3
  
">
<div class="card" style="height:500px">
  <div class="card-header ch-alt bgm-green">
    <h2>Cargadores Masivos</h2>
  </div>
  <div class="card-body actionsCard">
    <div class="row">
      
      <a class="lv-item
          
            col-xs-12
          " href="/es/remuneraciones/carga-de-datos/empleado/carga-masiva/simple/remuneraciones" title="Carga masiva simple">
        <div class="big-round-icon">
          <i class="mdi mdi-account-multiple ico-carga-otros ico-base"></i>


          <div class="lv-title">Cargar empleados (Simple)</div>
        </div>
      </a>
      

      

      
          <a class="lv-item
        
          col-xs-12
        
      " href="/es/remuneraciones/carga-de-datos/cargadores/prestamos/" title="Carga masiva de Prestamos">
              <div class="big-round-icon">
                  <i class="mdi mdi-cash ico-carga-otros ico-base"></i>
                  <div class="lv-title">Prestamos</div>
              </div>
          </a>
      

      
      <!--a class="lv-item col-xs-12" href="/es/remuneraciones/carga-de-datos/liquidaciones/carga-masiva" title="Carga masiva de histórico de liquidaciones">
        <div class="big-round-icon">
          <i class="mdi mdi-checkbox-multiple-blank-outline ico-carga-otros ico-base"></i>
          <div class="lv-title">Liquidaciones Históricas</div>
        </div>
      </a-->
      

      
      <a class="lv-item
          
            col-xs-12
          
        " href="/es/remuneraciones/carga-de-datos/cargadores/remuneraciones" title="Ver más">
      <div class="big-round-icon">
          <i class="mdi mdi-briefcase-upload ico-carga-otros ico-base"></i>
          <div class="lv-title">Otros Cargadores</div>
        </div>

      </a>
      
    </div>
  </div>
</div>
</div>


</div>
</template>


<style lang="scss">
.card .card-header {
    position: relative;
}
.big-round-icon {
    /* border-radius: 81px; */
    /* padding: 16px; */
    height: 105px;
    width: 105px;
    /* color: #ffffff; */
    color: #999;
    /* background-color: #aaaaaa; */
    /* border: solid 2px #999; */
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    /* border-radius: 3px; */
}
#landing-carga-de-datos .big-round-icon {
    border: none;
    width: 100%;
    margin: 0 auto;
}
#landing-carga-de-datos a.lv-item.col-xs-4 {
    display: block;
    padding-left: 0px;
    /* padding-top: 5px; */
}

.actionsCard a.lv-item {
    color: #333;
}
.card-body .lv-item {
    padding: 12px 20px;
}
.card {
    position: relative;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
}
.card .card-header.ch-alt {
    padding: 18px 18px 28px;
}
.bgm-indigo {
    background-color: #3f51b5 !important;
}
.bgm-purple {
    background-color: #9c27b0 !important;
}
.bgm-green {
    background-color: #4caf50 !important;
}
.card .card-header[class*="bgm-"] h2, .card .card-header[class*="bgm-"] h2 small {
    color: #fff;
}
</style>