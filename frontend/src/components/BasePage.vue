<template>
    <div class="base-page-wrapper">
        <div class="base-title">
            Schedule Builder
        </div>

        <div class="base-body">
            <div class="each-child">
                <LeftForm @schedule="setSchedule($event)" />
            </div>

            <div class="each-child">
                <RightCol :suggestedSchedule="suggestedSchedule" />
            </div>
        </div>
    </div>
</template>

<script>
import LeftForm from './LeftForm.vue';
import RightCol from './RightCol.vue';

export default {
    name: 'BasePage',
    components: {
        LeftForm,
        RightCol
    },
    data() {
        return {
            suggestedSchedule: []
        }
    },
    methods: {
        setSchedule(schedule) {
            console.log("sch: ", schedule)
            this.suggestedSchedule = schedule;
        }
    }
}
</script>

<style scoped>
    .base-page-wrapper {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .base-title {
        height: 5%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.25vw;
        font-weight: 700;
        text-transform: uppercase;
    }

    .base-body {
        height: 90%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .each-child {
        width: 49%;
        height: 100%;
    }
</style>