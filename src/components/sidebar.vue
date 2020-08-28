<template>
  <div>
    <el-menu
      :default-active="$route.path"
      @open="handleOpen"
      unique-opened
      router
    >
      <template v-for="(item,index) in SecondaryMenuClass">
        <el-menu-item v-if="index==0" :index="item.url" :key="item.url">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :index="item.url" v-else :key="item.url">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item
            :index="item1.url"
            v-for="(item1,index1) in thirdLevelMenuClass"
            :key="index1"
          >{{item1.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      SecondaryMenuClass: [],
      thirdLevelMenuClass: [],
      thirdLevelMenu: [],
    };
  },
  components: {},
  methods: {
    handleOpen(key) {
      console.log(key);
      let index = this.SecondaryMenuClass.findIndex((item) => {
        return item.url == key;
      });
      console.log(index);
      let menu_id = this.SecondaryMenuClass[index].menu_id;
      console.log(menu_id);
      this.thirdLevelMenuClass = this.thirdLevelMenu.filter((item) => {
        return item.parent_id == menu_id;
      });
      console.log(this.thirdLevelMenuClass);
    },
  },
  mounted() {
    this.$bus.$on("send1", (data) => {
      this.SecondaryMenuClass = data;
    });
    this.$bus.$on("send2", (data) => {
      this.thirdLevelMenu = data;
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>