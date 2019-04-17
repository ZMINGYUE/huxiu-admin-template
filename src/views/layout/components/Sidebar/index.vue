<template>
  <div class="sidebar">
    我是sidebar哟！
    <sidebar-item
      v-for="route in routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import variables from '@/styles/variables.scss';
import SidebarItem from './SidebarItem';

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes;
    },
    // variables() {
    //   return variables;
    // },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
