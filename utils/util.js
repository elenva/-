const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//通过秒格式化mm:ss
const formatMMSS = t=> {
  const m = parseInt(t/60);
  const s = m % 60;
  return m ? `${m}:${s < 10 ? '0' + s : s}` : `00:${s < 10 ? '0' + s : s}`
}
module.exports = {
  formatTime: formatTime,
  formatMMSS: formatMMSS
}
