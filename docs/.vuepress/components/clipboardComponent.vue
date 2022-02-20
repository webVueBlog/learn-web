<template>
  <div>
    <p>
      著作权归 哪吒的深入理解前端系列 所有。 链接：<a :href="location">{{
        location
      }}</a>
    </p>
    <div v-html="html" />
  </div>
</template>

<script>
export default {
  props: ['html'],

  created() {
    this.location = window.location
  },
}
</script>