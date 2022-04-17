<script setup>
import ClickButton from '../components/ClickButton.vue'
import {ref, computed} from 'vue'

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//calendar 
let currentDate = ref(new Date())

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

//ลบค่าใน arr 
function removeArrItemOnce(arr, value) {
    var index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}

function nextMonth(no) {
  currentDate.value = new Date(currentDate.value.getFullYear(),currentDate.value.getMonth() + no,1);
}

function nextYear(no) {
  currentDate.value = new Date(
    currentDate.value.getFullYear() + no,currentDate.value.getMonth(),1)
}
</script>
 
<template>
    <div class="mt-10 ml-10 mr-10 drop-shadow-2xl ">
        <table class="text-center my-auto text-white w-full p-20 rounded-lg bg-zinc-800 justify-center">
            <thead>
                <tr>
                    <th class="h-20 text-accent text-lg" colspan="7">{{
                        currentDate.toLocaleString("en-US", {
                            month: "long", year:
                                "numeric",
                        })
                    }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th v-for="(day, i) in days" :key="i" class="h-10 text-error">{{ day }}</th>
                </tr>
                <tr v-for="week in 6" :key="week">
                    <td v-for="day in 7" :key="day" class="h-10">
                        <div>
                  <br>
                            <span :class="{ 'text-zinc-800 bg-success p-1 rounded-full ': isToday(calDay(week, day)) }">
                                {{ calDay(week, day) <= 0 || calDay(week, day) > daysInMonth ? "" : calDay(week, day) }}
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class=" flex justify-content-center mt-5 mx-auto  w-7/12">
          <ClickButton 
          @clickMe="nextMonth(-1)"
          buttonName ='Previous Month'/>
       
          <ClickButton 
          @clickMe="nextMonth(1)"
          buttonName ='Next Month'/>
        
          <ClickButton 
           @clickMe="nextYear(-1)"
           buttonName = 'Previous Year'/>
       
          <ClickButton
           @clickMe="nextYear(1)"
           buttonName='nextYear'/> 
        </div>      

</template>
 
<style>
</style>