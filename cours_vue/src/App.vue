<!--
📘 Documentation Vue.js
🟢 COURS 1 : Introduction à Vue.js
1. Structure d’un composant Vue

Un fichier Vue est composé de trois balises principales :

<template> ... </template>
<script setup> ... </script>
<style> ... </style>

🔸 <template>

Sert à écrire le code HTML.

On peut y insérer du texte, des balises HTML et des expressions dynamiques entre {{ }}.

🔸 <script setup>

Sert à écrire le code JavaScript (logique du composant).

On y définit les variables, fonctions et imports nécessaires.

🔸 <style>

Sert à écrire le code CSS pour styliser le composant.

2. Exemple complet
<template>
  <h1>Bonjour {{ firstname }}</h1>
  <p>Comment allez-vous ?</p>
</template>

<script setup>
const firstname = "John"
</script>

<style>
h1 {
  color: red;
}
</style>


➡️ Ici, le texte {{ firstname }} est remplacé automatiquement par la valeur de la variable firstname définie dans le <script>.

🟢 COURS 2 : Syntaxe et fonctionnalités de base de Vue.js
1. Réactivité avec ref()
🔹 Définition :

ref() est une fonction de Vue qui permet de créer une variable réactive, c’est-à-dire une variable qui met automatiquement à jour l’interface quand sa valeur change.

🔹 Utilisation :
import { ref } from 'vue'

const count = ref(0)


➡️ Pour modifier sa valeur :

count.value = 5


⚠️ Attention : dans le <script setup>, on doit utiliser .value pour accéder ou modifier le contenu d’un ref().

2. Modifier une valeur à intervalle régulier
const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)


➡️ Ici, count augmente de 1 chaque seconde.

3. Incrémenter ou décrémenter une valeur avec des boutons
🔹 Exemple avec des fonctions :
<template>
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrémenter</button>
  <p>Valeur : {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

🔹 Variante plus courte :
<button @click="count++">Incrémenter</button>
<button @click="count--">Décrémenter</button>

4. Afficher ou masquer un élément selon une condition

Vue propose des directives conditionnelles :

Directive	Description
v-if	Affiche l’élément seulement si la condition est vraie (sinon il est retiré du DOM).
v-else	S’exécute lorsque la condition du v-if est fausse.
v-show	Affiche ou cache un élément visuellement sans le retirer du DOM.
Exemple :
<div v-if="count >= 5">Bravo ! Vous avez cliqué plus de 5 fois 🎉</div>
<div v-else>Continuez à cliquer...</div>

5. Attributs dynamiques avec v-bind
🔹 Syntaxe longue :
<p v-bind:id="`p-${count}`">Compteur : {{ count }}</p>

🔹 Raccourci :
<p :id="`p-${count}`">Compteur : {{ count }}</p>

6. Styles dynamiques
🔹 Exemple avec un objet CSS :
<p :style="{ color: count > 5 ? 'red' : 'green' }">
  Compteur : {{ count }}
</p>

7. Classes dynamiques
🔹 Exemple :
<p :class="{ active: count > 5 }">Compteur : {{ count }}</p>


➡️ Si count > 5, la classe CSS active sera appliquée.

8. Travailler avec une liste (v-for)
🔹 Déclaration :
const movies = ref(['Matrix', 'Lilo & Stitch', 'Titanic'])

🔹 Affichage avec v-for :
<ul>
  <li v-for="movie in movies" :key="movie">
    {{ movie }}
    <button @click="deleteMovie(movie)">Supprimer</button>
  </li>
</ul>

🔹 Supprimer un élément :
const deleteMovie = (movie) => {
  movies.value = movies.value.filter(m => m !== movie)
}

🔹 Réorganiser la liste :
<button @click="sortMovies">Réorganiser</button>

const sortMovies = () => {
  movies.value.sort((a, b) => a > b ? 1 : -1)
}

🔹 Ajouter un élément avec un formulaire :
<form @submit.prevent="addMovie">
  <input type="text" placeholder="Nouveau film" v-model="movieName">
  <button>Ajouter</button>
</form>

const movieName = ref('')

const addMovie = () => {
  movies.value.push(movieName.value)
  movieName.value = '' // vide le champ
}


Le .prevent empêche le rechargement du formulaire.

9. Liaison bidirectionnelle avec v-model

v-model lie une variable réactive à un champ de formulaire :
les changements dans l’un se répercutent automatiquement dans l’autre.

Exemple :
<input v-model="firstname" placeholder="Votre prénom">
<p>Bonjour {{ firstname }}</p>

10. Exemple complet (objet réactif et événement)
<template>
  <ul>
    <li>{{ person.firstname }}</li>
    <li>{{ person.lastname }}</li>
    <li>{{ person.age }}</li>
  </ul>
  <button @click.prevent="randomAge">Changer âge</button>
</template>

<script setup>
import { ref } from 'vue'

const person = ref({
  firstname: 'John',
  lastname: 'Doe',
  age: 20
})

const randomAge = () => {
  person.value.age = Math.round(Math.random() * 100)
}
</script>

🧭 Résumé général
Concept	Description	Exemple
ref()	Crée une variable réactive	const count = ref(0)
v-if / v-else	Afficher ou masquer selon une condition	<div v-if="ok">...</div>
v-show	Masque visuellement un élément	<div v-show="ok">...</div>
v-bind / :	Lier un attribut à une variable	<p :id="myId">
v-model	Liaison bidirectionnelle entre variable et champ	<input v-model="name">
v-for	Boucle sur une liste	<li v-for="item in list" :key="item">
@click	Gérer les clics sur un élément	<button @click="doSomething">
-->

<!--
📘 Exercices ToDo List & notions essentielles

Ce chapitre explique toutes les notions rencontrées dans la réalisation d’une ToDo List en Vue.js :

v-model

v-if / v-else

propriétés calculées (computed)

:disabled

v-for et :key

gestion de tableau (length, toSorted, filter)

classes dynamiques

tri dynamique

🟦 1. .length — Compter les éléments d’un tableau

La propriété .length permet de connaître :

le nombre d’éléments dans un tableau

la longueur d’une chaîne de caractères

✔ Exemples
todos.value.length    // nombre de tâches
newTodo.value.length  // nombre de caractères dans l’input


Dans ton exercice, on s’en sert pour :

désactiver le bouton si l’input est vide

afficher un message si aucune tâche n’existe

🟦 2. :disabled — Empêcher une action

disabled est un attribut HTML.
En Vue.js, on le rend dynamique avec :disabled.

✔ Exemple utilisé dans l’exercice
<button :disabled="newTodo.length === 0">Ajouter</button>


➡ Le bouton est désactivé lorsque rien n’est saisi dans le champ.
➡ Très utile pour éviter l’ajout d’éléments vides.

🟦 3. toSorted() — Trier un tableau sans le modifier

Contrairement à .sort() qui modifie le tableau actuel,
.toSorted() retourne une copie triée, sans toucher à l’original.

✔ Exemple dans ton code
todos.value.toSorted((a, b) => a.completed > b.completed ? 1 : -1)


Ici, on trie les tâches selon :

d’abord celles non complétées

ensuite celles complétées

➡ C’est ce qu’on appelle un tri « stable ».

🟦 4. Les propriétés calculées : computed()

C’est la notion la plus importante de ton exercice.
Une propriété calculée est une valeur :

basée sur d’autres valeurs réactives

qui se met à jour automatiquement

mémorisée (optimisée) tant que les dépendances ne changent pas

📌 Quand utiliser computed ?

✔ quand une valeur dépend d’autres valeurs
✔ quand un calcul est utilisé souvent
✔ quand on veut améliorer les performances

📌 Exemple : Trier les tâches — sortedTodos
const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a, b) => a.completed > b.completed ? 1 : -1)

  if (hideCompleted.value === true) {
    return sortedTodos.filter(t => t.completed === false)
  }
  return sortedTodos
})

