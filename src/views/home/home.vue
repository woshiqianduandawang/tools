<template>
  <h1>欢迎访问cc工具箱</h1>
  <div id="content">
    <div id="a1">
      <h3>每日一言：</h3>
      <span></span>
    </div>
    <router-link to="/video_women">小姐姐视频</router-link>
    <router-link to="/video_man">小哥哥视频</router-link>
    <router-link to="/daily">每日一言</router-link>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "Home",
  setup() {
    const { proxy } = getCurrentInstance();
    proxy
      .$Network({
        url: "/yiyan/index.php",
        params: {
          key: "ajdu987hrjfw",
        },
      })
      .then(({ data: result }) => {
        document.querySelector("span").innerHTML = result;
      })
      .catch((err) => {
        console.log("失败：", err);
      });
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #bf3939;
}
#content {
  padding: 30px;
}
#a1{
  border-bottom: 3px solid rgb(0,0,0,0.3);
  padding: 20px;
}
#a1 h3{
  position: relative;
  top: -20px;
  left: -20px;
}
a {
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
a:hover {
  background-color: #aeaeae;
}
span {
  display: inline-block;
}
</style>