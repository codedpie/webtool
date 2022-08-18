---
layout: post
title: Age Calculator
---

<style>
  .age_calc {
    width: 80%;
    margin: auto;
    padding: 20px;
  }
  .dob label,
  .today label {
    font-weight: 500;
  }
  .dob {
    margin-bottom: 20px;
  }
  .dob,
  .today {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .age_calc input[type="date"] {
    border: none;
    outline: none;
    padding: 6px;
    color: white;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    background: var(--theme);
  }
  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-day-field:focus,
  ::-webkit-datetime-edit-year-field:focus {
    color: var(--theme);
    background-color: white;
    border-radius: 3px;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  .result {
    padding: 25px;
    margin: 20px 0;
    margin-top: 50px;
    border-radius: 10px;
    border: 1px solid var(--border);
    display: -ms-grid;
    display: grid;
    grid-gap: 10px;
    -ms-grid-columns: 1fr 10px 1px 10px 1fr;
    grid-template-columns: 1fr 1px 1fr;
  }
  .main_year span {
    color: var(--dark);
    font-size: 3rem;
    font-weight: 300;
  }
  .main_year h2 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--dark);
  }
  .main_year #year {
    font-size: 3rem;
    font-weight: 500;
    color: var(--theme);
  }
  .main_year p {
    font-size: 1rem;
    color: var(--dark);
  }
  .next_birthday {
    text-align: center;
    color: var(--theme);
    display: -ms-grid;
    display: grid;
    justify-items: center;
  }
  .cake {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: -ms-grid;
    display: grid;
    place-items: center;
    background: var(--theme);
  }
  .next_birthday_day {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .next_birthday_time {
    color: var(--dark);
    display: block;
  }
  .summary {
    padding: 25px;
    margin: 20px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
  }
  .summary h2 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--theme);
  }
  .all_summary {
    display: grid;
    grid-gap: 40px;
    justify-items: center;
    margin: 30px 0;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .all_summary span {
    color: var(--dark);
  }
  .tim_sumry {
    color: var(--dark);
    font-weight: 500;
  }
  /* for mobile */
  @media (max-width: 640px) {
    .age_calc {
      width: 100%;
      padding: 10px;
    }
    .result {
      padding: 10px;
    }
    .summary {
      padding: 10px;
    }
  }
</style>
<div class="age_calc">
  <div class="dob">
    <label>Date of birth</label>
    <input type="date" id="birth_date" oninput="dateOfBirth()">
  </div>
  <div class="today">
    <label>Today</label>
    <input type="date" id="date_today" oninput="dateOfBirth()">
  </div>
  <div class="result">
    <div class="main_year">
      <span>Age</span>
      <h2><span id="year">00</span> Years</h2>
      <p id="month_day">00 Months | 00 Days</p>
    </div>
    <hr style="border:0;border-right: 1px solid rgba(0, 0, 0, 0.3);">
    <div class="next_birthday">
      <p>Next Birthday</p>
      <div class="cake">
        <svg fill="#FFF" width="32" viewBox="0 0 448 512">
          <path
            d="M352 111.1c22.09 0 40-17.88 40-39.97S352 0 352 0s-40 49.91-40 72S329.9 111.1 352 111.1zM224 111.1c22.09 0 40-17.88 40-39.97S224 0 224 0S184 49.91 184 72S201.9 111.1 224 111.1zM383.1 223.1L384 160c0-8.836-7.164-16-16-16h-32C327.2 144 320 151.2 320 160v64h-64V160c0-8.836-7.164-16-16-16h-32C199.2 144 192 151.2 192 160v64H128V160c0-8.836-7.164-16-16-16h-32C71.16 144 64 151.2 64 160v63.97c-35.35 0-64 28.65-64 63.1v68.7c9.814 6.102 21.39 11.33 32 11.33c20.64 0 45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C114.1 348.3 139.4 367.1 160 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C242.1 348.3 267.4 367.1 288 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C370.1 348.3 395.4 367.1 416 367.1c10.61 0 22.19-5.227 32-11.33V287.1C448 252.6 419.3 223.1 383.1 223.1zM352 373.3c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66c-11.27 0-22.09-3.121-32-7.377v87.38C0 497.7 14.33 512 32 512h384c17.67 0 32-14.33 32-32v-87.38c-9.91 4.256-20.73 7.377-32 7.377C390 399.1 365.8 384.3 352 373.3zM96 111.1c22.09 0 40-17.88 40-39.97S96 0 96 0S56 49.91 56 72S73.91 111.1 96 111.1z" />
        </svg>
      </div>
      <span class="next_birthday_day">Birthday</span>
      <span class="next_birthday_time">00 month | 00 days</span>
    </div>
  </div>
  <div class="summary">
    <h2>Summary</h2>
    <div class="all_summary">
      <div>
        <span>Years</span>
        <h3 class="tim_sumry">00</h3>
      </div>
      <div>
        <span>Months</span>
        <h3 class="tim_sumry">00</h3>
      </div>
      <div>
        <span>Weeks</span>
        <h3 class="tim_sumry">00</h3>
      </div>
      <div>
        <span>Days</span>
        <h3 class="tim_sumry">00</h3>
      </div>
      <div>
        <span>Hours</span>
        <h3 class="tim_sumry">00</h3>
      </div>
      <div>
        <span>Minutes</span>
        <h3 class="tim_sumry">00</h3>
      </div>
    </div>
  </div>
</div>
<script>
  const birth_date = document.querySelector('#birth_date'),
  date_today = document.querySelector('#date_today'),
  year = document.querySelector('#year'),
  month_day = document.querySelector('#month_day'),
  next_birthday_day = document.querySelector('.next_birthday_day'),
  next_birthday_time = document.querySelector('.next_birthday_time'),
  tim_sumry = document.querySelectorAll('.tim_sumry')

  const get_date = new Date().toLocaleDateString().split('/')
  date_today.value = `${get_date[2]}-${get_date[1]}-${get_date[0]}`

  function dateOfBirth() {
    const dob = birth_date.value.split('-')
    const today = date_today.value.split('-')

    const [y, m, d] = dob
    const [ty, tm, td] = today

    // Calculate years
    let years
    if (tm >= m && td >= d) {
      years = ty - y
    }
    else {
      years = ty - y - 1
    }
    // Calculate months
    let months
    if (td >= d) {
      months = tm - m
    }
    else if (td < d) {
      months = tm - m - 1
    }
    // make month positive
    months = months < 0 ? months + 12 : months
    // Calculate days
    let days
    // days of months in a year
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (td >= d) {
      days = td - d
    } else {
      days = td - d + monthDays[m];
    }
    year.innerText = years
    month_day.innerText = `${months} Months | ${days} Days`

    // next birthday year
    let nxt_b_yr = new Date().getFullYear()
    if (tm >= m && td >= d) {
      nxt_b_yr = nxt_b_yr + 1
    }

    // next birthday day
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const next_bday = new Date(`${m}-${d}-${nxt_b_yr}`)
    next_birthday_day.innerText = week[next_bday.getDay()]

    // left time in next birthday
    const left_milli = next_bday - new Date(`${tm}-${td}-${ty}`)
    const lm = left_milli / (1000 * 60 * 60 * 24 * 30.417)
    const lmt = Math.trunc(lm)
    const ld = Math.trunc((lm - lmt) * 30.417)
    next_birthday_time.innerText = `${lmt} months | ${ld} days`

    // Summary
    const date_sub_milli = new Date(`${tm}-${td}-${ty}`) - new Date(`${m}-${d}-${y}`)

    const mi = date_sub_milli / (1000 * 60)
    const hr = mi / 60
    const dy = hr / 24
    const we = dy / 7
    const mo = we / 4.345

    tim_sumry[0].innerHTML = years
    tim_sumry[1].innerHTML = Math.trunc(mo)
    tim_sumry[2].innerHTML = Math.trunc(we)
    tim_sumry[3].innerHTML = Math.trunc(dy)
    tim_sumry[4].innerHTML = Math.trunc(hr)
    tim_sumry[5].innerHTML = Math.trunc(mi)
  }
</script>

## What is the Age Calculator tool?

Age calculator is a simple calculator that calculates age of person, pet, things etc. Basically age is the difference between two dates so we subtract date of birth from current date this way we can calculate actual age of person.

From this free age calculator, you can calculate your age in years, months, weeks, days, hours and also in minuts. this tool calculate your full age and your next birthday day and how many months and days left in the next birthday.

## How to use this tool?
Age calculator is free tool you can easily use this In the First box [date of birth] select your date of birth and in second it will take today's date automatically but you can change this date as you want and set the date you want to calculate the date diffrence from.

