import {LoadDataModalFactory, withState, ModalTabsFactory} from 'kepler.gl/components';
import styled from 'styled-components';
// import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason, selectedData } from '../../actions'
import { setSelectedHours, getLtngDataSelectedHr } from '../../actions'
import { useDispatch,  useSelector } from 'react-redux' //delete this when do action the right way
import React, { useEffect, useState } from "react";
import LoadingStatus from '../LoadingStatus'


function ImageBlock({sample, onClick}){
  // console.log('in image block', sample, {sample})
  return(
    <StyledSampleMap id={sample.id} className="sample-map-gallery__item">
      <div className="sample-map">
        <div className="sample-map__image" onClick={onClick}>
          { <img src={sample.imageUrl} />}
        </div>
        <div className="sample-map__title">{sample.label}</div>
        <div className="sample-map__size">
         {sample.message}
        </div>
        <StyledImageCaption className="sample-map__image__caption">
          {sample.label}
        </StyledImageCaption>
      </div>
    </StyledSampleMap>
   )
}

const AllBlocks = ({hoursInfoArray}) =>{
  const [hours, setHours] = useState()
  // console.log('in all blocks', hoursInfoArray)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('selectedhours', hours)
    // localStorage.setItem('hours' ,hours)
    // dispatch(getRedshiftDataFireSeason(hours))
    dispatch(setSelectedHours(hours))
    dispatch(getLtngDataSelectedHr(hours))
  },[hours])
  // async function onClickAction(hours){
  //   console.log('clicked hours selecected', hours)
  //   await dispatch(getRedshiftDataFireSeason(hours))
  //   await dispatch(selectedData({hours}))
  // }
  return (
    <div>
      {
        hoursInfoArray ? (
          <StyledSampleGallery className="sample-map-gallery">
            {hoursInfoArray.map((sample,i) => 
              <ImageBlock 
                sample = {sample} 
                key = {i} 
                onClick={() => setHours(sample.hours)}
              />
            )}
          </StyledSampleGallery>   
        ): 'bye'
      }
    </div>
   )
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];


const hoursInfoArray = [
  
  {
    // imageUrl:'https://www.gannett-cdn.com/media/2019/05/20/USATODAY/usatsports/Turtle-Marriott-PV.jpg?width=2560',
    imageUrl: 'https://s3.amazonaws.com/uber-static/kepler.gl/sample/sftrees.png',
    label: '12 Hours',
    message: '',
    id: 1,
    hours: 12
  },
  {
    // imageUrl:'https://lh3.googleusercontent.com/WEVaxizETKCHMPxtHT1nQLzclTpvUU_Ape7n8UeBOFulvIxMHSrb7wLQNVmRT8RVipUgqcjLGlAW3gaDQmyj=s600-c',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/movement-pittsburgh.png',
    label: '24 Hours',
    message: '',
    id:2,
    hours: 24
  },
  {
    // imageUrl:'https://cms.qz.com/wp-content/uploads/2019/08/star-turtle-e1565615666276.jpg?quality=75&strip=all&w=1200&h=900&crop=1',
    imageUrl: 'https://s3.amazonaws.com/uber-static/kepler.gl/sample/ukcommute.png',
    label: '48 Hours',
    // message: 'x!!!',
    message: '',
    id: 3,
    hours: 48
  },
  {
    // imageUrl:'https://www.hakaimagazine.com/wp-content/uploads/aabr_thumb-1.jpg',
    imageUrl: 'https://s3.amazonaws.com/uber-static/kepler.gl/sample/nyctrips.png',
    label: '72 Hours',
    // message: 'hyyyyy?',
    message: '',
    id: 4,
    hours: 72
  },
 
  {
    // imageUrl:'https://www.gannett-cdn.com/media/2019/05/20/USATODAY/usatsports/Turtle-Marriott-PV.jpg?width=2560',
    imageUrl:'https://s3.amazonaws.com/uber-static/kepler.gl/sample/sfcontour.png',
    label: '96 Hours',
    message: '',
    id:2,
    hours: 96
  }
]

// const DummyComp = () => ( <AllBlocks hoursInfoArray={hoursInfoArray} />);
const DummyComp = () => {
  const appState = useSelector(state => state)
  const [hours, setHours] = useState()
  const [loadingError, setLoadingError] = useState()
  // useEffect(() =>{
  //   // console.log('is this the hours?', appState.selectedData.selected, !appState.selectedData.selected.hours)
  //   if(appState.selectedData.selected && appState.selectedData.selected.hours){
  //   // console.log('this the hours?', appState.selectedData.selected.hours)
  //     setHours(appState.selectedData.selected.hours)
  //   }
  //   else(
  //     setHours(null)
  //     // console.log('there isno hours here', appState.selectedData.selected, !appState.selectedData.selected.hours)
  //   )
  // },[appState.selectedData.selected])
  // useEffect(() => {
  //   if (appState.redshiftData.error && appState.redshiftData.error !== 'no hours'){
  //     setLoadingError(appState.redshiftData.error)
  //   }
  //   console.log('DummyComp state error', appState.redshiftData.error)
  // },[appState.redshiftData.error])

  // useEffect(()=>{
  //   console.log('loading error', loadingError)
  // },[loadingError])
  return( 
    <>
      {hours && !loadingError
        ? <LoadingStatus />
        : hours && loadingError
          ? JSON.stringify(loadingError)
          : <AllBlocks hoursInfoArray={hoursInfoArray} />
      }
    </>
  )
};
// const CustomLoadDataModalFactory = () => DummyComp
// const CustomLoadDataModalFactory = () => DummyComp

      // <ModalTabs />
const TryThisFirst = (ModalTabs) => {
  const ReturnComp = () => (
    <>
      <AllBlocks hoursInfoArray={hoursInfoArray} />
    </>  
  );
  return ReturnComp;
};



// export default CustomLoadDataModalFactory.deps = [ModalTabsFactory]
export default DummyComp


// const numFormat = format(',');

const StyledSampleGallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledSampleMap = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
  line-height: 22px;
  width: 30%;
  max-width: 480px;
  margin-bottom: 50px;

  .sample-map__image {
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
    opacity: 0.9;
    transition: opacity 0.4s ease;
    position: relative;
    line-height: 0;

    img {
      max-width: 100%;
      max-height: 100%;
      width:1590px;
      height:125px
    }
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  .sample-map__size {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  }

  :hover {
    .sample-map__image__caption {
      opacity: 0.8;
      transition: opacity 0.4s ease;
    }
  }
`;

const StyledImageCaption = styled.div`
  color: black;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 10px;
  opacity: 0;
`;

const StyledError = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 16px;
`;

        // if(hoursInfoArray){

        // }
        // else{

        // }
        // hoursInfoArray ? 
        //   for(const property in hoursInfoArray){
        //     <ImageBlock sample = {hoursInfoArray[property]} />
        //   }
        //  :'no info'