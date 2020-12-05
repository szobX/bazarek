<template>
  <section class="text-gray-700 body-font bg-gray-100">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-4xl font-bold mb-2 text-gray-900 custom-header"
          >
            Nazwa sklepu
          </h1>
          <div class="h-1 w-20 bg-teal-500 rounded"></div>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="leading-relaxed text-base">
            Opis sklepu tote bag tumblr hexagon brooklyn asymmetrical gentrify,
            subway tile poke farm-to-table. Franzen you probably haven't heard
            of them man bun deep jianbing selfies heirloom prism food truck ugh
            squid celiac humblebrag.
          </p>
          <hr class="my-6" />
          <div class="flex mb-4 align-baseline font-semibold">
            <img class="w-8 pr-4" src="/box.svg" alt="" /> Preferowany odbiór
            osobisty.
          </div>
          <div class="flex mb-4 align-baseline font-semibold">
            <img class="w-8 pr-4" src="/delivery-truck.svg" alt="" /> Możliwość
            dowozu przez sklep.
          </div>
          <div class="flex mb-4 align-baseline font-semibold">
            <img class="w-8 pr-4" src="/delivery-man.svg" alt="" /> Usługa food
            delivery
          </div>
        </div>
      </div>
      <div class="py-12">
        <hr class="my-6" />
        <div class="flex mb-4 align-center font-semibold">
          <svg
            class="w-10 h-10 pr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Ul.sezamowa 43
        </div>
        <div class="flex mb-4 align-center font-semibold">
          <svg
            class="w-10 h-10 pr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          +48 544 542 433
        </div>
      </div>
      <div class="py-24">
        <h2 class="text-3xl text-black font-semibold mb-3">Nasi rolnicy</h2>
        <div class="w-24 bg-green-600 h-2"></div>
      </div>

      <div class="flex flex-wrap -m-4">
        <FarmerCard
          v-for="farmer in exampleFarmer"
          :key="farmer.Id"
          :farmer="farmer"
        />
      </div>

      <div class="flex flex-wrap py-24 md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/500x300"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/501x301"
            />
          </div>
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/600x360"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://dummyimage.com/601x361"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/502x302"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/503x303"
            />
          </div>
        </div>
      </div>

      <div class="py-24">
        <h2 class="text-3xl text-black font-semibold mb-3">Produkty</h2>
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
<style>
.custom-header {
  font-size: 64px;
}
</style>
