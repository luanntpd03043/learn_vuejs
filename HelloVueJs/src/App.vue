<template>
	<div id="app">
		<div class="container">
			<button v-on:click="title = 'Hoc vuejs'">Thay doi title tu Component App.vue</button>
			<comp-header 
				v-on:changeTitleEvent="handleChangeTitle" 
				v-bind:title="title"/>
			<list-user v-bind:listUser="listUser"/>
			<comp-footer v-bind:title="title" />
		</div>
	</div>
</template>

<script>
// props -> truyền data từ comp cha vào comp con ->Cú pháp giống thuộc tính
// props down truyen comp cha -> comp con -> comp con chỉ được dùng, k đc thay đổi trực tiếp
// Event up -> truyền sự kiện thong báo cho comp cha biết là comp con muốn thay đổi dữ liệu -> NV của comp nhận event và thay đổi dữ liệu
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import ListUser from './components/ListUser.vue';
export default {
	name: 'app',
	data () {
		return {
			title: 'VueJs-Header',
			listUser:[
				{
					id:100,
					email: 'test01@gmail.com',
					active: true
				},
				{
					id:101,
					email: 'test02@gmail.com',
					active: true
				},
				{
					id:102,
					email: 'test03@gmail.com',
					active: false
				},
				{
					id:103,
					email: 'test04@gmail.com',
					active: true
				},
				{
					id:104,
					email: 'test05@gmail.com',
					active: false
				},
				{
					id:105,
					email: 'test06@gmail.com',
					active: true
				},
			]
		}
	},
	components: {
		CompHeader,
		CompFooter,
		ListUser
	},
	methods:{
		handleChangeTitle(data){
			// this.title = 'Học Front End';
			this.title = data.title;
			console.log('handleChangeTitle đc gọi sau khi kích hoạt thành công', data);
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.container{
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 15px;
		min-height: 3000px;
	}
</style>
