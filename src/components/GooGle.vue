<template>
  <!-- Google按钮 -->
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
.password {
  padding: 0;
  width: 275px;
  background: #1e1e1e;
  height: 65px;
  margin: 5px 0 0 45px;
  border: none;
}

.password-all {
  display: flex;
  padding: 10px;
  justify-content: flex-start;
}

.password-leftd {
  background-color: #fff;
  width: 45px;
  height: 45px;
  border-radius: 6px;
}

.password-leftp {
  background-color: #fff;
  width: 45px;
  height: 45px;
  border-radius: 6px;
}

.imeg {
  position: relative;
  left: 4px;
  top: 5px;
  width: 38px;
  height: 36px;
}

.password-righta {
  padding-left: 5px;
}

.password-jklb {
  padding-left: 20px;
}

.password-name {
  padding: 10px 0 10px 0;
}

.job {
  color: #8f8f8f;
}

.ado {
  color: #fff;
  float: left;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  bottom: 5px;
}

.img-position {
  position: relative;
  top: 9px;
  left: 9px;
}

.all-button button {
  padding: 0;
  border: none;
  background-color: rgb(30 30 30);
}
</style>