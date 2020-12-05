<template>
  <div class="xl:w-1/5 md:w-1/2 p-4">
    <div class="bg-white shadow-xl rounded-lg">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        :src="farmer.ProfilePhoto"
        alt="content"
      />
      <div class="px-6 pb-6">
        <h2 class="text-lg font-semibold text-gray-900 title-font mb-4">
          {{ farmer.FirstName }} {{ farmer.LastName }}
        </h2>

        <p class="leading-relaxed text-sm text-gray-600">
          {{ farmer.ShortDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FarmerCard',
  props: {
    farmer: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
