<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
  export default {
    data(){
      return {
        name : localStorage.getItem('name'),
      }
    },
    components: {
      AppHeader,
      AppFooter,
    },
  //   create(){
  //   this.$router.go()
  // }
  props: {
    ten: { type: String, default: 1 },
  },
  methods: {
    hihi(){
      console.log(this.$route.params)
      console.log(this.name)
    }
  }
  };
</script>
<template>
    <div id="app" >
      <!-- <button @click="hihi">sd</button> -->
    <AppHeader id="reload"/>
    <div class="mid">
      <router-view :key="$route.fullPath" />
    </div>
    <AppFooter class="bottom"></AppFooter> 
  </div>
</template>

<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
  @import "assets/style.css";
</style>
