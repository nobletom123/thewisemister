<template>
  <div>
    <h1
      class="descriptive-text-title"
    >Flying</h1>
    <div
      v-if="departurePoint"
      class="home-page__section__edit-state__text descriptive-text-small-title"
    >
      <h1>From: {{departurePoint.AirportName}} ({{departurePoint.DepCode}})</h1>
    </div>
    <div
      class="home-page__section__edit-state__text descriptive-text-small-title"
      v-if="destinationPoint"
    >
      <h1>From: {{destinationPoint.AirportName}} ({{destinationPoint.code}})</h1>
    </div>
    <div
      v-on:click="editSection"
      class="form-completion-button destinations-btn"
      :class="{ active: editable}"
    >
      <h1
      v-if="currentPosition"
      >Continue</h1>
      <h1
        v-else
      >Edit</h1>
    </div>
  </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');

export default {
  computed: {
    departurePoint(){
      return this.$store.getters['departures/departurePoint']
    },
    destinationPoint(){
      return this.$store.getters['departures/destinationPoint']
    },
    currentPosition(){
      return this.$store.getters['flow/currentPosition'] === 0
    },
    editable(){
      return this.$store.getters['flow/isEditable']
    }
  },
  methods: {
    editSection(){
      if(this.editable){
        this.$store.dispatch('flow/editSection', 0)
      }
    },
  }
}

</script>
