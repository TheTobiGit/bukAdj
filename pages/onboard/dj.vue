<template>
  <section class="min-h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <div class="flex items-center justify-between">
      <NuxtLink to="./" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>
        
      <p class="text-lg ">Profile Setup</p>
    </div>

    <div class="h-[8rem] w-[8rem] rounded-full bg-[#c2c2c5] self-center grid place-items-center">
      <Icon name="ooui:image-gallery" class="w-[3rem] h-[3rem]" />
    </div>

    <form class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label for="stage-name">DJ Name <span class="text-xs italic">(required)</span></label>
        <input type="text" id="stage-name" name="stage-name" placeholder="what do you go by professionally" class="w-full p-2 bg-current focus:outline-none" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="phone">Phone Number <span class="text-xs italic">(required)</span></label>
        <input type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 bg-current focus:outline-none" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="events">What type of events do you do?</label>
        <div class="flex flex-wrap gap-2 ">
        <div v-for="event in events" :key="event" class="flex flex-col gap-2 shadow-lg rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
          {{ event }}
        </div>
        </div>
      </div>

      <NuxtLink to="/dashboard" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg mt-3 text-center">Continue</NuxtLink>
    </form>

    
  </section>
</template>

<script setup>
const events = ["wedding", "birthday", "concert", "festival", "corporate", "fundraiser", "charity", "product launch", "naming ceremony", "private party", "club event", "beach party", "house party", "barbecue", "pool party", "awards ceremony", "other"]

useHead({
  title: 'Onboarding',
})

</script>
