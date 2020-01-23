<template>
  <div class="container">
    <header>
      <NavBar></NavBar>
    </header>
    <nuxt />
    <Footer>
    </Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    NavBar,
    Footer
  },
  head(){
    return {

    }
  }
}
</script>

<style>

</style>
