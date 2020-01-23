<template>
  <div class="container">
    <header>
      <NavBar></NavBar>
    </header>
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },
  head(){
    return {
      
    }
  }
}
</script>

<style>

</style>
