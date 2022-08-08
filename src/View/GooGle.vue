<template>
  <!-- Google按钮 -->
  <button class="password">
    <div class="password-all">
      <div class="password-leftd">
        <img class="imeg" src="https://s3.bmp.ovh/imgs/2022/08/02/bdde204635075c55.png" />
      </div>
      <div class="password-righta">
        <div class="password-jklb">
          <div class="password-name">
            <li v-for="item in Google" :key="item.name">
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
  name: "PasswordApp",
  data() {
    return {
      Google: [{ name: "Google" }],
      items: [{ aaa: "thomas@gmail.com" }],
    };
  },
};
</script>

<style>
@import url(../assets/button.scss);
</style>