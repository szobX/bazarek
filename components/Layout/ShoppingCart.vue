<template>
  <div v-if="isOpen" class="shopping-cart-layout">
    <div class="shopping-cart-content">
      <div class="content">
        <div @click="$store.commit('cart/SET_OPEN', false)" class="close">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div v-if="items" class="flex flex-wrap">
          <div v-for="item in items" :key="item.id" class="product">
            <div @click.prevent="deleteItem(item)" class="delete">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <div class="quantity bg-green-400">{{ item.quantity }}</div>
            <div class="img-wrapper">
              <img :src="item.product.Photo" alt="" />
            </div>
            <h5>{{ item.product.Price * parseFloat(item.quantity) }} zł</h5>
          </div>
        </div>
        <div class="form mt-6">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Zamówienie
          </h2>
          <div
            class="w-full flex flex-wrap bg-gray-100 rounded-lg p-8 flex md:ml-auto w-full mt-10 md:mt-0 -m-1/4"
          >
            <div class="lg:w-1/4 md:w-1/2 px-4 w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600"
                >Imię</label
              >
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="lg:w-1/4 md:w-1/2 px-4 w-full">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="lg:w-1/4 md:w-1/2 px-4 w-full">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Adres</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="lg:w-1/4 md:w-1/2 px-4 w-full">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Nr telefonu</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="text-white bg-green-500 border-0 ml-4 py-2 mt-6 px-16 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Zamów
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    deleteItem(obj) {
      this.$store.commit('cart/REMOVE_PRODUCT', obj)
    },
  },
  computed: {
    items() {
      return this.$store.state.cart.items
    },
    isOpen() {
      return this.$store.state.cart.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.shopping-cart-layout {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
  background: #00000080;
}
.shopping-cart-content {
  width: 100%;
  position: fixed;
  top: 0;
  min-height: 50vh;
  background: #fff;
}
.content {
  position: relative;
  padding: 56px 77px;
}
.close {
  position: absolute;
  left: 15px;
  top: 15px;
}
.product {
  margin-right: 32px;
  box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
  position: relative;
  max-width: 250px;
  height: 225px;
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  .quantity {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    position: absolute;
    right: -13px;
    top: -13px;
    border-radius: 100%;
  }
  .delete {
    position: absolute;
    left: -13px;
    top: -13px;
  }
}
</style>
