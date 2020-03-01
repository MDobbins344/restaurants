<template>
    <!-- Creates hours component -->
    <b-card bg-variant="light"
            border-variant="info"
            title="Ratings">

        <hr class="my-4">

        <b-card-text>
            Filter restaurants by the given ratings.
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
                    { value: null, text: 'Please choose a ratings filter' },
                    { value: 'a', text: '5 stars' },
                    { value: 'b', text: '4+ stars' },
                    { value: { C: '3PO' }, text: '3+ stars' },
                    { value: 'd', text: '2+ stars'},
                    { value: 'e', text: 'All restaurants' }
                ]
            }
        },
        name: "RatingsCard"
    }
</script>

<style scoped>

</style>