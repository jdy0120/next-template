"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "../../../constants/router/menus.type";
import { setLogout } from "../../../lib/redux/features/login/loginSlice";
import { useAppDispatch } from "../../../lib/redux/hooks";
import {
  MenuItem,
  SidebarBody,
  SidebarHeader,
  SidebarInfo,
  SidebarLogo,
  SidebarMenu,
  SidebarMenuItem,
  SidebarStyled,
  SubMenuGroup,
  SubMenuItem,
} from "./sidebar.styles";
import Logo from "/public/assets/logos/logo.png";
const firstpathname = (path: string) => {
  return path.split("/")[1];
};

interface SidebarProps {
  menus: Menu[];
}

const Sidebar = ({ menus }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
    dispatch(setLogout());
  };

  return (
    <SidebarStyled>
      <SidebarHeader>
        <SidebarLogo>
          <Link href="/">
            <img src={Logo.src} alt="logo" />
          </Link>
        </SidebarLogo>
        <SidebarInfo>
          <p>관리자</p>
          <p onClick={handleLogout}>로그아웃</p>
        </SidebarInfo>
      </SidebarHeader>
      <SidebarBody>
        <SidebarMenu>
          {menus.map((menu) => (
            <SidebarMenuItem key={menu.id}>
              <MenuItem>{menu.name}</MenuItem>
              <SubMenuGroup>
                {menu.subMenus.map((subMenu) => (
                  <SubMenuItem
                    key={subMenu.id}
                    href={subMenu.path}
                    active={subMenu.path === `/${firstpathname(pathname)}`}
                  >
                    {subMenu.name}
                  </SubMenuItem>
                ))}
              </SubMenuGroup>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarBody>
    </SidebarStyled>
  );
};

export default Sidebar;
