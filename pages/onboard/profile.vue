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
        <input v-model="djName" type="text" id="stage-name" name="stage-name" placeholder="what do you go by professionally" class="w-full p-2 text-[#1A1B25] bg-[#EBECF1] focus:outline-none" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="phone">Phone Number <span class="text-xs italic">(required)</span></label>
        <input v-model="djPhone" type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 bg-current focus:outline-none" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="description">Description <span class="text-xs italic">(optional)</span></label>
        <textarea v-model="djDescription" name="description" id="description" placeholder="tell us something about yourself" class="w-full p-2 bg-current focus:outline-none"></textarea>
      </div>

      <NuxtLink to="/onboard/getlisted" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg mt-3 text-center">Continue</NuxtLink>
    </form>

    <div class="flex justify-center gap-2 mt-auto">
      <div class="w-[4rem] h-2 rounded-full bg-[#EBECF1]"></div>
      <div class="w-10 h-2 rounded-full bg-[#c2c2c5]"></div>
    </div>
  </section>
</template>

<script setup>
const { djName, djPhone, djDescription } = useDJ();

const events = ["wedding", "birthday", "concert", "festival", "corporate", "fundraiser", "charity", "product launch", "naming ceremony", "private party", "club event", "beach party", "house party", "barbecue", "pool party", "awards ceremony", "other"]

useHead({
  title: 'Onboarding',
})

</script>
