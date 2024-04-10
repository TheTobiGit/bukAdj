<template>
  <section class="h-svh w-screen bg-[#206A5D] lg:flex flex-col items-center text-[#EBECF1] p-4 gap-5 hidden">

<img src="/public/logo.png" alt="" class="w-32">
<div class="hidden mt-80 lg:flex">
    <p class="lowercase ">Please Open On a mobile device to Continue</p>
</div>
</section>

  <section class="flex flex-col items-center gap-5 p-4 min-h-svh lg:hidden">
    <div class="flex items-center self-start justify-between w-full">
      <img src="/public/logo-black.png" alt="" class="w-[8rem]">
      <NuxtLink v-if="!user" to="/auth/login">Login</NuxtLink>
      <button @click="signout" v-else class="text-red-400" >Logout</button>
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

  </section>
</template>

<script setup>
const user = await getCurrentUser()

const { signout } = useAuth();


definePageMeta({
  layout: 'client',
  middleware: ["auth-guard"]
})
</script>
