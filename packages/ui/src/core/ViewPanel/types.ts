export const PUSH_VIEW = '@ViewPanel/PUSH_VIEW';
export const POP_VIEW = '@ViewPanel/POP_View';

interface ViewPanelSlideOptions {
  uid: string;
  component: React.FC<ViewProps>;
  title?: string;
}

export interface ActionPushView {
  type: typeof PUSH_VIEW;
  view: ViewPanelSlideOptions;
}

export interface ActionPopView {
  type: typeof POP_VIEW;
  count?: number;
}

export type ViewPanelActions = ActionPushView | ActionPopView;

export type ViewPanelViewsState = ViewPanelSlideOptions[];

export interface ViewPanelProps {
  initialView: ViewPanelSlideOptions;
}

type PushFunction = (viewSlide: ViewPanelSlideOptions) => void;
type PopFunction = (count?: number) => void;

export interface ViewProps {
  push: PushFunction;
  pop: PopFunction;
  index: number;
  title?: string;
  render?: ({
    push,
    pop,
  }: {
    push: PushFunction;
    pop: PopFunction;
  }) => React.ReactNode;
}
