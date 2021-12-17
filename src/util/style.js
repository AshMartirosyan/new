import { BorderColors } from "../styles/colors";

export const leftBorderTopPartHeight = (border) => {
  switch (border) {
    case BorderColors.HOME:
      return "0";
    case BorderColors.CLUB:
      return "64px";
    case BorderColors.GAMES:
      return "128px";
    case BorderColors.TEAM:
      return "192px";
  }
};

export const leftBorderBottomPartHeight = (border, fullHeight) => {
  switch (border) {
    case BorderColors.HOME:
      return `${fullHeight - 64 + 1.5}px`;
    case BorderColors.CLUB:
      return `${fullHeight - 128 + 1.5}px`;
    case BorderColors.GAMES:
      return `${fullHeight - 192 + 1.5}px`;
    case BorderColors.TEAM:
      return `${fullHeight - 256 + 1.5}px`;
  }
};
