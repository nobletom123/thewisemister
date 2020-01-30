<template>
  <nuxt-link
    :to="toLink"
    class="side-scroller"
    :class="{'side-scroller--left': direction === 'left', 'side-scroller--right': direction === 'right'}"
  >
    <div class="side-scroller__icon">
      <i class="fas fa-chevron-left"
        v-if="direction === 'left'"
      ></i>
      <i class="fas fa-chevron-right"
        v-else
      >
      </i>
    </div>
    <h1>{{ page }}</h1>
  </nuxt-link>
</template>

<script>

export default {
  props: {
    toLink: String,
    page: String,
    direction: String
  }
}

</script>
