<template>
  <div>
    <h1
      class="descriptive-text-title"
    >People travelling</h1>
    <div class="home-page__section__edit-state__text">
      <h1
        v-if="passengers('parents').quantity > 0"
        class=" descriptive-text-title"
      >
        {{passengers('parents').quantity}} {{passengers('parents').noun}}
      </h1>
      <h1
        class="descriptive-text-title"
        v-if="passengers('minors').quantity > 0"
        >
        {{passengers('minors').quantity}} {{passengers('minors').noun}}
      </h1>
      <h1
        v-if="passengers('infants').quantity > 0"
        class="descriptive-text-title"
        >
        {{passengers('infants').quantity}} {{passengers('infants').noun}}
      </h1>
    </div>
    <div
      v-on:click="editSection"
      class="form-completion-button who-is-going-btn"
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

export default {
  methods: {
    passengers(group){
      let quantity = this.$store.getters['datastore/getAttendees'](group)
      let noun = null

      switch(group){
        case 'parents':
          noun = quantity > 1 ? 'adults' : 'adult'
          break
        case 'minors':
          noun = quantity > 1 ? 'children' : 'child'
          break
        case 'infants':
          noun = quantity > 1 ? 'infants' : 'infant'
          break
        default:
          noun = null
      }

      return {
        quantity,
        noun
      }
    },
    editSection(){
      if(this.editable){
        this.$store.dispatch('flow/editSection', 1)
      }
    },
  },
  computed: {
    currentPosition(){
      return this.$store.getters['flow/currentPosition'] === 1
    },
    editable(){
      return this.$store.getters['flow/isEditable']
    }
  }
}

</script>
