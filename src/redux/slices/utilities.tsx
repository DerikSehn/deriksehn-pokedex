import { Dispatch } from "react";
import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
 import { SliceStatus } from "@/lib/globals";
import { lPad } from "@/lib/lPad";

export const statusHandlerReducer = {
  initialize: (state: any, action: PayloadAction) => {
    console.log("state", state, action)
    state.status.state = SliceStatus.LOADING;
  },
  error: (state: any, action: PayloadAction) => {
    console.log("state", state, action)
    state.status.state = SliceStatus.ERROR;
  },
  success: (state: any, action: PayloadAction) => {
    console.log("state", state, action)
    state.status.state = SliceStatus.SUCCESS;
  },
};

type StatusHandler = {
  initialize: ActionCreatorWithPayload<any, string>;
  success: ActionCreatorWithPayload<any, string>;
  error: ActionCreatorWithPayload<any, string>;
};

export type WrapReduxAsyncHandlerType = (
  args?: any
) => (dispatch: React.Dispatch<any>) => Promise<void>;
 

export const wrapReduxAsyncHandler = (
  statusHandler: StatusHandler,
  callback: (dispatch: Dispatch<any>, args: any) => Promise<void>
) => { 
  return  (args: any) => async (dispatch: Dispatch<any>) =>  {
     
  dispatch(statusHandler.initialize({}));
   console.log("args", args)
  callback(dispatch, args)
    .then(() => {
      console.log("statusHandler.success({})");
      dispatch(statusHandler.success({}));
    })
    .catch((err) => {
      console.log(err);
      console.error(err);
    });
}};

export const transformSpriteToBaseImage = (
  pokemonId: number,
  baseUrl: string
): string => {
  console.log("pokemonId", pokemonId, baseUrl)
  return baseUrl + lPad(pokemonId, 3) + ".png";
};