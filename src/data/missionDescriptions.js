import { MANDRAKE_COUNT } from '../event/drystan'
import { MAGIC_STONES } from '../event/princess'
import { WATER_COUNT } from '../event/marianne'
import { KELUNNE_COUNT } from '../event/allsRight'
import { APPLES_COUNT } from '../event/lute'

export default {
  m0_1 (state) {
    const base = t('missionDescription.m0_1.base')
    const first = t('missionDescription.m0_1.first')
    const second = t('missionDescription.m0_1.second')
    if (state.event.m0_1.completed) return base
    return state.allowed_area === 0 ? `${base}\n${first}` : `${base}\n${second}`
  },
  m1_1 (state) {
    const base = t('missionDescription.m1_1.base')
    const found = ['d1', 'd2', 'd3', 'd4', 'd5'].filter(key => state.event.m1_1[key]).length
    const cnt = t('missionDescription.m1_1.cnt', { current: found })
    return state.event.m1_1.completed ? base : `${base}\n${cnt}`
  },
  m1_2 (state) {
    const base = t('missionDescription.m1_2.base')
    if (state.event.m1_2.completed) return base
    const started = t('missionDescription.m1_2.started')
    const solved = t('missionDescription.m1_2.solved')
    return state.event.m1_2.solved ? `${base}\n${solved}` : `${base}\n${started}`
  },
  m1_3 (state) {
    const base = t('missionDescription.m1_3.base')
    const cnt = t('missionDescription.m1_3.cnt', { current: state.event.m1_3.count, max: MANDRAKE_COUNT })
    return state.event.m1_3.completed ? base : `${base}\n${cnt}`
  },
  m1_4 (state) {
    const base = t('missionDescription.m1_4.base')
    const bear = t('missionDescription.m1_4.bear')
    const solved = t('missionDescription.m1_4.solved')
    if (state.event.m1_4.completed) return base
    return `${base}\n${state.event.m1_4.solved ? solved : bear}`
  },
  m2_1 (state) {
    const base = t('missionDescription.m2_1.base')
    const wip = t('missionDescription.m2_1.wip')
    const cnt = t('missionDescription.m2_1.wine', { current: state.event.m2_1.wine.length })
    if (state.event.m2_1.completed) return base
    return `${base}\n${wip}\n${cnt}`
  },
  m2_2 (state) {
    const base = t('missionDescription.m2_2.base')
    const cnt = t('missionDescription.m2_2.cnt', { current: state.event.m2_2.count, max: MAGIC_STONES })
    return state.event.m2_2.completed ? base : `${base}\n${cnt}`
  },
  m2_3 (state) {
    const base = t('missionDescription.m2_3.base')
    const wip = t('missionDescription.m2_3.wip')
    const solved = t('missionDescription.m2_3.solved')
    if (state.event.m2_3.completed) return base
    return `${base}\n${state.event.m2_3.solved ? solved : wip}`
  },
  m2_4 (state) {
    const base = t('missionDescription.m2_4.base')
    const search = t('missionDescription.m2_4.search')
    const solved = t('missionDescription.m2_4.solved')
    if (state.event.m2_4.completed) return base
    if (state.event.m2_4.solved) return `${base}\n${solved}`
    if (state.event.m2_4.search) return `${base}\n${search}`
    return base
  },
  m3_1 (state) {
    const base = t('missionDescription.m3_1.base')
    const started = t('missionDescription.m3_1.started')
    const solved = t('missionDescription.m3_1.solved')
    const completed = t('missionDescription.m3_1.completed')
    if (state.event.m3_1.completed) return `${base}\n${completed}`
    if (state.event.m3_2.completed) return `${base}\n${solved}`
    return `${base}\n${started}`
  },
  m3_2 (state) {
    const base = t('missionDescription.m3_2.base')
    const started = t('missionDescription.m3_2.started')
    const cnt = t('missionDescription.m3_2.cnt', { current: state.event.m3_2.count, max: WATER_COUNT })
    if (state.event.m3_2.completed) return base
    return `${base}\n${started}\n${cnt}`
  },
  m3_3 (state) {
    const base = t('missionDescription.m3_3.base')
    const started = t('missionDescription.m3_3.started')
    const solved = t('missionDescription.m3_3.solved')
    if (state.event.m3_3.completed) return base
    if (state.event.m3_3.solved) return `${base}\n${solved}`
    return `${base}\n${started}`
  },
  m3_4 (state) {
    const base = t('missionDescription.m3_4.base')
    const started = t('missionDescription.m3_4.started')
    const cnt = t('missionDescription.m3_4.cnt', { current: state.event.m3_4.ghosts.length })
    if (state.event.m3_4.completed) return base
    return `${base}\n${started}\n${cnt}`
  },
  m3_5 (state) {
    const base = t('missionDescription.m3_5.base')
    const started = t('missionDescription.m3_5.started')
    return state.event.m3_5.completed ? base : `${base}\n${started}`
  },
  m4_1 (state) {
    const base = t('missionDescription.m4_1.base')
    const started = t('missionDescription.m4_1.started')
    return state.event.m4_1.completed ? base : `${base}\n${started}`
  },
  m4_2 (state) {
    const base = t('missionDescription.m4_2.base')
    const started = t('missionDescription.m4_2.started')
    const cnt = t('missionDescription.m4_2.cnt', { current: state.event.m4_2.count, max: KELUNNE_COUNT })
    return state.event.m4_2.completed ? base : `${base}\n${started}\n${cnt}`
  },
  m4_3 (state) {
    const base = t('missionDescription.m4_3.base')
    const started = t('missionDescription.m4_3.started')
    const talked = t('missionDescription.m4_3.talked')
    if (state.event.m4_3.completed) return base
    return state.event.m4_3.talked ? `${base}\n${talked}` : `${base}\n${started}`
  },
  m4_4 (state) {
    const base = t('missionDescription.m4_4.base')
    const started = t('missionDescription.m4_4.started')
    const cnt = t('missionDescription.m4_4.cnt', { current: state.event.m4_4.apples.length, max: APPLES_COUNT })
    return state.event.m4_4.completed ? base : `${base}\n${started}\n${cnt}`
  },
  m4_5 (state) {
    const base = t('missionDescription.m4_5.base')
    const started = t('missionDescription.m4_5.started')
    return state.event.m4_5.completed ? base : `${base}\n${started}`
  },
  m5_1 (_state) {
    const base = t('missionDescription.m5_1.base')
    const started = t('missionDescription.m5_1.started')
    return `${base}\n${started}`
  }
}
