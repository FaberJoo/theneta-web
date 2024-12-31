import { createFileRoute } from '@tanstack/react-router';
import { Text, Container, Title, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Route = createFileRoute('/notFound')({
  component: NotFound,
});

function NotFound() {
  return (
    <Container>
      <Title>404 - 페이지를 찾을 수 없습니다</Title>
      <Text>요청하신 페이지를 찾을 수 없습니다.</Text>
      <Group>
        <Button component={Link} to='/'>
          홈으로 돌아가기
        </Button>
      </Group>
    </Container>
  );
}
