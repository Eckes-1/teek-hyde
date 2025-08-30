<template>
  <div class="copyright-notice">
    <!-- 右上角图标 -->
    <TkIcon 
      class="corner-icon"
      :icon="cc" 
      icon-type="svg" 
      size="18px"
    />
    
    <p class="copyright-line">
      <TkIcon :icon="usericon" icon-type="svg" size="22px" />
      文章作者：<a :href="authorLink" class="author-link">{{ author }}</a>
    </p>
    <p class="copyright-line">
      <TkIcon :icon="linkicon" icon-type="svg" size="22px" />
      文章链接：
      <a :href="fullArticleUrl" target="_blank" rel="noopener noreferrer" class="url-link">
        {{ displayArticleUrl }}
      </a>
    </p>
    <p class="copyright-line">
      <TkIcon :icon="copyright" icon-type="svg" size="22px" />
      版权声明：本博客所有文章除特别声明外，均采用 
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="license-link">
        BY-NC-SA 4.0
      </a>
      许可协议。 转载请注明来自 <a :href="authorLink" class="author-link">{{ author }}</a>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';
// 导入图标组件
import { TkIcon } from "vitepress-theme-teek";

const usericon = `<svg t="1756581446267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6119" width="256" height="256"><path d="M512 68.191078c-245.204631 0-443.808922 198.60429-443.808922 443.808922s198.60429 443.808922 443.808922 443.808922 443.808922-198.60429 443.808922-443.808922S757.203608 68.191078 512 68.191078zM512 201.333448c73.449849 0 133.142369 59.69252 133.142369 133.142369 0 73.671906-59.69252 133.142369-133.142369 133.142369s-133.142369-59.470463-133.142369-133.142369C378.857631 261.025968 438.549128 201.333448 512 201.333448zM512 831.541687c-111.174032 0-208.81177-56.80782-266.284739-142.906757 1.109264-88.096431 177.745217-136.693242 266.284739-136.693242s264.953418 48.596811 266.284739 136.693242C720.81177 774.73489 623.174032 831.541687 512 831.541687z" p-id="6120" fill="#539dfd"></path></svg>`

const linkicon = `<svg t="1756581827595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15752" width="256" height="256"><path d="M438.272 256c-14.336 18.432-36.864 24.576-59.392 18.432-20.48-8.192-34.816-26.624-34.816-49.152 0-18.432 8.192-32.768 22.528-43.008l67.584-67.584c86.016-88.064 210.944-122.88 327.68-90.112C880.64 51.2 972.8 143.36 1003.52 262.144s-4.096 243.712-90.112 327.68L839.68 663.552c-14.336 16.384-36.864 20.48-57.344 12.288-20.48-8.192-32.768-26.624-32.768-49.152 0-18.432 8.192-34.816 24.576-43.008l57.344-57.344c59.392-59.392 81.92-145.408 61.44-227.328-22.528-81.92-83.968-143.36-165.888-165.888-81.92-22.528-167.936 2.048-227.328 61.44l-61.44 61.44zM241.664 450.56l-45.056 45.056c-59.392 59.392-81.92 145.408-61.44 227.328 22.528 81.92 83.968 143.36 165.888 165.888 81.92 22.528 167.936-2.048 227.328-61.44l47.104-47.104c10.24-16.384 30.72-26.624 51.2-22.528 20.48 2.048 36.864 16.384 43.008 34.816 6.144 18.432 2.048 38.912-12.288 53.248L593.92 909.312c-86.016 88.064-210.944 122.88-327.68 90.112-118.784-30.72-210.944-122.88-241.664-241.664-30.72-118.784 4.096-243.712 90.112-327.68l59.392-59.392c10.24-12.288 24.576-18.432 38.912-18.432 22.528 0 43.008 14.336 51.2 36.864 6.144 24.576-4.096 49.152-22.528 61.44z m471.04-141.312c32.768 32.768 32.768 83.968 0 116.736L438.272 700.416c-32.768 32.768-83.968 32.768-116.736 0-32.768-32.768-32.768-83.968 0-116.736l274.432-274.432c30.72-32.768 83.968-32.768 116.736 0z m0 0" fill="#539dfd" p-id="15753" data-spm-anchor-id="a313x.search_index.0.i7.16223a81dV5Bmu" class="selected"></path></svg>`

const copyright = `<svg t="1756581951708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17642" width="256" height="256"><path d="M512 1024C229.232 1024 0 794.768 0 512 0 229.232 229.232 0 512 0 794.768 0 1024 229.232 1024 512 1024 794.768 794.768 1024 512 1024ZM560 240C560 213.488 538.512 192 512 192 485.488 192 464 213.488 464 240L464 592C464 618.512 485.488 640 512 640 538.512 640 560 618.512 560 592L560 240ZM512 736C485.488 736 464 757.488 464 784 464 810.512 485.488 832 512 832 538.512 832 560 810.512 560 784 560 757.488 538.512 736 512 736Z" fill="#539dfd" p-id="17643"></path></svg>`

