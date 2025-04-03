declare module 'react-native-chart-kit' {
  import { Component } from 'react';
  import { ViewStyle, TextStyle } from 'react-native';

  export interface ChartProps {
    data: any; // Define your data type here
    width: number;
    height: number;
    chartConfig: any; // Define your chartConfig type here
    style?: ViewStyle;
    // Add other props as needed
  }

  export class LineChart extends Component<ChartProps> {}
  export class BarChart extends Component<ChartProps> {}
  // Add other chart types as needed
}