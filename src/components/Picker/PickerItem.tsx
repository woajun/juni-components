import {
  HTMLProps,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { usePickerActions, usePickerData } from './Picker';
import { useColumnData } from './PickerColumn';

interface PickerItemRenderProps {
  selected: boolean;
}

export interface PickerItemProps
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'children'> {
  children: ReactNode | ((renderProps: PickerItemRenderProps) => ReactNode);
  value: string;
}

// eslint-disable-next-line
function isFunction(functionToCheck: any): functionToCheck is Function {
  return typeof functionToCheck === 'function';
}

const PickerItem = ({
  style,
  children,
  value,
  ...restProps
}: PickerItemProps) => {
  const optionRef = useRef<HTMLDivElement | null>(null);
  const { itemHeight, value: pickerValue } = usePickerData('Picker');
  const pickerActions = usePickerActions('Picker.Item');
  const { key } = useColumnData('Picker.Item');

  useEffect(
    () => pickerActions.registerOption(key, { value, element: optionRef }),
    [key, pickerActions, value],
  );

  const itemStyle = useMemo(
    () => ({
      height: `${itemHeight}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
    }),
    [itemHeight],
  );

  const handleClick = useCallback(() => {
    pickerActions.change(key, value);
  }, [pickerActions, key, value]);

  return (
    <div
      style={{
        ...itemStyle,
        ...style,
      }}
      ref={optionRef}
      onClick={handleClick}
      {...restProps}
    >
      {isFunction(children)
        ? children({ selected: pickerValue[key] === value })
        : children}
    </div>
  );
};

export default PickerItem;
