<template>
  <!-- <TiktokVideo></TiktokVideo> -->
  <!-- <audio src="" controls></audio> -->
  <p>aaa:{{ Audio_url }}</p>
</template>

<script>
import TiktokVideo from "../../components/TiktokVideo.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: 'Video_man',
  components: {
    TiktokVideo
  },
  setup() {
    let Video_Log = [];
    let count = 0;
    let Audio_url = ref(0)
    axios({
          url: "https://zj.v.api.aa1.cn/api/qqmusic/",
          params: {
            songName: '稻香',
            pageSize: 1
          }
        })
          .then((result) => {
            Audio_url.value = 111
            console.log("成功", result);
          })
          .catch((err) => {
            console.log("失败：", err);
          });
          
    return {
      Video_Log,
      Audio_url
    };
  },
};
</script>

<style>
</style>