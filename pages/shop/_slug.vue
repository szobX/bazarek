<template>
  <section class="text-gray-700 body-font bg-gray-100">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Pitchfork Kickstarter Taxidermy
          </h1>
          <div class="h-1 w-20 bg-teal-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div class="py-24">
        <h2 class="text-4xl text-black font-bold mb-3">Nasi rolnicy</h2>
        <div class="w-24 bg-green-600 h-2"></div>
      </div>
      <div class="flex flex-wrap -m-4">
        <FarmerCard
          v-for="farmer in exampleFarmer"
          :key="farmer.Id"
          :farmer="farmer"
        />
      </div>

      <div class="py-24">
        <h2 class="text-4xl text-black font-bold mb-3">Produkty</h2>
        <div class="w-24 bg-green-600 h-2"></div>
      </div>
      <div class="flex flex-wrap -m-4">
        <ProductCard
          v-for="product in exampleProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FarmerCard from '~/components/Farmer/Card'
import ProductCard from '~/components/Product/Card'
import ExampleFarmers from '~/fakeFarmers'
import fakeProduct from '~/fakeProduct'
export default {
  name: 'SlugShop',
  components: { FarmerCard, ProductCard },
  layout: 'shopLayout',

  data() {
    return {
      exampleFarmer: [...ExampleFarmers],
      exampleProducts: [...fakeProduct],
    }
  },
}
</script>
