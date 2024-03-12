"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "../../lib/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  console.log(incrementValue)
  return (
    /* tailwind buttons classname */
    <>
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <span className="text-2xl mx-4">{count}</span>
        <button
          className="bg-rich_black-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
      <div className="flex items-center justify-center">
        <input
          className="border-2 border-indigo-500 rounded-full py-2 px-4"
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
      </div>
      <div className="flex items-center justify-center">
        <span>Status: {status}</span>
      </div>
    </>

  );
};