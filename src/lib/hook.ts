/**
 * Gets bounding boxes for an element. This is implemented for you
 */
export function getElementBounds(elem: HTMLElement) {
  const bounds = elem.getBoundingClientRect();
  const top = bounds.top + window.scrollY;
  const left = bounds.left + window.scrollX;

  return {
    x: left,
    y: top,
    top,
    left,
    width: bounds.width,
    height: bounds.height,
  };
}

/**
 * **TBD:** Implement a function that checks if a point is inside an element
 */
export function isPointInsideElement(
  coordinateOfHover: { x: number; y: number },
  element: HTMLElement
): boolean {
  
  let bounds = getElementBounds(element);
  if (
    coordinateOfHover.x > bounds.x && 
    coordinateOfHover.y > bounds.y && coordinateOfHover.y < bounds.y + bounds.height
    ) {
    return true;
  }
    return null

  
}

/**
 * **TBD:** Implement a function that returns the height of the first line of text in an element
 * We will later use this to size the HTML element that contains the hover player
 */
export function getLineHeightOfFirstLine(element: HTMLElement): number {}

export type HoveredElementInfo = {
  element: HTMLElement;
  top: number;
  left: number;
  heightOfFirstLine: number;
};

/**
 * **TBD:** Implement a React hook to be used to help to render hover player
 * Return the absolute coordinates on where to render the hover player
 * Returns null when there is no active hovered paragraph
 * Note: If using global event listeners, attach them window instead of document to ensure tests pass
 */
export function useHoveredParagraphCoordinate(
  parsedElements: HTMLElement[],
  coordinateOfHover: { x: number; y: number },
): HoveredElementInfo | null {
  let isInsideEl, activeElBounds, activeEl;
  parsedElements.forEach((el) => {
    isInsideEl = isPointInsideElement(coordinateOfHover, el);
    if (isInsideEl) {
      activeElBounds = getElementBounds(el);
      activeEl = el;
    }
  });
  if (activeElBounds) {
    return { coordinateOfHover: coordinateOfHover, activeElBounds : activeElBounds, activeEl };
  }
  return { coordinateOfHover: null, activeElBounds : null, activeEl: null };
}
