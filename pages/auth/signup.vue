<template>
<section class="h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    
    <div class="flex items-center justify-between">
        <NuxtLink to="./" class="">
            <Icon name="material-symbols:arrow-back-ios" class="w-6 h-6" />
        </NuxtLink>

        <div><img src="/public/logo.png" alt="" class="w-[5rem]"></div>
    </div>

    <p class="text-3xl font-semibold">Create an account</p>

    <form class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <div class="flex gap-2"><input type="text" id="fname" name="fname" placeholder="First Name" class="w-full px-2 py-4 bg-current focus:outline-none" />
            <input type="text" id="lname" name="lname" placeholder="Last Name" class="w-full px-2 py-4 bg-current focus:outline-none" /></div>
        </div>
        <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="youremail@mail.com" class="w-full px-2 py-4 bg-current focus:outline-none" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="your password" class="w-full px-2 py-4 bg-current focus:outline-none" />
        </div>
        <p class="text-xs italic">min 8 characters</p>
        <button class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg">Signup</button>
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
  
  </script>
