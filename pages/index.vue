<template>
  <section>
    <SplashScreen />
  </section>
</template>

<script setup>
onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const splashShown = sessionStorage.getItem('splashShown');
  const router = useRouter();
  if (!splashShown) {
    navigateTo('/auth');
  }
});
</script>