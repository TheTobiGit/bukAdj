<template>
<section class="min-h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <div class="flex items-center justify-between">
        <button to="./" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </button>

        <p class="text-lg ">Profile Setup</p>
    </div>

    <input type="file" id="image" name="image" accept="image/*" style="display: none" @change="onImageChange" ref="imageInput" />
    <button class="h-[8rem] w-[8rem] rounded-full bg-[#c2c2c5] self-center grid place-items-center" @click="openImageSelector">
      <img v-if="selectedImage" :src="selectedImage" class="rounded-full w-[8rem] h-[8rem]" />
      <Icon v-else name="ooui:image-gallery" class="w-[3rem] h-[3rem]" />
    </button>

    <form class="flex flex-col gap-5" @submit.prevent="setdjProfile">
        <div class="flex flex-col gap-2">
            <label for="stage-name">DJ Name <span class="text-xs italic">(required)</span></label>
            <input v-model="djName" type="text" id="stage-name" name="stage-name" placeholder="what do you go by professionally" class="w-full p-2 text-[#1A1B25] bg-[#EBECF1] focus:outline-none" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="phone">Phone Number <span class="text-xs italic">(required)</span></label>
            <input v-model="djPhone" type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" pattern="[0-9]*" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="description">Description <span class="text-xs italic">(optional)</span></label>
            <textarea v-model="djDescription" name="description" id="description" placeholder="tell us something about yourself" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none"></textarea>
        </div>

        <button type="submit" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10">
            <Loader v-if="isLoading" />
            <p v-else>Continue</p>
        </button>
    </form>

    <div class="flex justify-center gap-2 mt-auto">
        <div class="w-[4rem] h-2 rounded-full bg-[#EBECF1]"></div>
        <div class="w-10 h-2 rounded-full bg-[#c2c2c5]"></div>
    </div>
</section>
</template>

<script setup>
const imageInput = ref(null);
const selectedImage = ref(null);

const openImageSelector = () => {
  imageInput.value.click();
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  selectedImage.value = URL.createObjectURL(file);
  console.log(selectedImage.value);
};

const {
    djName,
    djPhone,
    djDescription,
    setdjProfile,
    isLoading
} = useDjProfile();


useHead({
    title: 'Onboarding',
})
</script>