🔍 Explication du processus :

On prend la liste todos

On crée une version triée (toSorted)

On vérifie si l'utilisateur a coché "Masquer les complétées"

Si oui ➝ on filtre uniquement les tâches non complétées

Sinon ➝ on retourne la liste triée complète

➡ sortedTodos sera toujours automatiquement mis à jour si :

une nouvelle tâche est ajoutée

une tâche est cochée/décochée

le tri change

hideCompleted change

📌 Exemple : Compter les tâches restantes — remainingTodos
const remainingTodos = computed(() => {
  return todos.value.filter(t => t.completed === false).length
})


➡ Ici, Vue fera le calcul seulement si la liste change, grâce à la mémorisation des computed.

🟦 5. v-for + :key — Boucler proprement

Tu as correctement utilisé :

<li v-for="todo in sortedTodos" :key="todo.date">

📌 Pourquoi un :key est obligatoire ?

Vue doit savoir quels éléments modifier, déplacer ou supprimer.

Sans key, Vue pourrait mal gérer les checkbox, l’ordre, etc.

La date (timestamp) est un excellent choix comme clé.

🟦 6. Classes dynamiques

Pour barrer une tâche complétée :

<li :class="{ completed: todo.completed }">

CSS utilisé :
.completed {
  opacity: .5;
  text-decoration: line-through;
}

🟦 7. Ajout d’une tâche

Le formulaire :

<form @submit.prevent="addTodo">


La fonction :

const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now()
  })
  newTodo.value = ''
}

Ce qu’il faut retenir :

@submit.prevent empêche le rechargement de la page

v-model="newTodo" lit et modifie automatiquement l’input

Date.now() garantit une clé unique

🟦 8. Masquer les tâches complétées
<input type="checkbox" v-model="hideCompleted">


Grâce à v-model, le computed sortedTodos réagit automatiquement.

🟦 9. Vider l’input après ajout
newTodo.value = ''

<template>
  <form action="" @submit.prevent="addTodo">
    <fieldset>
      <input type="text"
      v-model="newTodo"
      placeholder="Tâche à effectuer">
      <button :disabled="newTodo.length === 0">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire :)</div>
  <div v-else>
    <ul>
      <li v-for="todo in sortedTodos"
          :key="todo.date"
          :class="{completed: todo.completed}"
      >
        <label>
          <input type="checkbox" v-model="todo.completed">
          {{ todo.title }}
        </label>
      </li>
    </ul>
    <label>
      <input type="checkbox" v-model="hideCompleted">
      Masquer les tâches complétées
    </label>
    <p v-if="remainingTodos > 0">
      {{ remainingTodos }} à faire
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import checkbox from './checkbox.vue';
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([{
  title: 'Tâche de test',
  completed: true,
  date: 1
},
{
  title: 'Tâche à faire',
  completed: false,
  date: 2
}])
const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now()
  })
  newTodo.value = ''
}

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a, b)  => a.completed > b.completed ? 1 : -1)
  if (hideCompleted.value === true){
    return sortedTodos.filter(t => t.completed === false)
  }
  return sortedTodos
})

const remainingTodos = computed(() => {
  return todos.value.filter(t => t.completed === false).length
})
</script>

<style>
.completed{
  opacity: .5;
  text-decoration: line-through;
}
</style>
-->

<!--
✅ COURS 3 — LES COMPOSANTS 
⭐ Introduction aux composants

Un composant est un bloc réutilisable d’interface (UI).
Dans Vue.js, tout composant est un fichier .vue contenant généralement :

<template> → structure HTML

<script setup> → logique du composant

<style> → styles optionnels

Les composants permettent de découper une application en petites parties indépendantes et organisées.

🎯 1. Importer et utiliser un composant
✔️ Importer un composant
import checkbox from './checkbox.vue'

✔️ Utiliser un composant comme une balise HTML
<checkbox />

✔️ Passer des attributs (props)

Les props fonctionnent comme des attributs HTML :

<checkbox label="Bonjour" />

✔️ Attributs dynamiques

Avec : on peut passer une valeur JS :

<checkbox :label="'Bonjour'" />

🎯 2. Les PROPS avec defineProps()

Dans checkbox.vue :

defineProps({
  label: String
})

📌 Rôle des props :

transmettre des données du parent vers l’enfant

rendre un composant flexible et réutilisable

typer les données (bonne pratique)

🎯 3. Le modèle bidirectionnel avec defineModel()

Dans un composant enfant (checkbox.vue) :

const model = defineModel()

Cela permet :

➡️ de créer automatiquement un v-model personnalisé.

Donc dans le parent (App.vue) :

<checkbox v-model="todo.completed" />


Cela fonctionne comme un input natif !

🎯 4. Les ÉVÉNEMENTS personnalisés avec defineEmits()

Dans checkbox.vue :

const emits = defineEmits(['check', 'uncheck'])

Rôle :

Permet à l’enfant d’envoyer des informations au parent

Permet au parent d’écouter des événements personnalisés

Exemple dans l’enfant :

if (event.currentTarget.checked) {
    emits('check', event.currentTarget)
}
else {
    emits('uncheck', event.currentTarget)
}

🎯 5. Les Slots (contenu dynamique dans un composant)

Un slot permet d’injecter du contenu dans un composant enfant.

Exemple simple dans button.vue
<button><slot></slot></button>


Utilisation :

<button>Ajouter</button>


➡️ Le texte "Ajouter" va remplacer <slot></slot>.

🎯 6. Slots nommés — Le composant layaout.vue

Ici, on a plusieurs slot dans un même composant.

<slot name="header"></slot>
<slot name="aside"></slot>
<slot name="main"></slot>
<slot name="footer"></slot>

Utilisation dans App.vue :
<layaout>
  <template #header>En tête</template>
  <template #aside>Sidebar</template>
  <template #main>Main</template>
  <template #footer>Footer</template>
</layaout>

Intérêt :

➡️ Créer des composants structurants (layout général d’une page).
➡️ Offrir un template flexible.

🎯 7. L’exercice TODO-LIST (Résumé technique)
👉 Concepts utilisés dans cet exercice :
✔️ v-model

Pour connecter un champ à une variable :

<input type="text" v-model="newTodo" />

✔️ Compter un tableau
todos.length

✔️ Désactiver un bouton si le champ est vide
<button :disabled="newTodo.length === 0">Ajouter</button>

✔️ Méthode .toSorted()
todos.value.toSorted((a,b) => ... )


➡️ Tri sans modifier l’original (contrairement à .sort())

✔️ Les propriétés calculées (computed)
const sortedTodos = computed(() => { ... })


Les computed :

s’utilisent comme des propriétés

sont mémorisées (performantes)

dépendent de valeurs dynamiques (réactives)

✔️ Filtrer les tâches terminées
sortedTodos.filter(t => !t.completed)

✔️ Affichage conditionnel
<div v-if="todos.length === 0">Aucune tâche</div>

✔️ Classes dynamiques
<li :class="{ completed: todo.completed }">

✔️ Style barré dans CSS
.completed {
  text-decoration: line-through;
  opacity: .5;
}

⭐ Documentation simplifiée des 4 composants
📌 1. App.vue

→ Composant principal
→ Gère :

Liste des tâches

