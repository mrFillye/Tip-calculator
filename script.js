function calculateTip() {
    const billAmt = document.getElementById("billamt").value;
    const serviseQual = document.getElementById("serviseQual").value;
    const numOfPeople = document.getElementById("peopleamt").value;

    if (billAmt === "" && numOfPeople == 0) {
        alert("enter values")
        return
    }

    if (billAmt === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "none"
    }

    let total = (billAmt * serviseQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none"

document.getElementById("calculate").onclick = () => {
    calculateTip();
}