<template>
    <div class="right-form-wrapper">
        <div class="right-form-title-row">
            <div class="title">
                Suggested Schedule
            </div>

            <JsonCSV
                :class="[disableDownloadBtn ? 'download-button download-button-disabled' : 'download-button']"
                :data   = "suggestedSchedule"
                :disabled="disableDownloadBtn"
                name    = "filename.csv">

                Download as CSV

            </JsonCSV>
        </div>

        <div class="right-form-body">
            <div class="no-suggestion-msg" v-if="!suggestedSchedule.length">
                Please fill the form on the left and click the create schedule button.
            </div>

            <div v-else class="form-body-wrapper">
                <div class="items-body">
                    <EachScheduleItem 
                        v-for="item in suggestedSchedule" 
                        :key="item.activity_name"
                        :scheduleItem="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EachScheduleItem from './EachScheduleItem.vue';
import JsonCSV from 'vue-json-csv'

export default {
    name: 'RightCol',
    components: {
        EachScheduleItem,
        JsonCSV
    },
    props: {
        suggestedSchedule: {
            type: Array,
            required: false
        }
    },
    computed: {
        disableDownloadBtn() {
            return !this.suggestedSchedule.length;
        }
    },
}
</script>

<style scoped>
    .right-form-wrapper {
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

    .right-form-title-row {
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

    .download-button {
        padding: 0.4vw 1vw;
        border-radius: 0.25vw;

        background-color: #2c3e50;
        border: 1px solid #2c3e50;

        color: #f2f2f2;
        text-transform: uppercase;
        font-size: 0.7vw;
        font-weight: 700;
        cursor: pointer;
    }
    .download-button-disabled {
        background-color: #575c62 !important;
        border: 1px solid #575c62 !important;;
        cursor: not-allowed !important;;
    }

    .right-form-body {
        height: 88%;
        padding: 0.5vw;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .no-suggestion-msg {
        font-size: 1vw;
        font-weight: 600;
    }

    .form-body-wrapper {
        height: 100%;
        width: 100%;
    }

    .items-body {
        height: 97%;
        width: 97%;
        padding: 0.5vw;

        overflow-y: auto;
    }
</style>