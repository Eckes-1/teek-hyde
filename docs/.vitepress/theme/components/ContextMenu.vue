<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { useRouter } from 'vitepress';
import 'element-plus/dist/index.css';

// 定义菜单项类型
interface MenuItem {
    icon?: string;
    title: string;
    link?: string;
    children?: MenuItem[];
}

// 示例菜单数据
const menuItems: MenuItem[] = [
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '首页',
        link: '/',
    },
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '归档',
        children: [
            { icon: 'https://vp.teek.top/teek-logo-mini.svg', title: '分类', link: '/categories' },
            { icon: 'https://vp.teek.top/teek-logo-mini.svg', title: '标签', link: '/tags' },
            { icon: 'https://vp.teek.top/teek-logo-mini.svg', title: '时间轴', link: '/timeline' },
        ],
    },
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '其他',
        link: '/friends'
    },
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '音乐',
        link: '/music',
    },
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '相册',
        link: '/album',
    },
    {
        icon: 'https://vp.teek.top/teek-logo-mini.svg',
        title: '刷新页面',
        link: '#refresh',
    },
];

// 控制右键菜单的显示
const visible = ref(false);
const position = ref({ x: 0, y: 0 });
const archiveHover = ref(false);
const archiveMenuPos = ref({ x: 0, y: 0 });

const normalMenuItems = computed(() => menuItems.filter(item => !item.children || (item.title !== '归档' && item.title !== '其他')));
const archiveMenu = computed(() => menuItems.find(item => item.title === '归档'));
const otherMenu = computed(() => menuItems.find(item => item.title === '其他'));

const router = useRouter();

// 判断 icon 是否为图片链接
function isImgIcon(icon: string) {
    return (
        icon.startsWith('http://') ||
        icon.startsWith('https://') ||
        icon.startsWith('/') ||
        icon.endsWith('.svg') ||
        icon.endsWith('.png') ||
        icon.endsWith('.jpg') ||
        icon.endsWith('.jpeg') ||
        icon.endsWith('.webp')
    );
}

// 处理右键点击事件
const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    position.value = { x: event.clientX, y: event.clientY };
    visible.value = true;
    nextTick(() => {
        // 聚焦菜单，防止失焦被关闭
        const menu = document.querySelector('.context-menu-pop') as HTMLElement;
        menu?.focus();
    });
};

// 处理点击菜单项事件
const handleMenuClick = (item: MenuItem, isSub = false) => {
    visible.value = false;
    if (item.link) {
        if (item.link === '#refresh') {
            window.location.reload();
        } else if (!isSub) {
            // 一级菜单用 vitepress 路由跳转
            router.go(item.link);
        } else {
            // 二级菜单（归档下的子项）仍用 window.open
            window.open(item.link, '_self');
        }
    }
};

// 监听全局点击事件，点击其他地方关闭菜单
const handleClickOutside = (e: MouseEvent) => {
    const menu = document.querySelector('.context-menu-pop');
    if (menu && !menu.contains(e.target as Node)) {
        visible.value = false;
        archiveHover.value = false;
    }
};

const handleArchiveMouseEnter = (e: MouseEvent) => {
    archiveHover.value = true;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    archiveMenuPos.value = { x: rect.right, y: rect.top };
};
const handleArchiveMouseLeave = () => {
    // 延迟关闭，防止鼠标移动到子菜单时闪烁
    setTimeout(() => {
        if (!archiveHover.value) archiveHover.value = false;
    }, 120);
};
const handleArchiveSubMenuEnter = () => {
    archiveHover.value = true;
};
const handleArchiveSubMenuLeave = () => {
    archiveHover.value = false;
};

const handleMenuRootLeave = () => {
    archiveHover.value = false;
};

