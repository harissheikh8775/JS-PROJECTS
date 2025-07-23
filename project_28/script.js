let inventory = [];

// ✅ Function to find the index of a product by name (case-insensitive)
function findProductIndex(prodName) {
  return inventory.findIndex(
    (item) => item.name.toLowerCase() === prodName.toLowerCase()
  );
}

// ✅ Function to add a product or update its quantity
function addProduct(prodObj) {
  const index = findProductIndex(prodObj.name);

  if (index !== -1) {
    // Product exists: update quantity
    inventory[index].quantity += prodObj.quantity;
    console.log(`${prodObj.name.toLowerCase()} quantity updated`);
  } else {
    // New product: normalize name to lowercase and add
    const newProd = {
      name: prodObj.name.toLowerCase(),
      quantity: prodObj.quantity,
    };
    inventory.push(newProd);
    console.log(`${newProd.name.toLowerCase()} added to inventory`);
  }
}

// ✅ Function to remove quantity or the product completely
function removeProduct(prodName, prodQuantity) {
  const index = findProductIndex(prodName);

  if (index === -1) {
    console.log(`${prodName.toLowerCase()} not found`);
    return;
  }

  const product = inventory[index];

  if (prodQuantity > product.quantity) {
    console.log(
      `Not enough ${product.name} available, remaining pieces: ${product.quantity}`
    );
  } else if (prodQuantity === product.quantity) {
    // Remove the product if quantity becomes 0
    inventory.splice(index, 1);
    console.log(`${product.name} removed from inventory`);
  } else {
    // Subtract quantity
    product.quantity -= prodQuantity;
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
  }
}

addProduct({ name: "FLOUR", quantity: 20 });
addProduct({ name: "FLOUR", quantity: 5 }); // should update
addProduct({ name: "Rice", quantity: 5 });

removeProduct("FLOUR", 5);
removeProduct("FLOUR", 25);
removeProduct("RICE", 5);
removeProduct("RICE", 1);
