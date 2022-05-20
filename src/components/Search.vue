<template>
    <div class="search">
        <van-search
        shape="round"
        v-model="value"
        :placeholder="mess"
        input-align="left"
        class="s"
        />
        <!-- 搜索图标 -->
        <!-- <span class="s-icon">
            <van-icon name="search" size="16"/>
        </span> -->
    </div>
</template>

<script>
    export default ({
        name: "Search",
        props:["mess"],
        // props:{
        //     "mess":{
        //         type:String,
        //         value:''
        //     }
        // },
        methods: {
            
        },
        data(){
            return {
                value:''
            }
        }
    })
</script>
<style scoped lang="less">
    .search {
        position:relative;
        .s {
            padding:10px 20px;
        }
        // .s-icon {
        //     position: absolute;
        //     display: inline-block;
        //     top:14px;
        //     left:138px;
        // }
        .van-search__content {
            padding-left:130px;
        }
    }
</style>