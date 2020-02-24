import { MANDRAKE_COUNT } from '../event/drystan'
import { MAGIC_STONES } from '../event/princess'
import { WATER_COUNT } from '../event/marianne'

export default {
  m0_1 (state) {
    const base = 'エドガー王の暗殺を阻止するため、暗殺現場とされる王城の裏庭へ向かう。'
    const first = '王城の裏庭への行き方を街の人に訪ねよう。'
    const second = '街の外へ出て王城の裏庭へ向かおう。'
    if (state.event.m0_1.completed) return base
    return state.allowed_area === 0 ? `${base}\n${first}` : `${base}\n${second}`
  },
  m1_1 (state) {
    const base = '狩猟家マシューが連れていた5匹の仔犬が逃げ出してしまった。'
    const found = ['d1', 'd2', 'd3', 'd4', 'd5'].filter(key => state.event.m1_1[key]).length
    const cnt = `見つけた狩猟犬の数（${found}/5）`
    return state.event.m1_1.completed ? base : `${base}\n${cnt}`
  },
  m1_2 (state) {
    const base = 'アイザムバード傭兵団の負傷兵が行方不明になっている。'
    if (state.event.m1_2.completed) return base
    const started = '付近を捜索しよう。'
    const solved = '負傷兵を助けた。傭兵団のキャンプへ寄ろう'
    return state.event.m1_2.solved ? `${base}\n${solved}` : `${base}\n${started}`
  },
  m1_3 (state) {
    const base = '薬の材料となるマンドレイクの根を集めてドリスタンに届ける。'
    const cnt = `収集したマンドレイク（${state.event.m1_3.count}/${MANDRAKE_COUNT}）`
    return state.event.m1_3.completed ? base : `${base}\n${cnt}`
  },
  m1_4 (state) {
    const base = '凶暴なレックスベアを倒し、薬の材料となるレックスベアの血液をドリスタンに\n届ける。'
    const bear = '森の深くに棲むレックスベアを探し出して倒そう。'
    const solved = 'レックスベアの血液を手に入れた。ドリスタンの元へ届けよう。'
    if (state.event.m1_4.completed) return base
    return `${base}\n${state.event.m1_4.solved ? solved : bear}`
  },
  m2_1 (state) {
    const base = 'アラグニエの糸の牢獄に幽閉されたカサンドラはワインを求めている。'
    const wip = '地下通路のどこかにあるワインを見つけよう。'
    const solved = 'ワインを手に入れた。カサンドラの元へ届けよう。'
    if (state.event.m2_1.completed) return base
    return `${base}\n${state.event.m2_1.solved ? solved : wip}`
  },
  m2_2 (state) {
    const base = 'メアリー王女と公爵令嬢ロレッタは、カサンドラへの贈り物に使うための素材と\nなる魔石を集めている。'
    const cnt = `収集したカーバンクルの魔石（${state.event.m2_2.count}/${MAGIC_STONES}）`
    return state.event.m2_2.completed ? base : `${base}\n${cnt}`
  },
  m2_3 (state) {
    const base = '密造酒の密売人ディオニューソスは、番犬オルトロスが眠るのを待っている。'
    const wip = 'ディオニューソスがオルトロスを泥酔させた。オルトロスを倒そう。'
    const solved = 'オルトロスを倒した。ディオニューソスの元へ戻ろう。'
    if (state.event.m2_3.completed) return base
    return `${base}\n${state.event.m2_3.solved ? solved : wip}`
  },
  m2_4 (state) {
    const base = 'ヘクター元騎士は、カサンドラを投獄した王への復讐を考えている。\nメアリーとロレッタと協力し、カサンドラを解放しよう。'
    const search = '魔石のランタンを使ってアラグニエのねぐらを探そう。'
    const solved = 'アラグニエを倒した。カサンドラの元へ戻ろう。'
    if (state.event.m2_4.completed) return base
    if (state.event.m2_4.solved) return `${base}\n${solved}`
    if (state.event.m2_4.search) return `${base}\n${search}`
    return base
  },
  m3_1 (state) {
    const base = '異国の貴族フェルディンドは正気を失っている。'
    const started = '霊に呪われていると言う彼に、何か役立ちそうなものを持っていこう。'
    const solved = '霊に呪われていると言う彼に、マリアンヌがくれたお守りを持っていこう。'
    const completed = '彼は彼を恨む亡霊たちによって崖の底へ引きずり込まれていった。'
    if (state.event.m3_1.completed) return `${base}\n${completed}`
    if (state.event.m3_2.completed) return `${base}\n${solved}`
    return `${base}\n${started}`
  },
  m3_2 (state) {
    const base = 'シスターはマリアンヌの墓に寄り添っている。'
    const started = '衰弱するシスターに飲み水を持っていこう。'
    const cnt = `収集した水の小瓶（${state.event.m3_2.count}/${WATER_COUNT}）`
    if (state.event.m3_2.completed) return base
    return `${base}\n${started}\n${cnt}`
  },
  m3_3 (state) {
    const base = 'ネクロマンサーのダリオは、ジャックに脅され王妃の悪霊を生み出してしまった。'
    const started = '近くにジャックがまだ潜んで居るらしい。探し出そう。'
    const solved = 'ジャックを倒した。ジャックが落とした短剣をダリオに届けよう。'
    if (state.event.m3_3.completed) return base
    if (state.event.m3_3.solved) return `${base}\n${solved}`
    return `${base}\n${started}`
  },
  m3_4 (state) {
    const base = 'レイはレンフィールド家への復讐のために墓を荒らしている。'
    const started = 'レンフィールド家の亡霊が姿を現した！'
    const cnt = `倒したレンフィールド家の亡霊（${state.event.m3_4.ghosts.length}/5）`
    if (state.event.m3_4.completed) return base
    return `${base}\n${started}\n${cnt}`
  },
  m3_5 (state) {
    const base = 'ダリオが生み出した偽物のエヴァンジェリナ妃の亡霊は王を恨んでいる。'
    const started = '王妃の亡霊を探し出して倒そう。'
    return state.event.m3_5.completed ? base : `${base}\n${started}`
  }
}
