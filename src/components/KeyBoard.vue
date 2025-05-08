<script setup>
import { useCalculatorStore } from '@/stores/calculator';

// create store instance
const calculator = useCalculatorStore();
const { displayOnScreen, clear, del, calculate } = calculator;


</script>

<template>
  <div class="keyboard-container grid gap-4 grid-cols-4 grid-rows-5  bg-[var(--bg-toggle_keypad)] rounded-xl p-6 ">
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('7')">
      7
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('8')">
      8
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('9')">
      9
    </div>
    <div class="keyboard-btn keyboard-btn-alt text-[24px] shadow-keyboard-btn" @click="del">
      DEL
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('4')">
      4
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('5')">
      5
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('6')">
      6
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('+')">
      +
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('1')">
      1
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('2')">
      2
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('3')">
      3
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('-')">
      -
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('.')">
      .
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('0')">
      0
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('/')">
      /
    </div>
    <div class="keyboard-btn text-[32px] shadow-keyboard-btn" @click="displayOnScreen('*')">
      x
    </div>
    <div class="keyboard-btn keyboard-btn-alt col-span-2 text-[24px] shadow-keyboard-btn " @click="clear()">
      RESET
    </div>
    <div class="keyboard-btn keyboard-btn-equal col-span-2 text-[24px] shadow-keyboard-btn  " @click="calculate()">
      =
    </div>
  </div>
</template>
