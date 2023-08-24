"use strict";

let row = document.getElementsByClassName("row");
let th = document.querySelectorAll(".row th");
let td = document.querySelectorAll(".row td");
let arrow = document.querySelectorAll(".row svg");


for (let i = 0; i<row.length; i++) {
    row[i].addEventListener("click", e => {
        if (td[i].style.display === "inline-block") {
            
            td[i].style.display = "none";
            th[i].style.fontWeight = "normal";
            arrow[i].classList.remove("arrow");
        }
        else {
            for(let j = 0; j<row.length; j++) {
                if (td[j].style.display === "inline-block")
                {
                    td[j].style.display = "none";
                    th[j].style.fontWeight = "normal";
                    arrow[j].classList.remove("arrow");
                }
            }
            td[i].style.display = "inline-block";
            th[i].style.fontWeight = "bold";
            arrow[i].classList.add("arrow");
        }
    });
}