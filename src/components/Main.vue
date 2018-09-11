<template>
    <div class="container">
        <Planet></Planet>
        <button class="btn btn-success">
            Next
        </button>
    </div>
</template>

<script>
import Planet from "./Planet"
export default {
    components: {
        Planet
    }
}
</script>

<style lang="sass" scoped>
h1
    color: green
    
.container
    text-align: center

</style>




