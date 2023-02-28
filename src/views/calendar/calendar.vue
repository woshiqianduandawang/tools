<template>
  <h3>每日一言</h3>
  <div id="father"></div>
  <button id="renovate" @click="GetDaily">刷新</button>
  <router-link to="/" custom v-slot="{navigate}">
    <button id="back" @click="navigate">返回</button>
  </router-link>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "dictum",
  setup() {
    const { proxy } = getCurrentInstance();
    GetDaily()
    function GetDaily() {
      proxy
        .$Network({
          url: "/yiyan/index.php",
          params: {
            key: "ajdu987hrjfw",
          },
        })
        .then(({ data: result }) => {
          document.querySelector("#father").innerHTML = result;
        })
        .catch((err) => {
          console.log("失败：", err);
        });
    }
    return {
      GetDaily
    }
  },
};
</script>
  
<style scoped>
h3 {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  background-color: #db6d6d;
}
div {
  margin-top: 30px;
  padding: 20px;
  padding-top: 70px;
  line-height: 30px;
  font-size: 20px;
}
#back {
  position: absolute;
  top: 50px;
  width: 50px;
  height: 30px;
}
#renovate {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 40px;
}
</style>