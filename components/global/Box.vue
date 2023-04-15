<template>
    <div class="box">
      <slot></slot>
    </div>
  </template>
  
  <style>
    .box {
      @apply bg-light-background dark:bg-dark-background border dark:border-dark-text border-light-text rounded-md p-6 md:w-1/2 h-auto m-10;
    }
  </style>