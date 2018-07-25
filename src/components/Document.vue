<template>
  <v-layout row wrap>
    <v-flex xs12 >
      <v-container v-for="(item, index) in add" :key="index" fluid grid-list-xs pa-0>
        <v-layout row wrap>
          <v-flex xs12 sm6 >
            <v-select
              v-model="item.doc"
              :items="type"
              label="Tipo de identificación"
              @change="$store.dispatch(item.set, item.doc)"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              maxlength="10"
              v-model="item.number"
              name="name"
              label="Número de identificación"
              @keyup="$store.dispatch(item.setNum, item.number)"
              :rules="[$store.state.rules.required, $store.state.rules.doc]"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 >
      <v-card-title style="padding:0; margin:0;" primary-title>
        <div>
          <h3 class="primary--text body-2"><a v-if="add.length == 1" @click="addRow">AGREGAR OTRA IDENTIFICACION </a><a v-if="add.length > 1" @click="deleteRow">ELIMINAR UNA IDENTIFICACION</a></h3>
        </div>
      </v-card-title>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      type: ['Pasaporte', 'Cedula'],
      add: [{cero: 0, set: 'setTypeDocumentOne', setNum: 'setNumberDocumentOne'}],
    }
  },
  methods : {
    addRow() {
      this.add.push({one: 1, set: 'setTypeDocumentTwo', setNum: 'setNumberDocumentTwo'})
    },
    deleteRow(index) {
      this.add.pop()
      this.$store.dispatch('clearDocument')
    },
  }
}
</script>

