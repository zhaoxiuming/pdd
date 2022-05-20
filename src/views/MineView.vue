<template>
    <div>
        <h3>我的页面</h3>
        <button @click="fn">验证token</button>
        <tab-bar/>
    </div>
</template>

<script>
    import TabBar from "@/components/TabBar.vue"
    export default ({
        name: "MineView",
        methods: {
            fn(){
                console.log(this.$store)
            }
        },
        components:{
            TabBar
        }
    })
</script>
<style scoped lang="less">

</style>