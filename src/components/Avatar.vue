<template>
  <v-flex xs12 sm2>
    <v-avatar
      size="120px"
      style="cursor: pointer;"
    ><v-btn
      flat
      class="upload-btn mt-4"
      style="width: 80%; height: 90px;"
      color="primary"
      depressed
      icon
    >
      <file-upload
        :name="fileUpConf.name"
        :extensions="fileUpConf.extensions"
        :accept="fileUpConf.accept"
        :multiple="fileUpConf.multiple"
        :directory="fileUpConf.directory"
        :size="fileUpConf.size || 0"
        :drop="fileUpConf.drop"
        :dropDirectory="fileUpConf.dropDirectory"
        v-model="files"
        ref="upload">
        <img style="width:90px" :src="avatar" :alt="avatar">
      </file-upload>
    </v-btn>
    </v-avatar>
  </v-flex>
</template>
<script>
import defaultAvatar from '../../public/avatar.png'
export default {
  data () {
    return {
      files: [],
      fileIsRemoved: false,
      fileUpConf: {
      size: 1024 * 1024 * 10,
      multiple: false,
      directory: false,
      drop: true,
      dropDirectory: false,
      name: 'file',
      extensions: 'png',
      accept: 'application/png'
      },
      avatar: defaultAvatar,
    }
  }
}
</script>

