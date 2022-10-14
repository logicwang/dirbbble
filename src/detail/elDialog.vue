<template>
    <div>
      <el-dialog
        title=""
        :visible.sync="show"
        :center="true"
        :show-close="false"
        :close-on-click-modal="true"
        class="deletes"
      >
      
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "codeDialog",
    data() {
      return {
        show:false
      };
    },
    props: ["status"],
    watch:{
      status(val) {
        this.show = val;
      },
      show(val) {
        this.$emit("update:status", val);
      }
    }
  };
  </script>