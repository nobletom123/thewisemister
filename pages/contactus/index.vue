<template>
  <main class="contact-us-page">
    <section class="contact-us-page__body">
      <div>
        <img src="/contact.png"/>
      </div>
      <h1 class="descriptive-text-title">Always Happy to Assist</h1>
      <p class="descriptive-text-body">Our Travel Consultants will be happy to answer any queries you may have either by email, telephone or fax. Answers to any common flight and travel questions can be found on our faq page.</p>
      <form class="contact-us-form" action="index.html" method="post">
        <input v-model="name" type="text" name="" value="" placeholder="Name">
        <input v-model="surname" type="text" name="" value="" placeholder="Surname">
        <input v-model="phone" type="text" name="" value="" placeholder="Phone">
        <input v-model="email" type="email" name="" value="" placeholder="E-mail">
        <input v-model="subject" type="text" name="" value="" placeholder="Subject">
        <textarea></textarea>
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
  data(){
    return {
      name: null,
      surname: null,
      phone: null,
      email: null,
      subject: null,
      textarea: null
    }
  },
  methods: {
    submitQuery(){

    }
  }
}

</script>
