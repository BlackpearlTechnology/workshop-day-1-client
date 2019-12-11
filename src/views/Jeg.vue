<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="6">
				<v-card class="mx-auto" max-width="600">
					<v-img
						class="white--text align-end"
						height="170px"
						src="http://1.bp.blogspot.com/_ptLD-cYI7fQ/SUscNGOLr2I/AAAAAAAAAHc/W8DYJsfBPxo/s1600/Kaps-Amazing-Stories.jpg"
					></v-img>
					<v-card-text>
						<v-text-field
							label="Title"
							v-model="title"
							prepend-inner-icon="mdi-book-open-page-variant"
							outlined
						/>
						<v-text-field
							label="Author"
							v-model="uploader"
							prepend-inner-icon="mdi-account-circle-outline"
							outlined
						/>
						<v-textarea
							label="Description"
							v-model="description"
							rows="3"
							prepend-inner-icon="mdi-book-information-variant"
							outlined
						/>
					</v-card-text>
					<v-card-actions class="justify-end">
						<v-btn @click="handleAddVideo()" color="green" text>
							<v-icon class="mr-1">mdi-content-save</v-icon>SAVE
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title class="grey--text">TOP VIDEOS</v-card-title>
					<v-divider />
					<v-slide-x-transition group>
						<v-row v-for="video in videos" :key="video.title" class="px-3">
							<v-col>
								<v-card elevation="0" style="border: 1px solid grey">
									<v-card-title class="title">{{ video.title }}</v-card-title>
									<v-subheader>{{ video.description }}</v-subheader>
									<div class="d-flex pa-5 justify-end">
										<small>
											<em>{{ video.uploader }}</em>
										</small>
									</div>
								</v-card>
							</v-col>
						</v-row>
					</v-slide-x-transition>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				description: '',
				uploader: '',
				videos: [
					{
						title: 'The  Z u c c  is medically color-blind',
						description:
							"Facebook's lizard man has been confirmed to be partially color blind. Reported by an angry employee",
						uploader: 'GiveMeARaiseZucc'
					},
					{
						title: 'Jaguar poops and dies',
						description: 'Mommy jaguar left the earth early',
						uploader: 'poacher99'
					}
				]
			}
		},
		methods: {
			handleAddVideo() {
				this.videos.unshift({
					title: this.title,
					description: this.description,
					uploader: this.uploader
				})
			}
		}
	}
</script>

<style>
</style>