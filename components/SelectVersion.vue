<template lang="pug">
  .search-tool
    .small-text VERSION
    .alert 現在DP☆12のデータのみ表示できます
    select(:value="value", @input="$emit('input', $event.target.value)")
      option(selected="true", disabled="disabled" value="") select VERSION
      option(v-for="(item, index) in options" v-bind:value="index") {{ item }}
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      version: 26,
      options: [
        '1st & substream',
        '2nd style',
        '3rd style',
        '4th style',
        '5th style',
        '6th style',
        '7th style',
        '8th style',
        '9th style',
        '10th style',
        '11 IIDX RED',
        '12 HAPPY SKY',
        '13 DistorteD',
        '14 GOLD',
        '15 DJ TROOPERS',
        '16 EMPRESS',
        '17 SIRIUS',
        '18 Resort Anthem',
        '19 Lincle',
        '20 tricoro',
        '21 SPADA',
        '22 PENDUAL',
        '23 copula',
        '24 SINOBUZ',
        '25 CANNON BALLERS',
        '26 Rootage',
        '27 HEROIC VERSE'
      ]
    }
  }
}
</script>