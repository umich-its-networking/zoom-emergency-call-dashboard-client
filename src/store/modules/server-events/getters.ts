import { GetterTree } from "vuex";
import { ServerEventResponse, ServerEventState } from "./interfaces";
import { RootState } from "@/store/interfaces";

export const getters: GetterTree<ServerEventState, RootState> = {
    getEvents(state): ServerEventResponse[] {
        return state.receivedEvents.sort((a, b) => (a.event_ts > b.event_ts) ? 1 : -1)
    },
    getConnectionStatus(state) {
        return state.connectionStatus
    }
}