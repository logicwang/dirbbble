# 页面仿写

尝试仿写密码管理器作业


项目碰到的问题和添加的功能:

## 项目中添加过滤功能

```js
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
      console.log('----this.tableDatathis.tableDatathis.tableDatathis.tableData--->',data.data)
    });
```
* 使用watch监听路由变化
```js

export default(){
    dara(){
        return{
            detali: {},
            isSave: false,
            isNone: false,
        }
    }
},

watch: {
    $route: {
      handler(newVal, olaVal) {
        const newType = newVal.params.type;
        const oldType = olaVal.params.type;
        this.name = newVal.params.name;
        if (newType && newType !== oldType) {
          this.filterDatas(newType, this.tableData);
        }
        console.log('---------tableData--------->', this.tableData)
      },
    },
},
```

* 可以在模拟后端数据中添加状态来判断过滤内容
```js
    filterDatas(type, list) {
      if (type === "Trash") {
        this.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } else {
        this.items = list;
      }
       console.log("----this---?", list);

      this.items &&
        this.items.length > 0 &&
        this.$router
          .push(`/list/${type}/detail/${this.items[0].name}`)
          .catch((err) => {
            console.log(err);
          });
```

## 项目中添加了搜索功能
```js
    serch() {
      var dataList = [];
      if (this.keyWord) {
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name === this.keyWord) {
            dataList.push(this.tableData[i]);
          }
        }
      } else {
        dataList = this.tableData;
      }
      this.items = [...dataList];
      console.log("--------------------->", this.items);
    },
```

## 项目右侧详情页添加了编辑功能

因为原始设计稿只有编辑和删除两个按钮，所以添加了两种状态，点击编辑之后弹出保存和取消两个按钮
在编辑之前右侧详情页是禁用状态，点击编辑之后恢复到可编辑状态,同时取消和保存两个弹框消失

```html
    <button v-if="!isSave" class="edit" @click="onClickEditBtn">
        <img src="../assets/image/edit.svg" class="icon" />
        <span class="name">Edit</span>
    </button>
    <button v-else class="edit" @click="save">
        <img src="../assets/image/save.svg" class="icon" />
        <span class="name">Save</span>
    </button>
    <button v-if="isNone" @click="cancel()">
        <div class="cancela">
            <img src="../assets/image/cancel.svg" class="cancel" />
            <span class="name cancel-name"> Cancel</span>
        </div>
    </button>
    <button @click="Delete()">
        <div class="delete">
            <img src="../assets/image/rightdelete.svg" class="icon" />
            <span class="name">Delete</span>
        </div>
    </button>
```


```js
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
        }
        // console.log("----->", data);
      });
    },
    //取消
    cancel() {
      if (this.isSave) {
        this.isSave = false;
      }
      if (this.isNone) {
        this.isNone = false;
      }
      alert("取消编辑");
    },
```