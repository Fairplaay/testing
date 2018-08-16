<template>
  <v-app light>
     <v-toolbar
      absolute
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >
      <v-toolbar-title>title</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex style="margin-top: 120px;" xs12 sm9>
            <Registro />
          </v-flex>
          <v-flex style="margin-top: 120px;" xs12 sm3> 
            <Datos />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed=true color="black" app>
      <span>App</span>
    </v-footer>
  </v-app>
</template>

<script>
import Datos from './components/Datos'
import Registro from './components/Registro'
export default {
  components: { Datos, Registro },
  data() {
    return {
    }
  },
  props: {
    source: String
  }
}
</script>
