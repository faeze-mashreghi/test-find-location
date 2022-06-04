import * as type from '../../actionType'
import { LocationProperties } from "../../../model/interfaces";

import {LocationActions} from '../../type/location'
import { createGUID } from '../../../helpers';

const initialState :LocationProperties[]=[{position:[0,0]}]

export default function getNotificationLength(state=initialState,action:LocationActions):LocationProperties[]{
    switch(action.type)
    {
                 case type.GET_ALL_LOCATION:
                  return action.payload!
                    case type.ADD_NEW_LOCATION:
                      if(action.payload?.id)
                      {action.payload.id = createGUID()}
                    return  state=[...state,action.payload!]
                    case type.EDDIT_LOCATION:
                    return  state=[...state,action.payload!]
         
               default:
                return state
                    
    }
}
