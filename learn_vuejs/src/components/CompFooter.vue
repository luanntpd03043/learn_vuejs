<template>
  <div>
      <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'comp-footer',
    props:{
      title: String
    },
    data(){
      return{
        textFooter: 'Footers'
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
