<template>
    <div>
        <search :mess="mess"/>
        <!--分类页面 -->
        <van-tree-select 
        :items="types"
        height="100vh"
        :main-active-index="activeindex"

        @click-nav="leftfn"
        >

        <template slot="content">
            <div  ref="right">
                <div v-for="(item,index) in contentsright" :key="index">
                    <h3>{{item.text}}</h3>
                    <img :src="item.image" alt="">
                </div>
            </div>
        </template>

        </van-tree-select>
        <tab-bar/>
    </div>
</template>

<script>
    import TabBar from "@/components/TabBar.vue"
    import Search from "@/components/Search.vue"
    import instance from "@/api/api"
    export default ({
        name: "TypeView",
        data(){
            return {
                mess:'分类页搜索',
                types:[],
                activeindex:0,//左侧选中id
                rightid:"", //右侧显示id
                contentsright:[],//右侧的数据
            }
        },
        methods: {
            leftfn(item){
                //点击左侧导航触发的事件
                console.log(item) //点击 当前元素的索引
                this.activeindex = item
                this.contentsright = this.types[item].children
                //获取右侧元素
                // console.log(this.$refs)
                // let right = this.$refs
                var xx = document.getElementsByClassName('van-tree-select__content')
                xx[0].scrollTop = 0
                console.log(xx[0].scrollTop)
            },
            async gettypes(){
                //请求数据的函数
                let {data} = await instance.get("/type")
                console.log(data)
                this.types = data
                this.contentsright = this.types[this.activeindex].children
            }
        },
        created(){
            this.gettypes()
        },
        components:{
            TabBar,
            Search
        }
    })
</script>
<style scoped lang="less">
.van-sidebar::-webkit-scrollbar {
    display: none;
  }
  .van-tree-select__content::-webkit-scrollbar {
    display: none;
  }
</style>