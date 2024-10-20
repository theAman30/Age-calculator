function age() {
  var d1 = document.getElementById("date").value.trim();
  var m1 = document.getElementById("month").value.trim();
  var y1 = document.getElementById("year").value.trim();

  if (d1 === "" || m1 === "" || y1 === "") {
    document.getElementById("age").innerHTML = "Please enter your complete date of birth.";
    return;
  }

  var date = new Date();
  var d2 = date.getDate();  //to get date 
  var m2 = 1 + date.getMonth(); // to get month
  var y2 = date.getFullYear(); // to get year
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML = "You are " + y + "years " + m + "months and " + d + "days old.";
}
