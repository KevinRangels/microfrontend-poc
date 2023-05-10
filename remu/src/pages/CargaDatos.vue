<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const goDO = () => {
    router.push('/do')
}
    
</script>
<template>
    <div>
        <h1>Remuneraciones | Carga de datos</h1>
    </div>
    <!-- <router-link to="/do" class="nav-link">DO</router-link> -->
</template>

<style>

</style>