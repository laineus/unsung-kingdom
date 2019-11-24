import { MANDRAKE_COUNT } from '../event/drystan'

export default {
  m0_1 (state) {
    const base = 'エドガー王の暗殺を阻止するため、暗殺現場とされる王城の裏庭へ向かう。'
    const first = '王城の裏庭への行き方を街の人に訪ねよう。'
    const second = '街の外へ出て王城の裏庭へ向かおう。'
    if (state.event.m0_1.completed) return base
    return state.allowed_map === 0 ? `${base}\n${first}` : `${base}\n${second}`
  },
  m1_2 (state) {
    const base = '薬の材料となるマンドレイクの根を集めてドリスタンに届ける。'
    const cnt = `収集したマンドレイク（${state.event.m1_3.count}/${MANDRAKE_COUNT}）`
    return `${base}\n${cnt}`
  },
  m1_3 (state) {
    const base = '凶暴なレックスベアを倒し、薬の材料となるレックスベアの血液をドリスタンに届ける。'
    const bear = '森の深くに棲むレックスベアを探し出して倒そう。'
    const solved = 'レックスベアの血液を手に入れた。ドリスタンの元へ届けよう。'
    if (state.event.m1_4.completed) return base
    return `${base}\n${state.event.m1_4.solved ? solved : bear}`
  }
}
