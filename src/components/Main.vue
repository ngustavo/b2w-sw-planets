<template>
    <div class="container">
        <div class="spin"
             v-if="spin">
            <icon name="spinner" pulse></icon>
        </div>
        <Planet :data="planet"></Planet>
        <button
            class="btn btn-success"
            @click="getRandomPlanet">
            Next
        </button>
        <div class="err"
             v-if="err">
            {{ err.message }}
            <br>Try again
        </div>
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
            err: null,
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
            this.spin = true
            this.err = null
            const url = `${this.apiUrl}/planets/`
            const res = await fetch(url).catch(err => this.err = err)
            if(res.ok){
                const data = await res.json().catch(err => this.err = err)
                this.planetCount = data.count
                console.log("count", data.count)
            }
            this.spin = false
        },
        async getRandomPlanet(){
            this.spin = true
            this.err = null
            const count = Math.floor(this.planetCount)
            const random = Math.floor(Math.random() * count) || 1
            console.log("random", random)
            const url = `${this.apiUrl}/planets/${random}`
            const res = await fetch(url).catch(err => this.err = err)
            if(res.ok){
                const data = await res.json().catch(err => this.err = err)
                this.planet = data
                console.log("planet", data)
            }
            this.spin = false
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    color: green
    
.container
    text-align: center

.container .spin
    margin-bottom: 30px

.container .err
    margin-top: 30px

</style>




