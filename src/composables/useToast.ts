import { ref } from 'vue'

const message = ref<string | null>(null)

export function useToast() {
  function show(msg: string) {
    message.value = msg
    setTimeout(() => {
      message.value = null
    }, 3000)
  }
  return {
    message,
    show
  }
}
