<template>
  <!-- 密码管理页面详情页 -->
  <div class="header-name">
    <div class="input">
      <div class="inputandcion">
        <el-input v-model="input" placeholder="Search Vault">
          <i slot="prefix" style="display: flex; align-items: center">
            <img class="hualigs" src="https://s3.bmp.ovh/imgs/2022/08/02/873533b9a4ed4984.png" alt /> </i>
        </el-input>
      </div>
      <div class="icon-a">
        <img src="https://i.postimg.cc/h48qP5LM/o.png" class="icon-img" />
      </div>
    </div>
    <div class="all-button">

      <router-link to="/HelloWorld/AdobDeTails">
        <AdobeApp />
        <!--AdobeApp -->
      </router-link>


      <AppleeApp />
      <!--AppleeApp-->

      <DribbbleApp />
      <!--DribbbleApp -->

      <EtsyApp />
      <!--EtsyApp -->

      <FaceBook />
      <!--FaceBook -->

      <PassWord />
      <!--PassWord -->

      <ImdbApp />
      <!-- ImdbApp -->

      <InVisionBut />
      <!-- InVisionBut -->

      <TeleGram />
      <!-- PasswordApp -->
    </div>
  </div>
</template>

<script>
import PassWord from "../View/Password"
import InVisionBut from "../View/InVisionBut.vue"
import TeleGram from "../View/TeleGram.vue"
import AdobeApp from "../View/AdobeApp.vue";
import AppleeApp from "../View/AppleApp.vue";
import ImdbApp from "../View/ImdbApp.vue";
import FaceBook from "../View/FaceBook.vue";
import EtsyApp from "../View/EtsyApp.vue";
import DribbbleApp from "../View/DribbbleApp.vue";

export default {
  data() {
    return {
      input: "",
    };
  },
  components: {
    TeleGram,
    PassWord,
    InVisionBut,
    AdobeApp,
    AppleeApp,
    ImdbApp,
    FaceBook,
    EtsyApp,
    DribbbleApp
  },
};
</script>

<style lang="scss">
li {
  list-style: none;
}

ul {
  margin: 0;
}

input {
  outline: none;
}

.header-name {
  width: 390px;
  height: 670px;
  background-color: rgb(30 30 30);
}

.icon-user {
  width: 20px;
  height: 20px;
}

.input-text {
  color: rgb(24 24 24 / 80%);
  background: transparent;
  padding: 0px 20px;
  outline: none;
  width: 183px;
  height: 21px;
  background-image: url(https://tva1.sinaimg.cn/large/0074R88yly8h4parmj1u0j300k00k0d2.jpg);
  border-radius: 10px;
}

.address {
  color: red;
}

.input {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.el-input__inner {

  background-color: #404040;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: #686868;


  height: 30px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 126%;
}

.icon-a {
  border-radius: 7px;
  background-color: #005fe4;
  width: 30px;
  height: 30px;
}

.icon-img {
  width: 20px;
  height: 20px;
  position: relative;
  left: 4px;
  top: 4px;
}

.hualigs {
  display: flex;
  align-items: center;
  position: relative;
  top: 7px;
  left: 2px;
  width: 17px;
  height: 17px;
}

.job {
  color: #8f8f8f;
}

.ado {
  color: #fff;
  float: left;
  font-weight: 500;
  font-size: 14px;
}

.password-right {
  padding-left: 16px;
}

.password-left {
  width: 45px;
  height: 45px;
  background: #d81e06;
  border-radius: 5px;
}

.password-leftwhite {
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 5px;
}


// .password-righta {
//   padding-left: 5px;
// }

.imag {
  width: 30px;
  height: 30px;
  position: relative;
  top: 8px;
}

.img {
  width: 33px;
  height: 33px;
  position: relative;
  top: 6px;
}

.imbg {
  width: 55px;
  height: 55px;
  position: relative;
  right: 4px;
}

.password-leftb {
  background-color: rgb(211, 97, 18);
  /* width: 30px; */
  width: 45px;
  height: 45px;
  border-radius: 10px;
}

.password-leftc {
  background-color: rgb(58, 74, 140);
  /* width: 30px; */
  width: 45px;
  height: 45px;
  border-radius: 10px;
}

// .password-leftd {
//   background-color: #fff;
//   width: 45px;
//   height: 45px;
//   border-radius: 6px;
// }

.password-lefte {
  background-color: #efb700;
  width: 45px;
  height: 45px;
  border-radius: 6px;
}

.imcg {
  position: relative;
  top: 12px;
}

.imdg {
  width: 31px;
  position: relative;
  top: 5px;
  right: 5px;
}

.imeg {
  position: relative;
  left: 0px;
  top: 5px;
  width: 38px;
  height: 36px;
}

.password-jkl {
  padding-left: 12px;
}

.password-jklb {
  padding-left: 20px;
}
</style>