<template>
<section class="flex flex-col items-center gap-5 p-4 min-h-svh">
    <div class="flex items-center self-start justify-between">
        <NuxtLink to="./home" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>

        <div><img src="/public/logo.png" alt="" class="w-[5rem]" /></div>
    </div>

    <div class="h-[8rem] w-[8rem] rounded-full bg-[#c2c2c5] self-center grid place-items-center">
        <img v-if="!hasArt" :src="dj.djArt" class="rounded-full w-[8rem] h-[8rem]" />
        <Icon v-if="hasArt" name="ooui:image-gallery" class="w-[3rem] h-[3rem]" />
    </div>

    <p>{{ dj.djName }} <span>- {{ dj.djPhone }}</span></p>

    <p>{{ dj.djDescription }}</p>

    <div class="flex flex-col self-start gap-2">
        <p>Days Available</p>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="day in dj.daysAvailable" :key="day" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ day }}
            </div>
        </div>
    </div>

    <div class="flex flex-col self-start gap-2">
        <p>Events Available For</p>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="event in dj.eventsAvailable" :key="event" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ event }}
            </div>
        </div>
    </div>

    <div class="flex flex-col self-start gap-2">
        <p>Regions Available In</p>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="region in dj.regionsAvailable" :key="region" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ region }}
            </div>
        </div>
    </div>

    <div class="flex flex-col self-start gap-2">
        <p>Price Range</p>
        <div class="flex flex-wrap gap-2">
            <div v-for="price in dj.priceRange" :key="price" class="flex flex-col gap-2 shadow-sm rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ price }}
            </div>
        </div>
    </div>

    <button @click="showModel = true" class="bg-[#1F6A5D] text-[#EBECF1] p-2 rounded-lg text-center h-10" :class="{'bg-gray-400': !user}" :disabled="!user">Book Now</button>

</section>

<div v-if="showModel" class="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full text-white bg-gray-800/90">
    <form @submit.prevent="bookEvent" class="flex flex-col w-full gap-4 p-4">
        <div class="flex flex-col gap-2">
            <label for="event">What event are you booking?</label>
            <input v-model="event" type="text" id="event" name="event" placeholder="wedding, birthday, concert, etc" class="w-full p-2 bg-[#EBECF1] text-black rounded-lg" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="date">When is the event?</label>
            <input v-model="date" type="date" id="date" name="date" class="w-full p-2 bg-[#EBECF1] text-black rounded-lg" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="location">Where is the event?</label>
            <input v-model="location" type="text" id="location" name="location" placeholder="accra, kumasi, etc" class="w-full p-2 bg-[#EBECF1] text-black rounded-lg" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="budget">What is your budget?</label>
            <input type="number" name="price-range" id="price-range" placeholder="GHS" v-model="budget" class="w-full p-2 bg-[#EBECF1] text-[#1A1B25] focus:outline-none rounded-lg" required />
        </div>

        <div class="flex flex-col gap-2">
            <label for="contact">How do we reach you?</label>
            <div class="flex flex-col gap-3">
                <input v-model="phone" type="text" id="phone" name="phone" placeholder="your phone number" class="w-full p-2 bg-[#EBECF1] text-black rounded-lg" />
                <input v-model="email" type="email" name="email" id="email" placeholder="your email" class="w-full p-2 bg-[#EBECF1] text-black rounded-lg" />
            </div>
        </div>

        <div class="flex justify-center w-full gap-2">
            <button @click="showModel = false" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10">Cancel</button>
            <button type="submit" class="bg-[#1F6A5D] text-[#EBECF1] p-2 rounded-lg text-center h-10">
                <div v-if="isLoading" class="flex items-center justify-center animate-pulse">..</div>
                <p v-else>Book Now</p>
            </button>
        </div>
    </form>
</div>
</template>

<script setup>
const user = await getCurrentUser()
const showModel = ref(false)

const {
    getDoc,
    setDoc,
    doc,
    db,
    collection,
    getDocs,
    where,
    query
} = useAuth();

// const {
//     event,
//     date,
//     location,
//     budget,
//     isLoading,
//     phone,
//     email,
//     bookEvent
// } = useBooking();

const event = ref("");
const date = ref("");
const location = ref("");
const budget = ref("");
const phone = ref("");
const email = ref("");
const isLoading = ref(false);

const dj = ref(null);
const hasArt = ref(false);

const router = useRouter()
const DJid = router.currentRoute.value.params.id
const docRef = doc(db, 'users', DJid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    dj.value = docSnap.data();

    if (dj.value.djArt == "") {
        const hasArt = true;
    }

} else {
    console.log('No such document!');
}

async function bookEvent() {
  isLoading.value = true;

  const user = await getCurrentUser();

  if (user) {
    const newBookingRef = doc(collection(db, "bookings"));
    await setDoc(
      newBookingRef,
      {
        from: user.uid,
        DJ: dj.value.djName,
        email: email.value,
        phone: phone.value,
        target: DJid,
        event: event.value,
        date: date.value,
        location: location.value,
        budget: "GHS" + budget.value + ".00",
      },
      {
        merge: true,
      }
    );
    navigateTo("/client/home");
     } else {
      isLoading.value = false;
      console.error("User is undefined or user.value is not set.");
    }
}

</script>
