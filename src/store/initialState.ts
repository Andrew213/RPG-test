import { StateT } from "./type";

export const initialState: StateT = {
  name: "defaultName",
  info: [
    {
      name: "Жизненная сила",
      value: 0,
      id: 3,
    },
    {
      name: "Уклонение",
      value: 0,
      id: 2,
    },
    {
      name: "Энергичность",
      value: 0,
      id: 1,
    },
  ],
  parameters: [
    {
      name: "Харизма",
      value: 0,
      id: 1,
    },
    {
      name: "Ловкость",
      value: 0,
      id: 2,
    },
    {
      name: "Сила",
      value: 0,
      id: 3,
    },
    {
      name: "Интеллект",
      value: 0,
      id: 4,
    },
  ],
  skills: [
    {
      name: "Атака",
      value: 0,
      id: 1,
      parameterId: 3,
      maxLvL: true,
    },
    {
      name: "Стелс",
      value: 0,
      id: 2,
      parameterId: 2,
      maxLvL: true,
    },
    {
      name: "Стрельба из лука",
      id: 3,
      parameterId: 2,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Обучаемость",
      id: 4,
      parameterId: 4,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Выживание",
      id: 5,
      parameterId: 4,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Медицина",
      id: 6,
      parameterId: 4,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Запугивание",
      id: 7,
      parameterId: 1,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Проницательность",
      id: 8,
      parameterId: 1,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Внешний вид",
      id: 9,
      parameterId: 1,
      value: 0,
      maxLvL: true,
    },
    {
      name: "Манипулирование",
      id: 10,
      parameterId: 1,
      value: 0,
      maxLvL: true,
    },
  ],
};
