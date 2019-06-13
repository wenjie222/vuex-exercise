import Vue from 'vue';//引入vue
import Vuex from 'vuex';//引入vuex
//使用vuex
Vue.use(Vuex);

// const state = {//要设置的全局访问的state对象
// 	showFooter:true,
// 	changableNum:0
// 	//要设置的初始属性值
// };
// const getters = {//实时监听state值的改变
// 	isShow(state){
// 		return state.showFooter
// 	},
// 	getChangeNum(){
// 		return state.changableNum
// 	}
// };
// const mutations = {
// 	show(state){//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
// 		state.showFooter = true;
// 	},
// 	hide(state){
// 		state.showFooter = false;
// 	},
// 	newNum(state,sum){
// 		state.changableNum + = sum;//同上，这里面的参数除了state之外还传了需要增加的值sum
// 	}

// };
// const actions = {
// 	hideFooter(context){//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
// 		context.commit('hide');
// 	},
// 	showFooter(context){
// 		context.commit('show');
// 	},
// 	getNewNum(context,num){//同上注释，num为要变化的形参
// 		context.commit('newNum',num);
// 	}
// };
//创建Vuex实例
const store = new Vuex.Store({
	state:{
		count:1
	},
	getters:{
		getStateCount:function(state){
			return state.count+1;
		}
	},
	mutations:{
		add(state){
			state.count=state.count+1;
		},
		reduction(state,n){
			state.count=state.count-n;
		}
	},
	actions:{
		addFun(context){
			context.commit("add");
		},
		reductionFun(context,n){
			context.commit("reduction",n);
		}
	}
	// },
	// getters,
	// mutations,
	// actions
})

export default store