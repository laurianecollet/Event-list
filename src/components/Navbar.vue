<template>
	<div>
		<nav>
			<div class="nav-wrapper">
				<ul>
					<li>
						<router-link to="/">Evenements gratuits</router-link>
					</li>
					<li v-for="countEventCateg in nbEventCategorie"> {{countEventCateg.name}} : {{countEventCateg.count}}</li>
					<li>
						<router-link to="/payant">Evenements payants</router-link>
					</li>
					<li>
						<input type="search" class="validate" v-model="datas.searchByPrice" @keyup="searchPrice" placeholder="Recherche">
					</li>
					<li>
						<select class="browser-default" v-model="datas.searchCategorie">
    					<option value="" disabled selected>Catégories</option>
							<option v-for="categorie in datas.categories" v-bind:value="categorie.value">
   							 {{ categorie.text }}
						  </option>
  					</select>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	import { Store } from '@/Store.js'

	export default {
		name: 'navbar',
		data() {
			return {
				datas: Store.datas,
			}
		},
		methods: {
			searchPrice() {
				Store.datas.searchByPrice = this.datas.searchByPrice;
				Store.search()
			}

		},
		computed: {
			nbConcert: function () {
				let tab = this.datas.events.filter((elt) => elt.type === "Concert");
				return tab.length
			},
			nbEventCategorie: function () {
				let counts = []
				for (let categorie of this.datas.categories) {
					let countCategorie = this.datas.events.filter((elt) => elt.type === categorie.value).length;
					let countEvent = {
						name: categorie.text,
						count: countCategorie
					}
					counts.push(countEvent)
				}
				return counts
			}
		}
	}

</script>

<style scoped>
	ul .home {
		font-size: 30px;
	}
</style>