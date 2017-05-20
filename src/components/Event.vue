<template>
	<div>
		<div class="row">
			<div class="col s12 m7">
				<div class="card">
					<div class="card-image">
						<img v-bind:src="event.url">
						<span class="card-title">{{event.intitule}}</span>
					</div>
					<div class="card-content">
						<p>{{event.description}}</p>
						<p>{{event.prix | arrondi}}€</p>
					</div>
					<div class="card-action">
						<button @click="deleteEvent(event)" class="btn waves-effect waves-light orange lighten-2" type="submit" name="action"><i class="material-icons">delete</i></button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Store } from '@/Store.js'
	export default {
		name: 'event',
		props: ['event'],
		data() {
			return {
				datas: Store.datas,
			}
		},
		methods: {
			deleteEvent: function (theEvent) {
				let position = Store.datas.events.indexOf(theEvent);
				if (position != -1) { // Si la position est trouvé on supprime la tache à la position donnée
					Store.datas.events.splice(position, 1);
				}
			},
		},
		filters: { // pour les filtres affichés
			arrondi: function (val) {
				return Math.round(val * 100) / 100;
			},
		}
	}

</script>
<style>

</style>