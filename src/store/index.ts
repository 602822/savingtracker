import {createStore,Store} from 'vuex'

interface RootState {
savingGoal : string;
moneyNeeded : number;
selectedImageUrl : string;
moneySaved: number;
showConfetti: boolean;


}

const initialState: RootState = {
   savingGoal: 'Enter your Saving Goal',
   moneyNeeded: 0,
   selectedImageUrl: "",
   moneySaved: parseInt(localStorage.getItem("moneySaved") || "0"),
   showConfetti: false,

 };

const store : Store<RootState> = createStore({
    state: initialState,
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

 showConfetti(state) {
   state.showConfetti = true
 },



 

},
    actions: {},
    modules: {}
});

export default store;