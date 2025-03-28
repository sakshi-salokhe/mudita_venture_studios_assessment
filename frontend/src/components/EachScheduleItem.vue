<template>
    <div class="each-schedule-item-wrapper">
        <div class="top-row">
            {{ scheduleItem.time }} : {{ scheduleItem.activity_name }}
        </div>

        <div class="reason-row">
            Reason: {{ scheduleItem.reason }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'EachScheduleItem',
    props: {
        scheduleItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .each-schedule-item-wrapper {
        width: 95%;
        height: 5vw;
        padding: 1vw;
        margin-bottom: 0.5vw;

        background-color: #2c3e50a3;
        border-radius: 0.25vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25vw;
        align-items: center;
        color: #f2f2f2;
    }

    .top-row {
        font-size: 1vw;
        font-weight: 700;
        text-transform: capitalize;
    }

    .reason-row {
        text-transform: capitalize;
        font-size: 0.8vw;
        color: #b7b7b7;
    }
</style>