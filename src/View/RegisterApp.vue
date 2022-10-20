<template>
  <!-- 密码管理页面左侧菜单 -->
  <div class="header-main">
    <div class="header scorall">
      <div class="padding aaaaaaaaaaaaaa">
        <div class="flex-item">
          <div class="flex margin">
            <router-link to="/list/all" class="Favorites">
              <li class="dispalay">
                <img src="../assets/image/items.svg" class="icon-b" />
                <h1 class="items fontsize" style="width: 75%">All items</h1>
                <span class="number" style="padding-right: 10px">{{
                  allNum
                }}</span>
              </li>
            </router-link>
            <router-link to="/list/favorites" class="Favorites">
              <li class="dispalay">
                <div class="icon-items height">
                  <img src="../assets/image/favourites.svg" class="icon-all" />
                </div>
                <h1 class="items fontsize height" style="width: 79%">
                  Favorites
                </h1>
                <span class="number height">{{ favoritesNum }}</span>
              </li>
            </router-link>
            <router-link to="/list/Trash" class="Favorites">
              <li class="item trahs">
                <img
                  src="../assets/image/删除色块.png"
                  class="deleteimg deleteleft"
                />
                <h1 class="items fontsize" style="padding-left: 15px">Trash</h1>
                <span class="number height">{{ trashNum }}</span>
              </li>
            </router-link>
          </div>
        </div>
        <div class="flex-type">
          <div class="flex padding-all">
            <span class="type">Type</span>
            <div class="neirong">
              <div class="center-third">
                <li class="name">
                  <router-link to="/list/Login" class="login flexstart trahs">
                    <img src="../assets/image/login.svg" class="icon-login" />
                    <h1 class="items">Login</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Card"
                    class="items flexstart trahs"
                    style="padding: 0; width: 100%"
                  >
                    <img src="../assets/image/card.svg" class="icon-inentiy" />
                    <h1 class="items">Card</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Identity"
                    class="right flexstart paddingzero trahs"
                  >
                    <img
                      src="../assets/image/indetity.svg"
                      class="icon-Identity"
                    />
                    <h1 class="items">Identity</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/SecureNote"
                    class="items Note flexstart paddingzero trahs"
                    style="padding: 0px; width: 100%"
                  >
                    <img
                      src="../assets/image/securenote.svg"
                      class="icon-note"
                    />
                    <h1 class="items">Secure Note</h1>
                  </router-link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="flex folders">
          <span class="type">Folders</span>
          <div class="neirong">
            <div class="center-third">
              <li class="name">
                <router-link
                  to="/list/Work"
                  class="items flexstart trahs"
                  style="padding: 0; width: 100%"
                >
                  <img src="../assets/image/work.svg" class="icon-work" />
                  <h1 class="items">Work</h1>
                </router-link>
              </li>
              <li class="name">
                <router-link
                  to="/list/Social"
                  class="flexstart trahs"
                  style="border-radius: 6px"
                >
                  <svg
                    t="1659012537214"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6902"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M948.053333 341.333333V290.133333c0-28.16-23.04-51.2-51.2-51.2h-306.346666v-34.133333c0-28.16-23.04-51.2-51.2-51.2h-392.533334c-28.16 0-51.2 23.04-51.2 51.2v136.533333h852.48zM95.573333 409.6v409.6c0 28.16 23.04 51.2 51.2 51.2h750.08c28.16 0 51.2-23.04 51.2-51.2V409.6H95.573333z"
                      fill="#bfbfbf"
                      p-id="6903"
                    ></path>
                  </svg>
                  <h1 class="items">Social</h1>
                </router-link>
              </li>
              <li class="name">
                <router-link
                  to="/list/Personal"
                  class="items right flexstart"
                  style="padding: 0; width: 100%"
                >
                  <svg
                    t="1659012537214"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6902"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M948.053333 341.333333V290.133333c0-28.16-23.04-51.2-51.2-51.2h-306.346666v-34.133333c0-28.16-23.04-51.2-51.2-51.2h-392.533334c-28.16 0-51.2 23.04-51.2 51.2v136.533333h852.48zM95.573333 409.6v409.6c0 28.16 23.04 51.2 51.2 51.2h750.08c28.16 0 51.2-23.04 51.2-51.2V409.6H95.573333z"
                      fill="#bfbfbf"
                      p-id="6903"
                    ></path>
                  </svg>
                  <h1 class="items">Personal</h1>
                </router-link>
              </li>
            </div>
          </div>
        </div>
        <div class="flex fixed top">
          <ul class="padding-floder">
            <li class="newfolder neirong">
              <svg
                t="1659013220074"
                class="icon-folder"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1977"
                width="20"
                height="20"
              >
                <path
                  d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                  fill="#bfbfbf"
                  p-id="1978"
                ></path>
              </svg>
              <span class="folder">NewFolder</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import { reqCategoryList } from "../API/index";

export default {
  data() {
    return {
      allNum: 0,
      favoritesNum: 0,
      trashNum: 0,
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      var allNum = data.data.length || 0;
      var favoritesNum = 0;
      var trashNum = 0;
      data.data &&
        data.data.length > 0 &&
        data.data.forEach((item) => {
          if (item.deleteAt) {
            trashNum = trashNum + 1;
          }
          if (item.favorties) {
            favoritesNum += 1;
          }
        });
      this.allNum = allNum;
      this.favoritesNum = favoritesNum;
      this.trashNum = trashNum;
      // 单独的情况下,this指的是全局对象.
      // 在函数中,this指的是全局对象
      console.log(
        "------data.datadata.datadata.datadata.data------->",
        data.data
      );
    });
  },
};
</script>

<style >
@import url(../assets/css/RegisterApp.css);
</style>
