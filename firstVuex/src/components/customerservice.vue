<template>
    <div class="customerservice">
        <div class="customerservice-box">
            <img src="../assets/receiver.jpg"/>
            <span class="prompt">人工服务</span>
            <a :href="tel" class="num">400-680-0877</a>
            24小时热线
        </div>
    </div>
</template>
<script>
    export default{
        name:'Customerservice',
        data(){
            return{
                tel:'400-680-0877'
            }
        }
    }
</script>
<style scoped>
.customerservice-box{
    margin-top: 30px;
    margin-bottom:22px;
    height:22px;
    line-height:22px;
    font-size:24px;
    color:#999999;
    text-align:center;
}
.customerservice-box img{
    display:inline-block;
    vertical-align:middle;
    width:25px;
    height:25px;
    margin-right:15px;
}
.prompt{
    color: #333;
}
.num{
    color: #5cabfb;
}
</style>

