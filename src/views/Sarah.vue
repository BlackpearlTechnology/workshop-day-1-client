<template>
    <v-container>
        <v-row>
        <v-col cols="15" sm="6" offset-sm="3">
            <v-card class="pa-5">
                <v-card-title class="justify-center display-1 grey--text"> FTR ISSUES </v-card-title>

             <v-text-field
              v-model="first"
              label="Priority Level"
              prepend-inner-icon="mdi-progress-alert"
              required
              outlined
              shaped
             ></v-text-field> 

             <v-text-field
              v-model="first"
              label="Issue Title"
              prepend-inner-icon="mdi-format-title"
              required
              outlined
              shaped
             ></v-text-field> 

             <v-text-field
              v-model="first"
              label="Issue Description"
              prepend-inner-icon="mdi-file-document-box-multiple-outline"
              required
              outlined
              shaped
             ></v-text-field> 

            <div class="text-center">
            <v-btn class="mr-2" rounded color="primary" dark>Submit</v-btn>
             <v-btn rounded color="red" dark>Cancel</v-btn>
            </div>

            </v-card>
        </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>