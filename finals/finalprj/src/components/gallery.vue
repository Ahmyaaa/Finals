<template>
   <div class="home-container bg-home">
    <p class="title">{{ title }}</p>
    <div class = "blog">

    <!-- Gallery -->
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="../assets/1.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="1"
    />

    <img
      src="../assets/2.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="2"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="../assets/3.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="3"
    />

    <img
      src="../assets/4.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="4"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="../assets/5.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="5"
    />

    <img
      src="../assets/6.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="6"
    />
  </div>
</div>
<!-- Gallery -->
        </div>
      </div>

</template>

<script>
export default {
  name: 'gallery',
  
  data () {
    return {
      title:'GALLERY'
    }
  }
}
</script>

<style scoped>

/* MAIN */
.bg-home {
  height: 100vh;
  background-image: url("../assets/gallery.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.title{
  padding-top: 20px;
  font-size: 80px;
  color: white;
  text-align: center;
}

/* IN GAME */

 
</style>