import { makeAutoObservable } from "mobx";
import axios from "axios";
import { Item } from "./Item";

class ItemStore {
  items: Item[] = [];
  page = 1;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchItems() {
    if (this.loading) return;
    this.loading = true;
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=${this.page}`
      );
      this.items = [...this.items, ...response.data.items];
      this.page += 1;
    } catch (error) {
      console.error("Ошибка при загрузке данных", error);
    } finally {
      this.loading = false;
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export default new ItemStore();
