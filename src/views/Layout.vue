<template>
  <div class="d-flex container">
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="right">
      <div class="topbar">
        <topbar></topbar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import sidebar from "../components/sidebar";
import topbar from "../components/topbar";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    sidebar,
    topbar,
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    //   let menu_id = this.SecondaryMenuClass[key].menu_id;
    //   this.thirdLevelMenuClass = this.thirdLevelMenu.filter((item) => {
    //     return item.parent_id == menu_id;
    //   });
    //   console.log(this.thirdLevelMenuClass);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleSelecttwo(key, keyPath) {
    //   console.log(key, keyPath);
    // },
  },
  mounted() {
    // this.getData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  display: flex;
}
.sidebar {
  width: 15%;
  height: 400px;
}
.right {
  width: 85%;
  height: 400px;
}
.topbar {
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}
.content {
  width: 100%;
  height: 300px;
}
</style>