Ajout des tâches

Filtrage

Tri

Appels aux sous-composants

📌 2. checkbox.vue

→ Composant réutilisable
→ Gère :

un label (prop)

un modèle réactif (defineModel)

émission d’événements

une checkbox personnalisée

📌 3. button.vue

→ Petit composant bouton
→ Utilise <slot>
→ Permet d’injecter n’importe quel texte ou HTML

📌 4. layaout.vue

→ Composant contient plusieurs zones :

header

aside

main

footer

→ Utilise slots nommés
→ Permet de créer des pages organisées

<template>
  
  <form action="" @submit.prevent="addTodo">
    <layaout>
      <template #header>
        En tête
      </template>
      <template #aside>
        Sidebar
      </template>
      <template #main>
        Main
      </template>
      <template #footer>
        Footer
      </template>
    </layaout>
    <fieldset>
      <input type="text"
      v-model="newTodo"
      placeholder="Tâche à effectuer">
      <button :disabled="newTodo.length === 0">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire :)</div>
  <div v-else>
    <ul>
      <li v-for="todo in sortedTodos"
          :key="todo.date"
          :class="{completed: todo.completed}"
      >
        <checkbox :label="todo.title"
           v-model="todo.completed"/>
      </li>
    </ul>
    <label>
      <input type="checkbox" v-model="hideCompleted">
      Masquer les tâches complétées
    </label>
    <p v-if="remainingTodos > 0">
      {{ remainingTodos }} à faire
    </p>
    <checkbox :label="'Bonjour'"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import checkbox from './checkbox.vue';
import button from './button.vue';
import layaout from './layaout.vue';
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([{
  title: 'Tâche de test',
  completed: true,
  date: 1
},
{
  title: 'Tâche à faire',
  completed: false,
  date: 2
}])
const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now()
  })
  newTodo.value = ''
}

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a, b)  => a.completed > b.completed ? 1 : -1)
  if (hideCompleted.value === true){
    return sortedTodos.filter(t => t.completed === false)
  }
  return sortedTodos
})

const remainingTodos = computed(() => {
  return todos.value.filter(t => t.completed === false).length
})
</script>

<style>
.completed{
  opacity: .5;
  text-decoration: line-through;
}
</style>
-->

<!--
✅ COURS 4 — LES OBSERVATEURS & LE CYCLE DE VIE DES COMPOSANTS (Vue.js)

Ce chapitre présente deux grands concepts :

Les observateurs (watch, watchEffect)

Les hooks du cycle de vie (onMounted, onUnmounted)

Création d’une fonction personnalisée réutilisable : un composable (useTimer)

⭐ 1. Les Observateurs en Vue.js

Les observateurs permettent de surveiller une ou plusieurs valeurs réactives et de réagir automatiquement lorsqu'elles changent.

Vue propose trois approches :

✔️ 1.1. watch()

watch() observe une donnée spécifique et exécute une fonction quand cette donnée change.

➤ Exemple dans ton cours :
watch(() => page.value.title, (newValue, oldValue) => {
  document.title = newValue
})

📌 Explications

Le premier argument est la source à observer
→ ici page.value.title

Le second argument est le callback exécuté à chaque changement
→ il reçoit newValue et oldValue

Quand utiliser watch() ?

✔️ Quand tu veux réagir à un changement précis
✔️ Quand tu as besoin des valeurs avant/après
✔️ Quand la source doit être déclarée explicitement

✔️ 1.2. watchEffect()

watchEffect() est plus intelligent que watch() :

👉 Il détecte automatiquement les variables utilisées dans son code.

Exemple dans ton cours :

watchEffect(() => {
  document.title = page.value.title
})

📌 Caractéristiques de watchEffect() :

Pas besoin de définir une "source"

Il s’exécute automatiquement :

📌 une première fois immédiatement

📌 à chaque changement d’une dépendance réactive utilisée dans la fonction

Idéal pour synchroniser l’état avec des effets externes (DOM, API, etc.)

Quand utiliser watchEffect() ?

✔️ Quand tu veux surveiller tout ce qui est utilisé dans le callback
✔️ Quand tu ne veux pas définir explicitement la source observée
✔️ Pour créer des effets automatiques et réactifs

⭐ 2. CYCLE DE VIE DES COMPOSANTS

Vue utilise des hooks (fonctions spéciales) pour réagir à des moments importants du cycle de vie d’un composant.

Dans ce chapitre, tu utilises :

✔️ 2.1. onMounted()

Exécute du code quand le composant est entièrement monté dans la page.

Exemple dans useTimer.js :

onMounted(() => {
    timer = setInterval(() => {
        time.value++
    }, 1000)
});


📌 Parfait pour :

lancer une requête API

démarrer un timer

lire la taille d’un élément du DOM

attacher un évènement global

✔️ 2.2. onUnmounted()

Exécute du code quand le composant est retiré de la page.

Exemple :

onUnmounted(() => {
    clearInterval(timer);
});


📌 Utile pour :

nettoyer des timers

retirer des écouteurs d'événements

éviter des fuites mémoire

⭐ 3. Composables — Créer des fonctions réutilisables

Les composables sont des fonctions personnalisées qui réutilisent la logique Vue.

➡️ Elles sont placées dans un dossier composables/
➡️ Elles retournent des valeurs réactives et des fonctions
➡️ Elles permettent d’éviter de répéter du code dans plusieurs composants

Dans ton cours, tu crées un composable useTimer().

🎯 Fonction personnalisée : useTimer()

📌 Fichier : useTimer.js

Ce composable crée un timer réactif avec reset automatique.

✔️ 3.1. Structure du composable
import { onMounted, onUnmounted, ref } from "vue"

