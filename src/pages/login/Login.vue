<template lang="html">
  <auth-template>
    <span slot="info">teste</span>
    <span slot="form">
      teste
    </span>
  </auth-template>
</template>
<script>
import AuthTemplate from '@/templates/AuthTemplate'
export default {
  name: 'Login',
  components: {
    AuthTemplate
  },
  data: () => ({
    gradient: 'to top right, rgba(0,102,153, .9), rgba(0,204,153, .6)'
  })
}
</script>
<style lang="css">
</style>
