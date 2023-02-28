<template>
  <div>
    <div id="Video_div"></div>
    <button id="back" @click="BackVideo(true)" disabled>上一个</button>
    <button @click="GetVideo">刷新</button>
    <button @click="GetVideo(false)">下一个</button>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
export default {
  name: "Video-women",

  setup() {
    
    onMounted(() => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      ) {
        // 检测是否为移动端打开
        Video_div = document.querySelector("#Video_div");
        Video_div.style.width = window.screen.width + "px";
        console.log(window.screen.width);
      }
    });

    let Video_Log = []; //历史记录存在里面
    let count = 0; //上一个下一个计数
    let Video_div = null; //video的div父盒子
    let video = null; //video元素
    let Back_Button = null; //上一个的按钮

    GetVideo(true);
    //获取视频
    function GetVideo(Boolean) {
      if (count != 0) {
        Video_div.innerHTML = Video_Log[count - 1];
        document.querySelector("video").style.width = "100%";
        Back_Button.disabled = Boolean;
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
            console.log("成功");

            //存入历史记录
            Video_Log.unshift(result);

            // 插入元素
            Video_div.innerHTML = result;
            video = document.querySelector("video");
            video.style.width = "100%";
            Back_Button = document.querySelector("#back");
            Back_Button.disabled = Boolean;
          })
          .catch((err) => {
            console.log("失败：", err);
          });
      }
    }
    // 上一个视频
    function BackVideo(Boolean) {
      Video_div.style.width = window.screen.width + "px";
      Video_div.innerHTML = Video_Log[count + 1];
      document.querySelector("video").style.width = "100%";
      count++;
      Back_Button.disabled = Boolean;
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