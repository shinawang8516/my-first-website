import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const industryRows = [
  { label: '製造業', total: 482608, indonesia: 89012, malaysia: 1, philippines: 146642, thailand: 53608, vietnam: 193345, mongolia: 0, other: 0 },
  { label: '看護工', total: 223562, indonesia: 183395, malaysia: 0, philippines: 21004, thailand: 234, vietnam: 18929, mongolia: 0, other: 0 },
  { label: '營建工程業', total: 34305, indonesia: 8577, malaysia: 0, philippines: 772, thailand: 14321, vietnam: 10635, mongolia: 0, other: 0 },
  { label: '農林漁牧業', total: 23371, indonesia: 10929, malaysia: 0, philippines: 1379, thailand: 886, vietnam: 10177, mongolia: 0, other: 0 },
  { label: '家庭幫傭', total: 1988, indonesia: 1495, malaysia: 0, philippines: 454, thailand: 4, vietnam: 35, mongolia: 0, other: 0 },
  { label: '廢棄物與資源回收', total: 378, indonesia: 178, malaysia: 0, philippines: 1, thailand: 7, vietnam: 192, mongolia: 0, other: 0 },
]

const nationalities = [
  { key: 'indonesia', label: '印尼', value: 325529, color: 'coral' },
  { key: 'vietnam', label: '越南', value: 295598, color: 'blue' },
  { key: 'philippines', label: '菲律賓', value: 173784, color: 'lime' },
  { key: 'thailand', label: '泰國', value: 71362, color: 'plum' },
  { key: 'malaysia', label: '馬來西亞', value: 2, color: 'sand' },
  { key: 'mongolia', label: '蒙古', value: 0, color: 'gray' },
  { key: 'other', label: '其他', value: 0, color: 'gray' },
]

