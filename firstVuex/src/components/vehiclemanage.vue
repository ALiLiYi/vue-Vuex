<template>
    <div class="vehiclemanage">
        <!-- 返回 -->
        <Goback/>
        <!-- banner -->
        <Banner/>
        <!-- 合作推广 -->
        <Cooperation/>
        <!-- 子菜单 -->
        <Submenu/>
        <!-- 人工服务 -->
        <Customerservice/>
    </div>
</template>
<script>
import Goback from './goback'
import Banner from './banner'
import Cooperation from './cooperation'
import Submenu from './submenu'
import Customerservice from './customerservice'
export default{
    name:'Vehiclemanage',
    components:{Goback,Banner,Cooperation,Submenu,Customerservice},
    methods:{
        change(){
            this.$store.dispatch("hornUrl",require("../assets/horn-green.png"));
            this.$store.dispatch("subMenu",[
                {
                    id:0,
                    url:require("../assets/vehicle-monitoring.png"),
                    title:"车辆监控"
                },
                {
                    id:1,
                    url:require("../assets/vehicle-control.png"),
                    title:"控制车辆"
                },
                {
                    id:2,
                    url:require("../assets/abnormal-alarm.png"),
                    title:"异常警报"
                },
                {
                    id:3,
                    url:require("../assets/Violation-inquiry.png"),
                    title:"违章查询"
                },
                {
                    id:4,
                    url:require("../assets/Leasehold-management.png"),
                    title:"租赁管理"
                },
                {
                    id:5,
                    url:require("../assets/Vehicle-failure.png"),
                    title:"车辆故障"
                }
            ]);
        }
    },
    created(){
        this.change();
    }
}
</script>
<style scoped>

</style>

