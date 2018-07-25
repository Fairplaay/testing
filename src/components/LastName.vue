<template>
  <v-flex xs12 sm5>
    <v-text-field
      label="Apellidos"
      hint="Por favor escriba su apellido"
      maxlength="10"
      required
      v-model="lastName"
      @keyup="$store.dispatch('setLastname', lastName)"
    ></v-text-field>
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      lastName: ''
    }
  }
}
</script>

