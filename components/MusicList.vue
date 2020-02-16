<template lang="pug">
  ul.music-list
    transition-group(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
      MusicListItem(
        v-for = 'item in editList'
        :id = 'item.ID'
        :version = 'item.VER'
        :music_name = 'item.MUSIC_NAME'
        :difficulty = 'item.DIFFICULTY'
        :flip = 'item.FLIP'
        :mirror_l = 'item.MIRROR_L'
        :mirror_r = 'item.MIRROR_R'
        :ran_l = 'item.RAN_L'
        :ran_r = 'item.RAN_R'
        :sran_l = 'item.S_RAN_L'
        :sran_r = 'item.S_RAN_R'
        :rran_l = 'item.R_RAN_L'
        :rran_r = 'item.R_RAN_R'
        :key = 'item.ID'
      )
</template>

<script>
import MusicListItem from '@/components/MusicListItem'
import music_data from '@/static/sample.json'

export default {
  props: {
    version: String
  },
  components: {
    MusicListItem
  },
  computed: {
    editList: function() {
      const currentVar = parseInt(this.version) + 1
      return this.musics.filter(item => item.VER == currentVar)
    }
  },
  data() {
    return {
      musics: music_data
    }
  },
  transition: {
    name: 'fade',
  }
}
</script>