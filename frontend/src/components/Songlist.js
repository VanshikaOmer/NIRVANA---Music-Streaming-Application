import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #303030;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #505050;
  }
`;

const SongLink = styled.a`
  color: #00ccff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch('/api/songs');
      const data = await response.json();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  return (
    <ListContainer>
      <h2>Song List</h2>
      <List>
        {songs.map((song) => (
          <ListItem key={song._id}>
            <span>{song.title} by {song.artist}</span>
            <SongLink href={song.url} target="_blank">Listen</SongLink>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default SongList;
