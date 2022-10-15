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
                    <svg
                      t="1659010944159"
                      class="icon-Identity"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3836"
                      width="15"
                      height="15"
                    >
                      <path
                        d="M905.846154 157.538462H687.261538s1.969231 13.784615 1.969231 19.692307c0 76.8-61.046154 137.846154-137.846154 137.846154h-118.153846c-76.8 0-137.846154-61.046154-137.846154-137.846154 0-5.907692 0-19.692308 1.969231-19.692307H118.153846c-43.323077 0-78.769231 35.446154-78.769231 78.76923v590.769231c0 43.323077 35.446154 78.769231 78.769231 78.769231h787.692308c43.323077 0 78.769231-35.446154 78.769231-78.769231V236.307692c0-43.323077-35.446154-78.769231-78.769231-78.76923zM427.323077 748.307692H202.830769C177.230769 748.307692 157.538462 724.676923 157.538462 699.076923c0-39.384615 41.353846-61.046154 84.676923-78.769231 29.538462-11.815385 33.476923-23.630769 33.476923-37.415384 0-11.815385-7.876923-23.630769-17.723077-33.476923-17.723077-15.753846-27.569231-39.384615-27.569231-64.984616 0-49.230769 29.538462-90.584615 82.707692-90.584615s82.707692 41.353846 82.707693 90.584615c0 25.6-9.846154 49.230769-27.569231 64.984616-9.846154 9.846154-17.723077 21.661538-17.723077 33.476923 0 11.815385 3.938462 23.630769 33.476923 37.415384 43.323077 17.723077 84.676923 39.384615 84.676923 78.769231 3.938462 25.6-15.753846 49.230769-41.353846 49.230769zM866.461538 669.538462c0 11.815385-7.876923 19.692308-19.692307 19.692307H571.076923c-11.815385 0-19.692308-7.876923-19.692308-19.692307v-39.384616c0-11.815385 7.876923-19.692308 19.692308-19.692308h275.692308c11.815385 0 19.692308 7.876923 19.692307 19.692308v39.384616z m39.384616-157.538462c0 11.815385-7.876923 19.692308-19.692308 19.692308H571.076923c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h315.076923c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615zM433.230769 236.307692h118.153846c33.476923 0 59.076923-25.6 59.076923-59.076923s-25.6-59.076923-59.076923-59.076923h-118.153846c-33.476923 0-59.076923 25.6-59.076923 59.076923s25.6 59.076923 59.076923 59.076923z"
                        p-id="3837"
                        fill="#cdcdcd"
                      ></path>
                    </svg>
                    <h1 class="items">Identity</h1>
                  </router-link>
                </li>
                <li class="name">
                  <router-link
                    to="/list/SecureNote"
                    class="items Note flexstart paddingzero trahs"
                    style="padding: 0px; width: 100%"
                  >
                    <svg
                      t="1659010990378"
                      class="icon-note"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5048"
                      width="15"
                      height="15"
                    >
                      <path
                        d="M0 204.8h921.6v102.4H0zM918.186667 170.666667c-6.826667-58.026667-58.026667-102.4-116.053334-102.4h-682.666666C58.026667 68.266667 10.24 112.64 3.413333 170.666667h914.773334zM0 341.333333v290.133334C0 696.32 54.613333 750.933333 119.466667 750.933333h477.866666c10.24 0 17.066667-6.826667 17.066667-17.066666v-170.666667c0-20.48 13.653333-40.96 30.72-47.786667l170.666667-68.266666c13.653333-3.413333 27.306667-3.413333 37.546666 0l44.373334 17.066666c6.826667 3.413333 10.24 0 17.066666-3.413333 3.413333-3.413333 6.826667-6.826667 6.826667-13.653333V341.333333H0z m119.466667 136.533334h204.8c10.24 0 17.066667 6.826667 17.066666 17.066666s-6.826667 17.066667-17.066666 17.066667h-204.8c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066666z m307.2 136.533333h-307.2c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066666h307.2c10.24 0 17.066667 6.826667 17.066666 17.066666s-6.826667 17.066667-17.066666 17.066667z"
                        fill="#bfbfbf"
                        p-id="5049"
                      ></path>
                      <path
                        d="M1013.76 546.133333l-170.666667-68.266666h-13.653333l-170.666667 68.266666c-6.826667 3.413333-10.24 10.24-10.24 17.066667v238.933333c0 64.853333 150.186667 136.533333 180.906667 153.6h13.653333c30.72-13.653333 180.906667-88.746667 180.906667-153.6v-238.933333c0-6.826667-3.413333-13.653333-10.24-17.066667zM921.6 768c0 3.413333-3.413333 10.24-6.826667 13.653333l-6.826666 6.826667c-13.653333 13.653333-30.72 30.72-64.853334 47.786667-3.413333 0-3.413333 3.413333-6.826666 3.413333s-6.826667 0-10.24-3.413333c-3.413333-6.826667-6.826667-10.24-6.826667-17.066667v-102.4h-51.2c-10.24 0-17.066667-6.826667-17.066667-17.066667V614.4c0-6.826667 3.413333-13.653333 10.24-13.653333l68.266667-34.133334c6.826667-3.413333 10.24-3.413333 17.066667 0 3.413333 3.413333 6.826667 10.24 6.826666 13.653334v102.4h51.2c10.24 0 17.066667 6.826667 17.066667 17.066666v68.266667z"
                        fill="#bfbfbf"
                        p-id="5050"
                      ></path>
                    </svg>
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
    });
  },
};
</script>

