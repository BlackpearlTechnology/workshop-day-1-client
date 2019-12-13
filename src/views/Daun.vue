<template>

<v-container>
		<v-row justify="center">
			<v-col cols="12" sm="10">
				<v-card class="px-3 pb-3">
					<v-card-title class="justify-center grey--text">SAMSUNG 321<v-icon class="icon-bg">mdi-alarm-light</v-icon></v-card-title>
					<v-divider class="mb-5" />
                    <v-form ref="form">
					<div class="text-right">
                        <v-text-field v-model="agencyName" label="Agency Name" clearable shaped outlined></v-text-field>
                        <v-text-field v-model="agencyType" label="Agency Type" clearable shaped outlined></v-text-field>
                        <v-text-field v-model="agencyNumber" label="Agency Number" clearable shaped outlined></v-text-field>
                        <v-text-field v-model="agencyAddress" label="Agency Address" clearable shaped outlined></v-text-field>
                        <v-btn @click="addAgency" outlined fab color="green">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-btn outlined fab class="mr-4" color="error" @click="reset">
                        <v-icon>mdi-cancel</v-icon>
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
                                <tr v-for="item in agencies" :key="item.agencyName">
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
    data(){
        return{
            drawer: false,
            agencyName: '',
            agencyType: '',
            agencyNumber: '',
            agencyAddress: '',
            agencies: [
                {
                    agencyName: "Test",
                    agencyType: "Test",
                    agencyNumber: "Test",
                    agencyAddress: "Test",
                }
            ]
        }
    },
    methods: {
        addAgency() {
            this.agencies.push({
                agencyName: this.agencyName,
                agencyType: this.agencyType,
                agencyNumber: this.agencyNumber,
                agencyAddress: this.agencyAddress
            })
        },
        reset () {
        this.$refs.form.reset()
      }
    }
    }
</script>

<style scoped>
 
  .icon-bg {
      background:linear-gradient(135deg, #3425af 0%,#A1051D 100%);
  }
</style>