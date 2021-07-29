<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img :src="slide"/>
    </v-carousel-item>
  </v-carousel>

</template>

<script>
export default {
  name: "mainSlider",
  data(){
    return{
      slides: [
        'https://cdn.shopify.com/s/files/1/0070/8991/3908/files/slider1-smartbooks1-1920x566_1920x669.jpg?v=1552168725',
        'https://cdn.shopify.com/s/files/1/0070/8991/3908/files/slider2-smartbooks1-1920x566_1920x669.jpg?v=1552168663',
      ],
    }
  }
}
</script>

<style scoped>

</style>
