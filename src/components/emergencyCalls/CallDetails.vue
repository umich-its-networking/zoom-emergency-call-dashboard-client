<template>
    <div class="card text-center mb-5">
        <div class="card-header">
            Received {{ ElapsedTimeSinceCallReceived }}
        </div>
        <div class="card-body">
            Caller Phone Number: <b>{{ callData?.payload.object.caller.phone_number }}</b><br>
            Caller Name: <b>{{ callData?.payload.object.caller.display_name }}</b><br>
            Callee Phone Number: {{ callData?.payload.object.callee.phone_number }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ServerEventResponse } from '../../store/modules/server-events/interfaces';
import moment from "moment";


export default defineComponent({
  name: 'CallDetails',
  props: {
    callData: Object as () => ServerEventResponse
  },
  computed: {
    ElapsedTimeSinceCallReceived() {
        return this.callData ? moment(this.callData.event_ts).fromNow() : null
    }
  },
});
</script>