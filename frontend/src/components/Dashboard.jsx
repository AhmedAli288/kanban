import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { useBoardsData } from './features/customHooks';
import AppContext from '../context/AppContext';


function Dashboard() {
  const Navigate = useNavigate();

  const context = useContext(AppContext);
  const { boardsOverview, setBoardsOverview } = context;

  const { boardsData, isBoardLoading }  = useBoardsData(true)

  if(!isBoardLoading && boardsData){
    setBoardsOverview(boardsData.data)
  }

  if (isBoardLoading) return 'Loading...';
  // if (error) return `Error: ${error.message}`;
  
  return (
    <div className="cards-list">
      {boardsOverview.map((item, index)=>{
        return(
          <div key={index} onClick={()=>{Navigate(`/board/${item.id}`)}} className="card 1">
            <div className="card_image"> 
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> 
            </div>
            <div className="card_title title-white">
              <p>{item.name}</p>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default Dashboard