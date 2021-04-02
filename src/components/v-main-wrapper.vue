<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <v-select
            :options="options"
            :selected="selected"
            @select="optionSelect"

        />
        <p>{{selected}}</p>
    </div>
</template>

<script>
    import vSelect from './v-select'

    export default {
        name: "v-main-wrapper",
        components: {
            vSelect
        },
        data() {
            return {
                options: [
                    {name: 'Options 1', value: 1},
                    {name: 'Options 2', value: 2},
                    {name: 'Options 3', value: 3}
                ],
                selected: 'Select'
            }
        },
        computed: {
        },
        methods: {
            optionSelect(option) {
                this.selected = option.name;
            }
        }
    }
</script>

<style lang="scss">

</style>