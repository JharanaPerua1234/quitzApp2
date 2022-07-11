import  { Button } from 'antd'

const SubmitButton=({onSubmit})=>{
    return(
        <div>
            <Button type="primary"  onClick={onSubmit}>Submit</Button>
        </div>
    )
}
export default SubmitButton;