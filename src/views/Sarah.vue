<template>
    <v-container>
        <v-row>
        <v-col cols="12" sm="8" offset-sm="2">
            <v-card class="pa-5">
                <v-img 
                    class="white--text align-end mb-5"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    height="125">
                <div class="fill-height bottom-gradient"></div>
                <v-card-title class="justify-center display-1"> FTR ISSUES </v-card-title>
                </v-img>
            <v-row>
            <v-col class="d-flex" cols="12" md="6">
                <v-select
                :items="priority"
                label="Priority Level"
                prepend-inner-icon="mdi-progress-alert"
                outlined
                required
                ></v-select>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field
                label="Feature"
                prepend-inner-icon="mdi-format-title"
                required
                outlined
                ></v-text-field> 
            </v-col>
            </v-row>

            <v-text-field
                label="Issue Title"
                prepend-inner-icon="mdi-format-title"
                required
                outlined
            ></v-text-field> 

            <v-col class="d-flex" cols="15" sm="30">
            <v-textarea
                label="Issue Description"
                counter="300"
                prepend-inner-icon="mdi-file-document-box-multiple-outline"
                required
                outlined
            ></v-textarea>
            </v-col>

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
    data: () => ({
      priority: ['A', 'B', 'C'],
    }),
}
</script>

<style>

</style>