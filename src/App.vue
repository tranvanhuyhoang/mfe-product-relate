<template>
  <div id="container-product-relate">
    <h3>Related Products</h3>
    <img 
      v-for="item in this.recos[store.state.currentSku]"
      alt="item" 
      class="img-custom"
      :src="getThumbImgUrl(item)" 
      :key="item"
    >
  </div>
</template>

<script>  
  const recos = {
    t_porsche: ['1', '7', '3'],
    t_fendt: ['2', '6', '4'],
    t_eicher: ['5', '8', '7'],
  };
  export default {
    props: ['store'],
    data: () => ({
      recos,
    }),
    methods: {
      getThumbImgUrl: function (id) {
        return require('@/assets/images/reco_' + id + '.jpg');
      }
    }
  }
</script>

<style>
#container-product-relate{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 200px;
  display: inline-block;
}
.img-custom{
  width: 100%;
  height: auto;
  object-fit: scale-down;
}
</style>

