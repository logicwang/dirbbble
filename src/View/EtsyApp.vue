<template>
    <button class="password">
        <div class="password-all">
            <div class="password-leftb">
                <img class="imcg" src="https://s3.bmp.ovh/imgs/2022/08/02/6d519513ab7b2c12.png" />
            </div>
            <div class="password-righta">
                <div class="password-jklb">
                    <div class="password-name">
                        <li v-for="item in Etsy" :key="item.name">
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
            Etsy: [{ name: "Etsy" }],
            items: [{ aaa: "thomas@gmail.com" }],
        }
    }
}
</script>

<style>
</style>