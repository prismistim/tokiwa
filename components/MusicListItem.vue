<template lang="pug">
  li.music-list-item
    .item-info
      .item-version {{ version }}
      .item-diff(v-bind:class="displayDifficulty") {{ difficulty }}
      .item-name {{ music_name }}
    .item-use-option
      .small-title Options
      .option-disp-box
        span.option-disp-side LEFT
        .option-left
      .option-disp-box
        span.option-disp-side RIGHT
        .option-right
</template>

<script>
export default {
  props: [
    'id',
    'version',
    'music_name',
    'difficulty'
  ],
  computed: {
    displayDifficulty: function () {
      return {
        'label-hyper': this.difficulty == 'H',
        'label-another': this.difficulty == 'A',
        'label-leggendaria': this.difficulty == 'L'
      }
    }
  }
}
</script>