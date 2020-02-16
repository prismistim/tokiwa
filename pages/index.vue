<template lang="pug">
  .container
    Banner(:text="bannerText")
    PlayerInfo
    section
      SelectVersion(:value="value", @input="value = $event")
    section.option-data
      MusicList(v-bind:version="value")
</template>

<script>
import Banner from '@/components/Banner'
import PlayerInfo from '@/components/PlayerInfo'
import SelectVersion from '@/components/SelectVersion'
import MusicList from '@/components/MusicList'

export default {
  layout: 'default',
  components: {
    Banner,
    PlayerInfo,
    SelectVersion,
    MusicList
  },
  data() {
    return {
      value: '',
      bannerText: '> About "tokiwa"'
    }
  } 
}
</script>