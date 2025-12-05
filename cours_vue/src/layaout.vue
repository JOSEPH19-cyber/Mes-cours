<!--
Le cas où nous avons plusieurs slot à l'intérieur d'un composant
-->

<template>
    <div class="layaout">
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <aside>
            <slot name="aside"></slot>
        </aside>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style>
.layaout {
    display: grid;
    grid-template-columns: 200px 1fr;
}
.layaout > * {
    border: 1px solid red;
}
.layaout header,
.layaout footer{
    grid-column: 1 / -1;
}
</style>