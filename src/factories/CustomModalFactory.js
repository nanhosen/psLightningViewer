import {LoadDataModalFactory, withState, ModalTabsFactory, PanelHeaderFactory, FileUploadFactory, LoadStorageMapFactory } from 'kepler.gl/components';
import styled from 'styled-components';
import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason } from '../actions'
import { useDispatch } from 'react-redux' //delete this when do action the right way

import {LOADING_METHODS} from '../constants/default-settings';

import ModelChoicePanel from '../components/load-data-modal/choose_model';
// import {loadRemoteMap, loadSample, loadSampleConfigurations} from '../actions';

function CustomHeader(){ return(<div>ERC Percentiles</div>)}


const CustomLoadDataModalFactory = (...deps) => {
  const LoadDataModal = LoadDataModalFactory(...deps);
  const defaultLoadingMethods = LoadDataModal.defaultProps.loadingMethods;
  const additionalMethods = {
    remote: {
      id: LOADING_METHODS.remote,
      label: 'Choose Lightning Hours',
      elementType: ModelChoicePanel
    }
  };

  // add more loading methods
  LoadDataModal.defaultProps = {
    ...LoadDataModal.defaultProps,
    loadingMethods: [
      additionalMethods.remote,
      defaultLoadingMethods.find(lm => lm.id === 'upload')
    ]
  };

  // return withState([], state => ({...state.demo.app, ...state.keplerGl.nanette.uiState}), {
  return withState([], state => ({...state}), {
    onLoadSample: ModelChoicePanel,
    onLoadRemoteMap: ModelChoicePanel,
  })(LoadDataModal);
};

CustomLoadDataModalFactory.deps = LoadDataModalFactory.deps;

export default CustomLoadDataModalFactory