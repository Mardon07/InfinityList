import { render, screen, fireEvent } from "@testing-library/react";
import itemStore from "../../store/ItemStore";
import RepositoryCard from "../RepositoryCard";

jest.mock("../../store/ItemStore");

describe("RepositoryCard", () => {
  const repository = {
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display repository details", () => {
    render(<RepositoryCard repository={repository} />);

    expect(screen.getByText("test/repo1")).toBeInTheDocument();
    expect(screen.getByText("Описание:")).toBeInTheDocument();
    expect(screen.getByText("Test repository 1")).toBeInTheDocument();
    expect(screen.getByText("Язык:")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  it("should call deleteItem when delete button is clicked", () => {
    render(<RepositoryCard repository={repository} />);
    
    const deleteButton = screen.getByText("Удалить");
    fireEvent.click(deleteButton);

    expect(itemStore.deleteItem).toHaveBeenCalledWith(1);
  });
});
