import React from "react";
import {
  Card,
  Box,
  Text,
  Tooltip,
  Button,
  Avatar,
  Grid,
  Flex,
} from "@mantine/core";
import {
  IconUsersPlus,
  IconTrash,
  IconAt,
  IconPhoneCall,
  IconWorld,
  IconStar,
} from "@tabler/icons-react";

import styles from "./UserCard.module.css";
import Link from "next/link";
import { User } from "../../interface";

interface Props {
  user: User;
  handleFollow: (id:number) => void;
  handleDelete: (id:number) => void;
  isFollow: boolean;
}

const UserCard = ({ user, handleFollow, handleDelete, isFollow }: Props) => {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="md"
      component="a"
      target="_blank"
      className={styles.card}
    >
      <Box mx={"auto"}>
        <Tooltip
          arrowOffset={50}
          arrowSize={5}
          arrowRadius={5}
          label={user.name}
          withArrow
          position="top-start"
          events={{ hover: true, focus: false, touch: false }}
        >
          <a
            href={`//${user.website}`}
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            <Avatar
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
              alt="no image here"
              color="indigo"
              size="xl"
              className={styles.icon}
            />
          </a>
        </Tooltip>
      </Box>

      <Text fw={500} size="lg" mt="md" mx={"auto"}>
        {user.name} &nbsp; {isFollow && <IconStar size={14} />}
      </Text>

      <Flex align="center" direction="row" mt="xs">
        <IconAt size={14} style={{ color: "#868e96" }} />
        <Link
          href={`mailto:${user.email}`}
          target="_blank"
          passHref={true}
          className={styles.link}
        >
          <Text c="dimmed" size="sm">
            &nbsp;{user.email}
          </Text>
        </Link>
      </Flex>

      <Flex align="center" direction="row" mt="xs">
        <IconPhoneCall size={14} style={{ color: "#868e96" }} />
        <Link
          href={`tel:${user.phone}`}
          target="_blank"
          passHref={true}
          className={styles.link}
        >
          <Text c="dimmed" size="sm">
            &nbsp;{user.phone}
          </Text>
        </Link>
      </Flex>

      <Flex align="center" direction="row" mt="xs">
        <IconWorld size={14} style={{ color: "#868e96" }} />
        <Link
          href={`//${user.website}`}
          target="_blank"
          passHref={true}
          className={styles.link}
        >
          <Text c="dimmed" size="sm">
            &nbsp;{user.website}
          </Text>
        </Link>
      </Flex>

      <Grid justify="center" mt={"md"}>
        <Grid.Col span={6}>
          <Button
            fullWidth
            leftSection={<IconUsersPlus size={14} />}
            onClick={() => handleFollow(user.id)}
            variant={isFollow ? "default" : ""}
          >
            {isFollow ? "Unfollow" : "Follow"}
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button
            fullWidth
            leftSection={<IconTrash size={14} />}
            variant="outline"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default UserCard;
