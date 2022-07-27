<template>
  <div class="header">
    <div>
      <li class="item flex">
        <router-link to="/RegisterApp/index" class="items"
          >All Items</router-link
        >
        <span class="number">19</span>
      </li>
      <li class="item flex">
        <svg
          t="1658923382051"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1953"
          width="20"
          height="20"
        >
          <path
            d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
            p-id="1954"
            fill="#f4ea2a"
          ></path>
        </svg>
        <router-link to="/RegisterApp" class="items">Favorites</router-link>
        <span class="number">7</span>
      </li>
      <router-link to="/RegisterApp" class="items">
        <svg
          t="1658923825827"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3155"
          width="20"
          height="20"
        >
          <path
            d="M912.96 176.64H128.32c-6.08 0-11.2-5.12-11.2-11.2v-76.8c0-5.44 3.84-9.92 9.28-11.2L368 32h274.24l272.32 45.44c5.44 0.96 9.28 5.76 9.28 11.2v76.48c0.32 6.4-4.8 11.52-10.88 11.52zM786.56 1011.84H254.72c-45.12 0-81.92-36.8-81.92-81.92V342.08c0-45.12 36.8-81.92 81.92-81.92h531.84c45.12 0 81.92 36.8 81.92 81.92v587.52a81.92 81.92 0 0 1-81.92 82.24z"
            fill="#d81e06"
            p-id="3156"
          ></path>
        </svg>
        <span>Trash</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
li {
  list-style: none;
}

/* a{} */
.header {
  width: 176px;
  height: 523px;
  background-color: rgb(24 24 24 / 80%);
}
.header li ul {
  color: #fff;
}
.header .item {
  padding-top: 40px;
  padding-left: 8px;
}
.number {
  color: #dcdfe633;

  font-size: 13px;
}
.items {
  color: #fff;
  text-decoration: none;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.start {
  display: flex;
  justify-content: start;
}
</style>