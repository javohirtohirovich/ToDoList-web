<script setup lang="ts">
import Footer from '../components/common/Footer.vue';
import Header from '../components/common/Header.vue';
import Sidebar from '../components/common/Sidebar.vue';
import ThemeSetter from '../components/common/ThemeSetter.vue';
import ThemeSwitcher from '../components/common/ThemeSwitcher.vue';
import FlowbiteSetup from '@/views/FlowbiteSetup.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <FlowbiteSetup></FlowbiteSetup>
  <ThemeSetter></ThemeSetter>
  <Header></Header>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
      <div class="p-4 mt-14">
        <RouterView></RouterView>
        <Footer></Footer>
      </div>
  </div>
</template>