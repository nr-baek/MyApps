export const checkInputable = (pressedKey: string) => {
  if (
    !(pressedKey >= "0" && pressedKey <= "9") &&
    pressedKey !== "." &&
    pressedKey !== "ArrowLeft" &&
    pressedKey !== "ArrowRight" &&
    pressedKey !== "Backspace"
  ) {
    return true;
  }
  return false;
};

export const checkPreventStatus = (
  pressedKey: string,
  isPointClicked: boolean,
): boolean => {
  if (checkInputable(pressedKey) || (pressedKey === "." && isPointClicked)) {
    return true;
  }
  return false;
};
