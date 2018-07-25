<template>
  <v-layout row wrap>
    <v-flex xs1 style="padding: 0">
      <v-select
        v-model="user.medio"
        :items="telefono"
        label="Teléfono"
        >
        <template slot="selection" slot-scope="data">
          <v-flex xs1 style="padding: 0">
            <v-avatar size="25px">
              <v-icon>{{data.item}}</v-icon>
            </v-avatar>
          </v-flex>
        </template>
        <template slot="item" slot-scope="data">
          <v-list-tile-avatar>
            <v-icon>{{data.item}}</v-icon>
          </v-list-tile-avatar>
        </template>
      </v-select>
    </v-flex>
    <v-flex xs2 style="padding: 0">
      <v-select
        placeholder="Codigo"
        :items="user.medio === 'fas fa-phone' ? fijo: movil"
        v-model="user.codigo"
        ></v-select>
    </v-flex>
    <v-flex xs4 style="padding: 0">
      <v-text-field
        maxlength="7"
        v-model="user.tel"
        label="Teléfono*"
        placeholder="5555555"
        required
        :rules="[$store.state.rules.required, $store.state.rules.phone]"
        @keyup="$store.dispatch('setPhone', user.codigo + user.tel)"
      ></v-text-field>
    </v-flex>
    <v-flex xs5 style="padding: 0 5px">
      <v-text-field 
        label="Correo electronico*"
        required
        v-model="user.email"
        :rules="[$store.state.rules.required, $store.state.rules.email]"
        @keyup="$store.dispatch('setEmail', user.email)"
      >
      </v-text-field>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      user: {
        medio: '',
        codigo: '',
        tel: '',
        email: ''
      },
      telefono: ['fas fa-phone', 'fas fa-mobile-alt'],
      fijo: [ '0251', '0212', '0273'],
      movil: ['0416', '0426', '0414', '0424', '0412'],
    }
  }
}
</script>
