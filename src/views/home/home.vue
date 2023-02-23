<template>
  <div>欢迎访问cc工具箱</div>
  <router-link to="/tiktok_video">抖音视频</router-link>
  <router-link to="/calendar">日历</router-link>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
div{
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #bf3939;
}
  a{
    display: inline-block;
    padding: 1px solid #000;
    margin: 20px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
    background-color: #9a9a9a;
  }
  a:hover{
    background-color: #aeaeae;
  }
</style>