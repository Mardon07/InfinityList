import { runInAction } from "mobx";
import axios from "axios";
import itemStore from "../ItemStore";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ItemStore", () => {
  beforeEach(() => {
    runInAction(() => {
      itemStore.items = [];
      itemStore.page = 1;
      itemStore.loading = false;
    });
  });

  it("should fetch items from API and update the store", async () => {
    const itemsMock = [
      {
        id: 1,
        full_name: "test/repo1",
        html_url: "https://github.com/test/repo1",
        description: "Test repository 1",
        language: "JavaScript",
        forks_count: 10,
        stargazers_count: 20,
        created_at: "2024-01-01T00:00:00Z",
        updated_at: "2024-01-02T00:00:00Z",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { items: itemsMock } });

    await itemStore.fetchItems();

    expect(itemStore.items.length).toBe(1);
    expect(itemStore.items[0].full_name).toBe("test/repo1");
  });

  it("should delete an item from the store", () => {
    const itemToDelete = {
      id: 1,
      full_name: "test/repo1",
      html_url: "https://github.com/test/repo1",
      description: "Test repository 1",
      language: "JavaScript",
      forks_count: 10,
      stargazers_count: 20,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-02T00:00:00Z",
    };

    runInAction(() => {
      itemStore.items.push(itemToDelete);
    });

    itemStore.deleteItem(1);

    expect(itemStore.items.length).toBe(0);
  });
});
