<template>
  <div>
    <div class="destination-input" :class="{'destination-input--mobile-focus': queryResultsOpen}">
      <div class="destination-input__title">
        <h1>To:</h1>
        <input
          v-if="!destinationPoint"
          v-model="query"
          v-on:input="queryDestinations($event.target.value)"
          />
        <div
          v-else
          class="destination-input__title__choice-box"
          v-on:click="removeDestinationPoint"
        >
          <h1> {{ destinationPoint.AirportName}} ({{destinationPoint.code}})</h1>
          <i
            class="fas fa-times"></i>
        </div>
    </div>
    <div
      v-if="queryResultsOpen"
      v-click-outside="clickOutside"
      class="destination-input__results-box"
      >
      <h1
        v-if="suggestions.length === 0"
      >No results!</h1>
      <div
        v-else
        v-for="suggestion in suggestions" v-on:click="chooseDestinationPoint(suggestion)">
        <h1>{{ suggestion.AirportName }} - ({{ suggestion.code }})</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return {
      query: null,
      queryResultsOpen: false
    }
  },
  computed: {
    suggestions(){
      return this.$store.getters['departures/destinationSearchResults']
    },
    destinationPoint(){
      return this.$store.getters['departures/destinationPoint']
    }
  },
  methods: {
    queryDestinations(data){
      if(data !== ''){
        this.queryResultsOpen = true
      } else {
        this.queryResultsOpen = false
      }
      return this.$store.dispatch('departures/queryDestinations', data)
    },
    chooseDestinationPoint(suggestion){
      this.queryResultsOpen = false
      return this.$store.dispatch('departures/chooseDestinationPoint', suggestion)
    },
    removeDestinationPoint(){
      this.queryResultsOpen = true
      return this.$store.dispatch('departures/removeDestinationPoint')
    },
    clickOutside(){
      this.queryResultsOpen = false
    }
  }
}

</script>

<style>

</style>