export function useTimer(initial = 0) {
    const time = ref(initial);

    let timer;

    onMounted(() => {
        timer = setInterval(() => {
            time.value++;
        }, 1000);
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    return {
        time,
        reset() {
            time.value = 0
        }
    }
}

✔️ 3.2. Explications
📌 1. Déclarer une variable réactive
const time = ref(initial)

📌 2. Créer un intervalle au montage
onMounted(() => { ... })

📌 3. Nettoyer le timer lors du démontage

→ indispensable pour éviter les fuites mémoire

📌 4. Retourner des valeurs réutilisables
return { time, reset }

⭐ 4. Utilisation du composable dans App.vue

Ton fichier App.vue :

<script setup>
import { watchEffect, ref } from 'vue'
import { useTimer } from './composables/useTimer.js'

const { time, reset } = useTimer()

const page = ref({ title: '' })

watchEffect(() => {
  document.title = page.value.title
})
</script>

✔️ Explications :
1. On récupère les données du composable :
const { time, reset } = useTimer()

2. time devient une donnée réactive disponible dans l’UI :
Temps écoulé : {{ time }}

3. reset() réinitialise le timer :
<button @click="reset">Reset</button>

4. watchEffect met automatiquement à jour le titre de la page :
watchEffect(() => document.title = page.value.title)

🎉 Résumé (fiche rapide du cours)
OBSERVATEURS
Fonction	Sert à	Caractéristiques
watch()	Observer un élément précis	Compare oldValue / newValue
watchEffect()	Observer automatiquement toutes les dépendances	Exécution immédiate
CYCLE DE VIE
Hook	Moment d’exécution	Usage
onMounted()	Après insertion dans le DOM	API, timers, DOM
onUnmounted()	Avant destruction	Nettoyer timers/événements
COMPOSABLES

Fonctions personnalisées

Basées sur la composition API

Réutilisable dans plusieurs composants

Stockées dans /composables/
  
"Faire des fonctions personnaliser pour automatiser certains processus
Prenons le cas du Timer on a pas envie de réecrire le code avec le mounted et le onmounted"

<template>
 <input type="text" v-model="page.title">
 Temps écoulé : {{ time }}
 <button @click="reset">Reset</button>
</template>

<script setup>
import {ref, watch, watchEffect} from 'vue'
import { useTimer } from './composables/useTimer.js'

const {time, reset} = useTimer()
const page = ref({
  title: ''
})

watchEffect(() => {
  document.title = page.value.title
})
</script>
-->

<!-- 

📘 TP – Construction d’un Quiz Interactif en Vue.js

Cet exercice consiste à créer une application de quiz dynamique en Vue.js utilisant :

✔️ Chargement des données depuis un fichier JSON
✔️ Architecture modulaire avec plusieurs composants
✔️ Gestion des états (loading, error, question, recap)
✔️ Propriétés calculées
✔️ Envoi/écoute d’événements
✔️ Temps de réponse automatique
✔️ Score et validation
✔️ Randomisation des choix

1. Structure générale de l’application

Le projet comporte les fichiers suivants :

App.vue → Composant principal

Quiz.vue → Gère le déroulement du quiz

Progress.vue → Affiche la progression

Question.vue → Affiche une question + randomisation + timer

Answer.vue → Affichage d'une réponse

Recap.vue → Affiche le score final

quiz.json → Données du quiz

2. App.vue – Chargement du quiz
🎯 Objectif

Charger le fichier quiz.json lorsque le composant est monté, puis afficher soit :

un message d’erreur,

un loader,

ou le composant <Quiz />.

Concepts utilisés

✔️ onMounted()
✔️ fetch()
✔️ gestion d’état (loading, error, idle)
✔️ rendu conditionnel

Code expliqué
onMounted(() => {
  fetch('/quiz.json')
    .then(r => {
      if (r.ok) return r.json()
      throw new Error('Impossible de récupérer le json')
    })
    .then(data => {
      quiz.value = data
      state.value = 'idle'
    })
    .catch(() => {
      state.value = 'error'
    })
})

Fonctionnement

L’application démarre avec state = "loading"

On tente de charger quiz.json

Si ça marche → state = "idle"

Si ça échoue → state = "error"

Si tout va bien, <Quiz> est rendu

3. Quiz.vue — Gestion des questions et de l’état du quiz
🎯 Objectif

Gérer :

l’état actuel (question / recap)

la liste des réponses données par l’utilisateur

l’avancement dans le quiz

l’affichage du composant <Question /> ou <Recap />

📌 3.1. Initialisation des données
const state = ref('question')
const answers = ref(props.quiz.question.map(() => null))
const step = ref(0)
const question = computed(() => props.quiz.questions[step.value])

Explications

state indique l’écran actuel

answers stocke les réponses de chaque question

step représente la question en cours

question est calculée automatiquement (computed)

⚠️ Correction
Il y a une erreur dans ta version originale :

const answers = ref(props.quiz.question.map(() => null))


Tu avais mis quiz.question au lieu de quiz.questions.

📌 3.2. Gérer une réponse
const addAnswer = (answer) => {
    answers.value[step.value] = answer

    if (step.value === props.quiz.questions.length - 1) {
        state.value = 'recap'
    } else {
        step.value++
    }
}

Explications

On stocke la réponse

Si c’était la dernière question → passer en mode "recap"

Sinon → passer à la question suivante

📌 3.3. Affichage dynamique
<Progress :value="step" :max="quiz.questions.length - 1" />
<Question v-if="state === 'question'" @answer="addAnswer" :question="question" />
<Recap v-if="state === 'recap'" :answers="answers" :quiz="quiz" />


Vue rend dynamiquement les composants en fonction de l'état.

4. Progress.vue — Affichage de la progression

Composant très simple :

Étape {{ value + 1 }}/{{ max + 1 }}


Il utilise uniquement des props.

5. Question.vue — Gestion des réponses + randomisation + auto-réponse

C’est LE composant central de l’exercice.

Concepts utilisés

✔️ Props
✔️ Computed
✔️ Watch
✔️ setTimeout
✔️ Emission d’événements
✔️ Randomisation

📌 5.1. Randomiser les choix
const randomChoices = computed(() => shuffleArray(props.question.choices))


Chaque question s’affiche avec un ordre différent.

📌 5.2. Réinitialiser la réponse lors d’un changement de question
watch(() => props.question, () => {
    answer.value = null
})


Chaque nouvelle question remet la valeur answer à null.

📌 5.3. Envoi de la réponse 1 seconde après la sélection
const onAnswer = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        emits('answer', answer.value)
    }, 1000)
}


⏱️ L’utilisateur clique → 1 seconde plus tard → réponse envoyée.

📌 5.4. Auto-réponse après 3 secondes (si aucun choix)

Très intéressant :

onMounted(() => {
    timer = setTimeout(() => {
        answer.value = ''
        onAnswer()
    }, 3000)
})


L’utilisateur ne choisit rien ?
→ Une réponse vide est envoyée automatiquement après 3 sec.

📌 5.5. Nettoyage des timers

Important pour éviter les fuites mémoire :

onUnmounted(() => {
    clearTimeout(timer)
})

6. Answer.vue — Composant pour une seule réponse
Concepts

✔️ Props
✔️ defineModel (v-model personnalisé)
✔️ Computed pour les classes
✔️ disabled dynamique
✔️ Affichage visuel bonne/mauvaise réponse

📌 6.1. Définition des classes (⚠️ correction nécessaire)

La version originale :

const classes = computed(() => {
    disabled: props.disabled
    right: ...
    wrong: ...
})


⚠️ Ceci est incorrect, il manque les accolades.

Voici la version corrigée :

const classes = computed(() => ({
    disabled: props.disabled,
    right: props.disabled && props.value === props.correctAnswer,
    wrong: props.disabled &&
          props.value !== props.correctAnswer &&
          model.value === props.value
}))

📌 6.2. Fonctionnement

Si disabled = true → l’utilisateur ne peut plus changer sa réponse

Si la réponse était correcte → classe .right

Si elle était fausse → classe .wrong

Sinon → rien

7. Recap.vue — Score et validation
Calcul du score
const score = computed(() => {
    return props.quiz.questions.reduce((acc, question, k) => {
        if (question.correct_answer === props.answers[k]) {
            return acc + 1
        }
        return acc
    }, 0)
})

Validation
const hasWon = computed(() => score.value >= props.quiz.minimum_score)

Affichage :
<p>
  {{ hasWon ? quiz.success_message : quiz.failure_message }}
</p>
<p>score : {{ score }}/{{ quiz.questions.length }}</p>

<template>
  <div class="container">
    <div v-if="state === 'error'">
      <p>
        Impossible de charger le quiz
      </p>
    </div>
    <div :aria-busy="state === 'loading'">
      <Quiz :quiz="quiz" v-if="quiz"/>
    </div>
  </div>
</template>

<script setup>
//Charger le fichier quiz.json avec la méthode onMounted typiquement lorsque le composant est monté
import { onMounted, ref } from 'vue';
import Quiz from './composables/Quiz.vue';

const quiz = ref(null)
const state = ref('loading')//charger les données

onMounted(() => {
  fetch('/quiz.json')
    .then(r => {
      if (r.ok) {
        return r.json()
      }
      throw new Error('Impossible de récupérer le json')
    })
    .then(data => {
      quiz.value = data
      state.value = 'idle'//mettre ça si les données ont été bien chargé
    })
    // si on a une erreur on la capture
    .catch(e => {
      state.value = 'error'
    })
})
</script>

