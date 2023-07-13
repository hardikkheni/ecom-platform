import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import { useProductStore } from "../../src/store";

describe("Product Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Search should work", () => {
    const store = useProductStore();
    const total = store.products.length;
    store.searchHandler("Shouldn't found Records");
    expect(store.filteredProducts.length).toBe(0);
    store.searchHandler(null);
    expect(store.filteredProducts.length).toBe(total);
  });
});
