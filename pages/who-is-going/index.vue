<template>
  <main class="page-container who-is-going-page">
    <div>
      <img src="/who_go.png"/>
    </div>
    <div>
      <h3 class="form-completion-title">Who is going?</h3>
    </div>
    <div class="who-is-going-page__main-body">
      <PassengerPickerPanel></PassengerPickerPanel>
      <div
        class="who-is-going-page__main-body--errors-section"
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
          v-on:click="completePage"
          >Okay!</div>
      </div>
    </div>
  </main>
</template>

<script>
import PassengerPickerPanel from '@/components/PassengerPickerPanel/PassengerPickerPanel'

export default {
  head(){
    return {
      title: 'Who Is Going - TheWiseMister',
    }
  },
  components: {
    PassengerPickerPanel
  },
  methods: {
    completePage(){
      if(this.passableQuantity){
        this.$router.push('select-depart-date')
      }
    }
  },
  computed: {
    errors(){
      return this.$store.getters['datastore/attendanceErrors']
    },
    passableQuantity(){
      return this.$store.getters['datastore/passableQuantity']
    }
  }
}

</script>

<style>

</style>
