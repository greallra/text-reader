import "./main.css";

import HoverPlayer from "./lib/HoverPlayer";
import { getTopLevelReadableElementsOnPage } from './lib/parser.ts';
import { useHoveredParagraphCoordinate } from './lib/hook.ts';
import { speechify } from './lib/play.ts';
import { useState, useEffect } from "react";



export function Main() {
  const els = getTopLevelReadableElementsOnPage();
  let [bounds, setBounds] = useState(null);
  let [activeEl, setActiveEl] = useState(null);
  let [activeElCoords, setActiveElCoords] = useState(null);

  function handlePlay() {
    if (activeEl) {
      speechify(activeEl);
    }
  }

  useEffect(() => {
    function handleMouseMove(event) {
      // useHoveredParagraphCoordinate(els)
        var eventDoc, doc, body;
        event = event || window.event; // IE-is
        // // If pageX/Y aren't available and clientX/Y are,
        // // calculate pageX/Y - logic taken from jQuery.
        // // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        let { coordinateOfHover, activeElBounds, activeEl} = useHoveredParagraphCoordinate(els, { x: event.pageX, y: event.pageY})
        if (coordinateOfHover) {
          setBounds(coordinateOfHover);
          setActiveElCoords(activeElBounds);
          setActiveEl(activeEl);
        } else {
          setActiveElCoords(null)
          setActiveEl(null)
        }
    }
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

 

  return <HoverPlayer bounds={bounds} activeElCoords={activeElCoords} play={handlePlay} message={'message'}/>;
}
