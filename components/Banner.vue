<template lang="pug">
  nuxt-link.banner(to="/about")
    .banner-text {{ text }}
</template>

<script>
export default {
  props:['text']
}
</script>