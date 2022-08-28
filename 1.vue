<template>
    <div>
        <button @click="xxxxxx" :style="{ color: color }"></button>
        <adobe-app />
    </div>
</template>

<script>
import AdobeApp from '组件路金'
export default {
    // props 组件传参
    props: {
        title: {
            type: String, // 类型
            default: '123'// 默认值
        },
        num: {
            type: Number, // 类型
            default: 0
        },

        data: {
            type: Array,
            default: () => []
        },
        obj: {
            type: Object,
            default: () => { }
        }
    },
    // components 放引入的组件
    components: { AdobeApp },
    data() {
        // 所有动态属性放return里面
        return {
            color: '',
            newData: []
        }
    },
    // watch 监听疏浚变化
    watch: {
        '$route.query'(data) {
            // 监听路由参数变化
        },
        color(str) {
            // str 是最新的变化
        },
        newData: {
            handler(v) {

            },
            deep: true
        }
    },
    created() {
        // 初始化，页面加载前会走这里
    },
    mounted() {
        // 页面加载后走这里。一般要么 created  要么mounted
    },
    methods: {
        // 所有方法放methods 
        xxxxxx() {
            this.color = 'red'
        }
    }
}
</script>