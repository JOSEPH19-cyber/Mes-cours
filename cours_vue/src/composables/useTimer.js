import { onMounted, onUnmounted, ref } from "vue"

export function useTimer (initial = 0){
    const time = ref(initial);

    let timer;
    onMounted(() => {
        timer = setInterval(() => {
            time.value++;
        }, 1_000);
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    return {
        time,
        reset () {
            time.value = 0
        }
    };
}