<style>
.container {
  margin-top: 2rem;
}
</style>
-->

<!-- 
📘 COURS 5 – Composition API vs Options API
🎯 Objectif du chapitre

Comprendre la différence entre l’Options API (ancienne approche Vue 2 / classique) et la Composition API (approche moderne introduite avec Vue 3), ainsi que l’importance de l’attribut setup dans les composants.

1️⃣ Options API (ancienne méthode)

Avant Vue 3, on écrivait les composants avec une structure basée sur des sections :
data, computed, methods, watch, etc.

Exemple (Options API)
<template>
  <h2>Compteur</h2>
  <p>Compteur : {{ count }} x 2 = {{ double }}</p>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

❗Inconvénients de l’Options API

Le code est fragmenté par sections (data d’un côté, methods de l’autre, computed ailleurs).

Difficile de regrouper des fonctionnalités.

Quand un composant devient grand, retrouver la logique associée devient compliqué.

2️⃣ Composition API (Vue 3)

Vue 3 introduit la Composition API, qui permet d’organiser le code par logique, et non par section.
Tout est géré dans la fonction spéciale :

<script setup>


Cette fonction est exécutée avant que le composant soit créé et permet :

d’utiliser les variables réactives (ref, reactive)

de créer des fonctions

de créer des computed

d’importer des composables

d’exposer automatiquement tout ce qui est déclaré

🎯 Exemple du cours (Composition API)
<template>
  <h2>Compteur</h2>
  <p>
    Compteur : {{ count }} x 2 = {{ double }}
  </p>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { computed, ref } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
const increment = () => count.value++
</script>

3️⃣ Explications détaillées
🔵 ref()

Permet de créer une variable réactive.

const count = ref(0)


On accède à sa valeur avec .value.

🟣 computed()

Crée une valeur calculée automatiquement, en fonction d’autres valeurs réactives.

const double = computed(() => count.value * 2)


Avantage : Vue met en cache le résultat tant que la dépendance ne change pas.

🟢 Fonction logique

Ici, tu as une fonction simple qui modifie la valeur.

const increment = () => count.value++

4️⃣ Pourquoi la Composition API est meilleure ?
✔ Code regroupé par logique

Tu as toutes les variables liées au compteur dans la même zone :

count

double

increment

→ Plus clair, plus simple à maintenir.

✔ Très puissant pour les gros projets

Tu peux créer des composables (fonctions réutilisables), comme tu l’as fait avec useTimer() dans le cours précédent.

✔ Moins de “this”

Avec l’Options API, on utilise this.count.
Avec la Composition API, pas besoin !

✔ Compatible avec TypeScript

La Composition API est pensée pour être 100 % compatible avec TypeScript.

5️⃣ Le rôle du <script setup>

<script setup> est un sugar syntax très simplifié pour la Composition API.

Il permet :

✔ Pas besoin de return :
Tout ce que tu déclares est automatiquement disponible dans le template.

✔ Performances améliorées :
Le code est optimisé à la compilation.

✔ Code plus court :
Pas de section export default.

6️⃣ Tableau comparatif
Critère	Options API	Composition API
Organisation	Par sections	Par logique
Réutilisation	Difficile	Très facile (composables)
Lisibilité pour gros composants	Moyenne	Excellente
Utilisation de this	Oui	Non
Typescript	Moins pratique	Totalement adapté
Syntaxe moderne	❌	✔
Apprentissage	Plus simple au début	Plus large mais plus puissant
7️⃣ Conclusion du chapitre

La Composition API rend ton code :

plus clair

plus logique

plus structuré

plus facile à maintenir

plus facile à réutiliser

C’est pourquoi Vue 3 recommande fortement la Composition API et l’utilisation de <script setup>.
-->

<!-- 
📘 COURS 6 – La Réactivité dans Vue.js
🎯 Objectif du chapitre

Comprendre comment Vue 3 gère la réactivité, et en particulier ce que signifie utiliser :

ref()

reactive()

shallowRef()

shallowReactive()

Ce chapitre explique aussi la différence entre une réactivité profonde (deep) et une réactivité superficielle (shallow).

1️⃣ Qu'est-ce que la réactivité ?

Dans Vue, la réactivité est la capacité du framework à mettre automatiquement à jour l’interface utilisateur lorsque les données changent.

Exemple :
Si une variable réactive change, Vue met automatiquement à jour le DOM.

2️⃣ ref() : la réactivité “classique”

ref() crée une variable réactive, même si elle contient un objet.

➡ Vue rend réactive toutes les propriétés internes de cet objet :
c’est une réactivité profonde (deep reactivity).

Exemple
const raw = ref({
  firstname: 'John',
  lastname: 'Doe'
})


Tu peux modifier n’importe quelle propriété :

raw.value.firstname = "Paul" // réactif !

3️⃣ shallowRef() : réactivité superficielle

shallowRef() fonctionne comme ref(), mais :

❗ Vue NE rend pas réactif l’intérieur de l’objet.
Seule la référence changeante déclenche une mise à jour.

Exemple du cours
const raw = ref({
  firstname: 'John',
  lastname: 'Doe'
})

const person = shallowRef(raw)

Ce que cela implique :

person.value = autreChose → réactif ✔

person.value.firstname = "Paul" → pas réactif ✘

Console
console.log(person.value, person.value === raw)


Cela montre que :

person.value contient le même objet que raw

mais modifier l’objet interne NE déclenchera pas de mise à jour

4️⃣ Pourquoi utiliser shallowRef() ?

Utile quand :

✔ Tu veux stocker un gros objet mais sans activer la réactivité profonde (économie de performance)
✔ Tu veux gérer la réactivité manuellement, par exemple quand tu utilises une librairie externe.
✔ Tu stockes un objet non-Vue comme :

une instance de classe

une API externe

un WebGL renderer

des objets DOM

5️⃣ Exemple complet du cours
<template>
  <h2>Compteur</h2>
  <p>
    Compteur : {{ count }} x 2 = {{ double }}
  </p>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { computed, ref, shallowRef } from 'vue'
import { useCounter } from './composables/useCounter.js'

const { count, increment } = useCounter()

const raw = ref({
  firstname: 'John',
  lastname: 'Doe'
})

const person = shallowRef(raw)

console.log(person.value, person.value === raw)

const double = computed(() => count.value * 2)
</script>


Ce TP illustre simplement la différence entre :

✔ une variable entièrement réactive (raw)
✔ une variable réactive uniquement en surface (person)

6️⃣ Bonus : reactive() vs shallowReactive()

Même logique que pour ref.

reactive()

➡ rend chaque propriété interne réactive, y compris dans les objets imbriqués.

shallowReactive()

➡ rend réactives seulement les propriétés de premier niveau, pas les objets à l’intérieur.

7️⃣ Tableau comparatif de la réactivité dans Vue
API	Type	Réactivité interne ?	Usage
ref()	Variable	✔ Oui (deep)	Valeurs simples ou objets
reactive()	Objet	✔ Oui (deep)	Objets complexes
shallowRef()	Variable	❌ Non	Instances, DOM, grosses structures
shallowReactive()	Objet	❌ Non (deep)	Objets dont on ne veut pas suivre toutes les propriétés
8️⃣ Conclusion du chapitre

Vue 3 utilise un système de réactivité basé sur des Proxies, extrêmement performant.

ref() et reactive() activent une réactivité profonde.

shallowRef() et shallowReactive() activent une réactivité superficielle.

shallowRef() est utile pour les objets complexes qu’on ne veut pas réactiver entièrement.
-->

