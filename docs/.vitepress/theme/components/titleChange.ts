import { onUnmounted } from "vue";
import { useEventListener } from "@vueuse/core";

export function useTitleChange() {
  let originTitle = document.title;
  let titleTimer: ReturnType<typeof setTimeout>;

  const handler = () => {
    if (document.hidden) {
      document.title = "w(ﾟДﾟ)w 不要走！再看看嘛！";
      clearTimeout(titleTimer);
    } else {
      document.title = "♪(^∇^*)欢迎回来！";
      titleTimer = setTimeout(() => {
        document.title = originTitle;
      }, 2000);
    }
  };

  const stop = useEventListener(document, "visibilitychange", handler);

  onUnmounted(() => {
    stop();
    clearTimeout(titleTimer);
  });
}
