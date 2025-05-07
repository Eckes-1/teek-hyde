<template>
    <!-- 这里可以添加组件的模板内容，如果不需要显示特定内容，可以为空 -->
    <div></div>
</template>

<script lang="ts" setup>
import { TkMessage } from "vitepress-theme-teek";
import { watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

// 获取当前时间并格式化为字符串
const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

// 根据不同时间段生成提示信息
const getGreeting = (currentTime: string) => {
    const hours = parseInt(currentTime.split(':')[0]);
    if (hours >= 6 && hours <= 11) {
        return `早上好呀~现在是 ${currentTime} 吃早餐了吗？😊🤭`;
    } else if (hours >= 12 && hours <= 16) {
        return `下午好呀~，现在是 ${currentTime} 繁忙的下午也要适当休息哦🥤🏀~~`;
    } else if (hours >= 16 && hours <= 19) {
        return `到黄昏了~现在是 ${currentTime} 该准备吃饭啦🥗🍖~`;
    } else if (hours >= 19 || hours === 0) {
        return `晚上好呀~，现在是 ${currentTime}该准备洗漱睡觉啦🥱😪~`;
    } else {
        return `别再熬夜了~现在是 ${currentTime}早点睡吧，让我们一起欣赏早上的太阳~😇🛏`;
    }
};

// 首次进入首页时触发（解决初始加载不提示的问题）
if (route.path === "/") {
    const currentTime = getCurrentTime();
    const greeting = getGreeting(currentTime);
    TkMessage.info(greeting);
}

// 监听路由变化（包括从其他页面切换到首页）
watch(route, (newRoute) => {
    const currentTime = getCurrentTime();
    const greeting = getGreeting(currentTime);
    TkMessage.info(greeting);
});
</script>

<style scoped>
/* 这里可以添加组件的样式，如果不需要样式，可以为空 */
</style>