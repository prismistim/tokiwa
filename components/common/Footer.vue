<template lang="pug">
  footer
    .copyright © {{ year }} snowsphere
</template>

<script>
const date = new Date()
const year = date.getFullYear()

export default {
  data() {
    return {
      year: year
    }
  }
}
</script>