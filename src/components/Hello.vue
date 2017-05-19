<template>
  <div>
    <navbar></navbar>
    <formulaire></formulaire>
    <liste></liste>
  </div>
</template>

<script>
  import Liste from './Liste'
  import Form from './Form'
  import Navbar from './Navbar'
  export default {
    name: 'hello',
    components: { liste: Liste, formulaire: Form, navbar: Navbar },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>