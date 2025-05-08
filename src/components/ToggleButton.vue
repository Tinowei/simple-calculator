<template>
  <div class="w-[80px] flex flex-col justify-center items-end ">
    <div class="flex ">
      <p class="mx-1.5 font-normal">1</p>
      <p class="mx-1.5 font-normal">2</p>
      <p class="mx-1.5 font-normal">3</p>
    </div>
    <div class="theme-toggle  ">
      <input type="radio" id="theme-1" name="theme" checked />
      <input type="radio" id="theme-2" name="theme" />
      <input type="radio" id="theme-3" name="theme" />
      <!-- switch-track -->
      <div class="switch-track">
        <span class="slider"></span>
        <label @click="changeTheme('theme-1')" class="switch-label label-1" for="theme-1"></label>
        <label @click="changeTheme('theme-2')" class="switch-label label-2" for="theme-2"></label>
        <label @click="changeTheme('theme-3')" class="switch-label label-3" for="theme-3"></label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['changeTheme']);

const changeTheme = (theme) => {
  console.log(theme);
  emit('changeTheme', theme);
};


</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 60px;
  height: 20px;
}

input[type="radio"] {
  display: none;
}

.switch-track {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  border-radius: 999px;
  /* outline: solid red; */
}

.slider {
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 2px 0;
  left: 2px;
  background-color: var(--key-accent-bg);
  border-radius: 999px;
  z-index: 10;
}

/*  三個label 撐滿 switch-track */
label {
  position: absolute;
  width: 33.33%;
  height: 100%;
  cursor: pointer;
  /* outline: 1px black solid; */
  z-index: 20;

}

/* 三段分區 */
.label-1 {
  left: 0%;
}

.label-2 {
  left: 33.33%;
}

.label-3 {
  left: 66.66%;
}

/* 根據點選的label切換slider位置 */
#theme-1:checked~.switch-track .slider {
  left: 3px;
  transition: linear 0.1s;
}

#theme-2:checked~.switch-track .slider {
  left: 33.33%;
  transition: linear 0.1s;
}

#theme-3:checked~.switch-track .slider {
  left: 66.66%;
  transition: linear 0.1s;
}
</style>
