<template>
<section class="min-h-svh w-screen bg-[#206A5D] flex flex-col text-[#EBECF1] p-4 gap-5">
    <div class="flex items-center justify-end">
      
      <img src="/public/logo.png" alt="" class="w-32">
    </div>

    <div class="flex flex-col gap-2">
        <label for="days">Which days are you available to work?</label>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="day in days" :key="day" @click="toggleDay(day)" :class="{ 'selected': selectedDays.includes(day) }" class="flex flex-col gap-2 shadow-lg rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ day }}
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2">
        <label for="events">What type of events do you do?</label>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="event in events" :key="event" @click="toggleEvent(event)" :class="{ 'selected': selectedEvents.includes(event) }" class="flex flex-col gap-2 shadow-lg rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ event }}
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2">
        <label for="region">Which region do you operate in?</label>
        <div class="flex flex-wrap gap-2 ">
            <div v-for="region in regions" :key="region" @click="toggleRegion(region)" :class="{ 'selected': selectedRegions.includes(region) }" class="flex flex-col gap-2 shadow-lg rounded-lg p-1 bg-[#EBECF1] text-sm text-[#1A1B25] opacity-65">
                {{ region }}
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2">
        <label for="">How much do you charge per event?</label>
        <select id="price-range" name="price-range" @change="handlePriceChange" class="w-full p-2 bg-[#EBECF1] text-[#1A1B25] focus:outline-none rounded-lg">
            <option value="0" selected disabled></option>
            <option value="1-100">GHS1 - GHS100</option>
            <option value="100-200">GHS100 - GHS200</option>
            <option value="200-300">GHS200 - GHS300</option>
            <option value="300-400">GHS300 - GHS400</option>
            <option value="400-500">GHS400 - GHS500</option>
            <option value="500+">GHS500+</option>
        </select>
    </div>

    <button @click="setdjListing"  class="bg-[#EBECF1] text-[#1A1B25] p-2 rounded-lg text-center h-10">
        <Loader v-if="isLoading" />
        <p v-else>Save</p>
    </button>

    <div class="flex justify-center gap-2 mt-auto">
        <div class="w-10 h-2 rounded-full bg-[#c2c2c5]"></div>
        <div class="w-[4rem] h-2 rounded-full bg-[#EBECF1]"></div>
    </div>
</section>
</template>

<script setup>
const {
    selectedDays,
    selectedDaysList,
    events,
    days,
    regions,
    toggleDay,
    toggleEvent,
    selectedEvents,
    selectedEventsList,
    toggleRegion,
    selectedRegions,
    selectedRegionsList,
    selectedPriceRange,
    setdjListing,
    isLoading,
    handlePriceChange
} = useDJListing();

useHead({
    title: 'Onboarding',
})
</script>

<style scoped>
.selected {
    opacity: 1;
}
</style>
