/**
 * TEST #1
 * 
 * Lorsque j'appuie sur le bouton A, le servomoteur tourne de 2 degrés
 */
input.onButtonPressed(Button.A, function () {
    Position = Position + 2
    servos.P0.setAngle(Position)
})
let Position = 0
Position = 0
