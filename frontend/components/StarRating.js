import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from 'react-icons/fa'

const StarRatingStyles = styled.div`
  label {
    list-style: none;
    
    input {
      visibility: hidden;
      margin: 0;
      width: 0;
      height: 0;
    }  
  }
`

export default function StarRating({ 
  maxVal,
  currentRating,
  disabled,
  votesNum,
  onChange,
  totalRating
}) {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(Math.floor(currentRating))
  }, [currentRating])

  const handleClick = (ratingVal) => {
    if (!disabled) {
      setRating(ratingVal);
      onChange(ratingVal);
    }
  };

  const handleHover = (ratingVal) => {
    if (!disabled) {
      setHover(ratingVal);
    }
  };

  return (
    <StarRatingStyles>
      {
        [...Array(maxVal ? maxVal : 5)].map((s,i) => {
          const ratingVal = i + 1;
          
          return (
            <label className='rating-star' key={`star-${i}`}>
              <input type='radio' name='rating' value={ratingVal}/>
              <FaStar
                className='star'
                size={20}
                color={ratingVal <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onClick={() => handleClick(ratingVal)}
                onMouseEnter={() => handleHover(ratingVal)}
                onMouseLeave={() => handleHover(null)}
                />
          </label>
          );
        })
      }
      <span>
        {totalRating}({votesNum})
      </span>
    </StarRatingStyles>
  )
}