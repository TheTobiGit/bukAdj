<template>
<section class="h-svh w-screen bg-[#206A5D] flex flex-col items-center text-[#EBECF1] p-4 gap-5">

<img src="/public/logo.png" alt="" class="w-32">

<div class="hidden mt-80 lg:flex">
<p class="lowercase ">Please Open On a mobile device to Continue</p>
</div>

<div class="flex flex-col gap-5 mt-auto lg:hidden">
    <img src="/public/djART.png" alt="">
    <p class="text-3xl font-semibold text-center">Welcome to GrooveOn</p>
    <NuxtLink to="/auth/signup" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center">Create an account</NuxtLink>
    <NuxtLink to="/auth/login" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center">Log into existing account</NuxtLink>
    <!-- <p class="text-sm text-center">Already have an account? <NuxtLink to="/auth/login" class="italic font-semibold underline">Log in</NuxtLink></p> -->
    <NuxtLink to="/home" class="self-center text-sm underline">continue as guest</NuxtLink>
</div>
</section>
</template>


<script>
;
</script>
