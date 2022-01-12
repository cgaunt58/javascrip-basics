const sizeSelect = document.getElementById('sizeSelect')
const ordersButton = document.getElementById('ordersButton')
const ordersDiv = document.getElementById('ordersDiv')
const orderBox = document.getElementById('orderBox')
const drinkTypeBox = document.getElementById('drinkTypeBox')
const searchBox = document.getElementById('searchBox')
const searchForm = document.getElementById('searchForm')
const addOrderForm = document.getElementById('addOrderForm')
const completedOrdersDiv = document.getElementById('completedOrdersDiv')


function viewDrinkOrders(ordersFetched) {
    ordersButton.addEventListener("click", function () {
        let request = new XMLHttpRequest()
        request.addEventListener('load', function () {
            let result = JSON.parse(this.responseText)
            ordersFetched(result)
        })
        request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
        request.send()
    })
}

function viewOrdersByEmail(ordersFetched) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault()
        let input = searchBox.value
        console.log(input)
        let request = new XMLHttpRequest()
        request.addEventListener('load', function () {
            result = JSON.parse(this.responseText)
            ordersFetched(result)
        })
        request.open('GET', "https://troubled-peaceful-hell.glitch.me/orders/" + input + "")
        request.send()
    })
}

function displayOrders(orders) {
    if (orders.message === 'Order not found') {
        ordersDiv.innerHTML = `<p>No orders found.</p>`
    } else {
        const orderList = orders.map((order) => {
            return `<p>${order.email}</p>
        <p>${order.type}</p>
        <p>${order.size}</p>
        <p>${order.price}</p>`
        })
        ordersDiv.innerHTML = orderList.join('')
    }
}

viewOrdersByEmail(function (orders) {
    displayOrders(orders)
})

viewDrinkOrders(function (orders) {
    displayOrders(orders)
})

addOrderForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                completedOrdersDiv.innerHTML = `<h3>Order Submitted!</h3>`
                clearOrderDiv()
            }
        }
    }
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')
    const body = {
        email: orderBox.value,
        type: drinkTypeBox.value,
        size: sizeSelect.value,
        price: drinkPriceBySize()
    }
    request.send(JSON.stringify(body))
})



function drinkPriceBySize() {
    if (sizeSelect.value == 'Small') {
        return 2.5
    } else if (sizeSelect.value == 'Medium') {
        return 5
    } else if (sizeSelect.value == 'Large') {
        return 7.5
    }
}
