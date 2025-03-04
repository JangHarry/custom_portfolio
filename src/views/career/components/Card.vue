<template>
    <div class="flex">
        <div class="jobs_log"></div>
        <div class="jobs_description">
            <div class="job_name">{{ props.item.title }}</div>
            <div class="job_period">{{ props.item.description }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    item: { type: Object },
});
</script>

<style lang="scss" scoped></style>
