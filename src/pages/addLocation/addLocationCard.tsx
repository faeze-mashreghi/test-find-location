import { FC } from 'react';
import Button from '../../component/Button';
import Card from '../../component/Card';
import SelectBox from '../../component/SelectBox';
import TextBox from '../../component/TextBox';
import UploadBox from '../../component/UploadBox';
import {locationType} from '../../model/constants'
import Logic from './logic/addLocationCard'
import Map from '../../component/Map';
const AddLocationCard: FC = ({}) => {

    const {
      handleOnChangeTextBox,
      handleOnChangeSelectBox,
      handleSubmit,
      handleUploadPictur,
      getPositionCallBack
      }=Logic()
    
  return (
  <form onSubmit={handleSubmit}>
    <div className='add-location'>
       <div className='add-location-box'>
        <Card title='Share Location' >
            <TextBox onChange={handleOnChangeTextBox}
             label='Location name:'
             className='mt-3'
             name='name'
             required/>

             <div className='map-box mt-3'><label>Location on map:</label>
             <div><Map selectedLocation={getPositionCallBack}/></div>
             </div>
            <SelectBox options={locationType} onChange={handleOnChangeSelectBox} 
            label='Location Type:'
            className='mt-3 select-location-type'
            name='type'
            required
            />
            <UploadBox className='mt-3' label='logo:' onChange={handleUploadPictur}/>
        </Card>

        <Button lable='Save' variant='info' className='me-3 mt-3' type='submit'/>
        <Button lable='Cancle' className='mt-3 ms-2'/>
      </div>
    </div>
    </form>

    
  );
};

export default AddLocationCard;