<template>
<div>
  <!-- <div
    class="absolute top-0 left-0 inset-0 w-full h-screen bg-cover bg-center bg-blue-300"
    :style="{backgroundImage: 'url(' + require('../assets/images/backgrounds/background-1.jpg') + ')'}"
  > -->
  <!-- </div> -->
    <div class="w-full h-screen flex justify-center content-center flex-wrap z-50">
      <div class="w-full flex justify-center">
        <div class="text-black px-8 rounded-lg text-center border-2" >
          <span class="font-bold text-6xl whitespace-pre overflow-hidden font-akaya-kanadaka" ref="typeIt1">Stefan de Bruin</span>
          <hr />
          <span class="font-thin text-3xl font-akaya-kanadaka" ref="typeIt2">Full stack developer</span>
        </div>
      </div>

      <div class="w-full flex justify-center mt-5">
        <social-icon :icon="['fab', 'github']" url="https://github.com/stefandb"></social-icon>
        <social-icon class="mx-5" :icon="['fab', 'bitbucket']" url="https://bitbucket.org/%7Baba10776-c6d7-427a-a898-616c63629386%7D/"></social-icon>
        <social-icon :icon="['fab', 'twitter']" url="https://twitter.com/stefan_d_b"></social-icon>
      </div>

      <!-- <div class="w-full flex justify-center mt-32">
        <div class="w-full flex justify-center container relative h-16 ">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron clear-both"></div>

        </div>
      </div> -->
      
    </div>
    <!-- <div v-show="true"> -->
      <!-- <div class="px-4 lg:px-0 lg:container mx-auto mb-4"> -->
      <!-- </div> -->
    <!-- </div> -->

</div>
</template>

<script>
import SocialIcon from "@/components/SocialIcon.vue";
import BlogPost from "@/components/Cards/BlogPost.vue";

// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import { useQuery, useResult} from '@vue/apollo-composable'
  // install Swiper components
  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  // Import Swiper styles
  // import 'swiper/swiper-bundle.css';

// import allPages from '@/gql/pages.query.gql'
// import { useQuery, useResult } from '@vue/apollo-composable'
import { postsQuery } from "@/gql/posts.query.js";

import TypeIt from "typeit";

export default {
  name: "Home",
  components: {
    SocialIcon,
    // BlogPost,
    // Swiper,
    // SwiperSlide
  },
  data: function(){
    return {
      posts: [],
      swiperNavigation: false,
      swiperLoop: true,
      swiperAutoplay: {
        enabled: false,
        delay: 2500,
        disableOnInteraction: false,
      },
      swiperBreakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
  }
    };
  },
  setup() {
  },
  mounted () {
    // const { result } = useQuery(postsQuery);

    // this.posts = useResult(result, null, data => data.getObjects.objects);

    let typeIt2 = new TypeIt(this.$refs.typeIt2, {
      afterComplete: async (step, instance) => {
        instance.destroy();
      }
    });
    let typeIt1 = new TypeIt(this.$refs.typeIt1, {
      afterComplete: async (step, instance) => {
        instance.destroy();
        typeIt2.go();
      } 
    }).go();
    
  },
  watch: {
    posts: function (val) {
      if (Array.isArray(val)) {
        if (val.length > 3) {
          this.swiperNavigation = true;
          this.swiperAutoplay.enabled = true;
          this.swiperLoop = true;
        }
      }
      
    }
  }
};
</script>

<style>

/* https://unsplash.com/photos/10MUSwtRqDs */
/* https://unsplash.com/photos/U66UVEgitQU */
/* https://unsplash.com/photos/dwJ_wgnL2CQ */
/* https://unsplash.com/photos/GK2n1OAq7NE */
/* https://unsplash.com/photos/-zvx4EoPRDw */
/* https://unsplash.com/photos/C6brammAGKE */
/* https://unsplash.com/photos/uvh5ODHadeE */
/* https://unsplash.com/photos/6SbFGnQTE8s */
/* https://unsplash.com/photos/qjgdslbEn-I */
/* https://unsplash.com/photos/c43mlpzT0BU */
body{
  background-image: url('../assets/images/backgrounds/marc-linnemann-GK2n1OAq7NE-unsplash.jpg');
  background-position: center;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  height: 100vh!important;
}


.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:last-child {
  clear: both;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: black;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>

