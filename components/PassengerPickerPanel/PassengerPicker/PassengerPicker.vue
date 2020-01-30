<template>
  <div class="passenger-picker">
    <div class="passenger-picker__buttons">
        <i class="fas fa-plus-circle passenger-picker__buttons__icon"
          v-on:click="increaseAttendence"
        ></i>
        <i class="fas fa-minus-circle passenger-picker__buttons__icon"
          v-on:click="decreaseAttendance"
        ></i>
    </div>
    <div class="passenger-picker__info">
      <h3 class="form-title-medium">{{quantity}}</h3>
      <h2 class="form-title-small passenger-picker__info__description">{{ passengerTitle }}</h2>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    passengerType: String,
    passengerTitle: String
  },
  computed: {
    quantity(){
      return this.$store.getters['datastore/getAttendees'](this.passengerType)
    }
  },
  methods: {
    increaseAttendence(){
      return this.$store.dispatch('datastore/amendAttendees', {
        group: this.passengerType,
        action: 'increase'}
      )
    },
    decreaseAttendance(){
      return this.$store.dispatch('datastore/amendAttendees', {
        group: this.passengerType,
        action: 'decrease'
      })
    },
  }
}

</script>

<style>

</style>
