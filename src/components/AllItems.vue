<template>
  <div class="header">
    <div>
      <li>
        <router-link to="register">All Items</router-link>
      </li>
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
.header {
  width: 176px;
  height: 523px;
  background-color: rgb(24 24 24 / 80%);
}
.header li ul {
  color: #fff;
}
</style>