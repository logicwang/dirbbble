<template>
    <!-- Apple按钮 -->
    <button class="password">
        <div class="password-all">
            <div class="password-leftwhite">
                <img class="imag" src="../assets/image/apple.png" />
            </div>
            <div class="password-right">
                <div class="password-jkl">
                    <div class="password-name">
                        <li v-for="item in apple" :key="item.name">
                            <span class="ado">{{ item.name }}</span>
                        </li>
                    </div>
                    <div class="password-job">
                        <li v-for="item in items" :key="item.aaa">
                            <span class="job">{{ item.aaa }}</span>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </button>
</template>

<script>
export default {
    data() {
        return {
            apple: [{ name: "Apple" }],
            items: [{ aaa: "thomas@gmail.com" }],

        }
    }
}
</script>

<style>
@import url(../assets/css/button.scss);
</style>