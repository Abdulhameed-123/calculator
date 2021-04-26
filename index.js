function clean(){
  document.form.text.value ="";
}
function insert(num){
  document.form.text.value =
  document.form.text.value + num;
}
function equal(){
  var x = document.form.text.value;
  document.form.text.value = eval(x);
}
function back(){
  var x = document.form.text.value;
  document.form.text.value = x.substring(0, x.length-1)
}