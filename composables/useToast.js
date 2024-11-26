export default function useToast() {
  const isToastVisible = useState("isToastVisible", () => false);
  const toastMessage = useState("toastMessage", () => "");

  function showToast(message) {
    toastMessage.value = message;
    isToastVisible.value = true;

    setTimeout(() => {
      isToastVisible.value = false;
    }, 5000);
  }

  function hideToast() {
    isToastVisible.value = false;
  }

  return {
    isToastVisible,
    toastMessage,
    showToast,
    hideToast,
  };
}
