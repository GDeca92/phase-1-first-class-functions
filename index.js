function receivesAFunction (spy){
    spy()
}

function returnsANamedFunction () {
    return function namedFuction () {
    }
}

function returnsAnAnonymousFunction () {
    return function () {
    }
}