const countyRows = [
  { code: '65000', name: '新北市', total: 109764, indonesia: 46716, malaysia: 2, philippines: 11896, thailand: 8488, vietnam: 42662, mongolia: 0, other: 0, x: 43, y: 12 },
  { code: '63000', name: '臺北市', total: 47607, indonesia: 34708, malaysia: 0, philippines: 5643, thailand: 2505, vietnam: 4751, mongolia: 0, other: 0, x: 54, y: 10 },
  { code: '66000', name: '臺中市', total: 119955, indonesia: 40232, malaysia: 0, philippines: 19050, thailand: 10358, vietnam: 50315, mongolia: 0, other: 0, x: 46, y: 35 },
  { code: '67000', name: '臺南市', total: 70996, indonesia: 23264, malaysia: 0, philippines: 15275, thailand: 5891, vietnam: 26566, mongolia: 0, other: 0, x: 40, y: 59 },
  { code: '64000', name: '高雄市', total: 85418, indonesia: 31577, malaysia: 0, philippines: 20980, thailand: 6475, vietnam: 26386, mongolia: 0, other: 0, x: 47, y: 68 },
  { code: '10002', name: '宜蘭縣', total: 15710, indonesia: 8196, malaysia: 0, philippines: 1983, thailand: 558, vietnam: 4973, mongolia: 0, other: 0, x: 70, y: 20 },
  { code: '68000', name: '桃園市', total: 148001, indonesia: 37323, malaysia: 0, philippines: 40396, thailand: 20093, vietnam: 50189, mongolia: 0, other: 0, x: 48, y: 17 },
  { code: '10004', name: '新竹縣', total: 38888, indonesia: 8313, malaysia: 0, philippines: 19490, thailand: 2498, vietnam: 8587, mongolia: 0, other: 0, x: 42, y: 25 },
  { code: '10005', name: '苗栗縣', total: 27302, indonesia: 9181, malaysia: 0, philippines: 9024, thailand: 1525, vietnam: 7572, mongolia: 0, other: 0, x: 41, y: 30 },
  { code: '10007', name: '彰化縣', total: 69716, indonesia: 25021, malaysia: 0, philippines: 6305, thailand: 5494, vietnam: 32896, mongolia: 0, other: 0, x: 35, y: 39 },
  { code: '10008', name: '南投縣', total: 16854, indonesia: 7061, malaysia: 0, philippines: 2090, thailand: 1921, vietnam: 5782, mongolia: 0, other: 0, x: 57, y: 40 },
  { code: '10009', name: '雲林縣', total: 29250, indonesia: 11770, malaysia: 0, philippines: 2248, thailand: 1578, vietnam: 13654, mongolia: 0, other: 0, x: 37, y: 47 },
  { code: '10010', name: '嘉義縣', total: 18112, indonesia: 8871, malaysia: 0, philippines: 1707, thailand: 1712, vietnam: 5822, mongolia: 0, other: 0, x: 40, y: 52 },
  { code: '10013', name: '屏東縣', total: 20805, indonesia: 10553, malaysia: 0, philippines: 1965, thailand: 806, vietnam: 7481, mongolia: 0, other: 0, x: 57, y: 73 },
  { code: '10014', name: '臺東縣', total: 3437, indonesia: 2254, malaysia: 0, philippines: 259, thailand: 118, vietnam: 806, mongolia: 0, other: 0, x: 72, y: 60 },
  { code: '10015', name: '花蓮縣', total: 6678, indonesia: 3726, malaysia: 0, philippines: 1262, thailand: 460, vietnam: 1230, mongolia: 0, other: 0, x: 69, y: 39 },
  { code: '10016', name: '澎湖縣', total: 3274, indonesia: 2981, malaysia: 0, philippines: 172, thailand: 121, vietnam: 0, mongolia: 0, other: 0, x: 20, y: 52 },
  { code: '10017', name: '基隆市', total: 6492, indonesia: 4082, malaysia: 0, philippines: 764, thailand: 252, vietnam: 1394, mongolia: 0, other: 0, x: 58, y: 5 },
  { code: '10018', name: '新竹市', total: 21697, indonesia: 5614, malaysia: 0, philippines: 12718, thailand: 261, vietnam: 3104, mongolia: 0, other: 0, x: 34, y: 24 },
  { code: '10020', name: '嘉義市', total: 4720, indonesia: 2904, malaysia: 0, philippines: 490, thailand: 210, vietnam: 1116, mongolia: 0, other: 0, x: 32, y: 51 },
  { code: '09020', name: '金門縣', total: 1188, indonesia: 931, malaysia: 0, philippines: 36, thailand: 7, vietnam: 214, mongolia: 0, other: 0, x: 14, y: 40 },
  { code: '09007', name: '連江縣', total: 411, indonesia: 251, malaysia: 0, philippines: 31, thailand: 31, vietnam: 98, mongolia: 0, other: 0, x: 24, y: 8 },
]

const quizQuestions = [
  {
    prompt: '縣市資料列出的移工總數是多少？',
    note: '依民國 114 年縣市與國籍資料加總。',
    options: ['766,212 人', '866,275 人', '100,063 人', '540,662 人'],
    answer: 1,
    explanation: '縣市資料加總為 866,275 人。行業資料合計 766,212 人，兩份資料統計範圍不同。',
  },
  {
    prompt: '縣市資料中，哪個縣市列出的人數最多？',
    note: '看縣市與國籍統計表中的總計欄。',
    options: ['桃園市：148,001 人', '臺中市：119,955 人', '新北市：109,764 人', '高雄市：85,418 人'],
    answer: 0,
    explanation: '這份資料列出的桃園市總計為 148,001 人。它是縣市層級的統計，不是個人精確位置。',
  },
  {
    prompt: '行業資料中，人數最多的細項工作是哪一類？',
    note: '不把「產業移工合計」和「社福移工合計」當成個別工作。',
    options: ['製造業', '看護工', '營建工程業', '農林漁牧業'],
    answer: 0,
    explanation: '製造業有 482,608 人，是這份行業資料中人數最多的細項。',
  },
  {
    prompt: '縣市資料中，哪個國籍的人數加總最多？',
    note: '依縣市資料中各國籍欄位加總。',
    options: ['菲律賓', '越南', '印尼', '泰國'],
    answer: 2,
    explanation: '縣市資料中印尼籍加總最多。國籍是統計分類，不能用來推論個人的性格或生活。',
  },
  {
    prompt: '關於移工最低工資規定，哪一項正確？',
    note: '依 2026 年現行規定。',
    options: ['所有移工都適用同一個最低工資。', '適用《勞基法》的工作者不分國籍適用最低工資；家庭看護工的工資依勞雇約定。', '家庭看護工一律適用月最低工資 29,500 元。', '最低工資依移工國籍決定。'],
    answer: 1,
    explanation: '2026 年月最低工資為 29,500 元，適用《勞基法》的工作者不分國籍適用；家庭看護工目前不適用《勞基法》，工資由雙方約定。',
  },
]

