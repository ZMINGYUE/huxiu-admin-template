<template>
  <div
    v-if="!item.hidden"
    class="menu-wrapper"
  >
    我是sidebar item
  </div>
</template>

<script>
// import path from 'path';
// import { isExternal } from '@/utils/validate';
// import Item from './Item';
// import AppLink from './Link';

export default {
  name: 'SidebarItem',
  // components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      'default': false
    },
    basePath: {
      type: String,
      'default': ''
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        }
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item;
        return true;

      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    }
    // resolvePath(routePath) {
    //   if (isExternal(routePath)) {
    //     return routePath;
    //   }
    //   return path.resolve(this.basePath, routePath);
    // }
  }
};
</script>
