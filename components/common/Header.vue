<template lang="pug">
  header
    nav
      nuxt-link.n-brand(to="/") tokiwa
      span.tokiwa-version v.{{ version }}
</template>

<script>
export default {
  data() {
    return {
      version: process.env.npm_package_version
    }
  }
}
</script>