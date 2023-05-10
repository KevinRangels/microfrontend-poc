<script setup>
  import HeaderTalana from "shared/HeaderTalana";
  import SidebarTalana from "shared/SidebarTalana";
</script>
<template>
  <div class="main-layout-saas">


    <HeaderTalana/>

    <section class="t-sub-header">
        <div class="talana-breadcrumbs-container m-t-10 talana-breadcrumbs">
          <ul class="sub-header-inner">
                <li class="talana-breadcrumbs-world">
                  <a
                    href="#">
                      REMUNERACIONES
                  </a>
                </li>
          </ul>
        </div>
    </section>

        <div id="sidebar-wrapper" class="t-sidebar">
          <SidebarTalana/>
        </div>
        <div class="t-main-view-fluid">
      
      <div id="main w-100">
        <!-- <router-view/> -->
      </div>
    </div>
  </div>
</template>