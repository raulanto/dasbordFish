<script lang="ts" setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavDas from './components/NavDas.vue';
import SideDas from './components/SideDas.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <router-view></router-view>
</template>
