<template>
    <div class="submenu">
        <div class="per-menu" v-for="item in menuList" :key="item.id">
            <img :src="item.url" alt="">
            <span class="title">{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default{
    name:'Submenu',
    computed:{
        menuList(){
            return this.$store.state.submenu
        }
    }
}
</script>
<style scoped>
.submenu{
    background:#fff;
    display:flex;
    flex-wrap:wrap;
    margin-top: 20px;
}
.per-menu{
    width:33.33%;
    padding:60px 0 40px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-right:1px solid #E5E5E5;
}
.per-menu:nth-child(3n){
    border-right: none;
}
.per-menu img{
    width: 50px;
    height: 50px;
}
.title{
    line-height:68px;
    font-size:28px;
}
</style>

