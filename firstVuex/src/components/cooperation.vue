<template>
    <div class="cooperation">
        <div class="cooperation-box">
            <img :src="hornUrl" alt=""><span>合作推广频道</span><div class="to-icon"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"Cooperation",
        computed:{
            hornUrl(){
                return this.$store.state.horn
            }
        }
    }
</script>
<style scoped>
.cooperation-box{
    height: 90px;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.cooperation-box>img{
    width: 30px;
    margin: 0 12px 0 30px;
}
.cooperation-box>span{
    font-size: 28px;
}
.to-icon{
    margin-left: auto;
    margin-right: 24px;
    width:24px;
    height:24px;
    box-sizing:border-box;
    border-top:4px solid #c6c4c4;
    border-right:4px solid #c6c4c4;
    border-bottom:4px solid transparent;
    border-left:4px solid transparent;
    border-radius:4px;
    transform:rotateZ(45deg);
}
</style>
