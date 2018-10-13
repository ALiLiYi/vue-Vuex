<template>
    <div class="menu">
        <div class="menu-box">
            <div class="operation" v-for="item in menuList" :key="item.id" @click="navigateTo(item.id)">
                <img :src="item.url"/>
                <div class="title"> {{item.title}} </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Menu',
        data(){
            return{
                menuList:[
                    {
                        id:0,
                        title:"订单管理",
                        url:require('../assets/order-manage.png')
                    },
                    {
                        id:1,
                        title:"车辆管理",
                        url:require("../assets/car-manage.png")
                    },
                    {
                        id:2,
                        title:"司机管理",
                        url:require("../assets/Driver-manage.png")
                    },
                    {
                        id:3,
                        title:"充电桩管理",
                        url:require("../assets/Charge-manage.png")
                    },
                    {
                        id:4,
                        title:"救援车管理",
                        url:require("../assets/rescue-manage.png")
                    },
                    {
                        id:5,
                        title:"收入明细",
                        url:require("../assets/cost-manage.png")
                    }
                ]
            }
        },
        methods:{
            navigateTo(e){
                console.log(e)
                switch(e){
                    case 0:
                        this.$router.push({path:"./ordermanage"});
                        break;
                    case 1:
                        this.$router.push({path:"./vehiclemanage"});
                        break;
                    case 2:
                    this.$router.push({path:"./drivermanage"});
                    break;
                }
            }
        }
    }
</script>
<style scoped>
    .menu-box{
        margin-top: 20px;
        background-color: #fff;
        display:flex;
        flex-wrap:wrap;
        padding:20px 20px 0 20px;
    }
    .operation{
        width:33.33%;
        padding-top:12px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .operation image{
        width: 120px;
        height: 120px;
        display: block;
    }
    .operation .title{
        padding: 20px 0 40px 0;
        line-height: 26px;
        font-size: 26px;
    }
</style>

