<template>
  <v-flex class="mt-0 pt-0" d-flex align-center style="height: 40px" xs12 offset-sm2>
    <v-btn-toggle 
      v-model="gender"
      class="elevation-0" 
      mandatory
      @change="$store.dispatch('setGender', gender)"
      :value='gender = $store.state.gender'
    >
        <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 15px; " value="Femenino" small outline color="primary"><v-icon small style="margin-left: 2px; margin-right: 8px;">fas fa-female</v-icon>Femenino</v-btn>
        <v-btn style="border-radius: 3px;" value="Masculino" small outline color="primary"><v-icon small style="margin-left: 2px; margin-right: 8px;">fas fa-male</v-icon>Masculino</v-btn>
    </v-btn-toggle>
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      gender: ''
    }
  }
}
</script>
