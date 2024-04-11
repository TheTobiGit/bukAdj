<template>
  <section v-if="!user" class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    <NuxtLink to="/auth/login" class="font-semibold">LOGIN</NuxtLink>
  </section>

  <section v-else class="flex flex-col items-center justify-center gap-5 p-4 min-h-svh">
    

  </section>
</template>

<script setup>
const { getDoc, setDoc, doc, db } = useAuth();
const user = await getCurrentUser();

const userData = ref({});

if (user) {
  const userDoc = await getDoc(doc(db, "users", user.uid));
const userData = userDoc.data();
}



  definePageMeta({
  layout: 'dj',
})
</script>
