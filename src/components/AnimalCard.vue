<script setup>

defineProps({
    pet:{
        type:Object,
        required:true
    }
})

</script>


<template>
<div class="rounded overflow-hidden shadow-lg ">
      <img class="w-full" :src="pet.primary_photo_cropped.full" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{pet.name}}</div>
        <p class="text-gray-700 text-base">{{pet.description}}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>

</template>