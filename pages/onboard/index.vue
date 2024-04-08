<template>
<section class="h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <p class="text-lg">Select account type</p>
    <div class="flex flex-col gap-5 text-center">
        <button @click="setAccountType('DJ')" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg h-10 ">
            <Loader v-if="isLoading" />
            <p v-else>I am a DJ</p>
        </button>
        <button @click="setAccountType('Client')" class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg h-10 ">
            <Loader v-if="isLoading" />
            <p v-else>I am looking for a DJ</p>
        </button>
    </div>
</section>
</template>

<script setup>
const { setAccountType, isLoading } = useAccountType();

useHead({
    title: "Onboard",
});
</script>
