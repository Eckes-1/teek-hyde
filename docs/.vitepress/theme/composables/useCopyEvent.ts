// 导出 showWaveBanner 函数供其他组件使用
export function useCopyEvent(): void {
  document.addEventListener("copy", showWaveBanner);
}

export function showWaveBanner(): void {
  // 避免重复创建弹窗
  if (document.querySelector(".wave-banner")) return;

  const banner = document.createElement("div");
  banner.className = "wave-banner"; // 初始无visible类
  banner.innerHTML = `
    <div class="wave-content">
      <h1>复制成功，复制和转载请标注本文地址！</h1>
    </div>
    <div class="wave-progress">
      <div class="wave-progress-bar"></div>
    </div>
  `;

  document.body.appendChild(banner);

  // 延迟添加visible类以触发滑入动画
  setTimeout(() => {
    banner.classList.add("wave-banner-visible");
  }, 10);

  // 3秒后滑出并移除
  setTimeout(() => {
    banner.classList.remove("wave-banner-visible");
    // 等待滑出动画结束后移除元素
    setTimeout(() => banner.remove(), 500);
  }, 3000);
}
