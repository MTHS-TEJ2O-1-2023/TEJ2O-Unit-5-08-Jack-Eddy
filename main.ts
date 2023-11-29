/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Nov 2023
 * This program moves a stepper motor forward, back and turns based on the distance to an object
*/

// variables
let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) === true)
    // move backwards and turn
    if (distanceToObject <= 10) {
      distanceToObject = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
      // move forwards
      if (distanceToObject > 10) {
        basic.showString(distanceToObject.toString())
        robotbit.StpCarMove(10, 48)
        distanceToObject = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
      }
      basic.showString(distanceToObject.toString())
      robotbit.StpCarMove(-10, 48)
      robotbit.StpCarTurn(90, 48, 125)
      }
}
