//jshint esversion:9
var moment = require('moment')

export const state = () => ({
  price: 0,
  attendees: {
    parents: 0,
    minors: 0,
    infants: 0,
    max: false
  },
  departureDate: null,
  returnDate: null,
  journeyType: 'return',
  holidayCreationFlowComplete: false,
})

export const mutations = {
  updateAttendees(state, {group, action}){
    if(!state.attendees.max) {
      if(action === 'decrease'){
        if(state.attendees[group] > 0){
          state.attendees[group]--
        }
      } else if(action === 'increase'){
        state.attendees[group]++
      }
    }
  },
  attendeesMax(state, {group, }){

  },
  updatePrice(state, price){
    state.price = price
  },
  updateDates(state, {date, type}){
    switch(type){
      case 'from':
        state.departureDate = date
        break;
      case 'to':
        state.returnDate = date
        break;
      default:
        break;
    }
  },
  updateJourneyType(state, data){
    state.journeyType = data
  },
  updateHolidayCreationFlow(state, data){
    state.holidayCreationFlowComplete = data
  }
}

export const actions = {
  amendAttendees({state, commit}, {group, action}){
    const attendees = state.attendees.parents + state.attendees.minors + state.attendees.infants
    if(attendees < 9 || (attendees === 9 & action !== 'increase')){
      if(group==='parents'||group==='infants'){
        const currentGroupValue = state.attendees[group]
        console.log(currentGroupValue)
        const newGroupValue = action==='increase' ? currentGroupValue + 1 : currentGroupValue -1
        let newAttendanceList = { parents: state.attendees.parents, minors: state.attendees.minors, infants: state.attendees.infants}
        console.log(newAttendanceList)
        newAttendanceList[group] = newGroupValue
        // console.log(newAttendanceList)
        if(newAttendanceList.infants / newAttendanceList.parents <= 1 || (newAttendanceList.parents === 0 && newAttendanceList.infants === 0)){
          commit('updateAttendees', {group, action})
        }
      } else {
        commit('updateAttendees', {group, action})
      }
    }
  },
  setDepartureDate({state, commit}, date){
    // if(date > new Date()){
    commit('updateDates', { date , type: 'from'})
  },
  setReturnDate({state, commit}, date){
    commit('updateDates', { date, type: 'to'})
  },
  setJourneyType({state, commit}, data){
    commit('updateJourneyType', data)
  },
  completePage({state, commit, rootState}){
    let errorList = []
    let { parents, minors, infants } = state.attendees
    const attendees = parents + minors + infants

    // Error Checks

    if(!rootState.chosenDeparturePoint){
      errorList.push({
        id: 1,
        mssg: 'You must choose a departure location!'
      })
    }
    if(!rootState.chosenDestinationPoint){
      errorList.push({
        id: 2,
        mssg: 'You must choose a destination location!'
      })
    }
    if(attendees < 1){
      errorList.push({
        id: 3,
        mssg: 'You must have atleast one person passenger!'
      })
    }
    if(attendees > 9){
      errorList.push({
        id: 4,
        mssg: 'You must not exceed more than 9 passengers!'
      })
    }
    if((minors / parents) > 1){
      errorList.push({
        id: 5,
        mssg: 'You must have one adult per infant!'
      })
    }
    if(parents < 1){
      errorList.push({
        id: 6,
        mssg: 'You must have atleast one parent!'
      })
    }
    if(!state.departureDate){
      errorList.push({
        id: 7,
        mssg: 'You must choose a departure date!'
      })
    }
    if(state.departureDate < new Date()){
      errorList.push({
        id: 8,
        mssg: 'The departure date must be after the the current date!'
      })
    }
    if (state.journeyType === 'return'){
      if(!state.returnDate){
        errorList.push({
          id: 9,
          mssg: 'You must choose a return date for a return journey!'
        })
      }
      if(state.returnDate < new Date()){
        errorList.push({
          id: 10,
          mssg: 'The return date must be after the current date!'
        })
      }
      if(state.departureDate > state.returnDate){
        errorList.push({
          id: 11,
          mssg: 'The return date must be after the departure date!'
        })
      }
    }

    if(errorList.length === 0){
      commit('updateHolidayCreationFlow', true)
    } else {

    }
  }
}

