// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

(() => {
  dayjs.extend(window.dayjs_plugin_duration)
  const el = document.getElementById('realtime_duration')
  // 改成自己的时间
  const date = dayjs('2024-7-20')

  setInterval(() => {
    const dur = dayjs.duration(dayjs().diff(date))
    const days = String(Math.floor(dur.asDays()))
    el.innerHTML = '已运行' + days + dur.format('天HH时mm分ss秒')
  }, 1000)
})()

