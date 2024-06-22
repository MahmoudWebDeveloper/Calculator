document.addEventListener("DOMContentLoaded", function () {
  const orderform = document.getElementById("orderform");

  orderform.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = orderform[0].value.trim();
    if (name.length > 3) {
      alert("Name Is Accepted");
    } else {
      alert("Name Must Be Greater Than 3 Characters");
    }
  });
});
