import type { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import type { HostComponent } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import type {
    Float,
    WithDefault,
    BubblingEventHandler,
    Double,
  } from 'react-native/Libraries/Types/CodegenTypes';
  type DateEvent =  Readonly<{
    timestamp: string
  }>
export interface NativeProps extends ViewProps {
    date?: string,
    modal?: boolean,
    open?:boolean,
    mode?: WithDefault<'date' | 'time' | 'datetime', 'datetime'>,
    onChange?: BubblingEventHandler<DateEvent>,
    onConfirm?: BubblingEventHandler<DateEvent>,
    onCancel?: BubblingEventHandler<undefined>,
    onDateChange?: BubblingEventHandler<DateEvent>,
    maximumDate?: string,
    minimumDate?: string
 // 添加其它 props
}
export default codegenNativeComponent<NativeProps>("NativeDatePickerView") as HostComponent<NativeProps>;