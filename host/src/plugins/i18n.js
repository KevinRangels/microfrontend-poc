import { createI18n } from 'vue-i18n'

const langs = ['cl', 'pe']
const base = langs.filter((item) => item === window.location?.pathname?.split('/')[1])[0]

const i18n = createI18n({
  locale: base,
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