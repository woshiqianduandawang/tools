<template>
  <div id="father">
    <div id="div"></div>
    <button @click="BackVideo">上一个</button>
    <button @click="GetVideo">刷新</button>
    <button @click="GetVideo">下一个</button>
  </div>
</template>

<script>
export default {
  name: "TiktokVideo",
}
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