<style lang="scss">
.header-main {
  display: flex;
  height: 100%;
}

a {
  text-decoration: none;
}

.router-link-active {
  color: #fff;
  background-color: blue;
  text-decoration: none;
}

.header {
  width: 240px;
  background-color: #282828;

  .aaaaaaaaaaaaaa {
    margin: 0 auto;
    max-width: 220px;
  }
  .padding {
    padding: 55px 0 0 0;
    .dispalay {
      display: flex;
      justify-content: space-between;
      height: 25px;
      margin-top: 3px;
    }

    .icon-Identity {
      position: relative;
      top: 3px;
      left: 2px;
    }
    .height {
      position: relative;
      left: 5px;
    }
    .icon-note {
      position: relative;
      top: 5px;
      left: 4px;
    }

    .icon-inentiy {
      position: relative;
      top: 3px;
      left: 2px;
      width: 15px;
      height: 15px;
    }
    .trahs {
      display: flex;
      justify-content: space-between;
      height: 25px;
      margin-top: 3px;
    }
    .paddingzero {
      padding: 0;
    }

    .deleteimg {
      width: 15px;
      height: 19px;
    }

    .deleteleft {
      position: relative;
      left: 5px;
    }

    .flexstart {
      display: flex;
      justify-content: flex-start;
    }

    .icon-login {
      position: relative;
      top: 4px;
      left: 3px;
      width: 15px;
      height: 15px;
    }

    .neirong {
      margin-left: 3%;
      margin-right: 3%;
    }
    .icon-folder {
      position: relative;
      top: 3px;
    }
    .margin {
      margin-left: 3%;
      margin-right: 3%;
    }
    .icon-trash {
      position: relative;
      top: 3px;
      left: 2px;
    }

    .fontsize {
      margin: 0;
      font-size: 15px;
    }

    .flex-type {
      padding-top: 21px;
    }

    .folders {
      padding-top: 25px;
    }

    li {
      list-style: none;
    }

    .header li ul {
      color: #fff;
    }

    .number {
      color: #dcdfe633;
      font-size: 13px;
      padding: 2px 15px 0px 0px;
    }

    .item {
      display: flex;
      justify-content: start;
    }

    .items {
      color: #fff;
      width: 77%;
      margin: 0;
      margin-top: 1px;
      font-size: 15px;
      padding-left: 10px;
      border-radius: 5px;
      text-decoration: none;
    }

    .type {
      color: RGB(122, 122, 122);
      font-size: 8px;
    }
    .icon-all {
      position: relative;
      top: 1px;
      width: 15px;
      height: 15px;
    }
    .icon-b {
      position: relative;
      top: 2px;
      padding-left: 6px;
      width: 15px;
      height: 15px;
    }
    .center-third {
      padding-top: 6px;
    }

    .folder {
      color: #fff;
      padding-left: 11px;
    }

    .flex {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .padding-floder {
      padding: 0;
    }
    .top {
      padding: 160px 0 20px 0;
    }
    .name {
      padding: 3px;
    }
  }
}
</style>