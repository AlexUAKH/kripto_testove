import { onBeforeUnmount, onMounted, Ref } from "vue";

export const useClickOutside = (
  el: Ref<HTMLBaseElement | null>,
  cb: () => void
) => {
  console.log("yuiop", el.value);

  const listener = (e: MouseEvent) => {
    console.log("clo");

    if (
      !el.value ||
      el.value === e.target ||
      e.composedPath().includes(el.value)
    )
      return;

    if (typeof cb === "function") {
      cb();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
};
