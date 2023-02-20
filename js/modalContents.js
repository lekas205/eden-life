
let modalContents = {
    food: ` <div class="container">
    <div class="head">
        <label>Mon, 08 Sep 2021</label>
        <button onclick="closeModalDialog()">
            <img src="./assets/svg/close-icon.svg" alt="">
        </button>
    </div>

    <div class="order_status">
        <img src="./assets/svg/meal-pot.svg" alt="">
        <div class="status">
            <label>order status</label>
            <h5>Order has arrived</h5>
        </div>
    </div>

   <div class="post">
         <div class="address">
            <label for="">Delivery Address</label>
            <p>No 6B, Radiators Spring, Lightning Estate, Lagos, Nigeria.</p>
        </div>
    </div>

    <div class="activities">
        <ul>
            <li class="delivered">
                <div class="title">
                    <h4>Order has arrived</h4>
                    <small class="time">10:56 AM</small>
                </div>
                <p>Your order has arrived at your location. Pick it up!</p>
            </li>

            <li>
                <div class="title">
                    <h4>Order on the way</h4>
                    <small class="time">10:56 AM</small>
                </div>
                <p>Your order has arrived at your location. Pick it up!</p>
            </li>
        </ul>
    </div>
</div>`,

    house_cleaning: `
<div class="container">
<div class="head">
    <label>Mon, 08 Sep 2021</label>
    <button onclick="closeModalDialog()">
        <img src="./assets/svg/close-icon.svg" alt="">
    </button>
</div>

<div class="order_status">
    <img src="./assets/svg/home-icon.svg" alt="">
    <div class="status">
        <label>order status</label>
        <h5>Cleaning Completed</h5>
    </div>
</div>
    <div class="post">
        <div class="address">
            <label for="">Delivery Address</label>
            <p>No 6B, Radiators Spring, Lightning Estate, Lagos, Nigeria.</p>
        </div>

        <div class="agent">
            <label for="">Cleaner</label>
            <p>Kelechi Oguike</p>
        </div>
    </div>


<div class="activities">
    <ul>
        <li>
            <div class="title">
                <h4>Cleaning started</h4>
                <small class="time">10:56 AM</small>
            </div>
            <p>Your cleaner has started cleaning.</p>
        </li>

        <li>
            <div class="title">
                <h4>Cleaner has arrived</h4>
                <small class="time">10:56 AM</small>
            </div>
            <p>Your cleaner has arrived at your location.</p>
        </li>

        <li>
            <div class="title">
                <h4>Cleaner en route</h4>
                <small class="time">10:56 AM</small>
            </div>
            <p>Your cleaner is on the way to your location!</p>
        </li>
    </ul>
</div>
</div>
`
}