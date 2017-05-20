<template>
	<div>
		<div class="row">
			<my-event v-for="event in events" :key="event.id" :event="event" v-if="event.payant === true"></my-event>
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
		computed: {
			events() {
				return Store.search();
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