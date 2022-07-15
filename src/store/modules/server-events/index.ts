import { RootState } from "@/store/interfaces";
import { Module } from "vuex";
import { ServerEventState } from "./interfaces";

import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const namespaced = true;

export const serverEvents: Module<ServerEventState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}