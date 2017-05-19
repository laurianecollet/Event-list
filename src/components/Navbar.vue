<template>
	<div>
		<nav>
			<div class="nav-wrapper">
				<ul>
					<li>
						<router-link to="/">Evenements gratuits</router-link>
					</li>

					<li>
						<router-link to="/payant">Evenements payants</router-link>
					</li>
					<li>
						<input type="search" class="validate" v-model="datas.searchByPrice" @keyup="searchPrice" placeholder="Recherche">
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
			nbConcert: function () {
				for (let i = 0; i < this.datas.events.length; i++) {
					if (this.datas.events.type === "Concert") {
						this.datas.counter += 1;
						console.log(this.datas.counter)
					}
				};
			},
			searchPrice() {
				Store.datas.searchByPrice = this.datas.searchByPrice;
				Store.search()
			}

		}
	}

</script>

<style scoped>
	ul .home {
		font-size: 30px;
	}
</style>