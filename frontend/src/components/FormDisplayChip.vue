<template>
    <div class="form-chip-wrapper">
        <div class="form-chip-display-msg">
            {{displayMessage}}
        </div>

        <button class="delete-button">
            Delete
        </button>
    </div>
</template>

<script>
export default {
    name: 'FormDisplayChip',
    props: {
        displayMessage: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .form-chip-wrapper {
        width: 95%;
        height: 4vw;
        padding: 0 1vw;
        margin-bottom: 0.5vw;

        background-color: #2c3e50a3;
        border-radius: 0.25vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #f2f2f2;
    }

    .form-chip-display-msg {
        width: 75%;
        padding: 0.25vw 0.75vw;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        text-transform: capitalize;
        overflow-wrap: break-word;
    }

    .delete-button {
        height: max-content;
        width: 20%;
        padding: 0.4vw 1vw;
        border-radius: 0.25vw;

        background-color: #2c3e50;
        border: 1px solid #2c3e50;

        color: #f2f2f2;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
    }
    .delete-button:disabled {
        background-color: #575c62;
        border: 1px solid #575c62;
        cursor: not-allowed;
    }
</style>