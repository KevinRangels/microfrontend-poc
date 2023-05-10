import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'cl',
  allowComposition: true, // you need to specify that!
  messages: {
    cl: {
      text: 'Texto con naming Chileno'
    },
    pe: {
      text: 'Texto con naming Peruano'
    }
  }
})

console.log(i18n.allowComposition) // output is true

export default i18n