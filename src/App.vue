<template>
	<div class="appvue">
		<div style="position: fixed;bottom:60px;right:20px;background:red;color:white;border-radius:5px;border-shadow:2px 2px 2px gray;" @click="totsai">tot</div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>
		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<svg-icon></svg-icon>

	</div>
</template>
<script>
import svgIcon from './components/common/svg'
export default {
  components: {
    svgIcon
  },
  methods: {
    totsai() {
      this.$router.push({
        path: '/totsai',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style/common';
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
