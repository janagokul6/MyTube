import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../Components/Card/Card";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


const Search = () => {
    const [searchedVideos, setSearchedVideos] = useState([]);
    const query = useLocation().search;
  
    useEffect(() => {
      const fetchVideos = async () => {
        const res = await axios.get(`/videos/search${query}`);
        setSearchedVideos(res.data);
      };
      fetchVideos();
    }, [query]);

    return <Container>
    {searchedVideos.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </Container>;
};

export default Search;