<template>
  <header class="text-gray-700 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-3"
      >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </a>
      <div
        @click="$store.commit('cart/SET_OPEN', true)"
        class="flex title-font font-medium items-center text-gray-900 mb-4 mr-3 md:mb-0"
      >
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <div
          v-if="$store.state.cart.items.length"
          class="shopping-cart-badge bg-green-300"
        >
          {{ $store.state.cart.items.length }}
        </div>
      </div>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <div class="mr-5 hover:text-gray-900">Sklepy</div>
        <div class="mr-5 hover:text-gray-900">Produkty</div>
        <div class="mr-5 hover:text-gray-900">Support</div>
      </nav>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <div class="mr-5 hover:text-gray-900">10:00 - 23:00</div>
        <div class="mr-5 hover:text-gray-900">
          <a class="text-black font-bold" href="tel:555555555">
            +48 123 123 123</a
          >
        </div>
      </nav>
      <button
        class="inline-flex items-center bg-green-400 border-0 py-2 px-1 text-white font-semiBold px-3 focus:outline-none hover:bg-white hover:text-green-400 border-green-400 rounded text-base mt-4 md:mt-0"
      >
        Kontakt z nami
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      elo: 'test',
    }
  },
}
</script>

<style scoped lang="scss">
.shopping-cart-badge {
  color: #fff;
  border-radius: 100%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
