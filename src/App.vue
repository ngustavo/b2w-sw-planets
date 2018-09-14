<template>
    <div>
        <headful title="StarWars Planets"></headful>
        <Main></Main>
    </div>
</template>

<script>
import Main from "./components/Main.vue"

export default {
    name: 'app',
    components: {
        Main
    }
}
</script>

<style lang="sass">
html
    width: 100%
    height: 100%
body
    height: 100%
    display: flex
    align-items: center
    justify-content: center
</style>

