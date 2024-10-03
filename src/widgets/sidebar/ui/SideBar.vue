<template>
    <aside class="sidebar">
        <ul class="list">
            <li class="item" v-for="item in data" :key="item.id">
                <router-link class="item__link" :to="item.link" />
                <span class="item__name">{{ item.name }}</span>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Item {
    id: string;
    name: string;
    icon: string;
    link: string;
}

const data = ref<Item[]>([
    {
        id: '1',
        name: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard'
    }
]);
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
    border-right: 1px solid var(--p-surface-200);
}

.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
