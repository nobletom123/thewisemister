<template>
  <div class="page-container">
    <div
      v-if="iframeData.errors"
    >
      <h1 class="descriptive-text-title">Unable to display results! There were the following errors:</h1>
      <p class="descriptive-text-body"
        v-for="error of iframeData.errors"
      >{{error.mssg}}</p>
      <nuxt-link to="/">Please click here to create your holiday again</nuxt-link>
    </div>
    <iframe
      v-else
      title="Inline Frame Example"
      width="100%"
      height="100%"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      :src="iframeData"
    ></iframe>
  </div>
</template>

<script>

export default {
  head(){
    return {
      title: 'Search Results - TheWiseMister',
    }
  },
  computed: {
    iframeData(){
      let iframeData = this.$store.getters['datastore/getIframeData']
      if(iframeData.errors){
        return iframeData
      } else {
        let iframeDataKeys = Object.keys(iframeData)
        let mode = this.$isDev ? 'http://citrusholidays.test' : 'https://citrusholidays'
        let deepUrl = `${mode}.travelflow.co.uk/directsearch.asp?bn=0007&SearchType=AIR`
        for(let key in iframeDataKeys){
          let property = iframeDataKeys[key]
          deepUrl = `${deepUrl}&${property}=${iframeData[property]}`
        }
        console.log(deepUrl)
        return deepUrl
      }
    }
  }
}

</script>

<style>

</style>
