<template>
  <section class="flex justify-center w-full lg:hidden">
    <div class="h-[3rem] w-[90vw] bg-[#206A5D] flex items-center justify-evenly rounded-3xl text-[#EBECF1] shadow-lg">
      <NuxtLink v-if="userData.accountType === 'client'" to="/home"><Icon name="material-symbols:home" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/home' }" /></NuxtLink>
      <NuxtLink v-if="userData.accountType === 'client'" to="/search"><Icon name="material-symbols:search" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/search' }" /></NuxtLink>
      <NuxtLink to="/bookings"><Icon name="ion:ios-calendar" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/bookings' }" /></NuxtLink>
      <NuxtLink v-if="userData.accountType === 'DJ'" to="/profile"><Icon name="ion:ios-person" class="w-[2rem] h-[2rem]" :class="{ 'opacity-80': $route.path !== '/profile' }" /></NuxtLink>
    </div>
  </section>
</template>

<script setup>
const user = await getCurrentUser()

const { getDoc, setDoc, doc, db } = useAuth();

const userDoc = await getDoc(doc(db, "users", user.uid));
const userData = userDoc.data();
</script>