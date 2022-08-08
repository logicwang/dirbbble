<template>
    <!-- InVision按钮 -->
    <button class="password">
        <div class="password-all">
            <div class="password-leftd">
                <img class="imeg" src="https://s3.bmp.ovh/imgs/2022/08/03/ad11eef905dd11f5.png" />
            </div>
            <div class="password-righta">
                <div class="password-jklb">
                    <div class="password-name">
                        <li v-for="item in InVision" :key="item.name">
                            <span class="ado">{{ item.name }}</span>
                        </li>
                        <div class="clear" />
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
            items: [{ aaa: "thomas@gmail.com" }],
            InVision: [{ name: "InVision" }],
        };
    }
}

</script>

<style>
@import url(../assets/button.scss);
</style>