let chessPiece = "Rook";
let chessPieceLowerCase = chessPiece.toLocaleLowerCase();

switch (chessPieceLowerCase){
    case "king":
        console.log ("King - Moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally.");
        break;
    case "queen":
        console.log ("Queen - Moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.");
        break;
    case "rook":
        console.log ("Rook - Moves any number of vacant squares forwards, backwards, left, or right in a straight line.");
        break;
    case "bishop":
        console.log ("Bishop - Moves any number of vacant squares diagonally in a straight line. ");
        break;
    case "knight":
        console.log ("Knight - Moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.");
        break;
    case "pawn":
        console.log ("Pawn - Moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board");
        break;
};