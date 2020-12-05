<template>
  <div class="shop-page relative">
    <ShoppingCart />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Layout/Header'
import ShoppingCart from '~/components/Layout/ShoppingCart'
export default {
  name: 'ShopLayout',
  components: { ShoppingCart, Header },
}
</script>
<style>
html {
  font-family: 'Open sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
