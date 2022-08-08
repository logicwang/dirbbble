<template>
    <!-- Telegram按钮 -->
    <button class="password">
        <div class="password-all">
            <div class="password-leftd">
                <img class="imeg" src="https://s3.bmp.ovh/imgs/2022/08/03/61220035d1bab3cc.png" />
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

<style lang="scss">
.pass {
    background-color: #1e1e1e;
    border-color: transparent;
    margin-left: 45px;
    padding: 10px;

    .pass-all {
        display: flex;
        justify-content: flex-start;
    }

    .pass-leftd {
        background-color: #fff;
        width: 45px;
        height: 45px;
        border-radius: 6px;

        .imeg {
            position: relative;
            left: 0px;
            top: 5px;
            width: 38px;
            height: 36px;
        }
    }

    .pass-righta {
        padding-left: 5px;

        .pass-jklb {
            padding-left: 20px;
        }

        .pass-name {
            padding: 4px 0 10px 0;

            .ado {
                color: #fff;
                float: left;
                font-size: 18px;
            }
        }

        .job {
            color: #8f8f8f;
        }
    }
}
</style>