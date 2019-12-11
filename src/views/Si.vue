<template>
  <v-container>
    <v-card
    class="mx-auto pa-5"
    max-width="800"
    >
      <v-card-title>
        <h1>Add item</h1>
      </v-card-title>
      <v-row 
      justify="center">
        <v-col class="d-flex" cols="12" sm="7">
          <v-text-field 
           :rules="rules"
           hint="Hanggang 30 characters lang po"
           label="Issue name"
           prepend-icon="mdi-sign-caution"
          ></v-text-field>
        </v-col><v-col class="d-flex" cols="12" sm="4">
          <v-select
            :items="items"
            :rules="selectRules"
            label="Priority"
            prepend-icon="mdi-page-next"
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="11">
          <v-textarea
           outlined
           :rules="descriptionRules"
           hint="Hanggang 200 characters lang po"
           label="Description"
           prepend-icon="mdi-card-text"
          ></v-textarea>
        </v-col>

      </v-row>
      
      <div class="text-center">
        <v-btn class="ma-2" align="right" width="200" outlined color="indigo">Let's Go!</v-btn>
        </div>
    </v-card> 
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Ay pabitin',
      value => (value || '').length <= 30 || 'SABING HANGGANG 30 CHARACTERS LANG E'
    ],
    descriptionRules: [
      value => !!value || 'Pansinin mo naman ako',
      value => (value || '').length <= 200 || 'Kalma lang, summary lang naman kailangan wag po bida-bida'
    ],
    selectRules: [
      value => !!value || 'Iiwan mo na ko?',
      value => (value || '').length <= 30 || 'SABING HANGGANG 30 CHARACTERS LANG E'
    ],
    items: ['A', 'B', 'C']
  })
}
</script>

<style>

</style>