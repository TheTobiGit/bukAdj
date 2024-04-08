<template>
  <section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>
</template>

<style>
.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.dot {
  height: 10px;
  width: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #1F6A5D;
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:last-child {
  margin-right: 0;
}

.dot:nth-child(1) {
  animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    background-color: #1F6A5D;
    box-shadow: 0 0 0 0 rgba(18, 105, 19, 0.7);
  }

  50% {
    transform: scale(0.7);
    background-color: #1f6a5ec8;
    box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
  }

  100% {
    transform: scale(0.5);
    background-color: #1F6A5D;
    box-shadow: 0 0 0 0 rgba(18, 105, 19, 0.7);
  }
}
</style>