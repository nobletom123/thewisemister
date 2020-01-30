<template>
  <div class="passengers-section">
    <div>
      <img src="/who_go.png"/>
    </div>
    <div>
      <h3 class="form-completion-title">Who is going?</h3>
    </div>
    <div class="who-is-going-page__main-body">
      <PassengerPickerPanel></PassengerPickerPanel>
      <div
        class="who-is-going-page__main-body__errors-section"
        >
        <div
          v-if="errors.length > 0"
          v-for="error in errors"
          class="error-message"
          >
          {{ error.mssg }}
        </div>
      </div>
      <div>
        <div
          class="form-completion-button who-is-going-btn"
          :class="{ active: passableQuantity }"
          v-on:click="completeSection"
          >Okay!</div>
      </div>
    </div>
  </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
import PassengerPickerPanel from '@/components/PassengerPickerPanel/PassengerPickerPanel'

export default {
  components: {
    PassengerPickerPanel,
  },
  computed: {
    errors(){
      return this.$store.getters['datastore/attendanceErrors']
    },
    passableQuantity(){
      return this.$store.getters['datastore/passableQuantity']
    }
  },
  methods: {
    completeSection(){
      if(this.passableQuantity){
        this.$store.dispatch('flow/completeSection', 1)
      }
    },
    scrollTo(){
      VueScrollTo.scrollTo('.passengers-section', 800)
    }
  },
  mounted(){
    this.scrollTo()
  }
}

</script>
