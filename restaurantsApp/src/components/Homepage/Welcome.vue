<template>
    <div>
        <b-jumbotron bg-variant="light"
                     border-variant="info"
                     header-level="4">

            <template v-slot:header>Welcome to Easy First Choice</template>

            <template v-slot:lead>
                Us here at Easy First Choice are here to help you pick out a restaurant for tonight, tomorrow,
                or whatever day you want, as long as it isn't yesterday!
            </template>

            <hr class="my-4">

            <p>
                Click the button below to take a look at restaurants.
            </p>

            <b-button variant="success" href="#">Explore</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>
    .jumbotron {
        margin-right: 225px;
        margin-left: 225px;
        margin-top: 45px;
        margin-bottom: 45px;
    }
</style>