<template lang="pug">
  li.music-list-item
    .item-info
      .item-version {{ version }}
      .item-diff(v-bind:class="displayDifficulty") {{ difficulty }}
      .item-name {{ music_name }}
    .item-use-option
      .small-title Options
      .badge(v-if="flip") FLIP
      .option-disp-box
        span.option-disp-side LEFT
        .option-left
          .badge(v-for="item in loadOptionLeft" v-bind:class="optionBadgeLeft") {{ item }}
      .option-disp-box
        span.option-disp-side RIGHT
        .option-right
          .badge(v-for="item in loadOptionRight" v-bind:class="optionBadgeRight") {{ item }}
</template>

<script>
export default {
  props: {
    id: String,
    version: String,
    music_name: String,
    difficulty: String,
    flip: String,
    mirror_l: String,
    mirror_r: String,
    ran_l: String,
    ran_r: String,
    sran_l: String,
    sran_r: String,
    rran_l: String,
    rran_r: String
  },
  data() {
    return {
      leftOption: '',
      rightOption: ''
    }
  },
  computed: {
    displayDifficulty: function () {
      return {
        'label-hyper': this.difficulty == 'H',
        'label-another': this.difficulty == 'A',
        'label-leggendaria': this.difficulty == 'L'
      }
    },
    loadOptionLeft: function () {
      this.leftOption = this.mirror_l ? 'MIRROR' : 
                        this.ran_l ? 'RAN' : 
                        this.sran_l ? 'S-RAN' : 
                        this.rran_l ? 'R-RAN' : null
    },
    loadOptionRight: function () {
      this.rightOption = this.mirror_r ? 'MIRROR' : 
                          this.ran_r ? 'RAN' : 
                          this.sran_r ? 'S-RAN' : 
                          this.rran_r ? 'R-RAN' : null
    },
    optionBadgeLeft: function () {
      return {
        'badge-mirror': this.leftOption == 'MIRROR',
        'badge-ran': this.leftOption == 'RAN',
        'badge-sran': this.leftOption == 'S-RAN',
        'badge-rran': this.leftOption == 'R-RAN',
      }
    },
    optionBadgeRight: function () {
      return {
        'badge-mirror': this.rightOption == 'MIRROR',
        'badge-ran': this.rightOption == 'RAN',
        'badge-sran': this.rightOption == 'S-RAN',
        'badge-rran': this.rightOption == 'R-RAN',
      }
    }
  }
}
</script>