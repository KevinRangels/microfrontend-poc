import { defineStore } from 'pinia'
import { ref } from 'vue'

export const paymentAssistantStore = defineStore('paymentAssistant', () => {
  const workers = ref([])
  const workerSelected = ref(null)
  const processStatus = ref(null)
  const loading = ref(false)

  return {
    workers,
    workerSelected,
    processStatus,
    loading
  }
})