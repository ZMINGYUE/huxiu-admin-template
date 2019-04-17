<template>
  <div class="navbar">
    我是navbar哟
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import Breadcrumb from '@/components/Breadcrumb';
// import Hamburger from '@/components/Hamburger';

export default {
  // components: {
  //   Breadcrumb,
  //   Hamburger
  // },
  computed: {
    ...mapGetters([
      'sidebar'
      // 'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar');
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: red;
}
</style>