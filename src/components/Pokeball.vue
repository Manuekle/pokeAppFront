<template>
  <div>
    <ul>
      <li class="block"><i class="pokeball"></i></li>
    </ul>
  </div>
</template>
<style>
.pokeball {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #333;
  position: relative;
  display: inline-block;
  box-shadow: inset -3px 1px 1px rgba(0, 0, 0, 0.2);
  background: radial-gradient(
    circle at top center,
    #ed1c1c 45%,
    #555 46%,
    #555 52%,
    #fff 53%
  );
  background-size: 200% 100%;
  background-position: 50%;
  transform-origin: center;
  animation: pokewobble 5s ease infinite forwards;
}
.pokeball:before {
  content: "";
  opacity: 0.3;
  position: absolute;
  bottom: -2px;
  left: 15%;
  width: 70%;
  height: 2px;
  border-radius: 50%;
  box-shadow: 0 0 2px 1px #000;
  background: #000;
  z-index: -1;
  transform-origin: center -10px;
  animation: pokeshadow 5s ease infinite forwards;
}
.pokeball:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  margin-left: -3px;
  margin-top: 1px;
  background: white;
  border: 1px solid #333;
  box-shadow: inset 0px 2px 0 rgba(0, 0, 0, 0.3),
    -4px -8px 4px -1px rgba(255, 255, 255, 0.8);
  animation: pokeglow 5s ease infinite forwards;
}

@keyframes pokewobble {
  2% {
    transform: rotate(-18deg);
    margin-left: -6px;
  }
  4% {
    transform: rotate(18deg);
    margin-left: 6px;
  }
  6%,
  30% {
    transform: rotate(0deg);
    margin-left: 0px;
  }
  32% {
    transform: rotate(-18deg);
    margin-left: -6px;
  }
  34% {
    transform: rotate(18deg);
    margin-left: 6px;
  }
  36% {
    transform: rotate(0deg);
    margin-left: 0px;
  }
  62% {
    margin-top: 0;
  }
  63% {
    margin-top: -3px;
  }
  64% {
    margin-top: 0px;
  }
  65% {
    margin-top: -2px;
  }
  68% {
    margin-top: 0;
  }
}
@keyframes pokeshadow {
  2% {
    transform: rotate(18deg);
  }
  4% {
    transform: rotate(-18deg);
  }
  6%,
  30% {
    transform: rotate(0deg);
  }
  32% {
    transform: rotate(18deg);
  }
  34% {
    transform: rotate(-18deg);
  }
  36% {
    transform: rotate(0deg);
  }
  62% {
    bottom: -2px;
  }
  63% {
    bottom: -6px;
  }
  64% {
    bottom: -2px;
  }
  65% {
    bottom: -4px;
  }
  68% {
    bottom: -2px;
  }
}
@keyframes pokeglow {
  60% {
    background: white;
    box-shadow: inset 0px 2px 0 rgba(0, 0, 0, 0.3),
      -4px -8px 4px -1px rgba(255, 255, 255, 0.8);
  }
  68% {
    background: #ff5f32;
    box-shadow: inset 0px 2px 0 rgba(0, 0, 0, 0.3),
      -4px -8px 4px -1px rgba(255, 255, 255, 0.8), 0 0 4px 2px #ff5f32;
  }
  80% {
    background: white;
    box-shadow: inset 0px 2px 0 rgba(0, 0, 0, 0.3),
      -4px -8px 4px -1px rgba(255, 255, 255, 0.8);
  }
}

body ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 200px;
}
body ul li {
  display: inline-block;
  width: 60px;
  height: 20px;
}
body ul li.block {
  display: block;
  width: 200px;
}
</style>
