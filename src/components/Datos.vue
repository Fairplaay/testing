<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <p class="headline mb-0 text-xs-center">vuex-localstorage</p>
      </div>
    </v-card-title>
    <v-card-text>
    <pre>Nombre: {{$store.state.name}} {{$store.state.lastName}} </pre><br>
    <pre>sexo: {{$store.state.gender}} </pre><br>
    <pre v-if="$store.state.documentOne">{{$store.state.documentOne}} {{$store.state.numberOne}} </pre><br>
    <pre v-if="$store.state.documentTwo">{{$store.state.documentTwo}} {{$store.state.numberTwo}} </pre><br>
    <pre>Tipor de sangre: {{$store.state.blood}} </pre><br>
    <pre>Telefono: {{$store.state.tel}}</pre> <br>
    <pre>Correo Electronico: <br> {{$store.state.email}}</pre>
    </v-card-text>
    <v-btn @click="clear" color="error">Clear</v-btn>
  </v-card>
</template>
<script>
export default {
  methods: {
    clear: () => {
      localStorage.clear() 
      window.history.go()
    }
  }
}
</script>

