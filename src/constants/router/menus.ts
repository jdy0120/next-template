import { Menu } from "./menus.type";

const menus: Menu[] = [
  {
    id: 1,
    name: "Admin",
    path: "",
    subMenus: [
      {
        id: 3,
        name: "공지사항",
        path: "/notice",
        subMenus: [],
      },
      {
        id: 4,
        name: "Banner",
        path: "/banner",
        subMenus: [],
      },
    ],
  },
  {
    id: 2,
    name: "Dive",
    path: "",
    subMenus: [
      {
        id: 5,
        name: "선물함(전체)",
        path: "/gift-box-entity",
        subMenus: [],
      },
      {
        id: 6,
        name: "선물함(개인)",
        path: "/gift-box-personal",
        subMenus: [],
      },
      {
        id: 7,
        name: "User",
        path: "/user",
        subMenus: [],
      },
      {
        id: 8,
        name: "즉석뽑기",
        path: "/instant-draw",
        subMenus: [],
      },
      {
        id: 9,
        name: "행운권",
        path: "/lucky-draw",
        subMenus: [],
      },
      {
        id: 10,
        name: "즉석뽑기당첨 리스트",
        path: "/instant-draw-winner-entity",
        subMenus: [],
      },
      {
        id: 11,
        name: "행운권 뽑은인원 리스트",
        path: "/lucky-draw-user-entity",
        subMenus: [],
      },
      {
        id: 12,
        name: "꽝 없는 100% 뽑기",
        path: "/draw-entity",
        subMenus: [],
      },
      {
        id: 13,
        name: "꽝 없는 100% 뽑기 현황",
        path: "/draw-log-entity",
        subMenus: [],
      },
      {
        id: 14,
        name: "수령 정보 리스트",
        path: "/user-contacts-entity",
        subMenus: [],
      },
      {
        id: 15,
        name: "프로모션 코드",
        path: "/promotion-entity",
        subMenus: [],
      },
      {
        id: 16,
        name: "피버타임",
        path: "/reward-fevertime-entity",
        subMenus: [],
      },
      {
        id: 17,
        name: "재가입 whitelist",
        path: "/user-whitelist-entity",
        subMenus: [],
      },
    ],
  },
];

export { menus };
