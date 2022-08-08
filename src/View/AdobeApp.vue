<template>
    <button class="password">
        <!-- Adobe -->
        <div class="password-all">
            <div class="password-left">
                <img class="img" src="https://s3.bmp.ovh/imgs/2022/08/02/c6b8d6da68ee70d9.png" />
            </div>
            <div class="password-right">
                <div class="password-jkl">
                    <div class="password-name">
                        <li v-for="item in objects" :key="item.bbb">
                            <span class="ado">{{ item.bbb }}</span>
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
            objects: [{ bbb: "Adobe" }],
        };
    }
}

</script>
<style>
@import url(../assets/css/button.scss);
</style>