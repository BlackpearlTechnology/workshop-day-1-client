<template>
  <div class="posts">
      <br>
      <h1 align="center">REGISTER ISSUE</h1>
    <div class="container">
      <div class="form">
        <div>
           <input type="text" placeholder="ISSUE">
        </div>
        <div>
          <input type="text" placeholder="TYPE">
        </div>
         <div>
            <textarea type="text" placeholder="DESCRIPTION"></textarea>
        </div>
      </div>
    </div>
    <br>
  <div class="text-center">
    <v-btn width="400px" height="50px" rounded color="success" dark>REGISTER</v-btn>
  </div>    
  </div>
</template>

<script>
export default {
}
</script>
<style>
div.container {
  max-width: 600px;
  padding: 25px;
  border-radius: 50px; 
  margin: 0 auto;
  background: rgb(241, 231, 231);
}
.form textarea {
  width: 500px;
  padding: 25px;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  background: #fff;
}
.form input{
  width: 500px;
  padding: 25px;
  border-radius: 5px;
  outline: none;
  font-size: 15px;
  background: #fff;
}
.form div {
  margin: 20px;
}
</style>