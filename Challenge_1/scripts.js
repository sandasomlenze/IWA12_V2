const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.querySelector("#book1")
const status1 = book1.querySelector(".status")
const reserve1 = book1.querySelector(".reserve")
const checkout1 = book1.querySelector(".checkout")
const checkin1 = book1.querySelector(".checkin")


checkin1.style.color = "black"
status1.style.color = STATUS_MAP.overdue.color

reserve1.disabled = true
checkout1.disabled = true



const book2 = document.querySelector('#book2');
const status2 = book2.querySelector(".status")
const reserve2 = book2.querySelector('.reserve');
const checkout2 = book2.querySelector('.checkout');
const checkin2 = book2.querySelector('.checkin');

checkin2.style.color = ""
status2.style.color = STATUS_MAP.reserved.color

reserve2.disabled = true
checkin2.disabled = true



const book3 = document.querySelector('#book3');
const status3 = book3.querySelector(".status")
const reserve3 = book3.querySelector('.reserve');
const checkout3 = book3.querySelector('.checkout');
const checkin3 = book3.querySelector('.checkin');


checkin3.style.color = ""
status3.style.color = STATUS_MAP.shelf.color

checkin3.disabled = true

