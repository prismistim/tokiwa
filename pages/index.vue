<template lang="pug">
  .container
    section
      SelectVersion(:value="value", @input="value = $event")
    section.option-data
      MusicList(v-bind:version="value")
</template>

<script>
import SelectVersion from '@/components/SelectVersion'
import MusicList from '@/components/MusicList'

export default {
  layout: 'default',
  components: {
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