async function totalPrice() {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    let products = await req.json();

    const quantities = {
      1: 3,
      4: 4,
      3: 5,
    };

    let totalPrice = 0;

    for (let prod of products) {
      if (quantities[prod.id]) {
        totalPrice += prod.price * quantities[prod.id];
      }
    }

    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
  } catch (res) {
    console.log(res);
  }
}

totalPrice();
