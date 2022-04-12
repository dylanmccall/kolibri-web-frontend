<template>
  <div id="app">
    <SetupWizardIndex />
  </div>
</template>

<script>
import SetupWizardIndex from '@/setup-wizard/views/SetupWizardIndex'

export default {
  name: 'App',
  components: {
    SetupWizardIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
