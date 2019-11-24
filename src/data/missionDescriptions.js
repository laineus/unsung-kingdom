import { MANDRAKE_COUNT } from '../event/drystan'

export default {
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
