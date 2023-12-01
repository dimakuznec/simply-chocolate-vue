<script setup>
   import { RouterView } from "vue-router";
   import "../header/header.css";


   // import { header } from 'vue-router'

   // const router = createRouter({
   //    history: createWebHistory(),
   //    routes:[{
   //      name: 'header',
   //      path: '/',
   //      component: 'header'
   //    },{
   //       name: 'Products',
   //       path: '/Products',
   //       component: 'Products'
   //    }]
   // }) 
</script>

<template>
      <header class="header">
          
         <div class="header_top_row">
               <h1 class="title">SIMPLY CHOCOLATE</h1>
               <img class="chocolate_logo" src="../../assets/chocolate.svg" alt="">

               <div class="header_nav">
                  <nav class="nav">
                     <ul class="nav_list">
                        <router-link class="nav_item" to="/">Home</router-link>
                        <router-link class="nav_item" to="/How-it’s-made?">How it’s made?</router-link>
                        <router-link class="nav_item" to="/Our-products">Our products</router-link>
                        <router-link class="nav_item" to="/Top-sellers">Top sellers</router-link>
                        <router-link class="nav_item" to="/Chocolate-is-loved">Chocolate is loved</router-link>
                        <div class="main_social_network">
                           <a href="/instagram" class="main_img_instagram">
                              <img class="main_instagram" src="../../components/imgs/instagram.svg" alt="">
                           </a>
                           <a href="/twitter" class="main_img_twitter">
                              <img class="main_twitter" src="../../components/imgs/twitter.svg" alt="">
                           </a>
                        </div>
                     </ul>
                  </nav>
               </div>   

         </div>

         <div class="main_img">
            <img class="main_picture" 
            src="../../components/imgs/chocolate-covered-cocoa-powder 1.png" 
            alt="">

         </div>

         <div class="description">
              <div class="text_description">
                  <p class="text">
                     Treat yourself or a loved one to 
                     our finest ingredients for a moment 
                     of pure delight!
                  </p>
              </div>
         </div>

         <div class="description_link">
            <div class="description_link-1">
                  <a class="link_1" href="#">Buy now</a>
            </div>

            <div class="description_link-2">
                  <a class="link_2" href="#">How it’s made</a>
            </div>
         </div>
         
         <div class="description_img">
            <p class="description_p">scroll down</p>
            <button @click="scrollToBottom" class="description_button">
               <img class="description_svg" src="../../components/imgs/fi-rr-angle-small-left.svg" alt="">
            </button>
         </div>
         <router-view></router-view>
      </header>
   

</template>

<style scoped>


</style>