<!-- 
📘 COURS 7 : TRANSITION & ANIMATION

Dans ce chapitre, on découvre comment Vue.js permet d’ajouter facilement des animations et transitions aux éléments du DOM lorsqu’ils apparaissent, disparaissent ou sont réorganisés.

Vue fournit des composants intégrés :

<Transition> → pour animer un seul élément

<TransitionGroup> → pour animer une liste d’éléments

Ces composants appliquent automatiquement des classes CSS au moment où un élément entre ou sort.

1️⃣ Le composant <Transition>

Vue applique automatiquement des classes CSS pendant l’animation :

Classe	Moment d'exécution	Description
.v-enter-from	Début de l'entrée	État initial (souvent invisible)
.v-enter-active	Pendant l'entrée	Durée + transition
.v-enter-to	Fin de l'entrée	État final
.v-leave-from	Début de la sortie	
.v-leave-active	Pendant la sortie	
.v-leave-to	Fin de la sortie	Souvent opacity 0, élément disparaît

➡ Ces classes changent selon le name donné au composant.

Ex :

<Transition name="fadeslide"> … </Transition>


Les classes deviennent :

.fadeslide-enter-from

.fadeslide-leave-to

.fadeslide-enter-active

etc.

2️⃣ Exemple simple : afficher/masquer un spoiler

App.vue

<template>
  <button @click="toggleSpoiler">Afficher / Masquer le spoiler</button>

  <FadeSlideTransition>
    <div v-if="showSpoiler" class="spoiler">
      A la fin de la série Marc Cunningan meurt !
    </div>

    <div v-else>
      Voir une information qui gâche la série
    </div>
  </FadeSlideTransition>
</template>

⚙️ Script
<script setup>
import { ref } from 'vue';
import FadeSlideTransition from './FadeSlideTransition.vue';

const showSpoiler = ref(false)
const toggleSpoiler = () => showSpoiler.value = !showSpoiler.value
</script>

🎨 Style
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
}

3️⃣ Créer sa propre transition réutilisable

Le composant FadeSlideTransition.vue

Template
<template>
    <div class="relative">
        <Transition name="fadeslide" appear>
            <slot></slot>
        </Transition>
    </div>
</template>

Explications

<slot> : permet de passer n'importe quel contenu au composant

appear : l'animation se joue au chargement de la page

mode="out-in" (optionnel) : attend la fin de l’animation de sortie avant l’entrée

CSS
.relative {
  position: relative;
}

