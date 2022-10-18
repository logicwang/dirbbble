<template>
  <!-- 路由转跳页面内容 -->
  <div class="all-div">
    <div class="header-name scorall">
      <div class="center">
        <div class="input">
          <div class="inputandcion">
            <input
              v-model.trim="keyWord"
              class="helloworldinput"
              placeholder="SearchVault"
            />
            <button class="sousuo" @click="serch">
              <img class="hualigs" src="../assets/image/搜索.png" alt />
              <div class="claer"></div>
            </button>
          </div>
          <div class="icon-a">
            <img src="../assets/image/加号.png" class="icon-img" />
          </div>
        </div>
        <div class="all-button">
          <div v-if="items && items.length > 0">
            <li v-for="(item, i) in items" :key="item.name">
              <router-link
                :to="`/list/${type}/detail/${item.name}`"
                class="password-all"
              >
                <AppleeApp
                  :title="item.name"
                  :des="item.email"
                  :eal="item.url"
                  :class="
                    name === item.name || (i === 0 && !name)
                      ? 'is-active'
                      : undefined
                  "
                />
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
    <AdobDeTail />
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";
import AppleeApp from "../components/AppleApp.vue";
import AdobDeTail from "../detail/AdobDeTail.vue";
// 在此处引用button组件

export default {
  props: ["type"],

  data() {
    return {
      items: [],
      name: " ",
      tableData: " ",
      keyWord: " ",
      asdasdasdasda:"SearchVault"
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.allItems = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
    });
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      console.log("---- this.tableData---->", this.tableData);
    });
  },

  watch: {
    $route: {
      handler(newVal, olaVal) {
        const newType = newVal.params.type;
        const oldType = olaVal.params.type;
        this.name = newVal.params.name;
        if (newType && newType !== oldType) {
          this.filterDatas(newType, this.items);
        }
      },
    },
  },
  methods: {
    serch(){
      var dataList = [];
      if(this.keyWord){
        for (var i = 0; i < this.tableData.length; i++) {
        if(this.tableData[i].name === this.keyWord){
          dataList.push(this.tableData[i]);
          console.log('--------------this.tableData[i]--->', this.tableData[i])
        }
      }
      }
      else{
        dataList = this.tableData;
      }
      this.items = [...dataList]
      console.log('--------------------->' ,this.items)
    },
    // killer(){
    //   var tablelist = [];


    // },
    /**
     *
     * @param {*} type all | Trash | favorites
     * @param {*} list 所有数据
     */
    // filterDatas(type, list) {
    //   //type: all Trash favorites
    //   let filterKey = '';
    //   if (type === 'Trash') {
    //     filterKey = 'deleteAt'
    //   }
    //   if (type === 'favorites') {
    //     filterKey = 'favorties'

    //   }
    //   const newlist = list || this.allItems;
    //   // if (filterKey) {
    //   //   this.items= newlist.filter(item => item[filterKey])
    //   // } else {
    //   //   this.items = newlist;
    //   // }
    //   this.items = filterKey ? newlist.filter(item => item[filterKey]) : newlist;
    // },

    filterDatas(type, list) {
      if (type === "Trash") {
        this.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } else {
        this.items = list;
      }
      // console.log("----this--items---?", this);
      this.items &&
        this.items.length > 0 &&
        this.$router
          .push(`/list/${type}/detail/${this.items[0].name}`)
          .catch((err) => {
            console.log(err);
          });
    },
  },
  components: {
    AppleeApp,
    AdobDeTail,
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/css/HelloWorld.scss);
</style>
