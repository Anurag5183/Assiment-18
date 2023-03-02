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
function darkmode() {
  var body = document.body;
  body.classList.toggle("darkmode");

  var mode = document.getElementById("dark mode").textContent= 'Dark-Mode';
  if (mode.textContent == 'Dark-Mode') {
    mode.textContent = "Light Mode";
  } else {
    mode.target.value("Dark Mode");
  }
}
