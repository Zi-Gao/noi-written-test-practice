<template>
  <div class="container-sm">
    <div class="intro text-center">
      <div class="title-container">
        <h1 style="font-size: 4em">NOI 2025 背笔试</h1>
      </div>
      <p>这是一个帮助你记忆 NOI 笔试题库的网站。</p>
      <p>祝所有参赛者 NOI 2025 rp++！</p>
      <p>免责声明：不保证题库无错，版权所属CCF，如需使用请一定自行对照<a href="https://noi.cn/xw/2025-06-16/844453.shtml">CCF下发的2025年题库</a>避免对您的考试造成影响</p>
      
    </div>
    <div class="d-grid gap-2">
      <router-link to="/test" class="btn btn-primary btn-lg">
        开始
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title-container {
  margin: 1em 0;
}
</style>
