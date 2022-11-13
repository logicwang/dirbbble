<template>
  <!-- 项目菜单 -->
  <div class="header-main">
    <div class="header scorall">
      <div class="padding aaaaaaaaaaaaaa">
        <div class="flex-item">
          <div class="flex margin">
            <router-link to="/list/all" class="Favorites">
              <li class="dispalay">
                <img src="../assets/imgs/items.svg" class="icon-b" />
                <h1 class="items fontsize" style="width: 75%">All items</h1>
                <span class="number" style="padding-right: 10px">{{
                  allNum
                }}</span>
              </li>
            </router-link>
            <router-link to="/list/favorites" class="Favorites">
              <li class="dispalay">
                <div class="icon-items height">
                  <img src="../assets/imgs/favourites.svg" class="icon-all" />
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
                  src="../assets/imgs/删除色块.png"
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
                    <img src="../assets/imgs/login.svg" class="icon-login" />
                    <h1 class="items">Login</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Card"
                    class="items flexstart trahs"
                    style="padding: 0; width: 100%"
                  >
                    <img src="../assets/imgs/card.svg" class="icon-inentiy" />
                    <h1 class="items">Card</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/Identity"
                    class="right flexstart paddingzero trahs"
                  >
                    <img
                      src="../assets/imgs/indetity.svg"
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
                      src="../assets/imgs/securenote.svg"
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
                  <img src="../assets/imgs/work.svg" class="icon-work" />
                  <h1 class="items">Work</h1>
                </router-link>
              </li>
              <li class="name">
                <router-link
                  to="/list/Social"
                  class="flexstart trahs"
                  style="border-radius: 6px"
                >
                  <img src="../assets/imgs/social.svg" class="icon-work" />
                  <h1 class="items">Social</h1>
                </router-link>
              </li>
              <li class="name">
                <router-link
                  to="/list/Personal"
                  class="items right flexstart"
                  style="padding: 0; width: 100%"
                >
                  <img src="../assets/imgs/personal.svg" class="icon-work" />
                  <h1 class="items">Personal</h1>
                </router-link>
              </li>
            </div>
          </div>
        </div>
        <div class="flex fixed top">
          <ul class="padding-floder">
            <li class="newfolder neirong">
  <img src="../assets/imgs/folder.svg" class="icon-folder"/>
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
        data.data.forEach((items) => {
          if (items.deleteAt) {
            trashNum = trashNum + 1;
          }
          if (items.favorties) {
            favoritesNum += 1;
          }
        });
      this.allNum = allNum;
      this.favoritesNum = favoritesNum;
      this.trashNum = trashNum;
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