const nationalityNames = [
  { key: 'all', label: '所有國籍' },
  { key: 'indonesia', label: '印尼' },
  { key: 'vietnam', label: '越南' },
  { key: 'philippines', label: '菲律賓' },
  { key: 'thailand', label: '泰國' },
  { key: 'malaysia', label: '馬來西亞' },
]

const formatNumber = (value) => new Intl.NumberFormat('zh-TW').format(value)
const selectedAnswers = Array(quizQuestions.length).fill(null)
let currentQuestion = 0
let activeCountyNationality = 'all'

function getQuizScore() {
  return quizQuestions.reduce((sum, question, index) => sum + (selectedAnswers[index] === question.answer ? 20 : 0), 0)
}

function renderQuiz() {
  const question = quizQuestions[currentQuestion]
  const stage = document.querySelector('#quiz-stage')
  const submittedAnswer = selectedAnswers[currentQuestion]
  const isCorrect = submittedAnswer === question.answer
  document.querySelector('#quiz-step-label').textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, '0')} / 05`
  document.querySelector('#quiz-progress-fill').style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`
  document.querySelector('#quiz-score-live').textContent = getQuizScore()
  document.querySelector('#quiz-hint').textContent = submittedAnswer === null ? '選擇一個答案，立即查看解析' : '這題已完成；準備好就繼續'
  stage.innerHTML = `
    <p class="question-kicker">Q${String(currentQuestion + 1).padStart(2, '0')} <span>${question.note}</span></p>
    <h3 class="question-title">${question.prompt}</h3>
    <div class="answer-grid" role="group" aria-label="選擇答案">
      ${question.options.map((option, index) => {
        const chosen = submittedAnswer === index
        const correctAnswer = submittedAnswer !== null && question.answer === index
        const classes = ['answer-option', chosen ? 'is-selected' : '', correctAnswer ? 'is-correct-answer' : '', chosen && !isCorrect ? 'is-wrong-answer' : ''].filter(Boolean).join(' ')
        return `<button class="${classes}" type="button" data-answer="${index}" aria-pressed="${chosen}" ${submittedAnswer !== null ? 'disabled' : ''}><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span><span class="answer-check" aria-hidden="true">${correctAnswer ? '✓' : chosen ? '×' : '↗'}</span></button>`
      }).join('')}
    </div>
    ${submittedAnswer === null ? '' : `<section class="answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}" role="status" aria-live="polite"><div class="feedback-result"><span class="feedback-icon" aria-hidden="true">${isCorrect ? '✓' : '!'}</span><strong>${isCorrect ? '回答正確' : '回答錯誤'}</strong><span class="feedback-points">${isCorrect ? '+20' : '0'} 分</span></div><p class="feedback-answer">正確答案：<strong>${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}</strong></p><p class="feedback-explanation">${question.explanation}</p></section>`}`

  stage.querySelectorAll('[data-answer]').forEach((button) => {
    button.addEventListener('click', () => {
      if (selectedAnswers[currentQuestion] !== null) return
      selectedAnswers[currentQuestion] = Number(button.dataset.answer)
      renderQuiz()
    })
  })
  document.querySelector('#quiz-back').disabled = currentQuestion === 0
  const next = document.querySelector('#quiz-next')
  next.innerHTML = currentQuestion === quizQuestions.length - 1 ? '看總分 <span aria-hidden="true">↗</span>' : '下一題 <span aria-hidden="true">→</span>'
  next.disabled = submittedAnswer === null
}

