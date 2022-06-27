import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ViewProps } from './types';

export const ViewPanelSlide: React.FC<ViewProps> = ({
  push,
  pop,
  index,
  render,
  title,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setHasEntered(true);
  }, []);

  return (
    <div
      style={{ zIndex: index + 100 }}
      className={clsx({
        'w-full h-full bg-white transition-all duration-1000 absolute z-10 border border-gray-700':
          true,
        '-right-full': isClosing || (!isClosing && !hasEntered),
        'right-0': !isClosing && hasEntered,
      })}
    >
      <div className="h-12 w-full bg-gray-200 align-middle flex justify-between p-3">
        <span>{title}</span>
        {index !== 0 && (
          <button
            type="button"
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                pop();
              }, 1000);
            }}
          >
            Back
          </button>
        )}
      </div>
      {render && render({ push, pop })}
    </div>
  );
};

export default ViewPanelSlide;
