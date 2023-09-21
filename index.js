function distanceFromHqInBlocks (distance) {
    if (distance > 42) {
        return distance - 42 
    } else if (distance < 42) {
        return 42 - distance
    }
}
distanceFromHqInBlocks ()

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * 264
}
distanceFromHqInFeet()

function distanceTravelledInFeet (start, destination) {
    if (destination > start) {
        return (destination - start) * 264
    } else if (destination < start) {
        return (start -destination) *264
    }
}
distanceTravelledInFeet()

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet (start, destination) >= 401 && distanceTravelledInFeet (start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) -400) * .02
    } else if (distanceTravelledInFeet (start, destination) >= 2001 && distanceTravelledInFeet (start, destination) <=2500) {
        return 25
    } else if (distanceTravelledInFeet (start, destination) >= 2501) {
        return 'cannot travel that far'
    }
}