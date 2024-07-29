<script>
import { UserOutlined } from '@ant-design/icons-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutHeader',
  components: { UserOutlined },
  computed: {
    tab: {
      get () {
        return [this.$route.name]
      },
      set () {}
    },
    ...mapGetters(['userInfo']),
    isLogin () {
      return this.$store.getters.userInfo.role !== 'unregistered'
    }
  }
}
</script>

<template>
  <a-row style="background-color:#fff;">
    <a-col :span="2">
      <div class="logo">
        <router-link :to="{name: 'Home'}">
          <span class="hollow">文聚</span>
        </router-link>
      </div>
    </a-col>
    <a-col :span="18">
      <a-menu v-model:selectedKeys="tab" mode="horizontal" class="tab">
        <a-menu-item key="Home">
          <router-link :to="{name: 'Home'}">主页</router-link>
        </a-menu-item>
        <a-menu-item key="Pinyin">
          <router-link :to="{name: 'Pinyin'}">拼音</router-link>
        </a-menu-item>
        <a-menu-item key="Dictionary">
          <router-link :to="{name: 'Dictionary'}">词典</router-link>
        </a-menu-item>
        <a-menu-item key="WordList">
          <router-link :to="{name: 'WordList'}">词单</router-link>
        </a-menu-item>
        <a-menu-item key="Articles">
          <router-link :to="{name: 'Articles'}">文章</router-link>
        </a-menu-item>
        <a-menu-item key="Tools">
          <router-link :to="{name: 'Tools'}">工具</router-link>
        </a-menu-item>
        <a-menu-item key="Rewards">
          <router-link :to="{name: 'Rewards'}">积分</router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col>
      <div class="user">
        <!--<router-link :to="{name: isLogin ? 'UserInfo' : 'Login'}">-->
        <router-link :to="{name: 'Home'}">
          <a-avatar shape="square" :size="40"
                    :style="{backgroundColor: isLogin ? userInfo.role === 'admin' ? '#ff9f3e' : userInfo.role === 'super-admin' ? '#ff3232' : '#3e3ea3' : '#bfbfbf'}">
            <UserOutlined/>
          </a-avatar>
          <span style="margin-left: 16px;color: #3e3e3e;font-size: 1.1em;">{{isLogin ? userInfo.username : '登录'}}</span>
        </router-link>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>
.logo {
  float: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.hollow{
 text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
 font-size: 30px;
 color:#fff;
}

.tab:deep(.ant-menu-item) {
  width: 80px;
  text-align: center;
}
</style>
