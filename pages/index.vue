<template lang="pug">
  .container
    section.option-data
      MusicList
</template>

<script>
import MusicList from '@/components/MusicList'

export default {
  layout: 'default',
  components: {
    MusicList
  }  
}
</script>