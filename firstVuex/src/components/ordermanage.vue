<template>
    <div class="ordermanage">
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
    name:'Ordermanage',
    components:{Goback,Banner,Cooperation,Submenu,Customerservice},
    methods:{
        change(){
            this.$store.dispatch("hornUrl",require("../assets/hornblue.png"));
            this.$store.dispatch("subMenu",[
                {
                    id:0,
                    url:require("../assets/Haveinhand.png"),
                    title:"待处理订单"
                },
                {
                    id:1,
                    url:require("../assets/Tobetreated.png"),
                    title:"进行中订单"
                },
                {
                    id:2,
                    url:require("../assets/Completed.png"),
                    title:"已完成订单"
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

