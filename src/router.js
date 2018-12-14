import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SchedulerTable from './components/SchedulerTable'
import Organizer from './components/Organizer'
import OrganizerCreateScheduler from './components/forms/OrganizerCreateSchedule'
import OrganizerDeleteScheduler from './components/forms/OrganizerDeleteSchedule'
import OrganizerOpenTimeSlot from './components/forms/OrganizerOpenTimeSlot'
import OrganizerCloseTimeSlot from './components/forms/OrganizerCloseTimeSlot'
import OrganizerCancelMeeting from './components/forms/OrganizerCancelMeeting'
import OrganizerExtendStartDate from './components/forms/OrganizerExtendStartDate'
import OrganizerExtendEndDate from './components/forms/OrganizerExtendEndDate'
import ShowWeekSchedule from './components/forms/ShowWeekSchedule'

import Participant from './components/Participant'
import ParticipantCreateMeeting from './components/forms/ParticipantCreateMeeting'
import ParticipantCancelMeeting from './components/forms/ParticipantCancelMeeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: SchedulerTable,
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: Organizer,
      children: [
        { path: 'createschedule', component: OrganizerCreateScheduler },
        { path: 'deleteschedule', component: OrganizerDeleteScheduler },
        { path: 'opentimeslot', component: OrganizerOpenTimeSlot },
        { path: 'closetimeslot', component: OrganizerCloseTimeSlot },
        { path: 'cancelmeeting', component: OrganizerCancelMeeting },
        { path: 'extendstartdate', component: OrganizerExtendStartDate },
        { path: 'extendenddate', component: OrganizerExtendEndDate },
        { path: 'showweekschedule', component: ShowWeekSchedule }]
    },
    {
      path: '/participant',
      name: 'participant',
      component: Participant,
      children: [
        { path: 'createmeeting', component: ParticipantCreateMeeting },
        { path: 'cancelmeeting', component: ParticipantCancelMeeting },
        { path: 'showweekschedule', component: ShowWeekSchedule }]
    }
  ]
})
