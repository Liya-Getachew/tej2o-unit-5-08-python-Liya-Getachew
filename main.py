"""
Created by: Liya G
Created on: Nov 2020
This module is a Micro:bit MicroPython program that makes wheels move forward unless there's an object within 10 cm.
"""

from microbit import *

# variables
distance_to_object = 0

# setup
display.clear_screen()
display.show_icon(IconNames.HEART)
pause(500)

# loop
while True:
  if (button_a.is_pressed() == true):
      while (True):
        display.clear_screen()
        distance_to_object = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)

        if (distance_to_object < 10):
            robotbit.stp_car_move(-10, 48)
            pause(500)
            robotbit.stepper_turn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
            pause(500)
            robotbit.stepper_turn(robotbit.Steppers.2, robotbit.Turns.T1B4)
            pause(500)
            robotbit.stp_car_move(10, 48)
        else:
            robotbit.stp_car_move(10, 48)

