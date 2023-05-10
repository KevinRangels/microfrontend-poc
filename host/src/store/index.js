import { defineStore } from 'pinia'
import { ref } from 'vue'

export const hostStore = defineStore('host', () => {
  const user = ref({})
  const companies = ref([])
  const token = ref(null)

  return {
    user,
    companies,
    token
  }
})