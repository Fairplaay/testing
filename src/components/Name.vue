<template>
  <v-flex xs12 sm5>
    <v-text-field
      v-model="name"
      label="Nombre"
      hint="Por favor escriba su nombre"
      maxlength="10"
      required
      @keyup="$store.dispatch('setName', name)"
      >
    </v-text-field>
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>
