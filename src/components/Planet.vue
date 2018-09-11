<template>
    <div class="card">
        <div class="card-header" v-once>
            Planet {{ msg }}
        </div>
        <div class="card-body">
            <p class="card-text">
                Population: {{ population }}
            </p>
            <p class="card-text">
                Climate: {{ climate }}
            </p>
            <p class="card-text">
                Terrain: {{ terrain }}
            </p>
            <p class="card-text">
                Featured in {{ featured }} films
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: "Planet Name",
        population: 999,
        climate: "Arid",
        terrain: "Desert",
        featured: 9
    })
}
</script>

<style lang="sass" scoped>
.card
    margin: 2rem auto
    width: 18rem

.card-header
    font-weight: bold
    font-size: 1.3rem

.card-body
    text-align: start
    padding-left: 2.5rem
    
</style>

