import React from "react";
import { Button, Card, Typography } from "antd";
import { Item } from "../store/item";
import itemStore from "../store/ItemStore";

const { Text } = Typography;

interface RepositoryCardProps {
  repository: Item;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const handleDelete = (id: number) => {
    itemStore.deleteItem(id);
  };
  return (
    <Card
      title={repository.full_name}
      style={{ width: 400, margin: "16px" }}
      actions={[
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          Открыть репозиторий
        </a>,
        <Button
          type="primary"
          danger
          onClick={() => handleDelete(repository.id)}
        >
          Удалить
        </Button>,
      ]}
    >
      <Text strong>Описание:</Text>
      <p>{repository.description || "Описание отсутствует"}</p>
      <Text strong>Язык:</Text>
      <p>{repository.language || "Не указан"}</p>
      <Text strong>Форков:</Text>
      <p>{repository.forks_count}</p>
      <Text strong>Звезд:</Text>
      <p>{repository.stargazers_count}</p>
      <Text strong>Дата создания:</Text>
      <p>{new Date(repository.created_at).toLocaleDateString()}</p>
      <Text strong>Последнее обновление:</Text>
      <p>{new Date(repository.updated_at).toLocaleDateString()}</p>
    </Card>
  );
};

export default RepositoryCard;
