function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const driverInput = document.getElementById("driverTeeth");
const followerInput = document.getElementById("followerTeeth");

if (driverInput.value === "" && followerInput.value === "") {
    document.getElementById("ratioResult").textContent =

    "Start entering gear tooth counts to get a simplified gear ratio!"
}

function updateRatio() {
    const driver = Number(driverInput.value);
    const follower = Number(followerInput.value);


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
    //okay so this line above can actually be just "Gear ratio = " + simplifiedDriver + ":" + simplifiedFollower
}

driverInput.addEventListener("input", updateRatio);
followerInput.addEventListener("input", updateRatio);


