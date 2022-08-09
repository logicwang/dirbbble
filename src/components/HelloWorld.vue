<template>
  <!-- 密码管理页面详情页 -->
  <div class="header-name">
    <div class="input">
      <div class="inputandcion">
        <el-input v-model="input" placeholder="SearchVault">
          <i slot="prefix" style="display: flex; align-items: center">
            <img class="hualigs" src="https://s3.bmp.ovh/imgs/2022/08/02/873533b9a4ed4984.png" alt /> </i>
        </el-input>
      </div>
      <div class="icon-a">
        <img src="https://i.postimg.cc/h48qP5LM/o.png" class="icon-img" />
      </div>
    </div>
    <div class="all-button">
      <router-link to="/HelloWorld/AdobDeTail">
        <AdobeApp />
        <!--AdobeApp -->
      </router-link>
      <router-view></router-view>


      <AppleeApp />
      <!--AppleeApp-->

      <DribbbleApp />
      <!--DribbbleApp -->

      <EtsyApp />
      <!--EtsyApp -->

      <FaceBook />
      <!--FaceBook -->

      <GooGle />
      <!--GooGle -->

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
import GooGle from "../View/GooGle"
import InVisionBut from "../View/InVisionBut.vue"
import TeleGram from "../View/TeleGram.vue"
import AdobeApp from "../View/AdobeApp.vue";
import AppleeApp from "../View/AppleApp.vue";
import ImdbApp from "../View/ImdbApp.vue";
import FaceBook from "../View/FaceBook.vue";
import EtsyApp from "../View/EtsyApp.vue";
import DribbbleApp from "../View/DribbbleApp.vue";
// 在此处引用button组件


export default {
  data() {
    return {
      input: " ",
    };
  },
  components: {
    TeleGram,
    GooGle,
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

<style lang="scss" scoped>
@import url(../assets/css/HelloWorld.scss);
</style>