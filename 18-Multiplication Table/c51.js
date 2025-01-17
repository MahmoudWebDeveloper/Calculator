//Create The First Table
table_creator(10);

function table_creator(table_max) {
  let table;
  let max = table_max;
  sfx();
  //Creating the table
  table = "<table>";

  for (let j = -1; j <= max; j++) {
    // Creating the row
    table += "<tr>";

    if (j == -1) {
      // Adding the X cell
      table += "<td class='x'>";
      table += "x";
      table += "</td>";
    } else {
      // Adding the X cell
      table += "<td class='first_col'>";
      table += j;
      table += "</td>";
    }

    // Adding the numberd cells
    for (let i = -1; i < max; i++) {
      if (j == -1) {
        table += "<td class='first_row'>";
        table += i + 1;
        table += "</td>";
      } else if (i + 1 == j) {
        table += "<td class ='square'>";
        table += (i + 1) * j;
        table += "</td>";
      } else {
        table += "<td>";
        table += (i + 1) * j;
        table += "</td>";
      }
    }

    table += "</tr>";
  }

  table += "</table>";

  // Adding the created table into the HTML document
  document.getElementById("table").innerHTML = table;
}
//controller

function update_value(value) {
  document.getElementById("Selected Value").innerHTML =
    "Selected Value : " + value;
    table_creator(value);
}
//SFX

function sfx() {
  const sfx = document.getElementById("sfx");
  sfx.pause();
  sfx.currentTime = 0;
  sfx.play();
}
