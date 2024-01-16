import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import axios from "axios";
import Card from "../Components/Card/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        setVideos(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos()
  }, [type])

  return (
    <Container>
      {videos.map(video => <Card key={video._Id} video={video} />)}
    </Container>
  )
}

export default Home