const cc = `<svg t="1756582892060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12422" width="256" height="256"><path d="M512 0c282.624 0 512 229.376 512 512s-229.376 512-512 512S0 794.624 0 512 229.376 0 512 0z m0 256c-141.312 0-256 114.688-256 256a256.1024 256.1024 0 0 0 475.5456 131.6864l-87.808-52.6336a153.6 153.6 0 1 1 0.0512-158.0544l87.7568-52.736A255.9488 255.9488 0 0 0 512 256z" fill="#539dfd" p-id="12423" data-spm-anchor-id="a313x.search_index.0.i11.52943a81UvujRT" class="selected"></path></svg>`

// 文章作者变量
const author = ref('Hyde');
// 作者链接
const authorLink = ref('https://teek.seasir.top/');
// 完整文章链接（用于实际跳转）
const fullArticleUrl = ref('');
// 显示用的文章链接（简洁版）
const displayArticleUrl = ref('');
// 获取当前路由实例
const route = useRoute();

// 路径映射表 - 长路径对应短路径的映射关系
const pathMapping = {
  '/10.笔记专栏/01.Teek/04.配置/02.头像配置': '/Twikoo',
  // 添加更多路径映射
  // '/原长路径': '/对应的短路径',
};

// 简化URL获取逻辑
const updateArticleUrl = () => {
  if (typeof window !== 'undefined') {
    // 获取当前完整URL，移除hash部分
    const url = new URL(window.location.href);
    const cleanUrl = `${url.protocol}//${url.host}${url.pathname}`;
    
    // 查找是否有对应的短路径映射
    const mappedPath = pathMapping[url.pathname] || url.pathname;
    const displayUrl = `${url.protocol}//${url.host}${mappedPath}`;
    
    fullArticleUrl.value = cleanUrl;
    displayArticleUrl.value = displayUrl;
  }
};

// 初始加载时获取
onMounted(() => {
  // 延迟一点确保页面完全加载
  setTimeout(updateArticleUrl, 100);
});

// 监听路由变化
watch(
  () => route.path,
  () => {
    // 路由变化时更新URL
    setTimeout(updateArticleUrl, 100);
  },
  { immediate: true }
);
</script>

<style scoped>
.copyright-notice {
  font-size: 14px;
  color: #666;
  padding: 1.2rem;
  margin-top: 2rem;
  line-height: 1.6;
  
  /* 边框样式 */
  border: 1px solid #e2e2e3;
  border-radius: 8px;
  transition: all .2s;
  
  /* 相对定位，用于右上角图标的绝对定位 */
  position: relative;
}

/* 右上角图标样式 */
.corner-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
}

/* 容器hover效果 */
.copyright-notice:hover {
  border-color: var(--vp-c-tip-1);
}

.copyright-line {
  display: flex;
  align-items: flex-start; /* 改为顶部对齐，适应换行 */
  flex-wrap: wrap; /* 允许换行 */
  word-break: break-all; /* 强制长单词换行 */
}

.copyright-line + .copyright-line {
  margin-top: 0.5rem;
}

/* 左侧图标样式调整 */
.copyright-line > .tk-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px; /* 图标与文字之间的间距 */
  margin-top: 2px; /* 微调图标位置，与文字对齐 */
  flex-shrink: 0; /* 防止图标被压缩 */
}

/* 链接基础样式 */
.copyright-notice a {
  text-decoration: none;
  transition: all .2s;
}

/* 链接hover样式 */
.copyright-notice a:hover {
  color: var(--vp-c-tip-1);
  text-decoration: underline;
}

/* 作者链接样式 */
.author-link {
  font-weight: 600;
  color: var(--vp-c-tip-1);
}

/* 文章链接样式 */
.url-link {
  color: var(--vp-c-tip-1);
}

/* 许可协议链接样式 */
.license-link {
  color: var(--vp-c-tip-1);
}

/* 移动端优化 - 保持一行布局，超出换行 */
@media (max-width: 768px) {
  .copyright-notice {
    padding: 1rem;
  }
  
  /* 链接换行优化 */
  .url-link {
    word-break: break-all;
    overflow-wrap: break-word;
  }
  
  /* 作者和许可协议链接也优化换行 */
  .author-link,
  .license-link {
    word-break: break-word;
    overflow-wrap: break-word;
  }
}
</style>