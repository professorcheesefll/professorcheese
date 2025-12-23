function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


document.getElementById("calculateRatio").addEventListener("click", function () {
    const driver = Number(document.getElementById("driverTeeth").value);
    const follower = Number(document.getElementById("followerTeeth").value);
    if (driver <= 0 || follower <= 0) {
        document.getElementById("ratioResult").textContent =

        "Please enter valid gear tooth counts.";
    return;
    }

    const divisor = gcd(driver, follower);
    const simplifiedDriver = driver / divisor;
    const simplifiedFollower = follower / divisor;

    document.getElementById("ratioResult").textContent =

    `Gear ratio (driver : follower) = ${simplifiedDriver}:${simplifiedFollower}`;
    
});