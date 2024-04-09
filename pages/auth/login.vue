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

    <p class="text-3xl font-semibold">Login to GrooveOn</p>

    <form @submit.prevent="login"  class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <label for="login">Email</label>
            <input v-model="email" type="email" id="email" name="email" placeholder="youremail@mail.com" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" name="password" placeholder="your password" class="w-full p-2 text-black bg-[#EBECF1] focus:outline-none" required />
        </div>

        <button type="submit"  class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10">
            <Loader v-if="isLoading" />
            <p v-else>Login</p>
        </button>
    </form>

    <div class="flex items-center justify-evenly">
        <div class="w-1/3 h-0.5 bg-[#EBECF1]"></div>
        <p class="text-[#EBECF1]">OR</p>
        <div class="w-1/3 h-0.5 bg-[#EBECF1]"></div>
    </div>

    <button class="flex bg-[#EBECF1] text-[#1A1B25] text-center gap-3 justify-center p-2 rounded-lg">
        <Icon name="logos:google-icon" class="h-7 w-7" />
        <p class="self-center">continue with google</p>
    </button>

</section>
</template> 

<script setup>
const { isLoading, signIn, email, password } = useAuth();

const login = async () => {
  await signIn(email, password);
};


useHead({
    title: 'Login',
})
</script>
