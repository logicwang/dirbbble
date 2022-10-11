<template>
  <div class="wrap-right">
    <div class="max-width">
      <div class="header-right borderbottom">
        <div class="display padding">
          <button>
            <div class="edit">
              <svg
                t="1660048620062"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1944"
                width="20"
                height="20"
              >
                <path
                  d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zM257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z"
                  p-id="1945"
                  fill="#bfbfbf"
                ></path>
              </svg>
              <span class="name">Edit</span>
            </div>
          </button>
          <button>
            <div class="delete">
              <svg
                t="1660048661978"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1968"
                width="20"
                height="20"
              >
                <path
                  d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z"
                  p-id="1969"
                  fill="#cdcdcd"
                ></path>
              </svg>
              <span class="name">Delete</span>
            </div>
          </button>
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
              <img
                src="../assets/image/收藏.png"
                style="width: 27px; height: 27px"
              />
            </div>
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
            <h1 class="aasdadadwdawd">Password</h1>
            <input laber="password" v-model="detali.input" class="margintop" />
            <i class="fa fa-eye-slash"></i>
          
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
              <p>
                {{ detali.duanluotwo }}
              </p>
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
        });
    },
  },
};
</script>

<style lang="scss">
@import url(../assets/css/AdobDeTail.scss);
</style>