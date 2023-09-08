import {createStore,Store} from 'vuex'

interface RootState {
savingGoal : string;
moneyNeeded : number;
}

const store : Store<RootState> = createStore({
    state: {savingGoal: 'Enter your Saving Goal',
    moneyNeeded: 0

},
    mutations: {setSavingGoal(state, newGoal:string) {
    state.savingGoal = newGoal;
    },
 setMoneyNeeded(state, moneyNeeded) {
    state.moneyNeeded = moneyNeeded
 }


},
    actions: {},
    modules: {}
});

export default store;