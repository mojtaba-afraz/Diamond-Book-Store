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
        'https://pezhvakdanesh.com/2/18/1593873844_671822c2f63dd5f65d8fd15c9710420b.jpg',
        'https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-332%20Books%20from_large.jpg?itok=goIsOQs0',
      ],
    }
  }
}
</script>

<style scoped>

</style>
