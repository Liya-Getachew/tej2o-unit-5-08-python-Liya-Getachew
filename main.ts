let distance_to_object: number;
/** 
Created by: Liya G
Created on: Nov 2020
This module is a Micro:bit MicroPython program that makes wheels move forward unless there's an object within 10 cm.


 */
//  setup
basic.showIcon(IconNames.Ghost)
//  loop forever
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            //  check distance
            distance_to_object = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
            basic.showNumber(distance_to_object)
            //  if distance is >= 10 motors move 10 cm forward
            if (distance_to_object >= 10) {
                robotbit.StpCarMove(10, 42)
                basic.pause(500)
            } else {
                //  if stepper motor is < 10 cm motors move 10 cm backward & turn 90 deegres
                robotbit.StpCarMove(-10, 42)
                basic.pause(500)
                robotbit.StpCarTurn(90, 42, 125)
                basic.pause(500)
            }
            
        }
    }
    
}
