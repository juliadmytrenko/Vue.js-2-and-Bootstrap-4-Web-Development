import { firebaseAction } from 'vuexfire'
export default {
  setWorkingPomodoro ({commit, state}, workingPomodoro) {
    state.configRef.update({workingPomodoro})
  },
  setShortBreak ({commit, state}, shortBreak) {
    if (shortBreak) {
      state.configRef.update({shortBreak})
    }
  },
  setLongBreak ({commit, state}, longBreak) {
    if (longBreak) {
      state.configRef.update({longBreak})
    }
  },
  setTotalPomodoros ({commit, state}, totalPomodoros) {
    if (totalPomodoros) {
      state.statisticsRef.update({totalPomodoros})
    }
  },
  bindConfig: firebaseAction(({bindFirebaseRef, state}) => {
    bindFirebaseRef('config', state.configRef)
  }),
  bindStatistics: firebaseAction(({bindFirebaseRef, state}) => {
    bindFirebaseRef('statistics', state.statisticsRef)
  })
}
