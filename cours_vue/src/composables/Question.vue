<template>
    <div class="question">
        <h3> {{ question.question }} </h3>
        <ul>
            <li v-for="(choice, index) in randomChoices" :key="choice">
                <Answer :id="`answer${index}`" :disabled="hasAnswer" :value="choice"
                    @change="onAnswer"
                    v-model="answer"
                    :correctAnswer="question.correct_answer"/>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { shuffleArray } from '@/functions/array';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { Answer} from './Answer.vue';

const props = defineProps({
    question: Object
})
const emits = defineEmits(['answer'])//Cette événement va nous permettre de dire : J'ai repondu à une question
const answer = ref(null)
const hasAnswer = computed(() => answer.value !== null)
watch(() => props.question, () => {
    answer.value = null
})
//randomiser les questions pour les rendre aléatoires
const randomChoices = computed(() => shuffleArray(props.question.choices))
let timer
const onAnswer = (e) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        emits('answer', answer.value)
    }, 1_000)
}

onMounted(() => {
    timer = setTimeout(() => {
        answer.value = ''
        onAnswer()
    }, 3_000)
})

onUnmounted(() => {
    clearTimeout(timer)
})
</script>

<style>
.question {
    padding-top: 2rem;
}

.question button {
    margin-left: auto;
    display: block;
}
</style>