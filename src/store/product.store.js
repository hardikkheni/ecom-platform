import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import data from "../graphql-products.json";

export default defineStore("product", () => {
  const products = reactive(data);
  const search = ref(null);
  const productId = ref(null);

  const filteredProducts = computed(() => {
    if (!search.value) return products;
    return products.filter((p) => p.name.includes(search.value));
  });

  const product = computed(() => {
    return products.find((i) => i.id === productId.value);
  });

  const searchHandler = (term) => {
    search.value = term;
  };

  const setProductId = (id) => {
    productId.value = id;
  };

  return { products, productId, product, search, filteredProducts, searchHandler, setProductId };
});
