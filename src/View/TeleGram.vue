<template>
    <!-- Telegram按钮 -->
    <button class="password">
        <div class="password-all">
            <div class="password-leftd">
                <img class="imeg" src="../assets/image/telegram.png" />
            </div>
            <div class="password-righta">
                <div class="password-jklb">
                    <div class="password-name">
                        <li v-for="item in TeleGram" :key="item.name">
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
            name: 'PassWord',
            TeleGram: [{ name: "Telegram" }],
            items: [{ aaa: "thomas@gmail.com" }],
        };
    },
    // methods: {},
};
</script>

<style >
@import url(../assets/css/button.scss);
</style>