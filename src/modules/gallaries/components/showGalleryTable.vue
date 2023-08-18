<template>
  <table class="border table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" class="px-6 py-3 text-sm font-semibold whitespace-nowrap text-dark800" scope="col">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="p-4 bg-primary/20" v-for="row in data" :key="row">
        <th v-for="item in Object.values(row)">{{item}}</th>
      </tr>
    </tbody>
  </table>
</template>

<!--
<template>
  <table class="border table">
      <thead>
        <tr >
          <th  v-for="row in header" :key="row" class="px-6 py-3 text-sm font-semibold whitespace-nowrap text-dark800" scope="col">{{row}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="p-4 bg-primary/20" v-for="row in data" :key="row.id">
          <td v-for="item in Object.values(row)">  {{  item  }}</td>
        </tr>
      </tbody>
    </table>
</template> -->


<script setup lang="ts">
defineProps<{
  headers: string[],
  data: any[]
}>()

const checkItem = (item: any) => {
  try {
    const obType = typeof JSON.parse(item);
    console.log(obType)
    return obType == 'object' ? '-' : item
  } catch {
    return item
  }
}
</script>



