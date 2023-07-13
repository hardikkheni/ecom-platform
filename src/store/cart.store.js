import { defineStore } from "pinia";
import { computed, reactive } from "vue";

const storeKey = "cart";

export default defineStore("cart", () => {
  // NOTE: Use somewhat persistance for cart
  let text = localStorage.getItem(storeKey) || "[]";
  try {
    text = JSON.parse(text);
  } catch {}
  const items = reactive(text);

  const setToStorage = (data) => {
    localStorage.setItem(storeKey, JSON.stringify(data));
  };

  const computedInfo = computed(() => {
    let total = 0;
    const list = [];
    for (const item of items) {
      const subtotal = parseFloat((item.qty * item.price).toFixed(2));
      total += subtotal;
      list.push({ ...item, subtotal: subtotal });
    }
    return { total, list };
  });

  const addItem = (product) => {
    const index = items.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      items[index].qty += 1;
    } else {
      // NOTE: store price and qty top level to easy access
      items.push({ ...product, price: product.price, qty: 1 });
    }
    setToStorage(items);
  };

  const removeQty = (itemId) => {
    const index = items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      if (items[index].qty > 1) {
        items[index].qty -= 1;
      } else {
        items.splice(index, 1);
      }
    }
    setToStorage(items);
  };
  const removeItem = (itemId) => {
    const index = items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      items.splice(index, 1);
    }
    setToStorage(items);
  };
  return { items, computedInfo, addItem, removeItem, removeQty };
});
