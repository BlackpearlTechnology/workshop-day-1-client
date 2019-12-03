<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" sm="10">
				<v-card class="px-3 pb-3">
					<v-card-title class="justify-center grey--text">BEST APP IN THE WORLD</v-card-title>
					<v-divider class="mb-5" />
					<div class="d-flex justify-center align-center ma-5">
						<v-btn @click="dec()" fab small elevation="0" class="mr-5 blue" dark>
							<v-icon>mdi-minus</v-icon>
						</v-btn>
						<span class="display-4 mx-5 font-weight-thin grey--text">{{ counter }}</span>
						<v-btn @click="inc()" fab small elevation="0" class="ml-5 red" dark>
							<v-icon>mdi-plus</v-icon>
						</v-btn>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			inc() {
				this.counter += 1
			},
			dec() {
				if (this.counter > 0) {
					this.counter -= 1
				}
			}
		}
	}
</script>

<style>
</style>