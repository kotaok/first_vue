<template>
  <div class="header">
   <div>
     <p>PORTFOLIO</p>
   </div>
  </div>
</template>

<script>
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  padding: 15%;
  background: #0575E6;
  background: -webkit-linear-gradient(to right, #021B79, #0575E6);
  background: linear-gradient(to right, #021B79, #0575E6);

}

.header div {
  position: relative;
  left: 0;
}

.header div p {
  font-family: bilo, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
  color: #dedede;
}

@media screen and (max-width: 600px) {
  .header div p {
    font-size: 40px;
    color: #9296d0cf;
  }
}
</style>