<template>
  <div class="depart-flow-section">
    <div class="home-page__image">
      <img src="/select-cities-icon.png" class="responsive-image"/>
    </div>
    <div class="home-page__title">
      <h1 class="form-completion-title">Select Flying From and To</h1>
    </div>
    <div class="input-fields-vertical home-page__input-elements">
      <DeparturesInput></DeparturesInput>
      <DestinationsInput></DestinationsInput>
    </div>
    <div
      class="form-completion-button destinations-btn home-page__complete-button"
      :class="{ active: travelPointsSet }"
      v-on:click="completeSection"
      >Okay!</div>
  </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
import DestinationsInput from '@/components/DestinationInputs/DestinationsInput'
import DeparturesInput from '@/components/DestinationInputs/DeparturesInput'

export default {
  components: {
    DestinationsInput,
    DeparturesInput,
  },
  computed: {
    travelPointsSet(){
      return this.$store.getters['departures/travelPointsSet']
    },
  },
  methods: {
    completeSection(){
      if(this.travelPointsSet){
        this.$store.dispatch('flow/completeSection', 0)
        setTimeout(() => {
        }, 300)
      }
    },
    scrollTo(){
      VueScrollTo.scrollTo('.depart-flow-section', 800)
    }
  },
  mounted(){
    this.scrollTo()
  }
}

</script>
