<template>
  <section class="flex justify-center w-full lg:hidden">
    <div class="h-[3rem] w-[90vw] bg-[#206A5D] flex items-center justify-evenly rounded-3xl text-[#EBECF1] shadow-lg">
      <NuxtLink to="/dj/bookings"><Icon name="ion:ios-calendar" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/dj/bookings' }" /></NuxtLink>
      <NuxtLink to="/dj/profile"><Icon name="ion:ios-person" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/dj/profile' }" /></NuxtLink>
    </div>
  </section>
</template>

<script setup>
</script>