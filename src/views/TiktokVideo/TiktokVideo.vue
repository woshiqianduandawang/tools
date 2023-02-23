<template>
  <div id="father">
    <div id="div"></div>
    <button @click="BackVideo">上一个</button>
    <button @click="GetVideo">刷新</button>
    <button @click="GetVideo">下一个</button>
  </div>
</template>

<script>
import axios from "axios";
import { onBeforeMount, reactive, ref, onMounted } from "vue";
export default {
  name: "TiktokVideo",

  setup() {
    onMounted(() => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      ) {
        document.querySelector("#father").style.width = window.screen.width + "px";
        console.log(window.screen.width);
      } else {
        // 执行桌面端代码
        console.log(window.screen.height);
      }
    });

    let Video_Log = [];
    let count = 0;
    GetVideo();
    //获取视频
    function GetVideo() {
      if (count != 0) {
        document.querySelector("#div").innerHTML = Video_Log[count - 1];
        count--;
      } else {
        count = 0;
        axios({
          url: "https://v.api.aa1.cn/api/api-dy-girl/index.php",
          params: {
            key: "ajdu987hrjfw",
          },
        })
          .then(({ data: result }) => {
            console.log("成功", result);

            //存入历史记录
            Video_Log.unshift(result);

            // 插入元素
            document.querySelector("#div").innerHTML = result;
            document.querySelector("video").style.width = '100%'
          })
          .catch((err) => {
            console.log("失败：", err);
          });
      }
    }
    // 上一个视频
    function BackVideo() {
      document.querySelector("#div").innerHTML = Video_Log[count + 1];
      count++;
    }
    return {
      Video_Log,
      GetVideo,
      BackVideo,
    };
  },
};
</script>

<style scoped>
#father {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
button {
  width: 100px;
  height: 30px;
}
button:nth-child(4) {
  position: absolute;
  right: 0;
}
button:nth-child(3) {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
}
video {
  width: 100px;
  height: 100px;
}
</style>