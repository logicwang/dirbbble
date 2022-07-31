<template>
  <div>
    <div class="header-name">
      <div class="input">
        <div class="inputandcion">
          <el-input v-model="input" placeholder="Search Vault">
            <i slot="prefix" style="display: flex; align-items: center">
              <img
                style="width: 16px; height: 16px"
                src="https://www.hualigs.cn/image/62e56bd1d1fea.jpg"
                alt
              /> </i
          ></el-input>
        </div>
        <div class="icon-a">
          <img src="https://i.postimg.cc/h48qP5LM/o.png" class="icon-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
.clear {
  clear: both;
}
li {
  list-style: none;
}
ul {
  margin: 0;
}
input {
  outline: none;
}
.header-name {
  width: 290px;
  background-color: rgb(30 30 30);
}
.icon-user {
  width: 20px;
  height: 20px;
}
.input-text {
  color: rgb(24 24 24 / 80%);
  background: transparent;
  padding: 0px 20px;
  outline: none;
  width: 183px;
  height: 21px;
  background-image: url(https://tva1.sinaimg.cn/large/0074R88yly8h4parmj1u0j300k00k0d2.jpg);
  border-radius: 10px;
}
.address {
  color: red;
}
.input {
  padding: 21px;
  display: flex;
  justify-content: space-around;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #808080a3;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 21px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.icon-a {
  border-radius: 7px;
  background-color: rgb(55, 80, 214);
}
img {
  padding-top: 2px;
  width: 20px;
  height: 20px;
}
</style>