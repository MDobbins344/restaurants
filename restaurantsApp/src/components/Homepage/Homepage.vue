<template>
    <div>
        <Welcome />
        <Filters />
    </div>

</template>

<script>
    import Welcome from "./Welcome";
    import Filters from "./Filters";
    export default {
        components: {Welcome, Filters},
        name: "Homepage"
    }
</script>

<style scoped>

</style>