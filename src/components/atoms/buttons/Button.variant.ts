import { VariantProps } from "@stitches/react";
import { ButtonStyled } from "./Button.styles";

export type ButtonVariantProps = VariantProps<typeof ButtonStyled>;
export type ButtonColor = ButtonVariantProps["color"];
export type ButtonSize = ButtonVariantProps["size"];
