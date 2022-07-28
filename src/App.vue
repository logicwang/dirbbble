<template>
  <div>
    <div>
      <HelloWorld />
      <!-- <AllItems /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import AllItems from "./components/AllItems.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    // AllItems,
  },
};
</script>