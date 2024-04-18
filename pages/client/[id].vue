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

    <button class="bg-[#1F6A5D] text-[#EBECF1] p-2 rounded-lg text-center h-10"  :class="{'bg-gray-400': !user}" :disabled="!user">Book Now</button>

</section>
</template>

<script setup>
const user = await getCurrentUser()

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

const dj = ref(null);
const hasArt = ref(false);

const router = useRouter()
const id = router.currentRoute.value.params.id
const docRef = doc(db, 'users', id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    dj.value = docSnap.data();

    if (dj.value.djArt == "") {
        const hasArt = true;
    }

} else {
    console.log('No such document!');
}
</script>
