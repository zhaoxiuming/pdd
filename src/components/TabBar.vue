<template>
    <div class="tabbar">
        <van-tabbar v-model="active" route active-color="#ee0a24">
            <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item name="search" icon="video-o" to="/video">直播</van-tabbar-item>
            <van-tabbar-item name="friends" icon="bars" to="/type">分类</van-tabbar-item>
            <van-tabbar-item name="setting" icon="chat-o" to="/talk">聊天</van-tabbar-item>
            <van-tabbar-item name="setting" icon="smile-o" to="/mine">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default ({
        name: "TabBar",
        methods: {
            
        },
        data(){
            return {
                active:0
            }
        }
    })
</script>
<style scoped lang="less">

</style>