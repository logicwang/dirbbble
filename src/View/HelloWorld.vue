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
              <AppleeApp :title="item.name" :des="item.email" :eal="item.url" />
            </li>
          </div>
        </div>
      </div>
    </div>
    <AdobDeTail />
  </div>
</template>

<script>
import { reqCategoryList } from '../API/index'
import AppleeApp from "../components/AppleApp.vue";
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
    AppleeApp,
    AdobDeTail
  },
};
</script> 

<style lang="scss" scoped>
@import url(../assets/css/HelloWorld.scss);
</style>