import { fromEvent } from 'rxjs';

export interface IMouseEvents {
  mousedownEvent: MouseEvent;
  mousemoveEvent: MouseEvent;
  movedX: number;
  movedY: number;
}

export interface IMouseMovedEvents extends IMouseEvents {
  stepMovedX: number;
  stepMovedY: number;
}

export const useMouseEvents = (
  dom: HTMLElement | SVGElement | SVGGElement,
  wrapDom?: SVGElement | SVGGElement
) => {
  const mousedown$ = fromEvent(dom, 'mousedown');
  const mousemove$ = fromEvent(wrapDom || dom, 'mousemove');
  const mouseleave$ = fromEvent(wrapDom || dom, 'mouseleave');
  const mouseup$ = fromEvent(wrapDom || dom, 'mouseup');
  return { mousedown$, mousemove$, mouseleave$, mouseup$ };
};
