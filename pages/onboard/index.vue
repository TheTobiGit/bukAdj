<template>
  <section class="h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <p class="text-lg ">Select account type</p>
    <div class="flex flex-col gap-5 text-center">
      <NuxtLink to="/onboard/profile" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg">I am a DJ</NuxtLink>
      <NuxtLink to="/home/" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg">I am looking for a DJ</NuxtLink>
    </div>

   
  </section>
</template>

<script setup>
useHead({
  title: 'Onboard',
})
</script>
