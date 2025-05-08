<script setup>
import ToggleButton from './components/ToggleButton.vue';

const handleChangeTheme = (theme) => {
  console.log('傳上來的theme:', theme)
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
        class="value-container flex justify-end py-6 pr-6 mt-4 mb-6 bg-[var(--bg-screen)] rounded-xl text-[var(--text-screen)] text-[32px] ">
        <div class="value text-[var(--text-screen)]">399,981</div>
      </div>
      <div class="keyboard-container grid gap-4 grid-cols-4 grid-rows-5  bg-[var(--bg-toggle_keypad)] rounded-xl p-6 ">
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          7
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          8
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          9
        </div>
        <div class="keyboard-btn keyboard-btn-alt text-[24px] shadow-keyboard-btn">
          DEL
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          4
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          5
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          6
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          +
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          1
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          2
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          3
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          -
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          .
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          0
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          /
        </div>
        <div class="keyboard-btn text-[32px] shadow-keyboard-btn">
          x
        </div>
        <div class="keyboard-btn keyboard-btn-alt col-span-2 text-[24px] shadow-keyboard-btn ">
          RESET
        </div>
        <div class="keyboard-btn keyboard-btn-equal col-span-2 text-[24px] shadow-keyboard-btn  ">
          =
        </div>
      </div>
    </div>
  </div>







  <!-- <div class="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]">
    <h1 class="text-3xl font-bold mb-6">Calculator Theme</h1>

    <div class="grid grid-cols-4 gap-4 bg-[var(--bg-screen)] p-6 rounded-xl shadow-lg">
      <button class="p-4 rounded bg-[var(--key-light-bg)] shadow-[0_4px_0_0_var(--key-light-shadow)]">7</button>
      <button class="p-4 rounded bg-[var(--key-light-bg)] shadow-[0_4px_0_0_var(--key-light-shadow)]">8</button>
      <button class="p-4 rounded bg-[var(--key-light-bg)] shadow-[0_4px_0_0_var(--key-light-shadow)]">9</button>
      <button class="p-4 rounded bg-[var(--key-bg)] shadow-[0_4px_0_0_var(--key-shadow)] text-white">DEL</button>
    </div>

    <div class="mt-8 flex gap-4">
      <button @click="setTheme('theme-1')" class="px-4 py-2 bg-blue-500 text-white rounded">Theme 1</button>
      <button @click="setTheme('theme-2')" class="px-4 py-2 bg-orange-500 text-white rounded">Theme 2</button>
      <button @click="setTheme('theme-3')" class="px-4 py-2 bg-purple-700 text-white rounded">Theme 3</button>
    </div>
  </div> -->





  <!-- <div class="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]">

    <div class="mt-8 flex gap-4">
      <button @click="setTheme('theme-1')" class="px-4 py-2 bg-blue-500 text-white rounded">Theme 1</button>
      <button @click="setTheme('theme-2')" class="px-4 py-2 bg-orange-500 text-white rounded">Theme 2</button>
      <button @click="setTheme('theme-3')" class="px-4 py-2 bg-purple-700 text-white rounded">Theme 3</button>
    </div>
  </div> -->
</template>
