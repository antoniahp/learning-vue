<script setup>
import AnimalCard from "@/components/AnimalCard.vue";
import {ref} from "vue";

const animals = ref([
    {
      "name": "Max",
      "gender": "MALE",
      "vaccinated": true,
      "breed": "perro",
      "age": "2023-08-17",
      "description": "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.",
      "picture": "https://s1.eestatic.com/2023/04/10/curiosidades/mascotas/755184649_232302148_1706x960.jpg"
    },
    {
      "name": "Samy",
      "gender": "MALE",
      "vaccinated": true,
      "breed": "perro",
      "age": "2023-08-17",
      "description": "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.",
      "picture": "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
    },
        {
      "name": "Piston",
      "gender": "MALE",
      "vaccinated": true,
      "breed": "perro",
      "age": "2023-08-17",
      "description": "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.",
      "picture": "https://estaticos-cdn.sport.es/clip/f177ad07-3dde-4e2c-9c75-d5bb558e2d73_alta-libre-aspect-ratio_default_0.jpg"
    },
        {
      "name": "Rocky",
      "gender": "MALE",
      "vaccinated": true,
      "breed": "perro",
      "age": "2023-08-17",
      "description": "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.",
            "picture": "https://www.65ymas.com/uploads/s1/76/14/09/bigstock-beautiful-portrait-dog-breed-b-419947822_1_621x621.jpeg"
    },
    ])

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

<div class="container mx-auto py-12 grid xl:grid-cols-3 md:grid-cols-1 gap-4">
    <AnimalCard v-for="animal in animals" :key="animal.id" :animal="animal"></AnimalCard>
</div>


</template>

