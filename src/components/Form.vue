<template>
	<div>
		<div class="row">
			<form class="col s12">
				<div class="row">
					<div class="input-field col s12">
						<select class="browser-default">
    					<option value="" disabled selected>Catégories</option>
							<option value="1">Concert</option>
							<option value="2">Festival</option>
							<option value="3">Théâtre</option>
							<option value="4">Atelier</option>
  					</select>
					</div>
					<div class="input-field col s6">
						<input id="last_name" type="text" class="validate" v-model="newEvent.intitule" @onmouseout="toUppercase()">
						<label for="last_name">Intitulé</label>
					</div>
					<div class="row">
						<div class="input-field col s12">
							<textarea id="textarea1" class="materialize-textarea" data-length="120" v-model="newEvent.description"></textarea>
							<label for="textarea1">Textarea</label>
						</div>
					</div>
					<div class="input-field col s6">
						<input id="last_name" type="url" class="validate" v-model="newEvent.url">
						<label for="last_name">Url cover</label>
					</div>
					<div class="input-field col s6">
						<input type="number" id="last_name" class="validate" v-model="newEvent.nbbillet">
						<label for="last_name">Nombre de billets</label>
					</div>
					<div class="input-field col s6">
						<label for="last_name">Payant</label>
						<p>
							<input name="group1" type="radio" id="test1" value="true" v-model="newEvent.payant" @click="disabled = true" />
							<label for="test1">Oui</label>
						</p>
						<p>
							<input name="group1" type="radio" id="test2" value="false" v-model="newEvent.payant" @click="disabled = false" />
							<label for="test2">Non</label>
						</p>
					</div>

					<div class="input-field col s6">
						<input id="last_name" type="text" class="validate" v-model="newEvent.prix" :disabled="disabled == false">
						<label for="last_name">Prix (entre 5 et 100€)</label>
					</div>
					<div class="input-field col s6">
						<input id="last_name" type="text" class="validate" v-model="newEvent.dateheure">
						<label for="last_name">Date et heure (ex: 19/05/2017 à 19h45)</label>
					</div>
					<div class="input-field col s6">
						<input id="last_name" type="text" class="validate" v-model="newEvent.lieu">
						<label for="last_name">Lieu</label>
					</div>
				</div>
				<button @click="add" class="btn waves-effect waves-light orange lighten-2" type="submit" name="action">Envoyer</button>
			</form>
		</div>
	</div>
</template>
<script>
	import { Store } from '@/Store.js'
	export default {
		name: 'form',
		data() {
			return {
				newEvent: {
					type: '',
					intitule: '',
					description: '',
					url: '',
					nbbillet: '',
					payant: true,
					prix: '',
					dateheure: '',
					lieu: '',
				},
				disabled: true,
			}
		},
		methods: {
			add() {
				Store.datas.events.push(this.newEvent)
				console.log(Store.datas.events)
				this.newEvent = {
					type: '',
					intitule: '',
					description: '',
					url: '',
					nbbillet: '',
					payant: true,
					prix: '',
					dateheure: '',
					lieu: '',
				}
			},
			methods: {
				toUppercase() {
					console.log('salut')
					Store.majfunction(string)
				},
			}
		}
	}

</script>
<style>

</style>