onMounted(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <teleport to="body">
        <div v-if="visible" class="context-menu-pop" :style="{ left: position.x + 'px', top: position.y + 'px' }"
            tabindex="-1" @mouseleave="handleMenuRootLeave">
            <div class="custom-context-menu">
                <div v-for="item in normalMenuItems" :key="item.title" class="menu-item"
                    @mouseenter="archiveHover = false"
                    @click.stop="() => { handleMenuClick(item, false); archiveHover = false; }">
                    <template v-if="item.icon">
                        <img v-if="isImgIcon(item.icon)" :src="item.icon" class="menu-icon-img" />
                        <span v-else-if="item.icon.startsWith('<svg')" class="menu-icon-svg" v-html="item.icon"></span>
                        <i v-else :class="item.icon"></i>
                    </template>
                    <span>{{ item.title }}</span>
                </div>
                <!-- 归档菜单自定义 hover 弹出 -->
                <div v-if="archiveMenu" class="archive-menu-item menu-item" @mouseenter="handleArchiveMouseEnter"
                    @mouseleave="handleArchiveMouseLeave">
                    <template v-if="archiveMenu.icon">
                        <img v-if="isImgIcon(archiveMenu.icon)" :src="archiveMenu.icon" class="menu-icon-img" />
                        <span v-else-if="archiveMenu.icon.startsWith('<svg')" class="menu-icon-svg"
                            v-html="archiveMenu.icon"></span>
                        <i v-else :class="archiveMenu.icon"></i>
                    </template>
                    <span>{{ archiveMenu.title }}</span>
                    <svg class="arrow-right" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="#7c3aed" d="M10 17l5-5-5-5v10z" />
                    </svg>
                    <div v-if="archiveHover" class="archive-sub-menu" :style="{ left: '100%', top: '0' }"
                        @mouseenter="handleArchiveSubMenuEnter" @mouseleave="handleArchiveSubMenuLeave">
                        <div v-for="child in archiveMenu.children" :key="child.title" class="archive-sub-menu-item"
                            @click.stop="handleMenuClick(child, true)">
                            <template v-if="child.icon">
                                <img v-if="isImgIcon(child.icon)" :src="child.icon" class="menu-icon-img" />
                                <span v-else-if="child.icon.startsWith('<svg')" class="menu-icon-svg"
                                    v-html="child.icon"></span>
                                <i v-else :class="child.icon"></i>
                            </template>
                            <span>{{ child.title }}</span>
                        </div>
                    </div>
                </div>
                <!-- 其他菜单依然下拉（如有需要可仿照归档处理） -->
                <div v-if="otherMenu" class="menu-item" @mouseenter="archiveHover = false"
                    @click.stop="() => { if (otherMenu) { handleMenuClick(otherMenu, false); } archiveHover = false; }">
                    <template v-if="otherMenu.icon">
                        <img v-if="isImgIcon(otherMenu.icon)" :src="otherMenu.icon" class="menu-icon-img" />
                        <span v-else-if="otherMenu.icon.startsWith('<svg')" class="menu-icon-svg"
                            v-html="otherMenu.icon"></span>
                        <i v-else :class="otherMenu.icon"></i>
                    </template>
                    <span>{{ otherMenu.title }}</span>
                </div>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.context-menu-pop {
    position: fixed;
    z-index: 9999;
    min-width: 180px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    padding: 6px 0;
    outline: none;
    animation: fadeIn 0.18s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.98);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.custom-context-menu {
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
}

.menu-item,
.archive-menu-item {
    border-radius: 10px;
    margin: 0 8px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    transition: background 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
}

.menu-item:hover,
.archive-menu-item:hover {
    background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
    color: #7c3aed;
}

.menu-icon-img {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    border-radius: 6px;
}

.menu-item i,
.archive-menu-item i {
    font-size: 20px;
    margin-right: 8px;
    color: #7c3aed;
}

.arrow-right {
    margin-left: auto;
    align-self: center;
}

.archive-sub-menu {
    position: absolute;
    left: 100%;
    top: 0;
    min-width: 150px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    z-index: 10000;
}

.archive-sub-menu-item {
    padding: 0 18px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}

.archive-sub-menu-item:hover {
    background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
    color: #7c3aed;
}

.archive-sub-menu-item i {
    font-size: 18px;
    margin-right: 8px;
    color: #7c3aed;
}

.menu-icon-svg {
    display: inline-flex;
    width: 22px;
    height: 22px;
    margin-right: 8px;
    vertical-align: middle;
}
</style>
