<template>
	<div>
		<div class="row">
			<my-event v-for="event in datas.events" :key="event.id" :event="event" v-if="event.payant === true"></my-event>
		</div>
	</div>
</template>

<script>
	import MyEvent from './Event'
	import { Store } from '@/Store.js'

	export default {
		name: 'liste',
		components: { myEvent: MyEvent },
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