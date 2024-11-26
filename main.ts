let ldr1: number;
let ldr2: number;
let string: string;
let diff: number;
let ldr1Idle = pins.analogReadPin(AnalogPin.P0)
let ldr2Idle = pins.analogReadPin(AnalogPin.P1)
while (true) {
    ldr1 = pins.analogReadPin(AnalogPin.P0) - ldr1Idle
    ldr2 = pins.analogReadPin(AnalogPin.P1) - ldr2Idle
    string = `LDR1: ${ldr1}`
    serial.writeLine(string)
    string = `LDR2: ${ldr2}`
    serial.writeLine(string)
    diff = ldr1 - ldr2
    if (diff > 100) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, 10)
    } else if (diff < -100) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, -10)
    } else {
        ContinuousServo.turn_off_motor(DigitalPin.P12)
    }
    
    basic.pause(10)
}
