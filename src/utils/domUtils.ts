export const getElementCoordinates = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    width: rect.width,
    height: rect.height,
  };
};

export const isWithinBounds = (
  x: number,
  y: number,
  element: HTMLElement
): boolean => {
  const { top, left, width, height } = getElementCoordinates(element);
  return x >= left && x <= left + width && y >= top && y <= top + height;
};

export const calculateDropPosition = (
  clientX: number,
  clientY: number,
  container: HTMLElement
) => {
  const containerRect = container.getBoundingClientRect();
  return {
    x: clientX - containerRect.left,
    y: clientY - containerRect.top,
  };
};
