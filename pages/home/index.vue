<template>
  <section class="h-svh w-screen bg-[#206A5D] lg:flex flex-col items-center text-[#EBECF1] p-4 gap-5 hidden">

<img src="/public/logo.png" alt="" class="w-32">
<div class="hidden mt-80 lg:flex">
    <p class="lowercase ">Please Open On a mobile device to Continue</p>
</div>
</section>

  <section class="flex flex-col items-center justify-center w-screen h-screen ">
    <img src="/public/logo-black.png" alt="" class="w-32">
    <img src="/public/dj.gif" alt="" class="w-[100%] h-[50%]">
  </section>
</template>

<script setup>
const router = useRouter();


onMounted(() => {
  router.push("/client/home");
});


definePageMeta({
  middleware: ["auth-guard"]
})

</script>
