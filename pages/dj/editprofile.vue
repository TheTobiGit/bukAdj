<template>
<section class="min-h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <div class="flex items-center justify-between">
        <NuxtLink to="/dj/profile" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>

        <p class="text-lg ">Edit Profile</p>
    </div>

    <input type="file" id="image" name="image" accept="image/*" style="display: none" @change="onImageChange" ref="imageInput" />
    <button class="h-[8rem] w-[8rem] rounded-full bg-[#c2c2c5] self-center grid place-items-center" @click="openImageSelector">
      <img v-if="selectedImage" :src="selectedImage" class="rounded-full w-[8rem] h-[8rem]" />
      <Icon v-else name="ooui:image-gallery" class="w-[3rem] h-[3rem]" />
    </button>

    <form class="flex flex-col gap-5" @submit.prevent="setdjProfile">
        <div class="flex flex-col gap-2">
            <label for="stage-name">DJ Name <span class="text-xs italic">(required)</span></label>
            <!-- <input v-if="isEditing" v-model="djName" type="text" id="stage-name" name="stage-name" placeholder="what do you go by professionally"  class="w-full p-2 text-[#1A1B25] bg-[#EBECF1] focus:outline-none" required /> -->
            <input @input="djName = $event.target.value" :value="djName" type="text" id="stage-name" name="stage-name" placeholder="what do you go by professionally"  class="w-full p-2 text-[#1A1B25] bg-[#EBECF1] focus:outline-none" required :disabled="!isEditing" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="phone">Phone Number <span class="text-xs italic">(required)</span></label>
            <!-- <input v-if="isEditing" v-model="djPhone" type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" pattern="[0-9]*" required /> -->
            <input @input="djPhone = $event.target.value" :value="djPhone" type="tel" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" pattern="[0-9]*" required :disabled="!isEditing" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="description">Description <span class="text-xs italic">(optional)</span></label>
            <!-- <textarea v-if="isEditing" v-model="djDescription" name="description" id="description" placeholder="tell us something about yourself" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none"></textarea> -->
            <textarea @input="djDescription = $event.target.value" :value="djDescription" name="description" id="description" placeholder="tell us something about yourself" :disabled="!isEditing"  class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none"></textarea>
        </div>

        <button v-if="!isEditing" @click="isEditing = true" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10 w-[45%] self-end">
                <p>Edit</p>
        </button>

        <div v-if="isEditing"  class="flex flex-row-reverse justify-between">
            <button type="submit" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10 w-[45%]">
                <Loader v-if="isLoading" />
                <p v-else>Save</p>
            </button>

            <button @click="isEditing = false"  class=" text-[#EBECF1] p-2 rounded-lg text-center h-10 w-[45%]">
                <p>Cancel</p>
            </button>
        </div>
    </form>

    <div class="flex justify-center gap-2 mt-auto">
        <div class="w-[4rem] h-2 rounded-full bg-[#EBECF1]"></div>
        <div class="w-10 h-2 rounded-full bg-[#c2c2c5]"></div>
    </div>
</section>
</template>
  
<script setup>
const { getDoc, setDoc, doc, db } = useAuth();
const user = await getCurrentUser()

const isEditing = ref(false);

const userData = ref({});

const {
    djName,
    djPhone,
    djDescription,
    setdjProfile,
    isLoading
} = useEditDjProfile();

const {
    imageInput,
    selectedImage,
    openImageSelector,
    onImageChange
} = useEditDjProfile();

if (user) {
  const userDoc = await getDoc(doc(db, "users", user.uid));
  userData.value = userDoc.data();
  djName.value = userData.value.djName;
  djPhone.value = userData.value.djPhone;
  djDescription.value = userData.value.djDescription;
}


useHead({
    title: 'Onboarding',
})
</script>
