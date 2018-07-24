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
              <v-flex xs12 sm2>
                <v-avatar
                  size="80px"
                >
                  <img
                    :src="avatar"
                    :alt="avatar"
                  >
                </v-avatar>
              </v-flex>
              <!-- start name -->
              <v-flex xs12 sm5>
                <v-text-field
                  v-model="user.name"
                  label="Nombre"
                  hint="Por favor escriba su nombre"
                  maxlength="10"
                  required
                  @keyup="$store.dispatch('setName', user.name)"
                  >
                </v-text-field>
              </v-flex>
              <!-- end name -->
              <!-- start lastName  -->
              <v-flex xs12 sm5>
                <v-text-field
                  label="Apellidos"
                  hint="Por favor escriba su apellido"
                  maxlength="10"
                  required
                  v-model="user.lastName"
                  @keyup="$store.dispatch('setLastname', user.lastName)"
                ></v-text-field>
              </v-flex>
              <!-- end lastName -->
              <!-- start gender-->
              <v-flex class="mt-0 pt-0 ml-1" xs12 sm8 offset-sm2>
                <v-btn-toggle 
                  v-model="user.gender"
                  class="elevation-0" 
                  mandatory
                  @change="$store.dispatch('setGender', user.gender)"
                  :value='user.gender = $store.state.gender'
                >
                    <v-btn style="border-radius: 3px;border:1px solid #26C6DA; margin-right: 15px; " value="Femenino" small outline color="primary"><v-icon small style="margin-left: 2px; margin-right: 8px;">fas fa-female</v-icon>Femenino</v-btn>
                    <v-btn style="border-radius: 3px;" value="Masculino" small outline color="primary"><v-icon small style="margin-left: 2px; margin-right: 8px;">fas fa-male</v-icon>Masculino</v-btn>
                </v-btn-toggle>
              </v-flex>
              <!-- end gender -->
              <!-- start type dpcument -->
                <v-flex xs12 sm6 >
                  <v-select
                    v-model= "user.doc"
                    :items="type"
                    label="Tipo de identificación"
                    @change="$store.dispatch('setTypeDocument', user.doc)"
                  ></v-select>
                </v-flex>
                <!-- end type document -->
                <!-- start number document -->
                <v-flex xs12 sm6>
                  <v-text-field
                    maxlength="10"
                    v-model="user.number"
                    name="name"
                    label="Número de identificación"
                    @keyup="$store.dispatch('setNumberDocument', user.number)"
                    :rules="[rules.required, rules.doc]"
                  ></v-text-field>
                </v-flex>
              <!-- end number document -->
                <v-flex xs12 >
                  <v-card-title style="padding:0; margin:0;" primary-title>
                    <div>
                      <h3 class="primary--text body-2"><a @click="">AGREGAR OTRA IDENTIFICACION</a></h3>
                    </div>
                  </v-card-title>
                </v-flex>
              <!-- start type blood -->
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
              <!-- end type blood -->
              </v-flex>
              <v-flex xs12>
                <v-card-title style="padding-left:0;" primary-title>
                  <div>
                    <h3 class="title mb-0">Datos de contacto</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <!-- start phone -->
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
                  :rules="[rules.required, rules.phone]"
                  @keyup="$store.dispatch('setPhone', user.codigo + user.tel)"
                ></v-text-field>
              </v-flex>
              <!-- end phone -->
              <!-- start email -->
              <v-flex xs5 style="padding: 0 5px">
                <v-text-field 
                  label="Correo electronico*"
                  required
                  v-model="user.email"
                  :rules="[rules.required, rules.email]"
                  @keyup="$store.dispatch('setEmail', user.email)"
                >
                </v-text-field>
              </v-flex>
              <!-- end email -->
              <v-flex xs12 >
                  <v-card-title style="padding:0; margin:0;" primary-title>
                    <div>
                      <h3 class="primary--text body-2"><a @click="">AGREGAR OTRO TELEFONO</a></h3>
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
import defaultAvatar from '../../public/avatar.png'
export default {
  data () {
    return {
      user: {
        name: '',
        lastName: '',
        gender: '',
        doc: '',
        number: '',
        blood: '',
        email: '',
        medio: '',
        codigo: '',
        tel: '',
      } ,
      avatar: defaultAvatar,
      type: ['Pasaporte', 'Cedula'],
      telefono: ['fas fa-phone', 'fas fa-mobile-alt'],
      fijo: [ '0251', '0212', '0273'],
      movil: ['0416', '0426', '0414', '0424', '0412'],
      rules: {
          required: value => !!value || 'Requerido.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo invalido'
          },
          phone: value => {
            const pattern = /[0-9]{7}/; // /[0-9]{10}/
            return pattern.test(value) || 'Inserte solo numeros y un minimo de 7 numeros'
          },
          doc: value => {
            const pattern = /[0-9]/
            return pattern.test(value) || 'Solo numeros por favor'
          }
      }
    }
  }
}
</script>

