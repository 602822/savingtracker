import {createStore,Store} from 'vuex'

interface RootState {
savingGoal : string;
moneyNeeded : number;
selectedImageUrl : string;
}

const store : Store<RootState> = createStore({
    state: {savingGoal: 'Enter your Saving Goal',
    moneyNeeded: 0,
    selectedImageUrl: "",

},
    mutations: {setSavingGoal(state, newGoal:string) {
    state.savingGoal = newGoal
    },
 setMoneyNeeded(state, moneyNeeded) {
    state.moneyNeeded = moneyNeeded
 },

 setImageUrl (state, imageUrl) {
    state.selectedImageUrl = imageUrl
 },

},
    actions: {},
    modules: {}
});

export default store;