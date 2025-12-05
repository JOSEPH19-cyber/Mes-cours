<!--
- mode="out-in" : Attend la fin de l'animation de sortie pour avoir l'animation d'entrée
    ex : <template>
            <div class="relative">
                <Transition name="fadeslide" mode="out-in">
                    <slot></slot>
                </Transition>
            </div>
        </template>
- appear : Permet de rajouter un effet d'animation
-->
<template>
    <div class="relative">
        <Transition name="fadeslide" appear>
            <slot></slot>
        </Transition>
    </div>
</template>

<script setup></script>

<style>
.relative {
    position: relative;
}
.fadeslide-enter-active,
.fadeslide-leave-active {
    transition: .5;
}
.fadeslide-leave-active {
    position: absolute;
    width: 100%;
}
.fadeslide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fadeslide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>

