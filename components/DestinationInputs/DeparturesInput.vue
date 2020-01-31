<template>
  <div>
    <div class="destination-input" :class="{'destination-input--mobile-focus': queryResultsOpen}"
    >
      <div class="destination-input__title">
        <h1>From:</h1>
        <input
          v-if="!departurePoint"
          v-model="query"
          v-on:input="queryDepartures($event.target.value)"
          />
        <div
          v-else
          class="destination-input__title__choice-box"
          v-on:click="removeDeparturePoint"
        >
          <h1> {{ departurePoint.AirportName}} ({{departurePoint.DepCode}})</h1>
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
          v-for="suggestion in suggestions" v-on:click="chooseDeparturePoint(suggestion)"
          >
          <h1>{{ suggestion.AirportName }} - ({{ suggestion.DepCode }})</h1>
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
      queryResultsOpen: false,
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
    queryDepartures(data){
      if(data !== ''){
        this.queryResultsOpen = true
        return this.$store.dispatch('departures/queryDepartures', data)
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
