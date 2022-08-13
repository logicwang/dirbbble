<template>
  <!-- Google按钮 -->
  <button class="password">
    <div class="password-all">
      <div class="password-leftd">
        <img class="imeg" src="../assets/image/google (1).png" />
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
@import url(../assets/css/button.scss);
</style>