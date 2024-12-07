import { ref } from "vue";

export function useModalVisibility() {
  const isVisible = ref(false);
  return isVisible;
}
