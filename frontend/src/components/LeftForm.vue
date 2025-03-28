<template>
    <div class="left-form-wrapper">
        <div class="left-form-title-row">
            <div class="title">
                Enter activity details
            </div>

            <button class="create-schedule-button">Create Schedule</button>
        </div>

        <div class="left-form-body">

        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftForm'
}
</script>

<style scoped>
    .left-form-wrapper {
        width: 100%;
        height: 100%;
        
        border-radius: 0.5vw;
        background-color: rgba(165, 165, 165, 0.65);

        color: #1f2c38;
        font-weight: 500 !important;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .left-form-title-row {
        height: 5%;
        padding: 0.5vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
    }

    .title {
        width: 70%;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 1vw;
        font-weight: 600;
        
        overflow-wrap: break-word;
    }

    .create-schedule-button {
        padding: 0.4vw 1vw;
        border-radius: 0.25vw;

        background-color: #2c3e50;
        border: 1px solid #2c3e50;

        color: #f2f2f2;
        text-transform: uppercase;
        font-weight: 700;
    }

    .left-form-body {
        height: 88%;

        padding: 0.5vw;
    }
</style>