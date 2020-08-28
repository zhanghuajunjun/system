<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
      <el-menu-item
        :index="item.url"
        v-for="(item) in primaryMenu.slice(0,7)"
        :key="item.url"
      >{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      primaryMenu: [],
      SecondaryMenu: [],
      SecondaryMenuClass: [],
      thirdLevelMenu: [],
      activeIndex: "",
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("http://49.233.66.125:3030/menu")
        .then((res) => {
          // 一级总目录
          this.primaryMenu = res.data.data.menus.filter((item) => {
            return item.level == 0;
          });
          // 二级总目录
          this.SecondaryMenu = res.data.data.menus.filter((item) => {
            return item.level == 1;
          });
          // 三级总目录
          this.thirdLevelMenu = res.data.data.menus.filter((item) => {
            return item.level == 2;
          });
          // 二级分目录

          let index = this.primaryMenu.findIndex((item) => {
            return item.url == this.activeIndex;
          });
          console.log(index);
          let menu_id = this.primaryMenu[index].menu_id;
          this.SecondaryMenuClass = this.SecondaryMenu.filter((item) => {
            return item.parent_id == menu_id;
          });
          console.log(this.primaryMenu);
          console.log(this.SecondaryMenu);
          console.log(this.thirdLevelMenu);
          // console.log(this.SecondaryMenuClass);
          this.$bus.$emit("send1", this.SecondaryMenuClass);
          this.$bus.$emit("send2", this.thirdLevelMenu);
        })
        .then((err) => {});
    },
    handleSelect(key) {
      console.log(key);
      let index = this.primaryMenu.findIndex((item) => {
        return item.url == key;
      });
      let menu_id = this.primaryMenu[index].menu_id;
      this.SecondaryMenuClass = this.SecondaryMenu.filter((item) => {
        return item.parent_id == menu_id;
      });
      console.log(this.SecondaryMenuClass);
      this.$bus.$emit("send1", this.SecondaryMenuClass);
      this.$bus.$emit("send2", this.thirdLevelMenu);
      // this.activeIndex = key
      console.log(this.activeIndex);
    },
  },
  mounted() {
    this.activeIndex = this.$route.meta.parentPath;
    this.getData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>