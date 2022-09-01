<template>
    <!-- Dribbble按钮 -->
    <div class="password-all">
        <div class="password-lefta">
            <img class="imbg" src="../assets/image/dribbble-square-fill.png" />
        </div>
        <div class="password-righta">
            <div class="password-jkl">
                <div class="password-name">
                    <li v-for="item in Dribbble" :key="item.name">
                        <span class="ado">{{  item.name  }}</span>
                    </li>
                </div>
                <div class="password-job">
                    <li v-for="item in items" :key="item.aaa">
                        <span class="job">{{  item.aaa  }}</span>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{ aaa: "thomas@gmail.com" }],
            Dribbble: [{ name: "Dribbble" }],
        }
    }
}
</script>

<style>
@import url(../assets/css/button.scss);
</style>