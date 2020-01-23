export const state = () => ({
  section1Open: false,
  section2Open: false,
  section3Open: false,
  section4Open: false,
})

export const mutations = {
  changeSection(state, section){
    state[section] = !state[section]
  }
}

export const actions = {
  changeSection(context, section){
    context.commit('changeSection', section)
  }
}

export const getters = {
  isSectionOpen: (state) => (sectionId) => {
    return state[sectionId]
  }
}
