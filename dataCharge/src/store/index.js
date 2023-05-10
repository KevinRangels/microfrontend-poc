import { defineStore } from 'pinia'
import { ref } from 'vue'

export const dataChargeStore = defineStore('dataCharge', () => {
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