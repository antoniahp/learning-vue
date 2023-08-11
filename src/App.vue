<script setup>
import AnimalCard from "@/components/AnimalCard.vue";
import {ref} from "vue";
import {onMounted} from "vue";
import {AnimalService} from "@/services/animals.service";
const animalsService = new AnimalService();

const pets = ref([]);
onMounted(()=>{
    animalsService.getAnimals().then((responseData)=>{
        console.log(responseData.animals)
        pets.value = responseData.animals;
    })
})



</script>





<template >
    <header class="w-full flex justify-center ">
        <div class="text-center py-12 flex flex-col">
            <img class="w-60 mx-auto" src="src/assets/header.png" alt="">
            <h1 class="text-6xl font-bold font-serif  tracking-widest text-purple-400"> SHELTER </h1>
            <h3 class="mt-2 text-2xl font-serif  tracking-widest text-purple-300">Give Live!</h3>
        </div>
    </header>

<div class="container bg-sky-200 flex justify-evenly mx-auto h-24">
    <select name="Gender" class="shadow border rounded w-60 h-12 mt-6 text-gray-700 ">
        <option value="">Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
    </select>
    <select name="vaccinated" class="shadow border rounded w-60 h-12 mt-6 text-gray-700 ">
        <option value="">💉---</option>
        <option value="true">Vaccinated</option>
        <option value="false">Not Vaccinated</option>
    </select>
    <input class="shadow border rounded w-60 h-12 mt-6 text-gray-700 "  type="number" placeholder="Age">
    <input class="shadow border rounded w-60 h-12 mt-6 text-gray-700 bg-purple-400 hover:bg-sky-300"  type="submit" value="Search">

</div>

<div class="container mx-auto py-12 grid xl:grid-cols-3 md:grid-cols-1 gap-4 ">
    <AnimalCard v-for="pet in pets" :key="pets.id" :pet="pet"></AnimalCard>
</div>

    <header class="container bg-sky-200 flex justify-evenly mx-auto h-30 mb-10 ">
        <div class="text-center py-12 flex flex-col">

            <h3 class=" text-3xl font-serif  tracking-widest text-purple-300  ">"Amor es una palabra de cuatro patas"</h3>
        </div>
    </header>
</template>

