<template>
  <nav class="nav-bar"
    v-click-outside="clickOutsideToggle"
  >
    <!-- HEAD SECTION -->
    <div class="nav-bar__head">
      <nuxt-link
        class="nav-bar__head__image"
        v-on:click="toggleMenu"
        to="/"
        >
        <img src="/logo.png" class="responsive-image"/>
      </nuxt-link>
      <div
        class="nav-bar__head__toggle"
        v-on:click="toggleMenu"
        v-bind:class="{'nav-bar__head__toggle--active': isMenuOpen}"
      >
        <i class="fas fa-bars"></i>
      </div>
    </div>
      <!-- MENU SECTION -->
    <div class="nav-bar__menu" v-bind:class="{'nav-bar__menu--active': isMenuOpen}">
      <nuxt-link
        to="/"
        v-on:click.native="toggleMenu"
        >Home</nuxt-link>
      <nuxt-link
        to="/about"
        v-on:click.native="toggleMenu"
        >About</nuxt-link>
      <nuxt-link
        to="/contactus"
        v-on:click.native="toggleMenu"
        >Contact</nuxt-link>
      <div>
        Call us 0203 011 3470
      </div>
      <div>
        Lines Open: 8:30am - 11:00pm
      </div>
    </div>
  </nav>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data(){
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu(){
      this.isMenuOpen = !this.isMenuOpen
    },
    clickOutsideToggle(){
      return this.isMenuOpen ? this.isMenuOpen = false : this.isMenuOpen = false
    }
  },
}

</script>

<style>

</style>
