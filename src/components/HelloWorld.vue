<template>
  <div>
    <div class="header-name">
      <div class="input">
        <div class="inputandcion">
          <el-input v-model="input" placeholder="Search Vault">
            <i slot="prefix" style="display: flex; align-items: center">
              <img
                class="hualigs"
                src="https://s3.bmp.ovh/imgs/2022/08/02/873533b9a4ed4984.png"
                alt
              /> </i
          ></el-input>
        </div>
        <div class="icon-a">
          <img src="https://i.postimg.cc/h48qP5LM/o.png" class="icon-img" />
        </div>
      </div>
      <!--分割线 -->
      <button class="password">
        <div class="password-all">
          <div class="password-left">
            <img
              class="img"
              src="https://s3.bmp.ovh/imgs/2022/08/01/13e3a45a902b797d.png"
            />
          </div>
          <div class="password-right">
            <div class="password-jkl">
              <div class="password-name">
                <li v-for="item in objects" :key="item.bbb">
                  <span class="ado">{{ item.bbb }}</span>
                </li>
                <div class="clear" />
              </div>
              <div class="password-job">
                <li v-for="item in items" :key="item.aaa">
                  <span class="job">{{ item.aaa }}</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </button>
      <!--分割线 -->
      <button class="password">
        <div class="password-all">
          <div class="password-left">
            <img
              class="imag"
              src="https://s3.bmp.ovh/imgs/2022/08/02/1b16f92a27163068.png"
            />
          </div>
          <div class="password-right">
            <div class="password-jkl">
              <div class="password-name">
                <li v-for="item in objects" :key="item.bbb">
                  <span class="ado">{{ item.bbb }}</span>
                </li>
                <div class="clear" />
              </div>
              <div class="password-job">
                <li v-for="item in items" :key="item.aaa">
                  <span class="job">{{ item.aaa }}</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      items: [{ aaa: "thomas@gmail.com" }],
      objects: [{ bbb: "Adobe" }],
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
  width: 390px;
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
  background-color: #404040;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #686868;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 126%;
}
.icon-a {
  border-radius: 7px;
  background-color: #005fe4;
  width: 30px;
  height: 30px;
}
.icon-img {
  width: 20px;
  height: 20px;
  position: relative;
  left: 4px;
  top: 4px;
}
.hualigs {
  display: flex;
  align-items: center;
  position: relative;
  top: 7px;
  left: 2px;
  width: 17px;
  height: 17px;
}
.job {
  color: #8f8f8f;
}
.ado {
  color: #fff;
  float: left;
  font-size: 20px;
}
.password {
  background-color: rgb(30 30 30);
  border-color: transparent;
  margin-left: 45px;
}
.password-right {
  padding-left: 16px;
}
.password-left {
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 5px;
}
.password-all {
  display: flex;
  justify-content: start;
}
.imag {
  width: 30px;
  height: 30px;
  position: relative;
  top: 8px;
}
.img {
  width: 45px;
  height: 51px;
  position: relative;
  bottom: 4px;
}
.password-name {
  padding-top: 4px;
}
</style>