<template>
  <section class="flex flex-col items-center gap-5 p-4 min-h-svh">
    <div class="self-start">
      <img src="/public/logo-black.png" alt="" class="w-[8rem]">
    </div>
    
    <div class="flex flex-col self-start w-full gap-3">
      <label for="search" class="text-2xl font-semibold ">What's the occasion?</label>
      <input type="text" id="search" name="search" placeholder="wedding, birthday, concert, etc" class="w-full p-2 focus:outline-none focus:border focus:border-[#1A1B25] bg-[#EBECF1]" />
      <button class="bg-[#1F6A5D] text-[#EBECF1] p-2 rounded-lg">Search</button>
    </div>

    <div class="flex flex-col self-start w-full gap-3 mt-2 overflow-x-scroll">
      <p class="text-xl font-semibold">Recommended DJ's for you</p>
      <div class="flex gap-2 w-max">
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
      </div>
    </div>

    <div class="flex flex-col self-start w-full gap-3 mt-2 overflow-x-scroll">
      <p class="text-xl font-semibold">Based on your recent searches</p>
      <div class="flex gap-2 w-max">
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
      </div>
    </div>

    <div class="flex flex-col self-start w-full gap-3 mt-2 overflow-x-scroll">
      <p class="text-xl font-semibold">Available for booking today</p>
      <div class="flex gap-2 w-max">
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
        <div class="h-[10rem] w-[10rem] border"></div>
      </div>
    </div>

    <BottomNavBar class="sticky mt-auto bottom-3 " />
  </section>
</template>

<script setup>

</script>
