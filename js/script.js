// Created by: sophie
// Created on: nov 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-06-loops/sw.js", {
    scope: "/ICS2O-unit5-06-loops/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)

  let count = 0
  let sum = 0

  while (count < num2) {
    sum += num1
    count++
  }

  document.getElementById("answer").innerHTML = "your answer is: " + sum + "."
}
