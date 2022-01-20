<template>
	<div class="customer-component">
		todoList:{{user}}
		<div v-for="item in list" :key="item.id">
			项目：{{item.text}}，状态：{{item.done ? '完成': '进行中'}}
		</div>
		<el-button type="primary" @click="toIndex">跳转</el-button>
		<MyDialog/>
		
		<!-- 路由匹配到的组件将渲染在这里 -->
	</div>
</template>
<script>
	import MyDialog from './MyDialog.vue'
	export default {
		name: 'Customer',
		components: {
			MyDialog
		},
		data() {
			return {
				list: [],
				user: ''
			}
		},
		created() {
			this.user = this.$store.state.app.count;
			this.list = [{
					id: 1,
					text: 'JavaScript',
					done: false
				}
			]
		},
		methods: {
			toIndex() {
				this.$router.push({ path: 'homepage' })
			}
		}
	}
</script>
