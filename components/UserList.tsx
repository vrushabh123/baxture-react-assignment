"use client";

import React, { useState } from "react";
import { Grid } from "@mantine/core";
import UserCard from "./UserCard/UserCard";
import { User } from "../interface";

const UserList = ({ usersData }: any) => {
  const [users, setUsers] = useState(JSON.parse(usersData.value));
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  const handleDelete = (id: number) => {
    setUsers(users.filter((item: User) => item.id !== id));
  };
  const handleFollow = (id: number) => {
    if (followedUsers.includes(id)) {
      setFollowedUsers(followedUsers.filter((item) => item !== id));
    } else {
      setFollowedUsers([...followedUsers, id]);
    }
  };
  const checkFollow = (id: number) => {
    return followedUsers.includes(id);
  };
  return (
    <Grid m={"lg"}>
      {users?.map((item: User) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.id}>
          <UserCard
            user={item}
            isFollow={checkFollow(item.id)}
            handleDelete={handleDelete}
            handleFollow={handleFollow}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default UserList;
