ldr1Idle = pins.analog_read_pin(AnalogPin.P0)
ldr2Idle = pins.analog_read_pin(AnalogPin.P1)
while True:
    ldr1 = pins.analog_read_pin(AnalogPin.P0) - ldr1Idle
    ldr2 = pins.analog_read_pin(AnalogPin.P1) - ldr2Idle
    string = "LDR1: %d" % (ldr1, 0)
    serial.write_line(string)
    string = "LDR2: %d" % (ldr2, 0)
    serial.write_line(string)
    diff = ldr1 - ldr2
    if diff > 100:
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, 10)
    elif diff < -100:
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, -10) 
    else:
        ContinuousServo.turn_off_motor(DigitalPin.P12)
    basic.pause(10)
