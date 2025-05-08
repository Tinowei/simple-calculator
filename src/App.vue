<script setup>
import ToggleButton from './components/ToggleButton.vue';
import KeyBoard from './components/KeyBoard.vue';
import { useCalculatorStore } from './stores/calculator';

const calculator = useCalculatorStore();

const handleChangeTheme = (theme) => {
  console.log('emit from toggleBtn', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

</script>

<template>
  <div
    class="calculator-container min-h-screen flex flex-col justify-center items-center bg-[var(--bg-main)] text-[var(--text-main)] ">
    <div class="calculator md:w-[500px] [375px]-w-full font-bold bg-[var(--bg-main)] ">
      <div class="top flex items-end justify-end pt-4">
        <h1 class="flex-1 text-[24px]">calc</h1>
        <div class="theme flex items-end ">
          <p class="text-[12px] font-semibold ml-4 ">THEME</p>
          <div class="theme-btns">
            <ToggleButton @changeTheme="handleChangeTheme" />
          </div>
        </div>
      </div>
      <div
        class="value-container w-full max-w-[500px] flex justify-end py-6 pr-6 mt-4 mb-6 bg-[var(--bg-screen)] rounded-xl text-[var(--text-screen)] text-[32px] overflow-hidden ">
        <div class="value text-[var(--text-screen)]">{{ calculator.expression === '' ? '0' : calculator.expression }}
        </div>
      </div>
      <KeyBoard />
    </div>
  </div>
</template>