.fadeslide-enter-active,
.fadeslide-leave-active {
    transition: .5s;
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

4️⃣ Le composant <TransitionGroup>

Ce composant permet d’animer :

l’entrée

la sortie

le déplacement (très important !)

Exemple : liste de films
<TransitionGroup name="list" tag="ul">
  <li v-for="movie in movies" :key="movie">
    {{ movie }}
    <button class="secondary" @click="removeMovie(movie)">x</button>
  </li>
</TransitionGroup>


Pourquoi un tag="ul" ?

➡ <TransitionGroup> rend par défaut un <span>
➡ On le transforme en <ul> pour qu’il soit sémantiquement correct.

5️⃣ Méthodes du TP : ajouter, supprimer, mélanger
Ajout d’un film
const addMovie = () => {
  movies.value = [movie.value, ...movies.value]
  movie.value = ''
}

Suppression
const removeMovie = (movie) => {
  movies.value = movies.value.filter(m => m !== movie)
}

Mélanger la liste
const randomize = () => {
  movies.value = shuffleArray(movies.value)
}


shuffleArray.js

export function shuffleArray(arr) {
    return arr
        .map(item => ({ value: item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(item => item.value);
}

6️⃣ Les classes CSS pour TransitionGroup
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

💡 Explications
.list-move

Classe spéciale qui anime le déplacement des éléments quand l'ordre change.

.list-leave-active { position: absolute; }

Permet à l’élément de sortir visuellement sans casser la mise en page.

✔️ RÉSUMÉ DU CHAPITRE
Notion	Explication
<Transition>	Anime un seul élément / bloc
<TransitionGroup>	Anime une liste (entrée, sortie, déplacement)
appear	Animation déclenchée au chargement
mode="out-in"	Attente de fin de sortie avant entrée
Classes CSS	Utilisées pour contrôler l’état des animations
Transitions nommées	Permettent de réutiliser et structurer les animations

Vue.js simplifie énormément les animations et offre un système puissant basé sur des classes automatiques.


<template>
  <button @click="toggleSpoiler">Afficher / Masquer le spoiler</button>
  <FadeSlideTransition name="fadeslide">
    <div v-if="showSpoiler" class="spoiler">
      A la fin de la série Marc Cunningan meurt !
    </div>
     <div v-else>
      Voir une information qui gâche la série
    </div>
  </FadeSlideTransition>
</template>

<script setup>
import { ref } from 'vue';
import FadeSlideTransition from './FadeSlideTransition.vue';

const showSpoiler = ref(false)
const toggleSpoiler = () => showSpoiler.value = !showSpoiler.value
</script>

<style>
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
}
</style>

- Cas d'une liste des films
- tag="ul" : permet de rendre un bloc en ul
ex : 
      <TransitionGroup name="list" tag="ul">
        <li v-for="movie in movies" :key="movie">
          {{ movie }}
          <button class="secondary" @click="removeMovie(movie)">x</button>
        </li>
    </TransitionGroup>
  
- On peut réorganiser les films de manière alétoire avec "randomize"
  ex : <button @click="randomize">Réorganiser</button> et dans la partie script nous aurons
        const randomize = () => {
          movies.value = shuffleArray(movies.value)
        }

<template>
  <form role="group" @submit.prevent="addMovie">
    <input type="text" v-model="movie">
    <button :disabled="movie.length === 0">Ajouter</button>
  </form>
    <TransitionGroup name="list" tag="ul">
      <li v-for="movie in movies" :key="movie">
        {{ movie }}
        <button class="secondary" @click="removeMovie(movie)">x</button>
      </li>
    </TransitionGroup>
    <button @click="randomize">Réorganiser</button>
</template>

<script setup>
import { ref } from 'vue';
import { shuffleArray } from './functions/array.js';

const showSpoiler = ref(false)
const movies = ref([
  "Les Evadés",
  "Le parrain",
  "The Dark Knight : Le Chevalier Noir",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception"
]);
const movie = ref('')
const addMovie = () => {
  movies.value = [movie.value, ...movies.value]
  movie.value = ''
}
const removeMovie = (movie) => {
  movies.value = movies.value.filter(m => m !== movie)
}

const randomize = () => {
  movies.value = shuffleArray(movies.value)
}
</script>

<style>
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-leave-active {
  position: absolute;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
-->

<!-- 
✅ COURS 8 : Provide & Inject — Documentation complète et corrigée
🎯 À quoi ça sert ?

Dans Vue.js, Provide / Inject sert à partager des données entre un composant parent et ses composants enfants (même très éloignés), sans avoir à passer des props à chaque niveau.

👉 C’est une communication verticale, mais plus “longue-distance” que Props/Emit.

🔥 Exemple typique où Provide/Inject est utile :

Un <App> fournit le thème (dark/light)

Tous les composants enfants (même profondément imbriqués) peuvent recevoir ce thème sans props.

🧠 Concepts
1. provide()

Sert à fournir une valeur dans un composant parent.

Cette valeur sera disponible pour tous les enfants, même à plusieurs niveaux.

2. inject()

Sert à recevoir la valeur fournie.

Chaque composant enfant peut récupérer ce qu’il a besoin.

⚠️ Important

Provide/Inject n’est pas réactif automatiquement si tu fournis une valeur simple.
Pour de la réactivité → fournir un ref() ou un computed().

⭐ Exemple complet et simple (API Composition)
App.vue (parent)
<script setup>
import { provide, ref } from 'vue'

// valeur réactive partagée
const theme = ref('light')

// on "fournit" la valeur
provide('theme', theme)
</script>

<template>
  <div>
    <h1>App.vue</h1>
    <p>Thème actuel : {{ theme }}</p>
    <button @click="theme = theme === 'light' ? 'dark' : 'light'">
      Changer le thème
    </button>

    <Child />
  </div>
</template>


Child.vue (enfant)
<script setup>
import { inject } from 'vue'

// on reçoit la valeur
const theme = inject('theme')
</script>

<template>
  <div>
    <h2>Child.vue</h2>
    <p>Thème reçu : {{ theme }}</p>
  </div>
</template>

✔️ Résultat

Quand tu changes theme dans App.vue…

Child.vue est mis à jour automatiquement !

Car tu as injecté une ref() réactive.

🏗️ Exemple un peu plus avancé : Fournir une fonction

Tu peux aussi fournir :
✔️ une valeur
✔️ une fonction
✔️ un objet
✔️ un composable

App.vue
<script setup>
import { provide, ref } from 'vue'

const user = ref({
  firstname: 'John',
  lastname: 'Doe'
})

const updateLastname = (newName) => {
  user.value.lastname = newName
}

provide('user', user)
provide('updateLastname', updateLastname)
</script>

<template>
  <Child />
</template>

Child.vue
<script setup>
import { inject } from 'vue'

const user = inject('user')
const updateLastname = inject('updateLastname')
</script>

<template>
  <div>
    <p>{{ user.firstname }} {{ user.lastname }}</p>
    <button @click="updateLastname('Smith')">Changer nom</button>
  </div>
</template>

📌 Pourquoi utiliser Provide/Inject ?
✔️ Pour éviter le "Props Drilling"

Pas besoin de passer props → props → props → props à chaque niveau.

✔️ Pour gérer des données globales locales

(Une sorte de mini-store interne)

Exemples :

un thème (dark/light)

un utilisateur connecté

une langue sélectionnée

une configuration

un état partagé entre plusieurs composants

✔️ Alternative légère à Pinia

Quand tu n’as pas besoin d’un store complet.

⚠️ Quand NE PAS utiliser Provide/Inject

Pour la communication simple parent → enfant → parent : utilise Props/Emit

Pour une application grande et structurée → Pinia est préférable

Pour partager entre composants frères → Provide/Inject ne fonctionne pas directement (il faut un parent commun)

📘 Résumé clair à mettre dans ta documentation

Provide/Inject permet à un composant parent de fournir des données, et à ses descendants de les recevoir, sans que les données passent explicitement par des props.

provide('nom', valeur) → définit une valeur que tous les enfants peuvent utiliser

inject('nom') → récupère cette valeur

Si tu fournis un ref() → l’injection est réactive

Peut également fournir des fonctions, objets ou composables

Utile pour des données globales dans un arbre de composants

Alternative légère à un store global (Pinia)
-->

<!-- 
📘 COURS 9 — Composants et éléments spéciaux

Dans ce chapitre, on découvre plusieurs éléments spéciaux de Vue permettant de gérer la structure, la dynamique et le comportement avancé des composants.
Ces éléments ne produisent pas directement du contenu visuel, mais permettent d'avoir un meilleur contrôle sur le rendu et la logique de l’interface.

1. <template> — Conteneur invisible

La balise <template> sert à regrouper plusieurs éléments sans générer de balise HTML dans le rendu final.

📌 Utilité principale :

✔️ Éviter de polluer le DOM
✔️ Faire des conditions ou boucles sans créer d’élément supplémentaire
✔️ Structurer un groupe d’éléments sans wrapper inutile

🔥 Exemple : boucle sans élément HTML parent
<template v-for="item in items" :key="item.id">
  <p>{{ item.name }}</p>
  <span>{{ item.price }}</span>
</template>


➡️ Le <template> disparaît dans le DOM : seuls les <p> et <span> sont rendus.

2. <component> — Composants dynamiques

Vue permet de changer dynamiquement quel composant afficher en utilisant la balise spéciale <component>.

📌 Fonctionnement :

On lui passe le nom d’un composant via :is="".

Vue affichera automatiquement ce composant.

🔥 Exemple :
<component :is="currentView" />


Avec :

const currentView = ref('LoginForm')


et des composants :

<LoginForm />
<RegisterForm />


➡️ Si currentView = "LoginForm" alors Vue affiche le LoginForm.
➡️ Si tu changes la valeur, le composant affiché change automatiquement.

3. <keep-alive> — Garder un composant en mémoire

<keep-alive> permet de conserver l’état d’un composant même s’il est masqué avec v-if ou remplacé dans un composant dynamique.

📌 Effets :

✔️ Le composant ne se démonte pas vraiment
✔️ Sa mémoire, ses données et son état sont conservés
✔️ La navigation devient plus fluide

🧠 Important :

Avec <keep-alive>, les hooks classiques onMounted / onUnmounted ne sont plus déclenchés.

À la place, Vue fournit :

onActivated() → quand le composant redevient actif

onDeactivated() → quand il est mis en pause

🔥 Exemple :
<keep-alive>
  <component :is="currentView" />
</keep-alive>


➡️ Utile pour des formulaires, onglets, ou pages à onglets où on veut préserver les données entrées.

4. <Teleport> — Déplacer du contenu dans le DOM

<Teleport> permet d'afficher un élément dans un autre endroit du DOM, même s'il appartient logiquement à un composant donné.

📌 Utilité :

✔️ Afficher une modale dans <body>
✔️ Déplacer une sidebar, un menu contextuel ou une notification
✔️ Éviter les contraintes de style liées au parent

🔥 Exemple simple :
<Teleport to="body">
  <div class="modal">
    Hello !
  </div>
</Teleport>


➡️ La modale est écrite dans ton composant,
➡️ Mais elle apparaît réellement dans <body>.

📍 Pourquoi c'est utile ?

Parce que certains éléments (modales, popups) ne doivent pas être "enfermé" dans le DOM d'un composant qui applique overflow: hidden ou d'autres styles qui bloqueraient l’affichage.

⭐ RÉSUMÉ DU CHAPITRE
Élément	Rôle	Utilité principale
<template>	Conteneur invisible	Boucles, conditions sans créer d’élément HTML
<component>	Composant dynamique	Changer le composant affiché via :is
<keep-alive>	Cache les composants	Garder l'état d'un composant masqué
<Teleport>	Déplacer du contenu	Modales, popups, notifications
-->

<!-- 
📘 COURS 10 — Vue Router

Vue Router est le système officiel de routage pour Vue.js. Il permet de gérer la navigation entre plusieurs pages ou composants dans une application Single Page Application (SPA).

Avec Vue Router, on peut :

Définir des routes pour chaque page ou composant

Naviguer sans recharger la page

Passer des paramètres aux pages

Créer des routes imbriquées (nested routes)

Gérer les redirections et les routes 404

1️⃣ Installation

Pour installer Vue Router dans un projet Vue 3 :

npm install vue-router@4


Puis dans ton projet :

// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

2️⃣ Configuration de l’application

Dans le fichier principal main.js :

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')


✅ Avec app.use(router) on active le routage dans toute l’application.

3️⃣ Naviguer entre les pages
a) Utiliser <router-link>

C’est l’équivalent du <a> en SPA :

<router-link to="/">Accueil</router-link>
<router-link to="/about">À propos</router-link>


to : définit la route cible

Remplace automatiquement le rechargement complet du navigateur

b) Naviguer depuis le script
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/about') // redirige vers /about

4️⃣ Afficher le contenu de la route

Dans ton App.vue :

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>


<router-view /> : rend le composant correspondant à la route actuelle

5️⃣ Routes avec paramètres

On peut passer des paramètres dynamiques via l’URL :

const routes = [
  { path: '/user/:id', component: User }
]


Dans le composant User.vue :

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>

<template>
  <h1>User ID : {{ userId }}</h1>
</template>


:id dans la route devient route.params.id dans le composant

6️⃣ Routes imbriquées (Nested Routes)

Les routes enfants permettent d’afficher des sous-composants dans un composant parent :

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'stats', component: Stats },
      { path: 'profile', component: Profile }
    ]
  }
]


