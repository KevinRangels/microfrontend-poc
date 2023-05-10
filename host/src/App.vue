<script setup>
import { hostStore } from "./store";

const host = hostStore()
</script>
<template>
  <router-view/>
</template>