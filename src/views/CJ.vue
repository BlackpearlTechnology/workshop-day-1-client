<template>
  <v-container>
      <v-card>
          <v-card-title>
              <h1>Cyrus Corpuz</h1>
              
              <v-container>
                  <v-card elevation="0">
                      <v-card-title>
                          Automation Fields
                      </v-card-title>
                      <v-container>
                         <v-card>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6">

                                        <v-text-field
                                                v-model="deviceId"
                                                outlined
                                                label="Device Id"
                                                append-icon="mdi-cellphone-android"> 
                                        </v-text-field>

                                        <v-text-field
                                            v-model="IMEI"
                                            outlined
                                            label="IMEI"
                                            append-icon="mdi-cellphone-key"> 
                                        </v-text-field>

                                        <v-text-field
                                            v-model="Status"
                                            outlined
                                            label="Status"
                                            append-icon="mdi-alert-box"> 
                                        </v-text-field>
                                        
                                        <v-btn @click="addDevice" class="ma-2"  elevation="4" outlined color="indigo">Add Device</v-btn>
                                        
                                        <v-snackbar
                                        v-model="snackbar"
                                        :timeout="timeout"
                                        >
                                        {{ text }}
                                        <v-btn
                                            color="blue"
                                            text
                                            @click="closeSnackbar"
                                        >
                                            Close
                                        </v-btn>
                                        </v-snackbar>

                                        </v-col>

                                        <v-col cols="12" sm="6">
                                            <v-simple-table  fixed-header height="300px">
                                                <template v-slot:default>
                                                <thead>
                                                    <tr>
                                                    <th class="text-left">Device Id</th>
                                                    <th class="text-left">IMEI</th>
                                                    <th class="text-left">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in devices" :key="item.deviceid">
                                                    <td>{{ item.deviceid }}</td>
                                                    <td>{{ item.imei }}</td>
                                                    <td>{{ item.status }}</td>
                                                    </tr>
                                                </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>
                     </v-container>
                  </v-card>
              </v-container>
          </v-card-title>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            
            snackbar: false,
            text: 'Device Added.',
            timeout: 2000,
             
            drawer: false,
            deviceId: '',
            IMEI: '',
            Status: '',
            devices: [
                {
                    deviceid: "S10",
                    imei: "210931800",
                    status: "Connected"
                }
            ]
        }
    },
    methods: {
        addDevice() {
            this.snackbar = true
            this.devices.push({
                deviceid: this.deviceId,
                imei: this.IMEI,
                status: this.Status
            })
        },

        closeSnackbar() {
            this.snackbar = false
        }
    }
    
}
</script>

<style>

</style>