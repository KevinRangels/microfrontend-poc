
import HomePageLanding from "../pages/HomePageLanding.vue"
import IngresoSimple from "../pages/IngresoSimple.vue"
import IngresoPermanente from "../pages/IngresoPermanente.vue"
import IngresoEnCuotas from "../pages/IngresoEnCuotas.vue"

const ROUTE_NAME = 'carga-de-datos'


export const routesDataCharge = {
  path: `/remuneraciones/${ROUTE_NAME}`,
  children: [
    {
        path: `/remuneraciones/${ROUTE_NAME}/landing`,
        name: 'carga-de-datos-landing',
        component: HomePageLanding,
    },
    {
      path: `/remuneraciones/${ROUTE_NAME}/items-pago`,
      name: 'carga-items-pago',
      component: IngresoSimple,
    },
    {
      path: `/remuneraciones/${ROUTE_NAME}/items-pago-cuota`,
      name: 'carga-items-pago-cuota',
      component: IngresoEnCuotas,
    },
    {
        path: `/remuneraciones/${ROUTE_NAME}/items-pago-permanente`,
        name: 'carga-items-pago-permanente',
        component: IngresoPermanente,
    }
  ]
}

export default routesDataCharge