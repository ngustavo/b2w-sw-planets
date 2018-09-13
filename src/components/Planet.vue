<template>
    <div class="card">
        <div class="card-header">
            {{ data.name }}
        </div>
        <div class="card-body">
            <p class="card-text">
                <strong>Population:</strong> {{ data.population }}
            </p>
            <p class="card-text">
                <strong>Climate:</strong> {{ data.climate }}
            </p>
            <p class="card-text">
                <strong>Terrain:</strong> {{ data.terrain }}
            </p>
            <p class="card-text">
                Featured in <strong>{{ data.films ? data.films.length : 0}}</strong> films
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
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

