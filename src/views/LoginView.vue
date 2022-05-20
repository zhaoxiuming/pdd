<template>
    <div>
        <van-form @submit="onSubmit"> 
            <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            required
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true,validator:fn, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import instance from "@/api/api"
    import debounce from "@/utils/debounce"
    import {Toast} from 'vant'
    export default ({
        name: "LoginView",
        methods: {
            async loginfn(){
                //登录验证业务
                let {data} = await instance.post("/login")
                console.log(data)
                let token = data.token
                //需要把token存到vuex中  commit提交给mutitaon dispatch 提交给action的
                this.$store.commit("settoken",token)
                //怎样跳转 跳转到哪里
                let nextTo = this.nextTo
                Toast({
                    type:"success",
                    message:"登录成功",
                    onClose:()=>{
                        this.$router.push({name:nextTo})
                    }
                })
            },
            onSubmit(a){
                //登录验证  用户行为事件
                //使用防抖函数封装后的函数
                this.debounceloginfn()
            },
            fn(value){
                console.log(value); //输入表单的值
            }
        },
        data(){
            return {
                username:"",
                password:"",
                debounceloginfn:null,
                nextTo:"",//登录成功之后往哪里去
            }
        },
        created() {
            this.debounceloginfn = debounce(this.loginfn,2000)
            this.nextTo = this.$router.currentRoute.params.id

        }
    })
</script>
<style scoped lang="less">

</style>