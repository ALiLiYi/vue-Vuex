<template>
    <div class="drivermanage">
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
    name:'Drivermanage',
    components:{Goback,Banner,Cooperation,Submenu,Customerservice},
    methods:{
        change(){
            this.$store.dispatch("hornUrl",require("../assets/hornblues.png"));
            this.$store.dispatch("subMenu",[
                {
                    id:0,
                    url:require("../assets/diver.png"),
                    title:"司机信息"
                },
                {
                    id:1,
                    url:require("../assets/mileage.png"),
                    title:"行驶里程"
                },
                {
                    id:2,
                    url:require("../assets/timeLength.png"),
                    title:"驾驶时长"
                },
                {
                    id:3,
                    url:require("../assets/drive.png"),
                    title:"驾驶行为"
                },
                {
                    id:4,
                    url:'',
                    title:"敬请期待"
                },
                {
                    id:5,
                    url:'',
                    title:"敬请期待"
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

