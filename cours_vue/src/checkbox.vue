<template>
<label>
    <input type="checkbox" v-model="model">
    {{ label }}
</label>
</template>

<script setup>
const model = defineModel()
defineProps({
    label: String
})
const emits = defineEmits(['check', 'uncheck'])
const onChange = (event) => {
    if (event.currentTarget.checked){
        emits('check', event.currentTarget)
    }
    else{
        emits('uncheck', event.currentTarget)
    }
}
</script>

<!--
- defineProps : est une fonction qui nous permet de comprendre les attributs placés dans un composant qui se trouve dans un autre composant(fichier
.vue)
- defineEmits : est une fonction qui permet de créer des événements en bref pour déscendre les informations
-->