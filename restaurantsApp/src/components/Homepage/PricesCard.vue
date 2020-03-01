<template>
    <!-- Creates price levels component -->
    <b-card bg-variant="light"
            border-variant="info"
            title="Price Levels">

        <hr class="my-4">

        <!-- Allows users to filter out restaurants based on the number of stars they have -->
        <b-card-text>
            Filter restaurants by price levels.
        </b-card-text>
        <div>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div>
            <b-button style="margin-top: 25px" variant="success">Go</b-button>
        </div>
    </b-card>
</template>

<script>
    export default {
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Please select a price level' },
                    { value: 'a', text: '$' },
                    { value: 'b', text: '$$' },
                    { value: { C: '3PO' }, text: '$$$' },
                    { value: 'd', text: '$$$$' }
                ]
            }
        },
        name: "PricesCard"
    }
</script>

<style scoped>

</style>