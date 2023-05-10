<script setup>
// import { useRouter, useRoute } from 'vue-router'
// const router = useRouter()

// const goFirma = () => {
//     router.push('/firma')
// }
    
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/remuneraciones" class="nav-link">Remuneraciones</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/do" class="nav-link">DO</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

</style>