radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > max) {
        max = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(max)
})
let max = 0
radio.setGroup(1)
max = 0
