import { ActionTree } from "vuex";
import { ServerEventState } from "./interfaces";
import { RootState } from "@/store/interfaces";

export const actions: ActionTree<ServerEventState, RootState> = {
    listenForEvents({ commit }) {
        const source = new EventSource('http://localhost:8004/dashboard');
        source.addEventListener('open', () => {
          console.log("SSE Connection Opened!");
          commit('setConnectionStatus', true)
        });
    
        source.addEventListener('message', (e) => {
          if (e.data.length > 2) {
            commit('addServerEvent', JSON.parse(e.data))
          }
        });

        source.addEventListener('disconnect', (e) => {
          commit('setConnectionStatus', false);
        })
    
        source.addEventListener('error', (e) => {
          console.error(e);
          commit('setConnectionStatus', false);
        });

        source.addEventListener('ping', (e) => {
          console.log('ping')
        })
    }
}