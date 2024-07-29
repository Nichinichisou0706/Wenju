<script>
export default {
  name: 'LayoutFooter'
}
</script>

<template>
  <div class="main">
    <div class="info">
      <div class="links">
        <span style="font-size: 1.5em;color: #e3e3e3">快捷入口</span>
        <div class="links-link">
          <a href="https://www.bupt.edu.cn/" target="_blank">北京邮电大学</a>
          <a href="https://www.ydict.net/" target="_blank">榕典</a>
          <a href="https://www.moedict.tw/" target="_blank">萌典</a>
          <a href="https://zhongguoyuyan.cn/" target="_blank">中国语言保护工程采录展示平台</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      WenJu @2024 Created by WenJu Group
      <span style="color: #a6a6a6; margin-left: 30px">备案号：</span>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" style="color: #f7f7f7" target="_blank">京ICP备xxxxxx号</a>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  background-color: #000;
  color: #fff;
  position: relative;
}

.info {
  padding: 50px 0 50px 150px;
  display: flex;
  flex-direction: row;
}

.links-link {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}

.links-link a {
  margin-bottom: 8px;
  color: #a3a3a3;
  font-size: 1.1em;
}

.copyright {
  width: 100%;
  text-align: center;
  font-size: 1.1em;
  position: relative;
  border-top: solid 1px #a6a6a6;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
