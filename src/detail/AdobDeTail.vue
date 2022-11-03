<template>
  <!-- 详情页 -->
  <div class="wrap-right">
    <div class="max-width">
      <div class="header-right">
        <div class="btnall">
          <button v-if="!isSave" class="edit" @click="onClickEditBtn">
            <img src="../assets/imgs/edit.svg" class="icon" />
            <span class="name">Edit</span>
          </button>
          <button v-else class="edit" @click="save">
            <img src="../assets/imgs/save.svg" class="icon" />
            <span class="name">Save</span>
          </button>
          <button v-if="isNone" @click="cancel()">
            <div class="cancela">
              <img src="../assets/imgs/cancel.svg" class="cancel" />
              <span class="name cancel-name"> Cancel</span>
            </div>
          </button>
          <button @click="removeItem(index)">
            <div class="delete">
              <img src="../assets/imgs/delete.svg" class="icon" />
              <span class="name">Delete</span>
            </div>
          </button>
        </div>
        <div class="main-center">
          <div class="main-max">
            <div class="password-left position">
              <img
                :src="detali.imgrul"
                class="img"
                style="border-radius: 5px"
              />
            </div>
            <div class="title-name">
              <input :disabled="!isSave" v-model="detali.name" class="name" />
              <div class="namelogin">
                <span class="logicn">login</span>
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
                src="../assets/imgs/收藏.svg"
                style="width: 27px; height: 27px"
              />
              <img
                v-if="!detali.favorties"
                @click="changeImg = true"
                src="../assets/imgs/未收藏.svg"
                style="width: 27px; height: 27px"
              />
            </div>
          </div>
        </div>
        <div class="main">
          <div class="third">
            <form>
              <input
                class="website xxx"
                :value="detali.username"
                :disabled="!isSave"
              />
            </form>
          </div>
          <div class="web">
            <input class="email" v-model="detali.email" :disabled="!isSave" />
          </div>

          <div class="username">
            <div class="color">
              <div class="word">
                <h1 class="password">Password</h1>
              </div>
              <div class="clear" />
              <form>
                <input
                  :disabled="!isSave"
                  v-model="detali.password"
                  :type="pwdFlag ? 'password' : 'text'"
                  size="10"
                  class="margintop"
                  autoComplete="“false”"
                />
              </form>
              <img
                :src="pwdFlag ? textIcon : pwdIcon"
                @click="changePwd"
                class="shouandhide"
              />
            </div>
          </div>
          <div class="bottom-horizontalline">
            <div class="detaliwebsite">
              <span>Website</span>
            </div>
            <form>
              <input
                :value="detali.website"
                class="detaliweb"
                :disabled="!isSave"
              />
            </form>
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
import { details, save } from "../API/index";

export default {
  data() {
    return {
      detali: {},
      isSave: false,
      isNone: false,
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
    getdetail() {
      const name = this.$route.params && this.$route.params.name;
      name &&
        details({ name }).then((data) => {
          this.detali = data.data;
          console.log(
            "---this.detalithis.detalithis.detalithis.detali--->",
            this.detali
          );
        });
    },
    //显示隐藏
    changePwd() {
      this.pwdFlag = !this.pwdFlag;
    },
    //编辑
    onClickEditBtn() {
      if (!this.isSave) {
        this.isSave = true;
      }
      if (!this.isNone) {
        this.isNone = true;
      }
      // console.log('-------->', this.tableData)
    },
    //保存
    save() {
      save({ ...this.detali }).then((data) => {
        if (data.data && data.data.code === 1) {
          (this.isSave = false), (this.isNone = false);
          alert("保存成功");
        }
        console.log("----->", data);
      });
    },
    //取消
    cancel() {
      if (this.isSave) {
        this.isSave = false;
      }
      if (this.isNone) {
        this.isNone = false;
        alert("取消编辑");
      }
    },
    //删除
    removeItem() {
      var array = new Array(this.detali);
      console.log("------------>", typeof array);
    },
  },
};
</script>

<style>
@import url(../assets/css/AdobDeTail.css);
</style>
