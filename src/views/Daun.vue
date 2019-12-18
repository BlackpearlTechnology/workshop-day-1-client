<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-card class="px-3 pb-3">
          <div class="text-right">
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  fab
                  x-small
                  v-on="on"
                  class="btn"
                  outlined
                >
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </template>
              <v-card class="text-right">
                <v-card-title>
                  <span class="headline">About Samsung321</span>
                </v-card-title>
                <v-divider class="mb-5" />
                <v-card-text class="text-left">
                  Samsung Philippines introduces Samsung 321 - an app designed
                  to give information on the nearest emergency services (within
                  a 5km radius) based on the user's location by dialing 321 on
                  your device, may be then online/offline.
                  <br />
                  <br />This app allows the users to contact emergency services
                  using their handset*, and also shows the location and contact
                  information of the nearest Samsung mobile phone service and
                  appliance center. (Service available in the Philippines only)
                  <br />
                  <br />*Telco charges will apply.
                  <br />
                  <br />[Help us update our information] New or updated contact
                  can be submitted to srph.se@samsung.com
                </v-card-text>
                <v-btn
                  class="btn"
                  color="red"
                  fab
                  outlined
                  x-small
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card>
            </v-dialog>
          </div>

          <v-card-title class="justify-center">
            SAMSUNG 321
            <v-icon class="icon-bg">mdi-alarm-light</v-icon>
          </v-card-title>
          <v-divider class="mb-5" />

          <v-form ref="form">
            <div class="text-right">
              <v-text-field
                v-model="agencyName"
                label="Agency Name"
                prepend-inner-icon="mdi-file-document-box-outline"
                clearable
              ></v-text-field>
              <v-select
                :items="agencyTypes"
                v-model="agencyType"
                label="Agency Type"
                prepend-inner-icon="mdi-chevron-double-right"
                clearable
              ></v-select>
              <v-text-field
                v-model="agencyNumber"
                label="Agency Number"
                prepend-inner-icon="mdi-phone"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="agencyAddress"
                label="Agency Address"
                prepend-inner-icon="mdi-map-outline"
                clearable
              ></v-text-field>

              <v-btn @click="addAgency" class="btn" outlined fab color="green">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-snackbar v-model="snackbar" color="green" :timeout="timeout">{{
                text
              }}</v-snackbar>
              <v-btn outlined fab class="btn" color="warning" @click="reset">
                <v-icon>mdi-notification-clear-all</v-icon>
              </v-btn>
              <v-snackbar
                v-model="snackbar1"
                color="orange"
                :timeout="timeout1"
                >{{ text1 }}</v-snackbar
              >
            </div>
          </v-form>
          <v-card>
            <v-card-title>
              Agencies
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="agencies"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,

      snackbar: false,
      text: "Agency Added.",
      timeout: 1500,

      snackbar1: false,
      text1: "Fields Cleared.",
      timeout1: 1500,

      agencyTypes: [
        "Police Stations",
        "Medical Assistance",
        "Fire Stations",
        "Natural Disaster Hotlines",
        "Red Cross",
        "Motor and Traffic Assistance"
      ],

      search: "",
      headers: [
        {
          text: "Agency Name",
          align: "left",
          value: "agencyName"
        },
        {
          text: "Agency Type",
          value: "agencyType"
        },
        {
          text: "Agency Number",
          value: "agencyNumber",
          sortable: false
        },
        {
          text: "Agency Address",
          value: "agencyAddress",
          sortable: false
        }
      ],
      agencies: [
        {
          agencyName: "Taguig Police Station",
          agencyType: "Police Station",
          agencyNumber: "151-5512",
          agencyAddress: "87 Upper McKinley Hill"
        },
        {
          agencyName: "Taguig General Hospital",
          agencyType: "Hospital",
          agencyNumber: "777-6512",
          agencyAddress: "12 Campus Road cor. Sci Hub"
        }
      ]
    };
  },

  methods: {
    addAgency() {
      this.agencies.push({
        agencyName: this.agencyName,
        agencyType: this.agencyType,
        agencyNumber: this.agencyNumber,
        agencyAddress: this.agencyAddress
      });
      this.snackbar = true;
    },
    reset() {
      this.$refs.form.reset();
      this.snackbar1 = true;
    }
  }
};
</script>

<style scoped>
.icon-bg {
  color: #f5515f;
}
.btn {
  margin: 10px;
}
</style>
