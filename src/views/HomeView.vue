<template>
  <div class="home">
    <search :mess="mess" />
    <h3>首页</h3>
    
    <tab-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import instance from "@/api/api"
import TabBar from "@/components/TabBar.vue"
import Search from "@/components/Search.vue"
export default {
  name: "HomeView",
  data(){
    return {
      mess:"首页搜索"
    }
  },
  components: {
    TabBar,
    Search
  },
  methods:{
    getfn(){
      instance.get("/get").then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
<style lang="less" scoped>
  
</style>
