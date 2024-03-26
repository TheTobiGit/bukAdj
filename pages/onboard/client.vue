<template>
  <section class="h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <div class="flex items-center justify-between">
      <NuxtLink to="./" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>
        
      <p class="text-lg ">Profile Setup</p>
    </div>

    

    <form class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label for="phone">Phone Number <span class="text-xs italic">(required)</span></label>
        <input type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 bg-current focus:outline-none" />
      </div>

      <button class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg mt-3">Continue</button>
    </form>

    <div class="flex justify-center gap-2 mt-auto">
      <div class="w-10 h-2 rounded-full bg-[#c2c2c5]"></div>
      <div class="w-[4rem] h-2 rounded-full bg-[#EBECF1]"></div>
    </div>
  </section>
</template>

<script setup>

</script>
