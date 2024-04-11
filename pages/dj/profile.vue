<template>
  <section v-if="!user" class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <NuxtLink to="/auth/login" class="font-semibold">LOGIN</NuxtLink>
  </section>

  <section v-if="user" class="flex flex-col items-center gap-5 p-4 min-h-svh">

    <NuxtLink to="/dj/editprofile" class="self-end">Edit Profile</NuxtLink>

    <div class="h-[8rem] w-[8rem] rounded-full bg-[#c2c2c5] self-center grid place-items-center">
      <img v-if="user" :src="userData.djArt" class="rounded-full w-[8rem] h-[8rem]" />
      <Icon v-else name="ooui:image-gallery" class="w-[3rem] h-[3rem]" />
    </div>

    <p>{{ userData.djName }} <span>- {{ userData.djPhone }}</span></p>

    <p>{{ userData.djDescription }}</p>

    <div class="flex flex-col self-start gap-2">
      <p>Days Available</p>
      <div class="flex flex-wrap gap-2 ">
        <div v-for="day in userData.daysAvailable" :key="day" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
          {{ day }}
        </div>
      </div>
    </div>

    <div class="flex flex-col self-start gap-2">
      <p>Events Available For</p>
      <div class="flex flex-wrap gap-2 ">
        <div v-for="event in userData.eventsAvailable" :key="event" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
          {{ event }}
        </div>
      </div>
    </div>

    <div class="flex flex-col self-start gap-2">
      <p>Regions Available In</p>
      <div class="flex flex-wrap gap-2 ">
        <div v-for="region in userData.regionsAvailable" :key="region" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
          {{ region }}
        </div>
      </div>
    </div>

    <button @click="signout" class="text-red-400" >Logout</button>

  </section>
</template>

<script setup>
const { getDoc, setDoc, doc, db } = useAuth();
const user = await getCurrentUser();

const userData = ref({});

if (user) {
  const userDoc = await getDoc(doc(db, "users", user.uid));
  userData.value = userDoc.data();
}

// const userDoc = await getDoc(doc(db, "users", user.uid));
// const userData = userDoc.data();

const { signout } = useAuth();

definePageMeta({
  layout: 'dj',
})
</script>