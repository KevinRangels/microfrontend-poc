<template>
    <div class="row card" style="font-size: 24px;">
            <div class="col-sm-12 card-body">
                <table width="100%">
                    <tbody><tr>
                        <td width="4%" align="left" data-cy="rem-paymentAssistant-showStep1">
                            <div class="bgm-gray" style="border-radius:50%; color:white; width:30px;height:30px;padding: 5px 5px 5px 10px;font-size:15px;">
                                1
                            </div>
                        </td>
                        <td width="11%" align="left">
                            <div style="color:black;font-size:18px;">Asistencia</div>
                        </td>
                        <td width="10%">
                            <div style="width:80%;border-top: solid 2px #bbbbbb;"></div>
                        </td>

                        <td width="4%" align="left">
                            <div class="bgm-gray" style="border-radius:50%; color:white; width:30px;height:30px;padding: 5px 5px 5px 10px;font-size:15px;">
                                2
                            </div>
                        </td>
                        <td width="11%" align="left">
                            <div style="color:black;font-size:18px;">Ingreso Datos</div>
                        </td>
                        <td width="10%">
                            <div style="width:80%;border-top: solid 2px #bbbbbb;"></div>
                        </td>
                        <td width="4%" align="left">
                            <div class="bgm-blue" style="border-radius:50%; color:white; width:30px;height:30px;padding: 5px 5px 5px 10px;font-size:15px;">
                                3
                            </div>
                        </td>
                        <td width="9%" align="left">
                            <div style="color:black;font-size:18px;">Generar Pago</div>
                        </td>
                        <td width="12%">
                            <div style="width:80%;border-top: solid 2px #bbbbbb;"></div>
                        </td>
                    </tr>
                </tbody></table>
            </div>
        </div>
        <div class="row" style="margin-top: 50px; text-align: center;">
            <router-link :to="{ name: 'asistente-de-pagos-paso-2'}" style="margin-right: 20px;">
                    Atras
            </router-link>
            <!-- <router-link :to="{ name: 'asistente-de-pagos-paso-3'}">
                    Siguiente
            </router-link> -->

        </div>

    
</template>
<style>
.card .card-body {
    height: 30%;
    padding: 18px;
}
.bgm-blue {
    background-color: #2196f3 !important;
}
.bgm-gray {
    background-color: #9e9e9e !important;
}
</style>