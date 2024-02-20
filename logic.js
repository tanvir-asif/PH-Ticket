const bus_seats = document.getElementsByClassName("seatBtn");
var count = 0;
var mul=1;
for(const seat of bus_seats){
    seat.addEventListener("click", function(e) {
        if(count<4 && !e.target.classList.contains("selected")){        
            count++;
            e.target.classList.add("selected")
            const seatCount = parseInt(document.getElementById("seat-remaining").innerText);
            document.getElementById("seat-remaining").innerText = seatCount - 1;

            document.getElementById("seat-count").innerText = count;

            const seatName = e.target.innerText;

            const table = document.getElementById("table-body");
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            cell1.innerText = seatName;
            cell2.innerText = "Economy";
            cell3.innerText = "550";

            const totalPrice = count*550;
            const grand = parseInt(totalPrice) * parseFloat(mul); 
            document.getElementById("total").innerText = totalPrice;
            document.getElementById("grand-total").innerText = grand;

        }

    })
}

const couponBtn = document.getElementById("coupon-btn");
couponBtn.addEventListener("click",function(){
    const coupon = document.getElementById("coupon").value;
    if(coupon === "NEW15"){
        mul = 0.75;
        const grandTotal = parseInt(document.getElementById("grand-total").innerText)*mul;
        document.getElementById("grand-total").innerText = grandTotal;

        document.getElementById("coupon-box").setAttribute("hidden", "true");

    }
    if(coupon === "Couple 20"){
        mul = 0.8;
        const grandTotal = parseInt(document.getElementById("grand-total").innerText)*mul;
        document.getElementById("grand-total").innerText = grandTotal;

        document.getElementById("coupon-box").setAttribute("hidden", "true");

    }
})
