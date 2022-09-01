<template>
    <!-- Apple按钮 -->
    <div class="password-all">
        <div class="password-leftwhite">
            <img class="imag" src="../assets/image/apple.png" />
        </div>
        <div class="password-right">
            <div class="password-jkl">
                <h1 class="title">{{ title }}</h1>
                <h2 class="des">{{ des }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        des: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin: 0;
    color: #fff;
    font-size: 15px;
}

.des {
    margin: 0;
    font-size: 12px;
    color: #575d64;
}
</style>