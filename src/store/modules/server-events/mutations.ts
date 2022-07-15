import { MutationTree } from "vuex";
import { ServerEventResponse, ServerEventState } from "./interfaces";

export const mutations: MutationTree<ServerEventState> = {
    addServerEvent(state, event: ServerEventResponse) {
        console.log("mutations", event, state.receivedEvents)
        state.receivedEvents = [...state.receivedEvents, event];
    },
    setConnectionStatus(state, status: boolean) {
        state.connectionStatus = status;
    }
}