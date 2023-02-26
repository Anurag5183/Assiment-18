function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}
function equal() {
  var eq = document.form.textView.value;
  if (eq) {
    document.form.textView.value = eval(document.form.textView.value);
  }
}
function c() {
  document.form.textView.value = " ";
}
