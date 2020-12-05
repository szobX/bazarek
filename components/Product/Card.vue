<template>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a
      class="block bg-white p-4 relative rounded-lg overflow-hidden hover:shadow-lg"
    >
      <div class="text-right">
        <div class="text-right inline-block">
          <svg
            class="w-6 h-6"
            fill="#eee"
            stroke="#eee"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-full h-48">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          :src="product.Photo"
        />
      </div>

      <div class="mt-4">
        <div class="tags flex">
          <div
            v-for="tag in product.Tags"
            :key="tag.id"
            class="px-2 py-1 uppercase bg-green-300 text-green-700 text-xs font-semibold rounded-full mr-2"
          >
            {{ tag.Name }}
          </div>
        </div>
        <h2 class="text-black title-font text-lg mt-4 font-semibold">
          {{ product.Name }}
          <span class="text-xs font-bold text-indigo-400">
            ({{ product.MeasureUnit | measureUnit }})</span
          >
        </h2>
        <p class="text-gray-500 font-sm py-4">{{ product.Description }}</p>
        <div>
          <Rating :rating="product.Rating" />
        </div>
      </div>
      <div class="flex flex-wrap justify-between align-baseline">
        <h4 class="mt-1 font-bold text-lg">{{ product.Price }} zł</h4>
        <div class="w-1/4">
          <input class="input bg-gray-300 text-gray-900" type="number" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Rating from '~/components/Layout/Rating'
export default {
  name: 'ProductCard',
  components: { Rating },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: ['green', 'yellow', 'red', 'blue', 'pink', 'purple', 'indigo'],
    }
  },
}
</script>

<style scoped>
.input {
  height: 35px;
  border: none;
  border-radius: 30px;
  outline: none;
  padding: 5px 15px;
}
</style>
