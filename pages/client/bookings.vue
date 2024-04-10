<template>
  <section class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <p>log in to see your bookings</p>

  </section>
</template>

<script setup>
const { getDoc, setDoc, doc, db } = useAuth();
const user = await getCurrentUser();
const userDoc = await getDoc(doc(db, "users", user.uid));
const userData = userDoc.data();

  definePageMeta({
  layout: 'client',
})
</script>
