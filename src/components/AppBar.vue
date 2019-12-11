<template>
	<nav>
		<v-app-bar app>
			<v-toolbar-title class="headline text-uppercase">
				<router-link :to="{name: 'home'}" class="title">
					<v-toolbar-title class="text-uppercase">
						<!-- Material icons are found here https://cdn.materialdesignicons.com/3.6.95/ -->
						<v-icon class="indigo--text mr-1 mb-1">mdi-school</v-icon>
						<span class="font-weight-bold indigo--text">Workshop</span>
						<span class="font-weight-light indigo--text">Day1</span>
					</v-toolbar-title>
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<!-- Appbar links. Will be hidden on mobile view -->
			<div class="hidden-sm-and-down">
				<!-- Links -->
				<v-btn text v-for="link in links" :key="link.name" :to="link.address" exact>
					<v-icon small class="mr-1 indigo--text">{{ link.icon }}</v-icon>
					<span class="mr-2 indigo--text">{{ link.name }}</span>
				</v-btn>
			</div>
			<v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up indigo--text"></v-app-bar-nav-icon>
		</v-app-bar>

		<!-- Nav drawer. This appears on mobile view -->
		<v-navigation-drawer app v-model="drawer" temporary right>
			<!-- Account link - Ignore, for aesthetics only -->
			<v-list-item class="my-2">
				<avatar :username="sampleUser.name" class="mr-5"></avatar>
				<v-list-item-content>
					<v-list-item-title>{{ sampleUser.name }}</v-list-item-title>
					<v-list-item-subtitle>{{ sampleUser.bio }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
			<v-list dense>
				<!-- Links -->
				<v-list-item
					v-for="link in links"
					:key="link.name"
					:href="link.address"
					target="_blank"
					exact
					link
					active-class="indigo--text"
				>
					<v-list-item-icon>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	import Avatar from 'vue-avatar'
	export default {
		components: {
			avatar: Avatar
		},
		data() {
			return {
				drawer: false,
				links: [
					{
						name: 'Sarah Opeña',
						address: { name: 'sarah-view'},
						icon: 'mdi-fan mdi-spin'
					},
					{
						name: 'Si ✌',
						address: 'https://www.facebook.com/srapdv',
						icon: 'mdi-account-outline'
					},
					{
						name: 'Daun Sayson',
						address: 'https://www.google.com/chrome',
						icon: 'mdi-cannabis'
					},
					{
						name: 'Kyle Zabala',
						address: 'https://youtube.com',
						icon: 'mdi-alien'
					},
					{ 	name: 'CJ Corpuz', 
						address: {name: 'cjview'}, 
						icon: 'mdi-gog' 
					}
				],
				sampleUser: {
					name: 'Ned Stark',
					bio: 'Die in Season 1'
				}
			}
		},
		methods: {},
		computed: {},
		filters: {}
	}
</script>


<style scoped>
	.title {
		text-decoration: none;
		text-decoration-style: none;
		color: white;
	}
</style>
