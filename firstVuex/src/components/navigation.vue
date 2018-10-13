<template>
    <div class="navigation">
        <div class="footer">
            <div class="router-link">
                <router-link to='/home'>
                <img src="../assets/home-active.png">
                <img src="../assets/home.png">
                首页
                </router-link>
            </div>
            <div class="router-link">
                <router-link to='/us'>
                <img src="../assets/mine-active.png">
                <img src="../assets/mine.png">
                我的
                </router-link>
            </div>
        </div>
    </div>
    
</template>
<script>
    
</script>
<style scoped>
.footer{
  width: 100%;
  height: 98px;
  background-color: #fff;
  border-top: solid 1px #EEEBEB;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
.router-link{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link a{
  color: #999;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.router-link .router-link-active{
  color: #4BA5FB;
}
.router-link img:nth-child(1){
  display: none;
}
.router-link-active>img:nth-child(1){
  display: inline-block;
}
.router-link-active>img:nth-child(2){
  display: none;
}

.router-link img{
  width: 46px;
  margin-bottom: 10px;
}
</style>

