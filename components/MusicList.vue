<template lang="pug">
  ul.music-list
    MusicListItem(
      v-for = 'item in musics'
      v-bind:id = 'item.ID'
      v-bind:version = 'item.VER'
      v-bind:music_name = 'item.MUSIC_NAME'
      v-bind:difficulty = 'item.DIFFICULTY'
      :key = 'item.ID'
    )
</template>

<script>
import MusicListItem from '@/components/MusicListItem'
import music_data from '@/static/sample.json'

export default {
  components: {
    MusicListItem
  },

  data() {
    return {
      musics: music_data
    }
  }
}
</script>