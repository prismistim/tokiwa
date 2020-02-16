<template lang="pug">
  .container
    PlayerInfo
    section
      SelectVersion(:value="value", @input="value = $event")
    section.option-data
      MusicList(v-bind:version="value")
</template>

<script>
import PlayerInfo from '@/components/PlayerInfo'
import SelectVersion from '@/components/SelectVersion'
import MusicList from '@/components/MusicList'

export default {
  layout: 'default',
  components: {
    PlayerInfo,
    SelectVersion,
    MusicList
  },
  data() {
    return {
      value: ''
    }
  } 
}
</script>