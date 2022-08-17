<template>
    <div class="wrap-right">
        <div class="max-width">
            <div class="header-right borderbottom">
                <div class="display padding">
                    <div class="edit">
                        <svg t="1660048620062" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1944" width="20" height="20">
                            <path
                                d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zM257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z"
                                p-id="1945" fill="#bfbfbf"></path>
                        </svg>
                        <span class="name">edit</span>
                    </div>
                    <div class="delete">
                        <svg t="1660048661978" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1968" width="20" height="20">
                            <path
                                d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z"
                                p-id="1969" fill="#cdcdcd"></path>
                        </svg>
                        <span class="name">delete</span>
                    </div>
                </div>
                <div class="main-center">
                    <div class="main-max">
                        <div class="icon-ouct">
                            <div class="password-left">
                                <img src="../assets/image/Adobe.png" class="Adobe img">
                            </div>
                        </div>
                        <div class="wenzi">
                            <div class="daobe">
                                <h1 class="name">Adobe</h1>
                            </div>
                            <div class="login">
                                <span class="logicn">login</span>
                            </div>
                        </div>
                        <div class="collection">
                            <img src="../assets/image/收藏.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="username">
                <li v-for="item in name" :key="item.name">
                    <span class="xxx">{{ item.name }}</span>
                </li>
                <li v-for="item in items" :key="item.aaa">
                    <span class="job">{{ item.aaa }}</span>
                </li>
                <div class="word">
                    <span class="padsss">Password</span>
                </div>
                <div class="private">
                    <!--// 显示内容: ==0时显示*，==1时显示密钥内容 -->
                    <span v-if="codeType == 1">{{ privates }}</span>
                    <span class="special" v-if="codeType == 0">{{ star }}</span>
                    <!--// 小图标: ==0时展示隐藏图标，==1时展示显示图标-->
                    <span v-if="codeType == 1"><img @click="reveal"
                            src="https://s4.ax1x.com/2022/01/07/79E7dg.png"></span>
                    <span v-if="codeType == 0"><img @click="conceal"
                            src="https://s4.ax1x.com/2022/01/07/79EOWn.png"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: [{ name: "username" }],
            items: [{ aaa: "thomas@gmail.com" }],
            privates: "123456789123456789123456789", //密钥内容
            codeType: 0, //控制密钥显示隐藏 等于1时显示，等于0时隐藏
            star: "", //要插入的星星*
        }
    },
    mounted() {
        // 循环遍历拿到密钥的长度
        for (var i = 0; i < this.privates.length; i++) {
            let star = this.star.split('') //分割成字符串数组
            star.splice(this.privates.length, this.privates.length, '*') //添加到数组
            this.star = star.join('') //将数组转换为字符串
        }
    },
    methods: {
        //显示事件
        reveal() {
            this.codeType = 0
        },
        //隐藏事件
        conceal() {
            this.codeType = 1
        },
    }
}

</script>

<style lang="scss">
@import url(../assets/css/AdobDeTail.scss);
</style>