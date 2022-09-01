<template>
  <!-- 密码管理页面内容页 -->
  <div class="all-div">
    <div class="header-name">
      <div class="center">
        <div class="input">
          <div class="inputandcion">
            <el-input v-model="input" class="helloworldinput">
              <i slot="prefix" class="prefix">
                <img class="hualigs" src="../assets/image/搜索.png" alt /> </i>
            </el-input>
          </div>
          <div class="icon-a">
            <img src="../assets/image/加号.png" class="icon-img" />
          </div>
        </div>
        <div class="all-button">
          <div v-if="items && items.length > 0">
            <li v-for="item in items" :key="item.name">
              <AppleeApp :title="item.name" :des="item.email" />
            </li>
          </div>
          <DribbbleApp />
          <EtsyApp />
          <FaceBook />
          <GooGle />
          <ImdbApp />
          <InVisionBut />
          <TeleGram />
        </div>
      </div>
    </div>
    <AdobDeTail />
  </div>
</template>

<script>
import { reqCategoryList } from '../API/index'
// import GooGle from "../components/GooGle.vue"
// import InVisionBut from "../components/InVisionBut.vue"
// import TeleGram from "../components/TeleGram.vue"
// import AdobeApp from "../components/AdobeApp.vue";
import AppleeApp from "../components/AppleApp.vue";
// import ImdbApp from "../components/ImdbApp.vue";
// import FaceBook from "../components/FaceBook.vue";
// import EtsyApp from "../components/EtsyApp.vue";
// import DribbbleApp from "../components/DribbbleApp.vue";
import AdobDeTail from "../detail/AdobDeTail.vue";
// 在此处引用button组件


export default {
  data() {
    return {
      input: "SearchVault ",
      color: '',
      // classname: [],
      items: []
    }
  },
  mounted() {
    reqCategoryList().then((data) => {
      console.log(data)
      this.items = data.data
    })
  },
  methods: {
  },
  components: {
    // TeleGram,
    // GooGle,
    // InVisionBut,
    // AdobeApp,
    AppleeApp,
    // ImdbApp,
    // FaceBook,
    // EtsyApp,
    // DribbbleApp,
    AdobDeTail
  },
};
</script> 

<style lang="scss" scoped>
@import url(../assets/css/HelloWorld.scss);
</style>