export const getters = {
  getAttendees: (state) => (group) => {
    return state.attendees[group]
  },
  getPrice: (state) => {
    return state.price
  },
  getDestinations: (state) => () => {
    return true
  },
  isSingleJourneySet: ({departureDate}) => {
    return !!departureDate
  },
  isReturnJourneySet: ({departureDate, returnDate}) => {
    return departureDate && returnDate
  },
  departureDate: ({departureDate}) => {
    return departureDate
  },
  returnDate: ({returnDate}) => {
    return returnDate
  },
  attendanceErrors: (state) => {
    let errorList = []
    const attendees = state.attendees.parents + state.attendees.minors + state.attendees.infants
    if(attendees === 9){
      errorList.push({ id: 1, mssg: "You've reached the maximum number of passengers!"})
    }
    if((state.attendees.infants / state.attendees.parents) === 1){
      errorList.push({ id: 2, mssg: "One infant per adult!"})
    }
    if((state.attendees.minors > 0 || state.attendees.infants > 0) && state.attendees.parents < 1){
      errorList.push({ id: 3, mssg: "There must be atleast one adult!"})
    }
    return errorList
  },
  passableQuantity: (state) => {
    const attendees = state.attendees.parents + state.attendees.minors + state.attendees.infants
    return (attendees > 0 && state.attendees.parents > 0)
  },
  getJourneyType: ({journeyType}) => {
    return journeyType
  },
  getIframeData: (state, getters, rootState) => {

    let errorList = []

    let holidayData = {
      departurePoint: rootState.departures.chosenDeparturePoint,
      destinationPoint: rootState.departures.chosenDestinationPoint,
      parents: state.attendees.parents,
      minors: state.attendees.minors,
      infants: state.attendees.infants,
      departureDate: state.departureDate,
      journeyType: state.journeyType,
      returnDate: state.returnDate
    }

    let newDate = new Date()

    let attendees = holidayData.parents + holidayData.minors + holidayData.infants

    if(!holidayData.departurePoint){
      errorList.push({
        id: 1,
        mssg: 'You must choose a departure location!'
      })
    }
    if(!holidayData.destinationPoint){
      errorList.push({
        id: 2,
        mssg: 'You must choose a destination location!'
      })
    }
    if(attendees < 1){
      errorList.push({
        id: 3,
        mssg: 'You must have atleast one person passenger!'
      })
    }
    if(attendees > 9){
      errorList.push({
        id: 4,
        mssg: 'You must not exceed more than 9 passengers!'
      })
    }
    if((holidayData.minors / holidayData.parents) > 1){
      errorList.push({
        id: 5,
        mssg: 'You must have one adult per infant!'
      })
    }
    if(holidayData.parents < 1){
      errorList.push({
        id: 6,
        mssg: 'You must have atleast one parent!'
      })
    }
    if(!holidayData.departureDate){
      errorList.push({
        id: 7,
        mssg: 'You must choose a departure date!'
      })
    }
    if(holidayData.departureDate < newDate.setDate(newDate.getDate() - 1)){
      errorList.push({
        id: 8,
        mssg: 'The departure date must be after the the current date!'
      })
    }
    if (holidayData.journeyType === 'return'){
      if(!holidayData.returnDate){
        errorList.push({
          id: 9,
          mssg: 'You must choose a return date for a return journey!'
        })
      }
      if(holidayData.returnDate < new Date()){
        errorList.push({
          id: 10,
          mssg: 'The return date must be after the current date!'
        })
      }
      if(holidayData.departureDate > holidayData.returnDate){
        errorList.push({
          id: 11,
          mssg: 'The return date must be after the departure date!'
        })
      }
    }


    if(errorList.length > 0) {
      return {errors: errorList}
    } else {
      let holidayFormattedData = {
        OBDepart: holidayData.departurePoint.DepCode,
        OBDate: moment(holidayData.departureDate).format('YYYYMMDD'),
        OBArrive: holidayData.destinationPoint.code,
        Class: 'Economy',
        Adults: holidayData.parents,
        Children: holidayData.minors,
        Infants: holidayData.infants
      }

      if(holidayData.journeyType === 'return')

      holidayFormattedData = {
        ...holidayFormattedData,
        IBDepart: holidayData.destinationPoint.code,
        IBDate: moment(holidayData.returnDate).format('YYYYMMDD'),
        IBArrive: holidayData.departurePoint.DepCode
      }

      return holidayFormattedData
    }

  }
}
