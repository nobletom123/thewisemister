<template>
  <main class="home-page">
    <!-- Departure/Destination Section -->
    <section
      class="home-page__section home-page__section__destinations-section"
      :class="{ 'home-page__section__destinations-section--is-starting': isStarting }"
      >
      <DepartFlowSection
        v-if="flowState[0].status === 'open'"
      ></DepartFlowSection>
      <EditDepartFlowSection
        class="home-page__section__edit-state"
        v-if="flowState[0].status === 'edit'"
      ></EditDepartFlowSection>
    </section>
    <!-- Who Is Going Section -->
    <section  class="home-page__section home-page__section__passengers-section"
      v-if="flowState[0].complete === true"
    >
      <PassengerFlowSection
        v-if="flowState[1].status === 'open'"
      ></PassengerFlowSection>
      <EditPassengerFlowSection
        class="home-page__section__edit-state"
        v-if="flowState[1].status === 'edit'"
      ></EditPassengerFlowSection>
    </section>
    <!-- Select Dates -->
    <section class="home-page__section home-page__section__dates-section"
      v-if="flowState[1].complete"
    >
      <DatesFlowSection
        v-if="flowState[2].status === 'open'"
      ></DatesFlowSection>
      <EditDatesFlowSection
        v-if="flowState[2].status === 'edit'"
        class="home-page__section__edit-state"
      ></EditDatesFlowSection>
    </section>
  </main>
</template>

<script>
import DepartFlowSection from '@/components/FlowSections/DepartFlowSection/DepartFlowSection'
import EditDepartFlowSection from '@/components/FlowSections/DepartFlowSection/EditDepartFlowsection'
import PassengerFlowSection from '@/components/FlowSections/PassengerFlowSection/PassengerFlowSection'
import EditPassengerFlowSection from '@/components/FlowSections/PassengerFlowSection/EditPassengerFlowSection'
import DatesFlowSection from '@/components/FlowSections/DatesFlowSection/DatesFlowSection'
import EditDatesFlowSection from '@/components/FlowSections/DatesFlowSection/EditDatesFlowSection'

export default {
  head(){
    return {
      title: 'Home - TheWiseMister',
    }
  },
  components: {
    DepartFlowSection,
    EditDepartFlowSection,
    PassengerFlowSection,
    EditPassengerFlowSection,
    DatesFlowSection,
    EditDatesFlowSection,
  },
  methods: {

  },
  computed: {
    travelPointsSet(){
      return this.$store.getters['departures/travelPointsSet']
    },
    flowState(){
      return this.$store.getters['flow/getSections']
    },
    isStarting(){
      return this.$store.getters['flow/isStarting']
    }
  },
}
</script>

<style>

</style>
