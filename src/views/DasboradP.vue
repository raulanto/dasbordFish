<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavDas from '@/components/NavDas.vue';
import SideDas from '@/components/SideDas.vue';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>


<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">

    <!-- Navegacion -->
    <NavDas></NavDas>

    <!-- Sidebar -->
    <!-- Navegacion entre paginas -->
    <SideDas></SideDas>

    <!-- Vistas de Navegacion de Sidebar -->
    <main class="p-4 md:ml-64 h-auto pt-20">
      <router-view></router-view>
    </main>
  </div>
</template>