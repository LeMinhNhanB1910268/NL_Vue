<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  //   create(){
  //   this.$router.go()
  // }
  };

</script>
<template>
    <div id="app" >
    <AppHeader />
    <div class="container mt-3">
      <router-view :key="$route.fullPath" />
      <AppFooter class="fixed-bottom"></AppFooter> 
    </div>

  </div>
</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
</style>
