<template>
  <div class="home">
    <!-- banner -->
    <Banner/>
    <!-- 合作推广频道 -->
    <Cooperation/> 
    <!-- 菜单 -->
    <Menu/>
    <!-- 人工服务 -->
    <Customerservice/>
    <div class="company">深圳市航通北斗信息科技有限公司</div>
    <!-- 导航 -->
    <navigation/>
  </div>
</template>

<script>
import Banner from './banner'
import Cooperation from './cooperation'
import Menu from './menu'
import Customerservice from './customerservice'
import navigation from './navigation'
export default {
  name: 'Home',
  components:{ Banner, Cooperation, Menu, Customerservice, navigation },
  methods:{
    changehorn(){
      this.$store.dispatch("hornUrl",require("../assets/horn.png"))
    }
  },
  created(){
    this.changehorn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company{
  font-size:20px;
  color:#999999;
}
</style>
