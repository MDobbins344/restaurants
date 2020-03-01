<template>

    <!-- Creates the 3 components that hold location, prices, and ratings -->
    <div>
        <b-card-group deck>
            <LocationCard />
            <PricesCard />
            <RatingsCard />
        </b-card-group>
    </div>
</template>

<script>
    import LocationCard from "./LocationCard";
    import PricesCard from "./PricesCard";
    import RatingsCard from "./RatingsCard";
    export default {
        components: {RatingsCard, PricesCard, LocationCard},
        name: "Filters"
    }
</script>

<style scoped>
    .card-deck {
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 15px;
    }
</style>