import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import itemStore from "../../store/ItemStore";
import ItemList from "../ItemList";
import React from "react";

jest.mock("../../store/ItemStore");

describe("ItemList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and display items on mount", async () => {
    itemStore.fetchItems = jest.fn().mockResolvedValueOnce(undefined);
    itemStore.items = [
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

    render(<ItemList />);

    await waitFor(() => expect(screen.getByText("test/repo1")).toBeInTheDocument());
  });

  it("should call fetchItems when scrolled down", async () => {
    const fetchItemsMock = jest.fn().mockResolvedValueOnce(undefined);
    itemStore.fetchItems = fetchItemsMock;

    render(<ItemList />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    await waitFor(() => {
      expect(fetchItemsMock).toHaveBeenCalled();
    });
  });
});
