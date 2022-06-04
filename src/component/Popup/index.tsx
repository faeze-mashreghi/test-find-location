import React, { FC } from 'react';
import {Popup as PopupLeaflet}from 'react-leaflet'
import Button from '../Button';
import './style.css'
import {locationType} from '../../model/constants'
interface PopUpProps {
title?:string
locType:number
}

const Popup: FC<PopUpProps> = ({title,locType}) => {
  return (
    <>
      <PopupLeaflet>
        <div className='popup-header'><span>{title}</span></div>
        <div className='popup-body'>
          <img src=''/>
          <div>          <span>type:</span> <span>{locationType?.find(i=>i.value===locType)?.label}</span>  </div>
        <div className='eddit-button'>
        <Button lable='Eddit ' variant='warning' />
        </div>
        </div>
      </PopupLeaflet>
    </>
  );
};

export default Popup;