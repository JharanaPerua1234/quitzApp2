import {InputNumber} from 'antd'
// import {FaStar} from "react-icons/fa"
const Rating = ({ onChangeRating }) => {
  return (
    <div className="rating">
    Rating:
      <InputNumber min={1} max={5} onChange={onChangeRating} />
    </div>
  );
};
export default Rating;