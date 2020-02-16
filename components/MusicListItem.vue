<template lang="pug">
  li.music-list-item
    .item-info
      .item-version {{ version }}
      .item-diff(v-bind:class="displayDifficulty") {{ difficulty }}
      .item-name {{ music_name }}
    .item-use-option
      table
        tr
          th FLIP
          td.option-td-flip
            .badge.badge-flip(v-if="flip") FLIP
        tr
          th LEFT
          td.option-td-side
            .badge(v-bind:class="optionBadgeLeft") {{ loadOptionLeft }}
          th RIGHT
          td.option-td-side
            .badge(v-bind:class="optionBadgeRight") {{ loadOptionRight }}
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

      return this.leftOption
    },
    loadOptionRight: function () {
      this.rightOption = this.mirror_r ? 'MIRROR' : 
                          this.ran_r ? 'RAN' : 
                          this.sran_r ? 'S-RAN' : 
                          this.rran_r ? 'R-RAN' : null

      return this.rightOption
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