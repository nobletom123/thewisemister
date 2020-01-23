<template>
  <div class="date-picker">
    <div
      class="date-picker__calendar-container"
      >
      <h1 class="form-title-medium">Departure Date</h1>
      <v-date-picker
        v-model="departureDate"
        :min-date='new Date()'
        :max-date='departureDateMaximum'
        :input-props='{
           placeholder: "Departure date",
           readonly: true
          }'
      >
      </v-date-picker>
    </div>
    <div
      class="date-picker__calendar-container"
      v-if="journeyType !== 'single'"
    >
      <h1 class="form-title-medium">Return Date</h1>
      <v-date-picker
        v-model="returnDate"
        :min-date='returnDateMinimum'
      :input-props='{
         placeholder: "Return Date",
         readonly: true
        }'
      >
      </v-date-picker>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    departureDate: {
      set(data){
        return this.$store.dispatch('datastore/setDepartureDate', data)
      },
      get(){
        return this.$store.getters['datastore/departureDate']
      }
    },
    returnDate: {
      set(data){
        return this.$store.dispatch('datastore/setReturnDate', data)
      },
      get(){
        return this.$store.getters['datastore/returnDate']
      }
    },
    departureDateMaximum(){
      if(this.returnDate && this.journeyType === 'return'){
        return this.returnDate
      }
    },
    journeyType(){
      return this.$store.getters['datastore/getJourneyType']
    },
    returnDateMinimum(){
      if(new Date() > this.departureDate){
        let date = new Date();
        return date.setDate(date.getDate() + 1);
      } else {
        return this.departureDate
      }
    }
  },
  methods: {
    setDepartDate(data){
      console.log(data)
    },
    setReturnDate(data){
      console.log(data)
    }
  }
}

</script>

<style>

</style>
