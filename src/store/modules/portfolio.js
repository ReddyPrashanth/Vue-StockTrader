const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  'BUY_STOCK' (state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.find(element => element.id === stockId);
    if(record){
      record.quantity += quantity;
    }else{
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= quantity*stockPrice;
  },
  'SELL_STOCK' (state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.find(element => element.id === stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity;
    }else{
      state.stocks.splice(state.stocks.indexOf(stockId),1);
    }
    state.funds += quantity*stockPrice;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  funds: (state) =>{
    return state.funds;
  },
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        value: record.value,
        name: record.name
      }
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
