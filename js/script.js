// Copyright (c) 2020 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height-of-triangle").value)
  const base = parseInt(document.getElementById("base-of-triangle").value)

  // process
  const area = (height * base) / 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
