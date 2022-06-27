import { useReducer } from 'react';
import reducer from './reducer';
import { POP_VIEW, PUSH_VIEW, ViewPanelProps } from './types';
import ViewPanelSlide from './ViewPanelSlide';

export const ViewPanel: React.FC<ViewPanelProps> = ({ initialView }) => {
  const [views, dispatch] = useReducer(reducer, [initialView]);

  return (
    <div className="w-50 h-screen relative overflow-hidden">
      {views.map((view, index) => (
        <ViewPanelSlide
          key={view.uid}
          index={index}
          push={(viewSlide) => dispatch({ type: PUSH_VIEW, view: viewSlide })}
          pop={(count = 1) => dispatch({ type: POP_VIEW, count })}
          title={view.title}
          render={({ push, pop }) => (
            <view.component
              key={view.uid}
              index={index}
              push={push}
              pop={pop}
            />
          )}
        />
      ))}
    </div>
  );
};

export default ViewPanel;
