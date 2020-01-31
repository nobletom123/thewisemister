import axios from 'axios'

export const state = () => ({
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  subject: null,
  message: null,
  outcome: null
})

export const mutations = {
  updateState(state, {attr, val}){
    state[attr] = val
  },
  updateOutcome(state, val){
    state.outcome = val
  }
}

export const actions = {
  sendInquiry({state, commit}){
    console.log('test')
    axios.post('https://tranquil-caverns-13951.herokuapp.com/', {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      subject: state.subject,
      message: state.message,
    })
    .then((response) => {
      commit('updateOutcome', 'successful')
    })
    .catch((err) => {
      commit('updateOutcome', 'error')
    })
  },
  setAttribute({commit}, {attr, val}){
    commit('updateState',{attr, val})
  }
}

export const getters = {
  getAttribute: (state) => (attr) => {
    return state[attr]
  },
  inquiryOutcome: (state) => {
    return state.outcome
  }
}
