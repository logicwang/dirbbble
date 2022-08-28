<template>
    <button class="password">
        <!-- Adobe -->
        <div class="password-all">
            <div class="password-left position">
                <img class="img img-position" src="../assets/image/Adobe.png" />
            </div>
            <div class="password-right">
                <div class="password-jkl">
                    <div class="password-name">
                        <span class="ado" v-for="item in objects" :key="item.bbb">{{ item.bbb }}</span>
                    </div>
                    <div class="password-job">
                        <span class="job" v-for="item in items" :key="item.aaa">{{ item.aaa }}</span>
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