<template>
  <main class="page-container departure-dates-page">
    <div>
      <img src="/mob-cal-icon.png"/>
    </div>
    <h1 class="form-completion-title">
      When are you travelling?
    </h1>
    <JourneyTypePicker>
    </JourneyTypePicker>
    <div class="departure-dates-page--journey-date-pickers">
      <DatePickerInput
      ></DatePickerInput>
    </div>
    <div
      class="form-completion-button select-depart-date-btn"
      :class="{ active: pageReady }"
      v-on:click="completePage"
      >Okay!</div>
  </main>
</template>

<script>
import DatePickerInput from '@/components/DatePickers/DatePickerInput';
import JourneyTypePicker from '@/components/DatePickers/JourneyTypePicker';

export default {
  head(){
    return {
      title: 'Select Journey Dates - TheWiseMister',
    }
  },
  computed: {
    journeyType:{
      get(){
        return this.$store.getters['datastore/getJourneyType']
      },
      set(data){
        return this.$store.dispatch('datastore/setJourneyType', data)
      }
    },
    pageReady(){
      if(this.journeyType==='single'){
        if(this.departureDate) return true
      } else if(this.journeyType==='return'){
        if(this.departureDate && this.returnDate) return true
      }
    },
    departureDate(){
      return this.$store.getters['datastore/departureDate']
    },
    returnDate(){
      return this.$store.getters['datastore/returnDate']
    },
  },
  components: {
    DatePickerInput,
    JourneyTypePicker
  },
  methods: {
    completePage(){
      this.$router.push('search-results')
    }
  }
}

</script>

<style>

</style>
