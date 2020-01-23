<template>
  <div>
    <div class="destination-input">
      <div class="destination-input--title">
        <h1>To:</h1>
        <input
          v-if="!destinationPoint"
          v-model="query"
          v-on:change="queryDepartures"
        <div
          v-else
          class="destination-input--title--choice-box"
        >
          <h1> {{ destinationPoint.AirportName}} ({{destinationPoint.code}})</h1>
          <i
            v-on:click="removeDestinationPoint"
            class="fas fa-times"></i>
        </div>
    </div>
    <div
      v-if="queryResultsOpen"
      v-click-outside="clickOutside"
      class="destination-input--results-box"
      >
      <h1
        v-if="suggestions.length === 0"
      >No results!</h1>
      <div
        v-else
        v-for="suggestion in suggestions" v-on:click="chooseDestinationPoint(suggestion)">
        <h1>{{ suggestion.AirportName }}</h1>
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
    queryDestinations(){
      if(this.query !== ''){
        this.queryResultsOpen = true
      } else {
        this.queryResultsOpen = false
      }
      return this.$store.dispatch('departures/queryDestinations', this.query)
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
