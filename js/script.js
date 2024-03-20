// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Niko/Ms Raffin
// Created on: march 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street number and street name and displays it back to user

  // get street number from text field and cast it to integer
  let StreetNumber = parseInt(document.getElementById("StreetNumber").value)
	// get street name from text field 
  let StreetName = document.getElementById("StreetName").value

  // display full address back to user
  document.getElementById('user-info').innerHTML = "Your Street address is " + StreetNumber + " " + StreetName + "."
}
