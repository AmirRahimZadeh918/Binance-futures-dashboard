import { computed } from 'vue'
import { useCurrentSymbol } from '@/stores/useCurrentSymbol'

export const useSymbol = () => {
  const store = useCurrentSymbol()

  const currentSymbol = computed(() => store.currentSymbol)

  const setSymbol = (newSymbol: string) => {
    store.setSymbol(newSymbol)
  }

  return {
    currentSymbol,
    setSymbol,
  }
}
