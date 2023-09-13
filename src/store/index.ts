import {createStore,Store} from 'vuex'

interface RootState {
savingGoal : string;
moneyNeeded : number;
selectedImageUrl : string;
moneySaved: number;
}

const store : Store<RootState> = createStore({
    state: {savingGoal: 'Enter your Saving Goal',
    moneyNeeded: 0,
    selectedImageUrl: "",
    moneySaved: 0,

},
    mutations: {setSavingGoal(state, newGoal:string) {
    state.savingGoal = newGoal
    },
 setMoneyNeeded(state, moneyNeeded: number) {
    state.moneyNeeded = moneyNeeded
 },

 setImageUrl (state, imageUrl:string) {
    state.selectedImageUrl = imageUrl
 },

 addMoneySaved(state, moneySaved : number) {
    state.moneySaved += moneySaved
 },

},
    actions: {},
    modules: {}
});

export default store;