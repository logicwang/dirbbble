<template>
  <!-- 右侧详情页 -->
    <div class="wrap-right">
      <div class="max-width">
        <div class="header-right borderbottom">
          <div class="display padding">
            <el-button class="edit">
              <img src="../assets/image/edit.svg" class="icon" />
              <span class="name">Edit</span>
            </el-button>
            <el-button>
              <div class="delete">
                <img src="../assets/image/rightdelete.svg" class="icon" />
                <span class="name">Delete</span>
              </div>
            </el-button>
          </div>
          <div class="main-center">
            <div class="main-max">
              <div class="wordicon">
                <div class="icon-ouct">
                  <div class="password-left position">
                    <img
                      :src="detali.url"
                      class="img"
                      style="border-radius: 5px"
                    />
                  </div>
                </div>
                <div class="wenzi">
                  <div class="daobe">
                    <h1 class="name">
                      {{ detali.name }}
                    </h1>
                  </div>
                  <div class="login">
                    <span class="logicn">login</span>
                  </div>
                </div>
              </div>
              <div class="collection">
                <!-- <img
                  v-if="detali.favorties" 
                  @click="changeImg = true"
                  :src="getSrc()"
                  style="width: 27px; height: 27px"
                /> -->
                <img
                  v-if="detali.favorties" 
                  @click="changeImg = true"
                  src="../assets/image/收藏.svg"
                  style="width: 27px; height: 27px"
                />
                <img
                  v-if="!detali.favorties" 
                  @click="changeImg = true"
                  src="../assets/image/未收藏.svg"
                  style="width: 27px; height: 27px"
                />
              </div>
            </div>
          </div>
          <div class="main borderbottom">
            <div class="third">
              <div class="website xxx">
                {{ detali.website }}
              </div>
            </div>
            <div class="web">
              <span class="aaaaa">{{ detali.iitem }}</span>
            </div>
            <div class="username">
              <div class="color">
                <div class="word">
                  <h1 class="aasdadadwdawd">Password</h1>
                </div>
                <el-input
                  show-password
                  laber="password"
                  v-model="detali.input"
                  class="margintop"
                />
              </div>
            </div>
            <div class="website xxx">
              <span>{{ detali.web }}</span>
            </div>
            <div class="web">
              <a :href="detali.com">
                <span class="aaaaa">{{ detali.com }}</span>
              </a>
            </div>
            <div class="bottom">
              <div class="duanluo">
                <div class="xxx">
                  <span>
                    {{ detali.notes }}
                  </span>
                </div>
                <div class="great">
                  <p id="demo">
                    {{ detali.duanluotwo }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { details } from "../API/index";

export default {
  data() {
    return {
      detali: {}
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log("----newVal---->", newVal);
        newVal && this.getdetail();
      },
    },
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    getdetail() {
      // 详情页接口
      console.log("----this.$route---->", this.$route);
      const name = this.$route.params && this.$route.params.name;
      console.log("----name---->", name);
      name &&
        details({ name }).then((data) => {
          console.log("----stringify---->", JSON.stringify(data.data));
          this.detali = data.data;
          console.log("---this.detali--->", this.detali);
        });
    },
    // getSrc(){
    //   return this.detali.favorties ? '../assets/image/收藏.svg' : '../assets/image/未收藏.svg'
    // }
  },
};
</script>

<style lang="scss">
@import url(../assets/css/AdobDeTail.scss);
</style>