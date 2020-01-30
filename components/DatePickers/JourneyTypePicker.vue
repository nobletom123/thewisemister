<template>
  <div class="journey-type-picker">
    <div
      class="journey-type-picker__selector"
      v-on:click="setJourneyType('return')"
      >
      <h1
        class="journey-type-picker__selector__title"
      >Return</h1>
      <div
        class="journey-type-picker__selector__button"
      >
        <div
          class="journey-type-picker__selector__button__dot"
          :class="{'journey-type-picker__selector__button__dot--active': journeyType === 'return'}"
        >
        </div>
      </div>
    </div>
    <div
      class="journey-type-picker__selector"
      v-on:click="setJourneyType('single')"
      >
      <h1
        class="journey-type-picker__selector__title"
      >One way</h1>
      <div
        class="journey-type-picker__selector__button"
      >
        <div
          class="journey-type-picker__selector__button__dot"
          :class="{'journey-type-picker__selector__button__dot--active': journeyType === 'single'}"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    setJourneyType(journeyType){
      return this.$store.dispatch('datastore/setJourneyType', journeyType)
    }
  },
  computed: {
    journeyType:{
      get(){
        return this.$store.getters['datastore/getJourneyType']
      },
    },
  }
}


</script>