Dans Dashboard.vue :

<template>
  <h1>Dashboard</h1>
  <router-view /> <!-- Affiche Stats ou Profile selon la sous-route 
</template>

7️⃣ Redirection et routes non trouvées

Redirection :

{ path: '/home', redirect: '/' }


Page 404 :

{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }

8️⃣ Avantages du Vue Router

Navigation fluide sans recharger la page

Gestion des paramètres dynamiques dans l’URL

Support des routes imbriquées et nested layouts

Possibilité de définir des guards (avant d’entrer ou de quitter une route)

Compatible avec les SPAs modernes et le SEO (avec SSR)

-->

<!-- 
📘 COURS 11 — Tester ses composants Vue

Tester ses composants est essentiel pour s’assurer que l’application fonctionne correctement et que les changements futurs n’introduisent pas de bugs.

1️⃣ Installer les outils de test

Pour tester les composants Vue, on utilise principalement Vitest, accompagné de jsdom et de @vue/test-utils :

npm i -D vitest jsdom @vue/test-utils


Vitest : un framework de test moderne inspiré de Jest, optimisé pour Vue 3

jsdom : simule un environnement DOM dans Node.js pour tester des composants front-end

@vue/test-utils : fournit des utilitaires pour monter et tester les composants Vue

2️⃣ Concepts de base pour les tests
a) describe()

Permet de regrouper plusieurs tests qui concernent le même composant ou la même fonctionnalité.

describe('Mon composant', () => {
  // tests ici
})

b) it() ou test()

Définit un cas de test spécifique.

it('doit afficher le texte correct', () => {
  // assertions ici
})

c) expect()

Permet de vérifier que la valeur d’une expression correspond à ce que l’on attend.

expect(wrapper.text()).toContain('Bonjour')

3️⃣ Exemple de test pour un composant Vue

Supposons un composant Hello.vue :

<template>
  <h1>Hello {{ name }}</h1>
</template>

<script setup>
const props = defineProps({
  name: String
})
</script>


On peut écrire un test comme suit :

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Hello from '../Hello.vue'

describe('Hello.vue', () => {
  it('affiche correctement le nom', () => {
    const wrapper = mount(Hello, {
      props: { name: 'Joseph' }
    })
    expect(wrapper.text()).toContain('Hello Joseph')
  })
})


mount() : monte le composant dans un environnement simulé

wrapper.text() : récupère le texte rendu par le composant

expect(...).toContain(...) : vérifie que le texte contient bien la chaîne attendue

4️⃣ Autres conseils

Tester les props : vérifier que le composant réagit correctement aux différentes valeurs passées en props

Tester les événements : utiliser wrapper.emitted() pour vérifier si un événement a été émis

Tester le DOM : vérifier si certains éléments existent ou ont certaines classes

Tester le comportement dynamique : par exemple les boutons cliquables, les formulaires, etc.
-->

<!-- 
 📘 COURS 11 – Pinia : Gestion d’état globale dans Vue.js

Pinia est le système officiel de gestion d’état global pour Vue.js (remplace Vuex).
Il permet de stocker des données partagées entre plusieurs composants, de façon propre, claire et très simple.

🔵 1. Pourquoi utiliser Pinia ? (Utilité)

Dans une application Vue, tu peux avoir plusieurs composants :

le composant A gère un compteur

le composant B a aussi besoin de ce compteur

le composant C doit modifier le compteur

👉 Sans Pinia, il faut passer les données de parent → enfant → enfant (props), ou remonter des événements (emit), ce qui devient vite compliqué.

👉 Avec Pinia :
Tu crées un store global, et tous les composants peuvent :

lire les données

modifier les données

réagir automatiquement aux changements

➡️ C’est comme un “ref global” partagé par l'application entière.

🔵 2. Installation de Pinia
✔️ Installer Pinia
bun add pinia
# ou npm i pinia
# ou yarn add pinia

🔵 3. Configuration dans main.js

C’est indispensable pour que Vue reconnaisse Pinia.

// main.js
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.mount("#app")

🔵 4. Créer un Store (l’équivalent d’une base de données locale)

Voici l’exemple le plus simple pour comprendre :

📁 /src/stores/counter.js
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0
  }),

  getters: {
    double: (state) => state.count * 2
  },

  actions: {
    increment() {
      this.count++
    }
  }
})

❤️ Explication simple
Partie	Rôle
state	équivalent des ref(), données stockées
getters	équivalent des computed, valeurs dérivées
actions	fonctions pour modifier le store (logique métier)

➡️ Pinia réunit ref + computed + fonctions dans un seul fichier global.

🔵 5. Utilisation du store dans un composant (Composition API)
<script setup>
import { useCounterStore } from "../stores/counter"

const counter = useCounterStore()

// counter.count
// counter.double
// counter.increment()
</script>

<template>
  <h2>Compteur : {{ counter.count }}</h2>
  <p>Double : {{ counter.double }}</p>

  <button @click="counter.increment">Incrémenter</button>
</template>

➜ Tous les composants qui appellent useCounterStore() partagent la même valeur.
🔵 6. Store plus complexe (objets, tableaux, utilisateurs…)
Exemple : store utilisateur
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      firstname: "",
      lastname: "",
      email: "",
    },
    isLogged: false,
  }),

  actions: {
    login(userData) {
      this.user = userData
      this.isLogged = true
    },
    logout() {
      this.user = {}
      this.isLogged = false
    }
  }
})

🔵 7. Les Plugins Pinia (extension du store)

Pinia peut être étendu avec des plugins.

Exemple que tu as vu :
➡️ pinia-plugin-persistedstate
Permet de sauvegarder automatiquement le store dans localStorage.

Installation
bun add pinia-plugin-persistedstate

Configuration
// main.js
import { createPinia } from "pinia"
import persistedState from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(persistedState)

app.use(pinia)

Utilisation dans un store
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0
  }),

  persist: true
})


➡️ Même si tu rafraîchis la page, la valeur reste sauvegardée 🎉.

🔵 8. Différence entre ref() et Pinia (rappel important)
ref()	Pinia
Pour une donnée locale à un composant	Pour des données globales
Utilisé dans un seul composant	Utilisé dans toute l’application
Composition API	API externe
Pas de persistance automatiquement	Peut retenir les données (plugins)
Pas de structure (juste des valeurs)	State + getters + actions
✔️ RÉSUMÉ À RETENIR

Pinia = store global

Partage les données entre plusieurs composants

Très simple : state, getters, actions

Facile à utiliser avec Vue 3 et <script setup>

Extensible avec des plugins (ex : sauvegarde automatique)

-->




