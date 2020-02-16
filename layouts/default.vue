<template lang="pug">
  .wrapper
    Header
    transition(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
      nuxt
    Footer
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>