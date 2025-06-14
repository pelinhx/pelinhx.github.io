<template>
    <main class="main-content">
      <slot></slot>
    </main>
  </template>
  
  <style>
  .main-content {
    padding-top: 80px; /* Height of navbar */
    min-height: calc(100vh - 160px); /* Subtracting navbar and footer approximate heights */
    width: 100%;
  }
  
  @media screen and (max-width: 768px) {
    .main-content {
      padding-top: 60px;
    }
  }
  </style>