//jshint esversion:9

export const state = () => ({
  sections: [{
      id: 1,
      status: 'open',
      complete: false
    },
    {
      id: 2,
      status: 'open',
      complete: false
    },
    {
      id: 3,
      status: 'open',
      complete: false
    }],
    editable: true
})

export const mutations = {
  completeSection(state, sectionKey){
    let currentSectionKey = -1
    state.sections = state.sections.map((section) => {
        currentSectionKey++
        if(sectionKey > currentSectionKey){
          section.status = 'edit'
          return {
            ...section
          }
        } else if (sectionKey === currentSectionKey){
          return {
            status: 'edit',
            complete: true
          }
        } else if((sectionKey + 1) === currentSectionKey){
          section.status = 'open'
          return {
            ...section
          }
        } else if(sectionKey < currentSectionKey){
          section.status = 'edit'
          return {
            ...section
          }
        }
      })
  },
  editSection(state, sectionKey){
    let currentSectionKey = -1
    state.sections = state.sections.map((section) => {
      currentSectionKey++
      if(sectionKey > currentSectionKey || sectionKey < currentSectionKey){
        section.status = 'edit'
        return {
          ...section
        }
      } else {
        section.status = 'open'
        return {
          ...section
        }
      }
    })
  }
}

export const actions = {
  completeSection(context, sectionKey){
    context.commit('completeSection', sectionKey)
  },
  editSection(context, sectionKey){
    context.commit('editSection', sectionKey)
  }
}

export const getters = {
  getSections: (state) => {
    return state.sections
  },
  isStarting: (state) => {
    return !state.sections[0].complete
  },
  currentPosition: (state) => {
    let i = 0
    for(let section of state.sections){
      console.log(section)
      if(!section.complete){
        return i
        break
      }
      i++
    }
  },
  isEditable: (state, getters, rootState, rootGetters) => {
    if(rootGetters['datastore/passableQuantity'] && rootGetters['departures/travelPointsSet']){
      return true
    } else {
      return false
    }
  }
}
