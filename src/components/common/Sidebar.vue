<script setup lang="ts">
import IconDashboard from '../icons/IconDashboard.vue'
import IconToDoList from '../icons/IconToDoList.vue';
import IconHistory from '../icons/IconHistory.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <router-link to="/dashboard">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconDashboard></IconDashboard>
                            <span class="ml-3"> {{$t('dashboard') }}</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/todolist">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconToDoList></IconToDoList>
                            <span class="ml-3">{{$t('todolist') }}</span>
                        </div>
                    </router-link>
                </li>
                
                <li>
                    <router-link to="/history">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IconHistory></IconHistory>
                            <span class="flex-1 ml-3 whitespace-nowrap">{{$t('history') }}</span>
                        </div>
                    </router-link>
                </li>
               
            </ul>
        </div>
    </aside>
</template>

<style scoped></style>