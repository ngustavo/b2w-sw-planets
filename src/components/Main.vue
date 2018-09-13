<template>
    <div class="container">
        <div
            class="icon"
            v-if="spin">
            <icon name="spinner" pulse></icon>
        </div>
        <Planet :data="planet"></Planet>
        <button
            class="btn btn-success"
            @click="getRandomPlanet">
            Next
        </button>
    </div>
</template>

<script>
import Planet from "./Planet"

export default {
    components: {
        Planet
    },
    data(){
        return {
            apiUrl: "https://swapi.co/api",
            spin: false,
            planetCount: 0,
            planet: {}
        }
    },
    async created(){
        await this.getPlanetCount()
        this.getRandomPlanet()
    },
    methods: {
        async getPlanetCount(){
            const url = `${this.apiUrl}/planets/`
            const res = await fetch(url)
            const data = await res.json()
            this.planetCount = data.count
            window.console.log("count", data.count)
        },
        async getRandomPlanet(){
            this.spin = true
            const count = Math.floor(this.planetCount)
            const random = Math.floor(Math.random() * count)
            window.console.log("random", random)
            const url = `${this.apiUrl}/planets/${random}`
            const res = await fetch(url)
            const data = await res.json()
            this.planet = data
            this.spin = false
            window.console.log("planet", data)
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    color: green
    
.container
    text-align: center

.icon
    margin-bottom: 30px 0

</style>