function showQuizResults() {
  const score = getQuizScore()
  document.querySelector('#quiz-card').hidden = true
  document.querySelector('#quiz-result').hidden = false
  document.querySelector('#result-score-number').textContent = score
  document.querySelector('#result-score-copy').textContent = `答對 ${score / 20}／5 題`
  document.querySelector('#answer-review-list').innerHTML = quizQuestions.map((question, index) => {
    const correct = selectedAnswers[index] === question.answer
    const chosen = selectedAnswers[index]
    const chosenLabel = `${String.fromCharCode(65 + chosen)}. ${question.options[chosen]}`
    const correctLabel = `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`
    return `<article class="review-item ${correct ? 'review-correct' : 'review-incorrect'}"><div class="review-number">0${index + 1}</div><div class="review-copy"><h4>${question.prompt}</h4><p class="review-answer">你的答案：${chosenLabel}</p>${correct ? '' : `<p class="review-answer review-correct-text">正確答案：${correctLabel}</p>`}<p>${question.explanation}</p></div><div class="review-points">${correct ? '+20' : '0'}<small>分</small></div></article>`
  }).join('')
  document.querySelector('#quiz-result').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
}

document.querySelector('#quiz-next').addEventListener('click', () => {
  if (selectedAnswers[currentQuestion] === null) return
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion += 1
    renderQuiz()
  } else if (selectedAnswers.every((answer) => answer !== null)) {
    showQuizResults()
  }
})
document.querySelector('#quiz-back').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1
    renderQuiz()
  }
})
document.querySelector('#quiz-restart').addEventListener('click', () => {
  selectedAnswers.fill(null)
  currentQuestion = 0
  document.querySelector('#quiz-result').hidden = true
  document.querySelector('#quiz-card').hidden = false
  renderQuiz()
  document.querySelector('#quiz').scrollIntoView({ behavior: 'smooth' })
})

function renderWorkChart(nation = 'all') {
  const values = industryRows.map((row) => ({ ...row, value: nation === 'all' ? row.total : row[nation] }))
  const visible = values.filter((row) => row.value > 0).sort((a, b) => b.value - a.value)
  const max = Math.max(...visible.map((row) => row.value))
  const sum = visible.reduce((total, row) => total + row.value, 0)
  document.querySelector('#work-summary').innerHTML = `<div><strong>${formatNumber(sum)}</strong><span>${nation === 'all' ? '行業資料合計' : `${nationalityNames.find((item) => item.key === nation)?.label}人數合計`}</span></div><div><strong>${formatNumber(visible[0].value)}</strong><span>${visible[0].label} · 細項最多</span></div>`
  document.querySelector('#work-chart').innerHTML = visible.map((row, index) => `<div class="bar-row" role="listitem"><div class="bar-label"><span class="bar-rank">${String(index + 1).padStart(2, '0')}</span><span>${row.label}</span><strong>${formatNumber(row.value)}</strong></div><div class="bar-track"><span class="bar-fill bar-fill-${index % 4}" style="--bar-width:${(row.value / max) * 100}%"></span></div></div>`).join('')
  document.querySelector('#work-scope-label').textContent = nation === 'all' ? '來源資料合計 766,212 人' : '依國籍篩選；此圖表來源為按行業統計資料'
}

function initWorkChart() {
  const select = document.querySelector('#nationality-filter')
  select.innerHTML = nationalityNames.map((item) => `<option value="${item.key}">${item.label}</option>`).join('')
  select.addEventListener('change', () => {
    document.querySelector('#nationality-filter-label').textContent = select.options[select.selectedIndex].text
    renderWorkChart(select.value)
  })
  renderWorkChart()
}

function renderNationalityChart() {
  const rows = nationalities.filter((item) => item.value > 0)
  const max = Math.max(...rows.map((item) => item.value))
  document.querySelector('#nationality-chart').innerHTML = rows.map((item) => `<div class="nationality-row" role="listitem"><div class="nationality-row-head"><span>${item.label}</span><strong>${formatNumber(item.value)}</strong></div><div class="nationality-track"><span class="nationality-fill fill-${item.color}" style="--bar-width:${(item.value / max) * 100}%"></span></div></div>`).join('')
}

