<template>
  <!-- 密码管理页面内容页 -->
  <div class="all-div">
    <div class="header-name">
      <div class="input">
        <div class="inputandcion">
          <el-input v-model="input">
            <i slot="prefix" class="prefix">
              <img class="hualigs" src="../assets/image/搜索.png" alt /> </i>
          </el-input>
        </div>
        <div class="icon-a">
          <img src="../assets/image/加号.png" class="icon-img" />
        </div>
      </div>
      <router-view />
      <div class="all-button">

        <AdobeApp />
        <!--AdobeApp -->
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
      <div>

      </div>
    </div>
    <AdobDeTail />
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
import AdobDeTail from "../detail/AdobDeTail.vue";
// 在此处引用button组件


export default {
  data() {
    return {
      input: "SearchVault ",
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
    DribbbleApp,
    AdobDeTail
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/css/HelloWorld.scss);
</style>