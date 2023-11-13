basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    255,
    SuperBit.enMotors.M4,
    255
    )
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    255,
    SuperBit.enMotors.M4,
    -255
    )
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    -255,
    SuperBit.enMotors.M4,
    255
    )
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    -255,
    SuperBit.enMotors.M4,
    -255
    )
    basic.pause(2000)
})
basic.forever(function () {
    SuperBit.Servo3(SuperBit.enServo.S1, SuperBit.enPos.forward, 90)
})
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S2, 0)
    basic.pause(2000)
    SuperBit.Servo2(SuperBit.enServo.S2, 270)
    basic.pause(2000)
})
basic.forever(function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
})
basic.forever(function () {
    SuperBit.StepperTurn(SuperBit.enSteppers.B1, SuperBit.enTurns.T5B0)
    basic.pause(2000)
})
