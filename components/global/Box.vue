<template>
    <div class="box">
      <slot></slot>
    </div>
  </template>
  
  <style>
    .box {
      @apply bg-white shadow-md rounded-md p-6 w-1/2 h-auto m-10;
    }
  </style>