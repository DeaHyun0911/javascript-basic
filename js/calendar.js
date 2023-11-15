let toDate = new Date();
let today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

buildCalender()

console.log(toDate);

// 달력 생성
function buildCalender() {
  let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  let firstDayWeek = firstDate.getDay()
  let currentMonth = today.getMonth();

  // 달, 년 생성
  $('.month').text(months[currentMonth])
  $('.year').text(today.getFullYear())

  // 날짜 초기화
  $('.dates').html("");

  // 현재 달 첫번째 요일 만큼 공백 생성
  for (let i = 0; i < firstDayWeek; i++) {
    $('.dates').append(`<button class="void"></button>`)
  }

  // 현재 달 날짜 생성
  for (let i = 1; i < lastDay + 1; i++) {
    $('.dates').append(`<button class="date">${i}</button>`)
  }

  // 오늘 날짜 포커싱
  if (toDate.getMonth() == today.getMonth()) {
    const currentDay = toDate.getDate()
    const Days = document.querySelectorAll('.date')
    const findCurrentDay = Array.from(Days).find(item => item.textContent === `${currentDay}`);
    $(findCurrentDay).focus()
  }

}





// 다음 달 생성
$('.next').click(() => {
  nextMonth()
})

function nextMonth() {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  buildCalender()
}


// 이전 달 생성
$('.prev').click(() => {
  prevMonth()
})

function prevMonth() {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  buildCalender()
}


