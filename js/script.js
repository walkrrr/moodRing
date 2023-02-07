var moods = document.querySelector("#moods");
var body = document.querySelector("body");

moods.addEventListener("change", function (e) {
  var moods = e.target.value;
  if (moods === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (moods === "sad") {
    body.classList.add("sad");
    body.classList.remove("passionate");
    body.classList.remove("happy");
  } else if (moods === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
