<script setup>
import clickButton from '../components/clickButton.vue'
import {ref, computed} from 'vue'

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var mydate = ref()

//calendar 
let currentDate = ref(new Date())
// function nextMonth(no) {
//     currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + no, 1);
// }

// function nextYear(no) {
//     currentDate.value = new Date(
//         currentDate.value.getFullYear() + no, currentDate.value.getMonth(), 1)
// }
// //month = 0-11
// function selectMonth(month) {
//     currentDate.value = new Date(currentDate.value.getFullYear(), month, 1)
// }
// //Christian Era ex 2022
// function selectYear(year) {
//     currentDate.value = new Date(year, currentDate.value.getMonth(), 1)
// }
//ใช่วันนี้ไหม
function isToday(date) {
    return (
        date === new Date().getDate() &&
        new Date().getMonth() === currentDate.value.getMonth() &&
        new Date().getFullYear() === currentDate.value.getFullYear()
    );
}
//คำนวณว่าตารางช่องนี้เป็นวันที่เท่าไหร่
function calDay(week, day) {
    const firstDayOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1).getDay()
    return (week - 1) * 7 + day - firstDayOfMonth;
}
//1เดือน = กี่วัน
const daysInMonth = computed(() => new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate())
// function isNotBlank(a) {
//     if (a === '') {
//         return false
//     }
//     return true
// }

// function formatDate(value) {
//     let date = new Date(value)
//     return { 'year': date.getFullYear(), 'month': date.getMonth(), 'date': date.getDate(), 'day': date.getDay() }
// }
//color mark for importants, to do and checklists note
// function isMonthYear(dayinput) {
//     let dayEvent = []
//     for (let i = 0; i < importants.value.length; i++) {
//         let date = formatDate(importants.value[i].date)
//         if (date.year == currentDate.value.getFullYear() && date.month == currentDate.value.getMonth()) {
//             dayEvent.push(date.date)
//         }
//     }
//     for (let i = 0; i < checklists.value.length; i++) {
//         let date = formatDate(checklists.value[i].date)
//         if (date.year == currentDate.value.getFullYear() && date.month == currentDate.value.getMonth()) {
//             dayEvent.push(date.date)
//         }
//     }
//     for (let i = 0; i < todos.value.length; i++) {
//         let date = formatDate(todos.value[i].date)
//         if (date.year == currentDate.value.getFullYear() && date.month == currentDate.value.getMonth()) {
//             dayEvent.push(date.date)
//         }
//     }
//     for (let i = 0; i < dayEvent.length; i++) {
//         if (dayinput == dayEvent[i]) {
//             return true
//         }
//     }
//     return false
// }

//ลบค่าใน arr 
function removeArrItemOnce(arr, value) {
    var index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


</script>
 
<template>
    <div>
        <table class="text-center text-zinc-900 pl-50 w-full shadow-xl rounded-lg bg-zinc-200">
            <thead>
                <tr>
                    <th class="h-20" colspan="7">{{
                        currentDate.toLocaleString("en-US", {
                            month: "long", year:
                                "numeric",
                        })
                    }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th v-for="(day, i) in days" :key="i" class="h-10">{{ day }}</th>
                </tr>
                <tr v-for="week in 6" :key="week">
                    <td v-for="day in 7" :key="day" class="h-10">
                        <div>
                            <span :class="{ 'text-red-500': isToday(calDay(week, day)) }">
                                {{ calDay(week, day) <= 0 || calDay(week, day) > daysInMonth ? "" : calDay(week, day) }}
                                    <!-- <div
                                        :class="{ 'badge badge-error gap-2 absolute': isMonthYear(calDay(week, day)) }">
                                    </div> -->
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
 
<style>
</style>