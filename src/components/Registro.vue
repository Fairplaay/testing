<template>
  <v-card>
    <v-card-title style="padding-left: 38px;" primary-title>
      <div>
        <h3 class="title mb-0">Datos personales</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <!-- component avatar -->
          <Avatar />
          <!-- end component avatar -->
          <!-- start name -->
          <Name />
          <!-- end component name -->
          <!-- start component lastName  -->
          <LastName />
          <!-- end component lastName -->
          <!-- start component gender-->
          <Gender />
          <!-- end component gender -->
          <!-- start component document -->
          <Document />
          <!-- end component document -->
          <!-- start component type blood -->
          <TypeBlood />
          <!-- end component type blood -->
          <v-flex xs12>
            <v-card-title style="padding-left:0;" primary-title>
              <div>
                <h3 class="title mb-0">Datos de contacto</h3>
              </div>
            </v-card-title>
          </v-flex>
          <!-- start phone -->
          <Contact />
          <!-- end phone -->
          <!-- start email -->
          
          <!-- end email -->
          <v-flex xs12 >
              <v-card-title style="padding:0; margin:0;" primary-title>
                <div>
                  <h3 class="primary--text body-2"><a>AGREGAR OTRO TELEFONO</a></h3>
                </div>
              </v-card-title>
            </v-flex>
        </v-layout>
      </v-container>
      <small>*Campos indicados como requiredos</small>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from './Avatar'
import Document from './Document'
import TypeBlood from './TypeBlood'
import Name from './Name'
import LastName from './LastName'
import Gender from './Gender'
import Contact from './Contact'
export default {
  components: { Avatar, Document, TypeBlood, Name, LastName, Gender, Contact }
}
</script>

