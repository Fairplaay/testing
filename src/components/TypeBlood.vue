<template>
  <v-flex class="mt-0 pt-0 ml-0" xs12 sm8 offset-sm2>
    <v-card-title style="padding-left: 0;">Tipo de sangre</v-card-title>
    <v-btn-toggle
      v-model="user.blood" 
      class="elevation-0" 
      mandatory
      @change="$store.dispatch('setTypeBlood', user.blood)"
      :value='user.blood = $store.state.blood'
    >
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px;" value="O+" small outline color="primary">O+</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="O-" small outline color="primary">O-</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="A+" small outline color="primary">A+</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="A-" small outline color="primary">A-</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="B+" small outline color="primary">B+</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="B-" small outline color="primary">B-</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="AB+" small outline color="primary">AB+</v-btn>
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 10px; " value="AB-" small outline color="primary">AB-</v-btn>
        <v-btn  value="Desconocido" small outline color="primary">Desconocido</v-btn>
    </v-btn-toggle>
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      user: {
        blood: ''
      }
    }
  }
}
</script>

