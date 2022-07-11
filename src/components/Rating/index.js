import {InputNumber} from 'antd'
import {FaStar} from "react-icons/fa";
import {useState} from "react";
const Rating = ({ onChangeRating,setHover,setRating,hover,rating }) => {
  // const[rating,setRating]=useState(null);
  // const[hover,setHover]=useState(null);
  return (
    <div className="rating">
    {[...Array(5)].map((star,i)=>{
     const ratingValue = i + 1;
      return (
        <label>
          <input
            className="radiobtn"
            type="radio"
            name="rating"
            onClick={() => {
              setRating(ratingValue);
            }}
            value={ratingValue}
          />
          <FaStar
            className="star"
            size={34}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => {
              setHover(ratingValue);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
          />
        </label>
      );})}
      {/* Rating:
      <InputNumber min={1} max={5} onChange={onChangeRating} /> */}
     <p>the rating is {rating}</p>
    </div>
  );
};
export default Rating;