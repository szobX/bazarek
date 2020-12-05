<template>
  <div class="rating"></div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: {
      type: Number,
      default: 4,
    },
  },
}
</script>

<style scoped lang="scss">
.rating {
  display: inline-block;
  margin-left: auto;
  img {
    width: 120px;
  }
}
.rating-img-fill {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: url('/broccoil-fill.png');
  }
}
</style>
