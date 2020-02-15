<template lang="pug">
  ul.music-list
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
      :sran_l = 'item.SRAM_L'
      :sran_r = 'item.SRAM_R'
      :rran_l = 'item.RRAM_L'
      :rran_r = 'item.RRAM_R'
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
    editList() {
      const currentVar = parseInt(this.version) + 1
      return this.musics.filter(item => item.VER == currentVar)
    }
  },
  data() {
    return {
      musics: music_data
    }
  }
}
</script>