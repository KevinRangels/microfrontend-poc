
import HomePage from "../pages/HomePage.vue"
import StepOne from "../pages/StepOne.vue"
import StepTwo from "../pages/StepTwo.vue"
import StepThree from "../pages/StepThree.vue"

const ROUTE_NAME = 'asistente-de-pagos'


export const routesPaymentAssistant = {
  path: `/remuneraciones/${ROUTE_NAME}`,
  children: [
    {
        path: `/remuneraciones/${ROUTE_NAME}`,
        name: 'asistente-de-pagos-paso-landing',
        component: HomePage,
    },
    {
      path: `/remuneraciones/${ROUTE_NAME}/paso-1`,
      name: 'asistente-de-pagos-paso-1',
      component: StepOne,
    },
    {
      path: `/remuneraciones/${ROUTE_NAME}/paso-2`,
      name: 'asistente-de-pagos-paso-2',
      component: StepTwo,
    },
    {
        path: `/remuneraciones/${ROUTE_NAME}/paso-3`,
        name: 'asistente-de-pagos-paso-3',
        component: StepThree,
    }
  ]
}

export default routesPaymentAssistant