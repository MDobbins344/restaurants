<template>
    <div class="overflow-auto">
        <h1 style="margin-top: 30px">Restaurants</h1>

        <!-- Creates the table -->
        <b-table
                id="my-table"
                :items=items
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                striped hover
                style="margin-top: 30px"
                outlined
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
        ></b-table>

        <!-- Makes the page navigator at the bottom -->
        <b-pagination
                v-model="currentPage"
                :total-rows="filterPrices('38.9859436', '-76.9385856')"
                :per-page="perPage"
                aria-controls="my-table"
                align=center
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>


    </div>
</template>

<script>

    import Axios from "axios"
    import PricesCard from "../Homepage/PricesCard";
    const priceToUse = PricesCard.computed.chosenPrice()

    export default {
        data() {
            return {

                // Creates the sort for the table
                sortBy: 'name',
                sortDesc: false,
                fields: [
                    { key: 'PriceToDisplay', sortable: true },
                    { key: 'name', sortable: true },
                    { key: 'city', sortable: true },
                    { key: 'rating', sortable: true }
                ],

                // Manages number of items per page
                perPage: 12,
                currentPage: 1,
                items: [
                    this.filterPrices('38.9859436', '-76.9385856')
                ]
            }
        },
        methods: {
            // get prices
            filterPrices(lat, lon) {
                const data = {
                    price: priceToUse,
                    lat: lat,
                    lon: lon,
                };
                Axios.defaults.headers.common['Authorization'] = "MoKJW3BRtwjNrbrNZheYZBfaKaMuSOO9PsZNtcsq5h4tj_L6-Syuql" +
                    "URkVruEyiuOUB7WlAnQGhZt755N5yr5BiN4jhVzkW-Nsx2VFEtpqDoUvnL1QN41cg0c6pQXnYx";
                Axios.get('https://api.yelp.com/v3/businesses/search', data)
                    .then((res) => {
                        /*let businesses = res['businesses'];
                        var outBusinesses = [];
                        for (const b in businesses) {
                            if (b['price'] === priceToUse) {
                                outBusinesses.push(b);
                            }
                        }
                        return outBusinesses; */
                        console.dir(res)
                    })
                    .catch(() => {
                        console.log()
                        return [];
                    })
            }
        },
        computed: {
/*            PricetoDisplay() {
                return this.filterPrices('38.9859436', '-76.9385856').price
            },
            CitytoDisplay() {
                return this.filterPrices('38.9859436', '-76.9385856').city
            },
            ratingToDisplay() {
                return this.filterPrices('38.9859436', '-76.9385856').rating
            },
            nameToDisplay() {
                return this.filterPrices('38.9859436', '-76.9385856').name
            }*/

        }
    }
</script>

<style scoped>

</style>