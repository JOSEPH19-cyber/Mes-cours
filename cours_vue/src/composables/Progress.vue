<template>
    <div>
        Etape {{ value + 1 }}/{{ max + 1 }}
        <Progress :value="value" :max="max" />
    </div>
</template>

<script setup>
defineProps({
    value: Number,
    max: Number
})
</script>