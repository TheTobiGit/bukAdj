<template>
  <section class="flex justify-center w-full lg:hidden">
    <div class="h-[3rem] w-[90vw] bg-[#206A5D] flex items-center justify-evenly rounded-3xl text-[#EBECF1] shadow-lg">
      <NuxtLink to="/client/home"><Icon name="material-symbols:home" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/client/home' }" /></NuxtLink>
      <!-- <NuxtLink to="/client/search"><Icon name="material-symbols:search" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/client/search' }" /></NuxtLink> -->
      <NuxtLink to="/client/bookings"><Icon name="ion:ios-calendar" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/client/bookings' }" /></NuxtLink>
    </div>
  </section>
</template>

<script setup>
</script>