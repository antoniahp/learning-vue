<script setup>
import {onMounted, ref} from "vue";
import {AnimalsService} from "/src/services/animals.service.";

const animalService = AnimalsService()
const allAnimals = ref([])
onMounted(()=>{
    animalService.getAnimals().then((animals)=>{
        allAnimals.value = animals;
    })
})

</script>

<template>
  <div class="animal">
      <p v-for="animal in allAnimals" :key="animal.id">{{animal.name}}</p>

  </div>
</template>