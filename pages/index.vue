<template>
  <section>
    <SplashScreen />
  </section>
</template>

<script setup>
onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const splashShown = sessionStorage.getItem('splashShown');
  if (!splashShown) {
    navigateTo('/auth');
  }
});
</script>