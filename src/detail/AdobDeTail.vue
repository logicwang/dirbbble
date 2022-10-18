<template>
  <!-- 右侧详情页 -->
  <div class="wrap-right">
    <div class="max-width">
      <div class="header-right">
        <div class="display padding">
          <button class="edit">
            <img src="../assets/image/edit.svg" class="icon" />
            <span class="name" @click="edit()">Edit</span>
          </button>
          <button class="edit">
            <img src="../assets/image/save.svg" class="icon" />
            <span class="name" @click="edit()">Save</span>
          </button>
          <button>
            <div class="delete">
              <img src="../assets/image/rightdelete.svg" class="icon" />
              <span class="name" @click="edit()">Delete</span>
            </div>
          </button>
        </div>
        <div class="main-center">
          <div class="main-max">
            <div class="wordicon">
              <div class="password-left position">
                <img
                  :src="detali.imgrul"
                  class="img"
                  style="border-radius: 5px"
                />
              </div>
              <div class="wenzi">
                <input :value="detali.name" class="name" />
                <div class="namelogin">
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
        <div class="main">
          <div class="third">
            <span class="website xxx">Username</span>
          </div>
          <div class="web">
            <input class="aaaaa" :value="detali.email" readonly="readonly" />
          </div>
          <div class="username">
            <div class="color">
              <div class="word">
                <h1 class="aasdadadwdawd">Password</h1>
              </div>
              <div class="clear" />
              <form>
                <input
                  laber="password"
                  v-model="detali.password"
                  :type="pwdFlag ? 'password' : 'text'"
                  size="10"
                  class="margintop"
                  autoComplete="“true”"
                />
              </form>
              <!--三元表达式 pwdFlag为真则type是password密码隐藏 pwdFlag为假则type是text密码显示 -->
              <!--pwdFlag为真说明密码是隐藏的，显示眼睛打开图标，反之显示眼睛关闭图标-->
              <img
                :src="pwdFlag ? textIcon : pwdIcon"
                @click="changePwd"
                class="shouandhide"
              />
            </div>
          </div>
          <div class="borderbottom paddingbottom">
            <div class="detaliwebsite">
              <span>Website</span>
            </div>
            <a :href="detali.website">
              <form>
                <input :value="detali.websitename" class="detaliweb" />
              </form>
            </a>
          </div>
          <div class="asdasdergrg">
            <div class="bottom">
              <div class="duanluo">
                <div class="xxx">
                  <span class="aaaaa">Notes</span>
                </div>
                <div class="great">
                  <p id="demo">
                    {{ detali.paragraph }}
                  </p>
                </div>
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
      detali: {},
      isshow: false,
      pwdFlag: true, //密码标示 true表示当前是密码形式
      textIcon: "https://i.postimg.cc/q7gYH7P7/show.png", //展示图标
      pwdIcon: "https://i.postimg.cc/C5Crsnqc/hide.png", //隐藏图标
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
    showinput() {
      this.isshow = !this.isshow;
    },
    getdetail() {
      // 详情页接口
      const name = this.$route.params && this.$route.params.name;
      name &&
        details({ name }).then((data) => {
          // console.log("----stringify---->", JSON.stringify(data.data));
          this.detali = data.data;
          console.log("---this.detali--->", this.detali);
        });
    },
    changePwd() {
      //密码标示取反即可
      this.pwdFlag = !this.pwdFlag;
    },
    // edit() {
    //   this.flag = false;
    //   this.flaga = true;
    // },
    // getSrc(){
    //   return this.detali.favorties ? '../assets/image/收藏.svg' : '../assets/image/未收藏.svg'
    // }
  },
};
</script>

<style lang="scss">
@import url(../assets/css/AdobDeTail.scss);
.asdasd{
  .adasdas{
    .asdasdasd{
      backface-visibility: hidden;
    }
    } 
    }
</style>
