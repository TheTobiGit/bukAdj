<template>
  <section class="flex justify-center w-full lg:hidden">
    <div class="h-[3rem] w-[90vw] bg-[#206A5D] flex items-center justify-evenly rounded-3xl text-[#EBECF1] shadow-lg">
      <NuxtLink to="/home"><Icon name="material-symbols:home" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/home' }" /></NuxtLink>
      <NuxtLink to="/search"><Icon name="material-symbols:search" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/search' }" /></NuxtLink>
      <NuxtLink to="/bookings"><Icon name="ion:ios-calendar" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/bookings' }" /></NuxtLink>
    </div>
  </section>
</template>

<script setup>

</script>