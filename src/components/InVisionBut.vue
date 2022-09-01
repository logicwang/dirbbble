<template>
    <!-- InVision按钮 -->
    <div class="password-all">
        <div class="password-leftp">
            <img class="imeg" src="../assets/image/bxl-invision.png" />
        </div>
        <div class="password-righta">
            <div class="password-jklb">
                <div class="password-name">
                    <span class="ado" v-for="item in InVision" :key="item.name">{{  item.name  }}</span>
                </div>
                <div class="password-job">
                    <span class="job" v-for="item in items" :key="item.aaa">{{  item.aaa  }}</span>
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
            InVision: [{ name: "InVision" }],
        };
    }
}

</script>

<style>
@import url(../assets/css/button.scss);
</style>