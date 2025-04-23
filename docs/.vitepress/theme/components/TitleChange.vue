<template>
    <div class="title-changer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEventListener } from '@vueuse/core'

export default defineComponent({
    props: {
        hiddenTitle: {
            type: String,
            default: 'w(ﾟДﾟ)w 不要走！再看看嘛！'
        },
        returnTitle: {
            type: String,
            default: '♪(^∇^*)欢迎回来！'
        }
    },

    setup(props) {
        let originTitle = document.title
        let titleTimer: ReturnType<typeof setTimeout>
        let stopListener: () => void

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = props.hiddenTitle
                clearTimeout(titleTimer)
            } else {
                document.title = props.returnTitle
                titleTimer = setTimeout(() => {
                    document.title = originTitle
                }, 2000)
            }
        }

        stopListener = useEventListener(document, 'visibilitychange', handleVisibilityChange)

        return {
            originTitle,
            stopListener
        }
    },

    beforeUnmount() {
        this.stopListener()
        clearTimeout(this.titleTimer)
    }
})
</script>