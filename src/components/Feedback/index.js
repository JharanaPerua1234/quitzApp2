import {Input,Label} from 'antd'
import { useState } from 'react';
const FeedbackValue=({onChange})=>{
    
    return (
      <div>
        <label htmlFor="Feedback">
          Feedback:
        </label>
        <Input placeholder="Basic usage" className="input" onChange={onChange} />
      </div>
    );
}
export default FeedbackValue;