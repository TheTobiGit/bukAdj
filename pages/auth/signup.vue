<template>
<section class="h-svh w-screen bg-[#206A5D] lg:flex flex-col items-center text-[#EBECF1] p-4 gap-5 hidden">

    <img src="/public/logo.png" alt="" class="w-32">
    <div class="hidden mt-80 lg:flex">
        <p class="lowercase ">Please Open On a mobile device to Continue</p>
    </div>
</section>

<section class="h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5 lg:hidden">

    <div class="flex items-center justify-between">
        <NuxtLink to="./" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>

        <div><img src="/public/logo.png" alt="" class="w-[5rem]"></div>
    </div>

    <p class="text-3xl font-semibold">Create an account</p>

    <form class="flex flex-col gap-5" @submit.prevent="register">
        <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <div class="flex gap-2 text-black *:bg-[#EBECF1]">
                <input v-model="firstName" type="text" id="fname" name="fname" placeholder="First Name" class="w-full p-2 bg-current focus:outline-none" required />
                <input v-model="lastName" type="text" id="lname" name="lname" placeholder="Last Name" class="w-full p-2 bg-current focus:outline-none" required />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" name="email" placeholder="youremail@mail.com" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none"  required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" name="password" placeholder="your password" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" required />
        </div>
        <p class="text-xs italic">min 8 characters</p>

        <button type="submit"  class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10">
            <Loader v-if="isLoading" />
            <p v-else>Signup</p>
        </button>

        <p class="text-center text-red-600">{{ errorMessage }}</p>
    </form>

    <div class="flex items-center justify-evenly">
        <div class="w-1/3 h-0.5 bg-[#EBECF1]"></div>
        <p class="text-[#EBECF1]">OR</p>
        <div class="w-1/3 h-0.5 bg-[#EBECF1]"></div>
    </div>

    <button class="flex bg-[#EBECF1] text-[#1A1B25] text-center justify-center p-2 rounded-lg gap-3">
            <Icon name="logos:google-icon" class="h-7 w-7" />
            <p class="self-center">continue with google</p>
    </button>


</section>
</template>

<script setup>
const {
    email,
    password,
    firstName,
    lastName,
    signUp,
    errorMessage,
    isLoading
} = useAuth();

const register = async () => {
  await signUp(email, password);
};


useHead({
    title: 'Signup',
})
</script>
