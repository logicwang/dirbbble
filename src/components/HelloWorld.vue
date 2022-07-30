<template>
  <div>
    <div class="header-name">
      <div class="input">
        <div class="inputandcion">
          <input placeholder="请输入内容" class="input-text" />
        </div>
        <div class="icon">
          <img src="https://s3.bmp.ovh/imgs/2022/07/30/9b8e6f76e7c37712.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.header-name {
  width: 230px;
  background-color: rgb(15, 15, 15);
}
.icon-user {
  width: 20px; /*设置图片显示的宽*/
  height: 20px; /*图片显示的高*/
}
.input-text {
  color: #696969;
  background: transparent;
  padding: 0px 20px;
  font-size: 1.2em;
  outline: none;
  width: 183px;
  height: 32px;
  border-radius: 10px;

  border: 1px solid #ddd;
}
.address {
  color: red;
}
/* .input{} */
</style>