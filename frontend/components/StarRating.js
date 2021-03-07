import { useState } from "react";
import styled from "styled-components";

const StarRatingStyles = styled.div`
  list-style: none;
`

export default function StarRating({ userVote }) {

  const [clicked, setClicked] = useState();
  const [hovered, setHovered] = useState();

  const handleMouseEnter = () => {
    
  }

  return (
    <StarRatingStyles>
      <ul>
        <li><input type='radio' data-pos="1" onMouseEnter={}/></li>
        <li><input type='radio' data-pos="2"/></li>
        <li><input type='radio' data-pos="3"/></li>
        <li><input type='radio' data-pos="4"/></li>
        <li><input type='radio' data-pos="5"/></li>
      </ul>
    </StarRatingStyles>
  )
}