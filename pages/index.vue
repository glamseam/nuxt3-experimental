<template>
    <div>
        <NuxtLink to="/">Home page</NuxtLink>
        <NuxtLink to="/next">Next page</NuxtLink>
        <Button />
        <DemoTsx
            :level="2"
            title="Tsx"
        />
    </div>
</template>

<script lang="ts" setup>
import { DemoTsx } from '@/components/DemoTsx'
</script>
