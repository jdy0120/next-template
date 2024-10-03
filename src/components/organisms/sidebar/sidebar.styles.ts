import Link from "next/link";
import { styled } from "../../../styles/themes";

export const SidebarStyled = styled("div", {
  width: "250px",
  height: "100%",
  borderRight: "1px solid $gray200",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "$white",
});

export const SidebarHeader = styled("div", {
  width: "100%",
  height: "224px",
  borderBottom: "1px solid $gray200",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SidebarLogo = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  a: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: "80%",
    height: "100%",
  },
});

export const SidebarInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const SidebarMenu = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
});

export const SidebarMenuItem = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const SidebarBody = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const SubMenuGroup = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const MenuItem = styled("div", {
  height: "40px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "$gray100",
  paddingLeft: "15px",
});

export const SubMenuItem = styled(Link, {
  height: "40px",
  display: "flex",
  alignItems: "center",
  variants: {
    active: {
      true: {
        backgroundColor: "$primary400",
        color: "$white",
      },
      false: {
        "&:hover": {
          backgroundColor: "$primary100",
        },
      },
    },
  },
  paddingLeft: "30px",
});
