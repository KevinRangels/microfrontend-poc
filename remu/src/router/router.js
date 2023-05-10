
import RemuLayout from "../layout/RemuLayout.vue"
import { routesPaymentAssistant } from "paymentAssistant/routesPaymentAssistant";
import {routesDataCharge} from "dataCharge/routesDataCharge";
const ROUTE_NAME = 'remuneraciones'


export const routesRemu = {
  path: `/${ROUTE_NAME}`,
  // redirect: `/${ROUTE_NAME}`,
  component: RemuLayout,
  children: [
    {
      ...routesPaymentAssistant,
      path: `/${ROUTE_NAME}/asistente-de-pagos`,
    },
    {
      ...routesDataCharge,
      path: `/${ROUTE_NAME}/carga-de-datos`,
    },
  ]
}

export default routesRemu