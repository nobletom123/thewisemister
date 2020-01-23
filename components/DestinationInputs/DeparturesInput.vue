<template>
  <div>
    <div class="destination-input">
      <div class="destination-input--title">
        <h1>From:</h1>
        <input
          v-if="!departurePoint"
          v-model="query"
          v-on:keyup="queryDepartures"
          />
        <div
          v-else
          class="destination-input--title--choice-box"
        >
          <h1> {{ departurePoint.AirportName}} ({{departurePoint.DepCode}})</h1>
          <i
            v-on:click="removeDeparturePoint"
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
          v-for="suggestion in suggestions" v-on:click="chooseDeparturePoint(suggestion)">
          <h1>{{ suggestion.AirportName }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  data(){
    return {
      query: null,
      queryResultsOpen: false
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  computed: {
    suggestions(){
      return this.$store.getters['departures/departureSearchResults']
    },
    departurePoint(){
      return this.$store.getters['departures/departurePoint']
    }
  },
  methods: {
    queryDepartures(){
      if(this.query !== ''){
        this.queryResultsOpen = true
        return this.$store.dispatch('departures/queryDepartures', this.query)
      } else {
        this.queryResultsOpen = false
        return
      }
    },
    chooseDeparturePoint(suggestion){
      this.queryResultsOpen = false
      return this.$store.dispatch('departures/chooseDeparturePoint', suggestion)
    },
    removeDeparturePoint(){
      this.queryResultsOpen = true
      return this.$store.dispatch('departures/removeDeparturePoint')
    },
    clickOutside(){
      this.queryResultsOpen = false
    }
  }
}

</script>

<style>

</style>
