input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
