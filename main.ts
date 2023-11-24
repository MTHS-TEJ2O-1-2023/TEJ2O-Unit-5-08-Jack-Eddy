/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Nov 2023
 * This program moves a stepper motor forward, back and turns based on the distance
*/
// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// loop forever
basic.forever(function() {
distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)
})

// loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    // move car forwards if distance is greater than 10
    if (distanceToObject < 10) {
      basic.showIcon(IconNames.Yes)
      robotbit.StpCarMove(10, 48)
    }
    // move car backwards then turn if distance is less than or equal to 10
    if (distanceToObject >= 10) {
      robotbit.StpCarMove(-10, 48)
      robotbit.StpCarTurn(90, 48, 125)
      basic.showIcon(IconNames.Happy)
    }
  }
}
