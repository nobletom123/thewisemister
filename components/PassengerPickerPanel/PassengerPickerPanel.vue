<template>
  <div class="passenger-picker-panel">
    <PassengerPicker
      passengerType="parents"
      passengerTitle="Adults (12+)"
    ></PassengerPicker>
    <PassengerPicker
      passengerType="minors"
      passengerTitle="Children (0-12)"
    ></PassengerPicker>
    <PassengerPicker
      passengerType="infants"
      passengerTitle="Infants"
    ></PassengerPicker>
  </div>
</template>

<script>
import PassengerPicker from '@/components/PassengerPickerPanel/PassengerPicker/PassengerPicker'

export default {
  data(){
    return {
      parentPlus: true,
      parentMinus: true,
      minorPlus: true,
      minorMinus: true,
      infantPlus: true,
      infantMinus: true
    }
  },
  components: {
    PassengerPicker
  },
  computed: {
    parentButtons(){
      let errors = this.$store.getters['datastore/attendanceErrors']
      if(errors.find(error => id === 1)){
        return false
      } else {
        return false
      }
    },
    infantToParentRatioError(){
      let errors = this.$store.getters['datastore/attendanceErrors']
      if(errors.find(error => id === 2)){
        return true
      } else {
        return false
      }
    },
    oneParentRequiredError(){
      let errors = this.$store.getters['datastore/attendanceErrors']
      if(errors.find(error => id === 3)){
        return true
      } else {
        return false
      }
    }
  },
}

</script>

<style>

</style>
