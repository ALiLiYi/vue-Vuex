<template>
    <div class="goback">
        <div class="back-wraper" @click="goback">
            <div class="back"></div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Goback',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.back-wraper{
    height:140px;
    width:90px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    left:0;
    top:0;
}
.back{
    width:24px;
    height:24px;
    border-left:4px solid white;
    border-top:4px solid white;
    transform:rotateZ(-45deg);
}
</style>

