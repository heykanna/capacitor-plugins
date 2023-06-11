/* eslint-disable @typescript-eslint/no-namespace */
import {
  MapType,
  Marker,
  Polygon,
  Circle,
  Polyline,
  StyleSpan,
  LatLngBounds
} from './definitions';
import { GoogleMap } from './map';

export { GoogleMap, MapType, Marker, Polygon, Circle, Polyline, StyleSpan, LatLngBounds };

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      'capacitor-google-map': any;
    }
  }
}
