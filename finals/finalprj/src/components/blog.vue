<template>
  <div class="home-container bg-home">
    <div class = "blog">
      <section class = "reviews" id = "reviews">
        <h1 class = "heading">{{ title }}</h1>
        <div class = "box-container container">
          <div class = "box">
            <img src = "../assets/keqing.png" alt = "" height="34%">
            <p class="descA">Keqing is a playable character in Genshin Impact with electro-based abilities. She's a confident, independent individual who serves as the Yuheng of the Liyue Qixing, meaning she's one of the seven leaders who govern the city-state of Liyue. Keqing is known for her quick wit and sharp tongue, but she also cares deeply about her people and is dedicated to ensuring their well-being. </p>    
          </div>
          <div class = "box">
            <img src = "../assets/ayaka.png" alt = "" height="34%">
            <p class="descA">Kamisato Ayaka is a graceful and elegant character in Genshin Impact who possesses cryo-based abilities. She comes from the Kamisato Clan, a prominent family in Inazuma, and is a highly skilled swordswoman. Ayaka values tradition and honor, and takes her duties as a member of the clan and as a princess of Inazuma very seriously.</p>    
          </div>
          <div class = "box">
            <img src = "../assets/ganyu.png" alt = "" height="34%">
            <p class="descA">Ganyu is a gentle and reserved character in Genshin Impact with cryo-based abilities. She's a secretary at Yuehai Pavilion and is highly respected by the people of Liyue for her diligent and efficient work. As a Qilin, Ganyu possesses a unique heritage and has a strong connection to the world of Teyvat.</p>    
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  
  data () {
    return {
      title:'MY THREE MAIN PICKS'
    }
  }
}
</script>

<style scoped>
.bg-home {
  height: 100vh;
  background-image: url("../assets/blog.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}
.reviews{
   color: white;
}

.heading {
  padding-top: 5%;
  text-align: center;
  font-size: 100px;
}

.reviews .box-container{
  padding-top: 3%;
  margin: 0,10%,0,10%;
  text-align: justify;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   gap:2rem;
}

.reviews .box-container .box{
   text-align: justify;
   padding-top: 60px;
   padding-right: 2rem;
   padding-left: 2rem;
   /* padding:2rem; */
}

.reviews .box-container .box img{
   display: grid;
   grid-template-columns: auto;
   justify-self: auto;
   box-shadow: 0 0 50px rgb(65, 105, 255);
   border: 5px solid rgb(255, 255, 255);
   border-radius: 9px;
}

.reviews .box-container .box p{
   padding:2rem 0;
   line-height: 2;
   margin-bottom: 0;
}

.reviews .box-container .box  {
  font-size: 1.2rem;
}

.descA{
  font-size: medium;
}
</style>
