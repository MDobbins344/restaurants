<template>
    <!-- Creates location component -->
    <b-card bg-variant="light"
            border-variant="info"
            title="Location">

        <hr class="my-4">

        <!-- This section uses HTML5 Geolocation to determine user location and return
                restaurants based on that. -->
        <b-card-text>
            Click the button below to take a look at restaurants near you.
        </b-card-text>
        <div>
            <b-button variant="success">Near You</b-button>
        </div>

        <hr class="my-4">

        <!-- This section allows user to search by ZIP code -->
        <b-card-text style="margin-top: 20px">
            You can also search by ZIP code.
        </b-card-text>
        <div>
            <b-form-input style="margin-bottom: 20px;" placeholder="Enter ZIP code"></b-form-input>
        </div>
        <div>
            <b-button variant="success">Go</b-button>
        </div>
    </b-card>
</template>

<script>
    export default {
        name: "LocationCard"
    }
</script>

<style scoped>

</style>