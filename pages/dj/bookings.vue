<template>
  <!-- <section v-if="!user" class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <NuxtLink to="/auth/login" class="font-semibold">LOGIN</NuxtLink>
  </section> -->

  <section class="flex justify-center w-screen"><section v-if="!user || bookings.length === 0" class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <p v-if="!user">log in to see your bookings</p>
    <p v-else>No one has booked you yet</p>
  </section>

  <section v-else class="flex flex-col items-center h-full gap-5 p-4 min-h-[95vh] lg:max-w-[1024px] w-full">
    <div v-for="booking in bookings" :key="booking.id" class="flex flex-col gap-2 border rounded-lg p-2 bg-[#EBECF1] text-[#1A1B25] text-sm w-full">
        <p>Contact: {{ booking.email }} - {{ booking.phone }}</p>
        <p>Event: {{ booking.event }}</p>
        <p>Date: {{ booking.date }}</p>
        <p>Location: {{ booking.location }}</p>
        <p>Budget: {{ booking.budget }}</p>
    </div>
</section></section>
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

const bookingsCollection = collection(db, "bookings");

const q = query(bookingsCollection, where("target", "==", user.uid));

const bookingsSnapshot = await getDocs(q);

const bookings = bookingsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
}));

  definePageMeta({
  layout: 'dj',
})
</script>
