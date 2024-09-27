<script setup lang="ts">
// imported components
import TotalEarning from './components/TotalEarning.vue';
import TotalOrder from './components/TotalOrder.vue'
import TotalIncome from './components/TotalIncome.vue';
import TotalGrowth from './components/TotalGrowth.vue';
import PopularStocks from '';
import useApi from '@api';

const { data, error, isError, isLoading, usePost } = useApi();
await usePost({
  url: '/api/category/list-all222', config: { type: 'header' }
})
console.group(data.value, error, isError.value, isLoading.value)
console.log(import.meta.url)
</script>

<template>
  <v-row>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Earning -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalEarning />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Order -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalOrder />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Income -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalIncome />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total Growth -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="8">
      <TotalGrowth />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Popular Stocks -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="4">
      <PopularStocks />
    </v-col>
  </v-row>
</template>
