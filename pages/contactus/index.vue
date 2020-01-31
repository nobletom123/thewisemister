<template>
  <main class="contact-us-page">
    <section class="contact-us-page__body">
      <div>
        <img src="/contact.png"/>
      </div>
      <h1 class="descriptive-text-title">Always Happy to Assist</h1>
      <p class="descriptive-text-body">Our Travel Consultants will be happy to answer any queries you may have either by email, telephone or fax. Answers to any common flight and travel questions can be found on our faq page.</p>
      <div
        v-if="inquiryOutcome === 'successful'"
        class="contact-us-page__body__message"
      >
        <h1 class="descriptive-text-title">Success!</h1>
        <h1 class="descriptive-text-body">Your inquiry has been sent and we will be in contact with your shortly!</h1>
      </div>
      <div
        v-else-if="inquiryOutcome === 'error'"
        class="contact-us-page__body__message"
      >
        <h1 class="descriptive-text-title">Error!</h1>
        <h1 class="descriptive-text-body">There was an error sending your inquiry. Please try again later, or call us on 0800 091 2710</h1>
      </div>
      <form class="contact-us-form" action="index.html" v-on:submit.prevent="submitQuery" v-else>
        <input v-model="name" type="text" name="" value="" placeholder="Name" required>
        <input v-model="surname" type="text" name="" value="" placeholder="Surname" required>
        <input v-model="phone" type="text" name="" value="" placeholder="Phone" required>
        <input v-model="email" type="email" name="" value="" placeholder="E-mail" required>
        <input v-model="subject" type="text" name="" value="" placeholder="Subject" required>
        <textarea v-model="message" required></textarea>
        <div>
          <button class="form-completion-button active select-depart-date-btn">Okay!</button>
        </div>
      </form>
    </section>
    <section class="contact-us-page__info">
      <div class="contact-us-page__info__section">
        <div>
          <img src="/contact-clock.png" alt="clock icon">
        </div>
        <h1 class="descriptive-text-small-title">Opening Hours</h1>
        <p class="descriptive-text-information">Our lines open</p>
      </div>
      <div class="contact-us-page__info__section">
        <div>
          <img src="/contact-mail.png" alt="mail icon">
        </div>
        <h1 class="descriptive-text-small-title">By Post</h1>
        <p class="descriptive-text-information">
          You can write to use at the following address
        </p>
        <p class="descriptive-text-information">Alpha House, 100 Borough High Street</p>
        <p class="descriptive-text-information">London, SE1 1LB</p>
      </div>
      <div class="contact-us-page__info__section">
        <div>
          <img src="/contact-phone.png" alt="phone icon">
        </div>
        <h1 class="descriptive-text-small-title">By Telephone</h1>
        <p class="descriptive-text-information">0208 174 0103</p>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  layout: 'staticPage',
  head(){
    return {
      title: 'Contact Us - TheWiseMister',
    }
  },
  computed: {
    name: {
      get(){
        return this.$store.getters['contact/getAttribute']('firstName')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr: 'firstName', val})
      }
    },
    surname: {
      get(){
        return this.$store.getters['contact/getAttribute']('lastName')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr:'lastName', val})
      }
    },
    email: {
      get(){
        return this.$store.getters['contact/getAttribute']('email')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr:'email', val})
      }
    },
    phone: {
      get(){
        return this.$store.getters['contact/getAttribute']('phone')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr:'phone', val})
      }
    },
    subject: {
      get(){
        return this.$store.getters['contact/getAttribute']('subject')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr:'subject', val})
      }
    },
    message: {
      get(){
        return this.$store.getters['contact/getAttribute']('message')
      },
      set(val){
        return this.$store.dispatch('contact/setAttribute', {attr:'message', val})
      }
    },
    inquiryOutcome(){
      return this.$store.getters['contact/inquiryOutcome']
    }
  },
  methods: {
    submitQuery(){
      this.$store.dispatch('contact/sendInquiry')
    }
  }
}

</script>
