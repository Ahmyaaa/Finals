<template>
  <div id="app">
    <img class="id" src="./assets/resume-photo.png">
    <h1>{{ name }}</h1>
    <h3>Full time Web Developer</h3>
    <profile></profile>
    <career></career>
    <overall></overall>
  </div>
</template>
<link rel="stylesheet" type="text/css" href="style.css"></link>

<script>
import profile from './profile.vue'
import career from './career.vue'
import overall from './overall.vue'
export default {
  name: 'app',
  components: {
    profile,
    career,
    overall
},
  data () {
    return {
      name: 'Sean Warner Dean T. Datu'
    }
  } 
}
</script>
<!-- General -->
<style>
#app {
	margin: 0 auto;
	max-width: 800px;
	padding: 20px;
	font-family: Arial, sans-serif;
	text-align: left;
}
.id {
  max-height: 200px;
  max-width: 200px;
  width: 170px;
  height: 170px;
  float: right;
}

img.address {
  padding-right: 10px;
}
img.phone {
  padding-right: 10px;
}
img.email {
  padding-right: 10px;
}

.first-part {
  border-bottom: solid;
}

.second-part {
  border-bottom: solid;
}

.third-part {
  border-bottom: solid;
}



</style>

