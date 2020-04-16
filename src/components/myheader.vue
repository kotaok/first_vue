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
  background: #005AA7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFDE4, #005AA7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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