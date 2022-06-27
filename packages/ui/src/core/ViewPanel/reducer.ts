import {
  POP_VIEW,
  PUSH_VIEW,
  ViewPanelActions,
  ViewPanelViewsState,
} from './types';

const reducer = (state: ViewPanelViewsState, action: ViewPanelActions) => {
  switch (action.type) {
    case PUSH_VIEW:
      return [...state, { ...action.view, uid: Date.now().toString() }];
    case POP_VIEW:
      return [...state.slice(0, -(action.count || 1))];
    default:
      return state;
  }
};

export default reducer;
