<template>

<v-container>
		<v-row justify="center">
			<v-col cols="12" sm="10">
				<v-card class="px-3 pb-3">
					<v-card-title class="justify-center grey--text">SAMSUNG 321<v-icon>mdi-alarm-light</v-icon></v-card-title>
					<v-divider class="mb-5" />
                    <v-form ref="form">
					<div class="text-right">
                        <v-text-field label="Agency Name" clearable shaped outlined></v-text-field>
                        <v-text-field label="Agency Type" clearable shaped outlined></v-text-field>
                        <v-text-field label="Agency Number" clearable shaped outlined></v-text-field>
                        <v-text-field label="Agency Address" clearable shaped outlined></v-text-field>
                        <v-btn outlined fab color="green">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-btn outlined fab color="error" @click="reset">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
					</div>
                    </v-form>
                    <div>
                        <v-simple-table height="300px">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Agency Name</th>
                                    <th class="text-left">Agency Type</th>
                                    <th class="text-left">Agency Number</th>
                                    <th class="text-left">Agency Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in Agency" :key="item.agencyName">
                                    <td>{{ item.agencyName }}</td>
                                    <td>{{ item.agencyType }}</td>
                                    <td>{{ item.agencyNumber }}</td>
                                    <td>{{ item.agencyAddress }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
  
</template>

<script>
export default {
    reset () {
        this.$refs.form.reset()
      }
}
</script>

<style scoped>
 
</style>