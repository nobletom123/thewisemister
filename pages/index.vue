<template>
  <main class="page-container home-page">
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
      v-on:click="completePage"
      >Okay!</div>
  </main>
</template>

<script>
import DestinationsInput from '@/components/DestinationInputs/DestinationsInput'
import DeparturesInput from '@/components/DestinationInputs/DeparturesInput'

export default {
  head(){
    return {
      title: 'Home - TheWiseMister',
    }
  },
  components: {
    DestinationsInput,
    DeparturesInput
  },
  methods: {
    completePage(){
      if(this.travelPointsSet){
        this.$router.push('/who-is-going')
      }
    }
  },
  computed: {
    travelPointsSet(){
      return this.$store.getters['departures/travelPointsSet']
    }
  }
}
</script>

<style>

</style>
