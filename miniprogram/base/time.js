const dateTime = date => {
  const year = date.getFullYear() // 年
  const month = date.getMonth() + 1 // 月
  const day = date.getDate() // 日
  const hour = date.getHours() // 时
  const minu = date.getMinutes() // 分
  const sec = date.getSeconds() // 秒

  return [year, month, day].map(formatNumber).join('/') + '  ' + [hour, minu, sec].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  dateTime: dateTime
}