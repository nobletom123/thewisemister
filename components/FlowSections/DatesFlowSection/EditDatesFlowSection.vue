<template>
  <div>
    <h1
      class="descriptive-text-title"
    >Dates</h1>
    <div class="home-page__section__edit-state__text">
      <h1
        class="descriptive-text-small-title"
      >From:
      <span
        v-if="departureDate"
      >{{departureDate}}</span>
      <span
        v-else
      >
        No date selected
      </span>
      </h1>
      <h1
        class="descriptive-text-small-title"
        v-if="journeyType === 'return'"
      >To:
        <span
          v-if="returnDate"
        >{{returnDate}}</span>
        <span
          v-else
        >
          No date selected
        </span>
      </h1>
    </div>
    <div
      v-on:click="editSection"
      class="form-completion-button select-depart-date-btn"
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
import moment from 'moment'

export default {
  computed: {
    journeyType(){
      return this.$store.getters['datastore/getJourneyType']
    },
    departureDate(){
      return this.$store.getters['datastore/departureDate'] ? moment(this.$store.getters['datastore/departureDate']).format('MMMM Do, YYYY') : 'No date selected'
    },
    returnDate(){
      return this.$store.getters['datastore/returnDate'] ? moment(this.$store.getters['datastore/returnDate']).format('MMMM Do, YYYY') : 'No date selected'
    },
    currentPosition(){
      return this.$store.getters['flow/currentPosition'] === 2
    },
    editable(){
      return this.$store.getters['flow/isEditable']
    }
  },
  methods: {
    editSection(){
      if(this.editable){
        this.$store.dispatch('flow/editSection', 2)
      }
    }
  }
}

</script>
