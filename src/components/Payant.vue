<template>
	<div>
		<navbar></navbar>
		<div class="row">
			<formulaire></formulaire>
			<my-event v-for="event in datas.events" :key="event.id" :event="event" v-if="event.payant === false"></my-event>
		</div>
	</div>
</template>

<script>
	import MyEvent from './Event'
	import { Store } from '@/Store.js'
	import Navbar from './Navbar'
	import Form from './Form'
	export default {
		name: 'liste',
		components: { myEvent: MyEvent, formulaire: Form, navbar: Navbar },
		data() {
			return {
				datas: Store.datas,
			}
		},
	}

</script>

<style scoped>
	.row {
		padding-top: 40px;
		padding-bottom: 20px;
		width: 900px;
	}
</style>