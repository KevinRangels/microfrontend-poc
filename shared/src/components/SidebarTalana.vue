<script setup>
import { ref } from 'vue';

    const itemsMenu = ref([
        {
            name: "Inicio",
            route: "/remuneraciones"
        },
        {
            name: "Empleados",
            route: "/remuneraciones/empleados"
        },
        {
            name: "Empresa",
            route: "/remuneraciones/empresa"
        },
        {
            name: "Asistente de pagos",
            route: "/remuneraciones/asistente-de-pagos"
        },
        {
            name: "Carga de datos",
            route: "/remuneraciones/carga-de-datos/landing"
        }
    ])
</script>

<template>
    <aside
    ref="sidebar"
    class="sidebar"
  >
  <router-link
    v-for="(item, index) in itemsMenu" :key="index"
    :to="item.route"
  >
    <div class="sidebar-item-container">
      <div
        class="sidebar-item"
      >
        <div class="sidebar-item-content">
          <!-- <div class="sidebar-icon">
            <slot name="icon" />
          </div> -->
          <div>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </router-link>
  </aside>
</template>

<style scoped>
  .sidebar {
    position: fixed;
    background-color: transparent;
    padding: 16px;
    max-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 90px);
    gap: 16px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 50px;
    scrollbar-width: 8px;
    scrollbar-color: rgba(10, 7, 22, 0.121);
    box-sizing: border-box;
  }
  .sidebar::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  .sidebar::-webkit-scrollbar:vertical {
    width: 10px;
  }
  .sidebar::-webkit-scrollbar-button:increment,
  .sidebar::-webkit-scrollbar-button {
    display: none;
  }
  .sidebar::-webkit-scrollbar:horizontal {
    height: 6px;
  }
  .sidebar::-webkit-scrollbar-thumb {
    background-color: #c2c1c1;
    border-radius: 20px;
    border: 0;
  }
  .sidebar::-webkit-scrollbar-thumb:hover {
    background-color: #a19f9f;
  }
  .sidebar::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  .sidebar-item-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
  }
  a {
    font-family: 'Inter', sans-serif;
    color: inherit;
    text-decoration: none;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: rgba(10, 7, 22, 0.64);
    fill: rgba(10, 7, 22, 0.64);
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    height: 36px;
  }
  
  .sidebar-item:hover, .sidebar-item.active {
    color: #8567FF;
    background: rgba(133, 103, 255, 0.08);
    border-radius: 24px;
    fill: #8567FF;
  }

  .sidebar-item-content {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .sidebar-icon {
    width: 22px;
  }

  .sub-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .icon-arrow, .icon-arrow path:hover{
    fill: inherit;
  }

  .active-sub-item {
    color: #8567FF;
    fill: #8567FF;
  }
</style>