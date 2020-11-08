<template>
<div>
  <!-- <div
    class="absolute top-0 left-0 inset-0 w-full h-screen bg-cover bg-center bg-blue-300"
    :style="{backgroundImage: 'url(' + require('../assets/images/backgrounds/background-1.jpg') + ')'}"
  > -->
  <!-- </div> -->
    <div class="w-full h-screen flex justify-center content-center flex-wrap z-50">
      <div class="w-full flex justify-center">
        <div class="text-black px-8 rounded-lg text-center border-2">
          <span class="font-bold text-4xl">Stefan de Bruin</span>
          <hr />
          <span class="font-thin text-2xl">Full stack developer</span>
        </div>
      </div>

      <div class="w-full flex justify-center mt-5">
        <social-icon :icon="['fab', 'github']" url="https://github.com/stefandb"></social-icon>
        <social-icon class="mx-5" :icon="['fab', 'bitbucket']" url="https://bitbucket.org/%7Baba10776-c6d7-427a-a898-616c63629386%7D/"></social-icon>
        <social-icon :icon="['fab', 'twitter']" url="https://twitter.com/stefan_d_b"></social-icon>
      </div>
    </div>
    <div v-show="true">
      <div class="lg:container lg:mx-auto mb-16">

        <!-- <div class="flex flex-row">
          <div class="flex items-center">
            <font-awesome-icon :icon="'chevron-left'" size="2x"/>
          </div>
          <div class="flex space-x-4 w-full">
            <blog-post class="w-1/3" v-for="(post, index) in posts" :key="index" :post="post" v-show="index < 3">
            </blog-post>
          </div>
          <div class="flex items-center">
            <font-awesome-icon :icon="'chevron-right'" size="2x"/>
          </div>
        </div> -->


  <swiper
    :slides-per-view="1"
    :space-between="20"
    :loop="true"
    navigation
    :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }"
  >
     
    <swiper-slide v-for="(post, index) in posts" :key="index">
             <blog-post :post="post" class="bg-opacity-50 rounded-lg">
            </blog-post>
            </swiper-slide>
  </swiper>

      </div>
    </div>

</div>
</template>

<script>
import SocialIcon from "@/components/SocialIcon.vue";
import BlogPost from "@/components/Cards/BlogPost.vue";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';


export default {
  name: "Home",
  components: {
    SocialIcon,
    BlogPost,
    Swiper,
    SwiperSlide
  },
  data: function(){
    return {
      postsf: [
        
      ]
    };
  },
  computed: {
    posts: function(){
      const items = [];
      for (let i = 1; i <= 6; i++) {
        items.push({
          title: "POST " + i,
          slug: "post-" + i,
          summary: "summary for post " + i,
          createdAt: "2020-11-07 10:53:45",
        });
      }
      return items;
    }
  }
};
</script>

<style>
body{
  background-image: url('../assets/images/backgrounds/background-1.jpg');
  background-position: center;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  height: 100vh!important;
}
</style>