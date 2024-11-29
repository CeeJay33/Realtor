export default function useBadToast() {
  const isBadToastVisible = useState("isBadToastVisible", () => false);
  const toastMessage = useState("toastMessage", () => "");

  function showBadToast(message) {
    toastMessage.value = message;
    isBadToastVisible.value = true;

    setTimeout(() => {
      isBadToastVisible.value = false;
    }, 5000);
  }

  function hideBadToast() {
    isBadToastVisible.value = false;
  }

  return {
    isBadToastVisible,
    toastMessage,
    showBadToast,
    hideBadToast,
  };
}
