<template>
  <section v-if="!user"  class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <p>log in to see your bookings</p>

  </section>
</template>

<script setup>
const user = await getCurrentUser();

  definePageMeta({
  layout: 'client',
})
</script>
