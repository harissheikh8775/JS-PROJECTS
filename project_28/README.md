# 🛒 Inventory Management System

A simple JavaScript-based inventory management system to add, update, find, and remove products by name and quantity.

## 📁 Project Structure

This project contains the following core functions:

- `findProductIndex(prodName)`
- `addProduct(prodObj)`
- `removeProduct(prodName, prodQuantity)`

## 📦 Features

### ✅ 1. Find Product by Name
Searches the inventory for a product by its name (case-insensitive) and returns the index. If not found, it returns `-1`.

```js
findProductIndex("flour"); // returns index or -1
