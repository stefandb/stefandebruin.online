<template>
  <div
    class="absolute inset-0 w-full h-screen bg-cover bg-center bg-blue-300"
    :style="{backgroundImage: 'url(' + require('../assets/images/backgrounds/background-1.jpg') + ')'}"
  >
    <div class="w-full h-screen flex justify-center content-center flex-wrap">
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
  </div>
</template>

<script>
import SocialIcon from "@/components/SocialIcon.vue";

export default {
  name: "Home",
  components: {
    SocialIcon
  }
};
</script>
