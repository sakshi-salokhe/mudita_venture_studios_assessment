<template>
    <div class="left-form-wrapper">
        <div class="left-form-title-row">
            <div class="title">
                Enter activity details
            </div>

            <button 
                class="create-schedule-button" 
                :disabled="disableCreateScheduleBtn"
                @click="createSchedule"
            >
                Create Schedule
            </button>
        </div>

        
        <div class="left-form-body">
            <VueSpinner v-if="isLoading" size="50" color="#2c3e50" />
            
            <div class="form-body-wrapper" v-else>
                <div class="input-wrapper">
                    <textarea 
                        rows="5" placeholder="Add activity here" 
                        :disabled="isLoading"
                        v-model="activityText"
                    />
                    <button 
                        class="add-button" 
                        :disabled="disableAddBtn"
                        @click="addActivityText"
                    >
                        Add
                    </button>
                </div>

                <div class="items-body">
                    <FormDisplayChip 
                        v-for="activity in allActivities" 
                        :key="activity"
                        :displayMessage="activity"
                        @delete-activity="deleteActivity(activity)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormDisplayChip from './FormDisplayChip.vue';
import axios from 'axios';
import { VueSpinner } from 'vue3-spinners';

export default {
    name: 'LeftForm',
    components: {
        VueSpinner,
        FormDisplayChip
    },
    data() {
        return {
            activityText: '',
            allActivities: [],
            hasError: false,
            isLoading: false
        }
    },
    emits: ['schedule'],
    computed: {
        disableAddBtn() {
            return this.activityText.trim() === '' || this.isLoading;
        },
        disableCreateScheduleBtn() {
            return !this.allActivities.length || this.isLoading;
        }
    },
    methods: {
        addActivityText() {
            this.hasError = false;
            this.allActivities.push(this.activityText);
            this.activityText = '';

            this.$emit('schedule', []);
        },
        deleteActivity(activity) {
            this.hasError = false;
            this.allActivities = this.allActivities.filter((item) => item !== activity);

            this.$emit('schedule', []);
        },
        async createSchedule() {
            this.isLoading = true;
            try {
                const response = await axios.post('/schedule-builder', {
                    scheduleItems: this.allActivities
                });

                const finalSchedule = response.data.response.activity_order;
                this.$emit('schedule', finalSchedule);
            } catch (error) {
                this.hasError = true;
            } finally {
                this.isLoading = false;
            }
        }
    }
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
        cursor: pointer;
    }
    .create-schedule-button:disabled {
        background-color: #575c62;
        border: 1px solid #575c62;
        cursor: not-allowed;
    }

    .left-form-body {
        height: 88%;
        padding: 0.5vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .form-body-wrapper {
        height: 100%;
        width: 100%;
    }
    .input-wrapper {
        height: 9%;
        width: 97%;
        padding: 0.5vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    textarea {
        background-color: inherit;
        border: 1px solid #2c3e50;
        outline: none;

        width: 75%;
    }
    textarea::placeholder{
        color: #c2c2c2;
        padding: 0.25vw;
    }

    .add-button {
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
    .add-button:disabled {
        background-color: #575c62;
        border: 1px solid #575c62;
        cursor: not-allowed;
    }

    .items-body {
        height: 82%;
        width: 97%;
        padding: 0.5vw;

        overflow-y: auto;
    }
</style>