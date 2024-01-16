import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";



const Container = styled.div`
  flex: 2;
`;


const Recomendation = ({ tags }) => {
    const [recomendateVideos, setRecomendateVideos] = useState([]);

    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(`/videos/tags?tags=${tags}`);
        setRecomendateVideos(res.data);
      };
      fetchVideos();
    }, [tags]);
  return (
    <Container>
      {recomendateVideos.map((video) => (
        <Card type="sm" key={video._id} video={video} />
      ))}
    </Container>
  )
}

export default Recomendation