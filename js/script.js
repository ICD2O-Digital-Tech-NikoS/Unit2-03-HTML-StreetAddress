// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let StreetNumber = parseInt(document.getElementById("StreetNumber").value)
	// get age from text field and cast it to integer
  let StreetName = document.getElementById("StreetName").value

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your Street address is " + StreetNumber + " " + StreetName + "."
}