function renderCountyChart(nation = 'all') {
  const rows = countyRows.map((row) => ({ ...row, value: nation === 'all' ? row.total : row[nation] })).sort((a, b) => b.value - a.value)
  const visible = rows.filter((row) => row.value > 0)
  const max = Math.max(...visible.map((row) => row.value))
  const total = visible.reduce((sum, row) => sum + row.value, 0)
  document.querySelector('#map-filter-label').textContent = nationalityNames.find((item) => item.key === nation)?.label ?? '所有國籍'
  document.querySelector('#county-total-label').textContent = `合計 ${formatNumber(total)} 人`
  document.querySelector('#county-list').innerHTML = visible.map((row, index) => `<li class="county-row ${index < 3 ? 'county-top' : ''}"><span class="county-rank">${String(index + 1).padStart(2, '0')}</span><span class="county-name">${row.name}</span><span class="county-bar"><i style="--bar-width:${(row.value / max) * 100}%"></i></span><strong>${formatNumber(row.value)}</strong></li>`).join('')
  document.querySelector('#map-points').innerHTML = visible.map((row) => {
    const size = 9 + (Math.sqrt(row.value / max) * 35)
    return `<span class="map-point ${row.name === visible[0].name ? 'map-point-largest' : ''}" style="--x:${row.x}%;--y:${row.y}%;--point-size:${size}px" title="${row.name}：${formatNumber(row.value)} 人"><span class="sr-only">${row.name}：${formatNumber(row.value)} 人</span></span>`
  }).join('')
}

function initCountyChart() {
  const holder = document.querySelector('#county-filter')
  holder.innerHTML = nationalityNames.map((item) => `<button type="button" class="filter-chip ${item.key === 'all' ? 'is-active' : ''}" data-country="${item.key}" aria-pressed="${item.key === 'all'}">${item.label}</button>`).join('')
  holder.querySelectorAll('[data-country]').forEach((button) => button.addEventListener('click', () => {
    holder.querySelectorAll('[data-country]').forEach((chip) => {
      const active = chip === button
      chip.classList.toggle('is-active', active)
      chip.setAttribute('aria-pressed', String(active))
    })
    activeCountyNationality = button.dataset.country
    renderCountyChart(activeCountyNationality)
  }))
  renderCountyChart()
}

const wageDetails = {
  covered: {
    label: '月最低工資', amount: '29,500', unit: '元 / 月', kicker: '2026 年現行標準',
    title: '不分國籍，依規定保障。',
    description: '適用《勞動基準法》的工作者，雇主給付工資不得低於最低工資；是否適用要依工作類別與法規判定。',
    side: '29,500', sideLabel: '2026 月最低工資',
  },
  care: {
    label: '工資約定', amount: '依約定', unit: '勞雇雙方議定', kicker: '家庭看護工作',
    title: '沒有套用同一個法定月最低工資。',
    description: '家庭看護工目前不適用《勞動基準法》，工資依勞雇雙方約定。這項差異來自工作類別與適用法規，不是國籍。',
    side: '依約', sideLabel: '勞動契約約定',
  },
}

function initWageTabs() {
  document.querySelectorAll('.wage-tab').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('.wage-tab').forEach((tab) => {
      const active = tab === button
      tab.classList.toggle('is-active', active)
      tab.setAttribute('aria-pressed', String(active))
    })
    const detail = wageDetails[button.dataset.wage]
    document.querySelector('#wage-card-label').textContent = detail.label
    document.querySelector('#wage-amount').textContent = detail.amount
    document.querySelector('#wage-unit').textContent = detail.unit
    document.querySelector('#wage-kicker').textContent = detail.kicker
    document.querySelector('#wage-card-title').textContent = detail.title
    document.querySelector('#wage-card-description').textContent = detail.description
    document.querySelector('#wage-card-side').innerHTML = `${detail.side}<span>${detail.sideLabel}</span>`
    document.querySelector('#wage-card').classList.toggle('is-care', button.dataset.wage === 'care')
  }))
}

function initMotion() {
  const progress = document.querySelector('#page-progress-bar')
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => { progress.style.transform = `scaleX(${self.progress})` },
  })
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.fromTo(element, { autoAlpha: 0, y: 24 }, {
        autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      })
    })
    gsap.fromTo('.hero-art', { scale: 0.96, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.1, ease: 'power2.out', delay: 0.15 })
  }
}

renderQuiz()
initWorkChart()
renderNationalityChart()
initCountyChart()
initWageTabs()
initMotion()
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
