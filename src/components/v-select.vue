<template>
    <div class="v-select">
        <p class="title"
            @click="areOptionsVisible = !areOptionsVisible"
        >{{selected}}</p>
        <div class="options"
            v-if="areOptionsVisible"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-select",
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(data) {
                this.$emit('select', data)
                this.areOptionsVisible = false;
            },
            hideSelect() {
                this.areOptionsVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true )
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss">
    .v-select {
        position: relative;
        width: 200px;
        cursor: pointer;
    }
    .v-select p {
        margin: 0;
    }
    .title{
        border: 1px solid grey;

    }
    .options{
        border: 1px solid grey;
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
    }
    .options p:hover {
        background: antiquewhite;
    }
</style>