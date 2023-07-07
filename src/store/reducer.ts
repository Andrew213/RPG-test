import { ActionCreatorsType, InfoI, ParameterI, SkillI, StateT } from "./type";
import { ActionsType } from "./actionTypes";
import { initialState } from "./initialState";

const changeInfo = (
  oldInfo: InfoI[],
  newParameters: ParameterI[],
  record: ParameterI,
  type: "increment" | "decrement"
): InfoI[] => {
  const newRecord = newParameters.find((el) => el.id === record.id);

  return [...oldInfo].map((info) => {
    if (info.value === 0 && type === "decrement") {
      return info;
    }

    if (record.id === 3 && info.id === 3) {
      // Сила
      return {
        ...info,
        value:
          type === "increment"
            ? record.value + 4
            : !!newRecord?.value
            ? info.value - 1
            : info.value - 4,
      };
    }

    if (info.id === 1) {
      // Энергичность
      const acrobatics = newParameters.find((el) => el.id === 2)?.value!;
      const intelligence = newParameters.find((el) => el.id === 4)?.value!;
      return {
        ...info,
        value:
          type === "increment" ? acrobatics + intelligence : info.value - 1,
      };
    }

    if (record.id === 2 && info.id === 2) {
      // уклонение
      return {
        ...info,
        value:
          type === "increment"
            ? record.value + 11
            : !!newRecord?.value
            ? info.value - 1
            : info.value - 11,
      };
    }

    return info;
  });
};

const changeParameters = (
  state: StateT,
  record: ParameterI,
  type: "increment" | "decrement"
) => {
  let currentParameterValue: number;

  const { skills, parameters } = state;

  const newParameters = [...parameters].map((el) => {
    if (el.value === 0 && type === "decrement") {
      return el;
    }
    if (el.id === record.id) {
      currentParameterValue =
        type === "increment" && el.value >= 0 ? el.value + 1 : el.value - 1;
      return {
        ...el,
        value: currentParameterValue,
      };
    }

    return el;
  });

  const newSkills = skills.map((skill) => {
    if (skill.parameterId === record.id) {
      return {
        ...skill,
        maxLvL: currentParameterValue <= skill.value,
      };
    }
    return skill;
  });

  return { newParameters, newSkills };
};

const skillup = (record: SkillI, store: StateT): StateT => {
  const parentParameter = store.parameters.find(
    (param) => param.id === record.parameterId
  )!;
  return {
    ...store,
    skills: [...store.skills].map((skill) => {
      if (skill.id === record.id) {
        if (parentParameter.value > record.value) {
          return {
            ...skill,
            value: skill.value + 1,
            maxLvL: parentParameter.value === record.value + 1,
          };
        }
      }
      return skill;
    }),
  };
};

const reducer = (
  state: StateT = initialState,
  action: ActionCreatorsType
): StateT => {
  switch (action.type) {
    case ActionsType.UP_PARAMETER:
      const { parameter } = action;

      const { newParameters, newSkills } = changeParameters(
        state,
        action.parameter,
        "increment"
      );

      return {
        ...state,
        parameters: newParameters,
        info: changeInfo(state.info, newParameters, parameter, "increment"),
        skills: newSkills,
      };
    case ActionsType.DOWN_PARAMETER:
      const newParametersDec = changeParameters(
        state,
        action.parameter,
        "decrement"
      );
      return {
        ...state,
        parameters: newParametersDec.newParameters,
        skills: newParametersDec.newSkills,
        info: changeInfo(
          state.info,
          newParametersDec.newParameters,
          action.parameter,
          "decrement"
        ),
      };
    case ActionsType.LVLUP_SKILL:
      return skillup(action.skill, state);
    case ActionsType.UPLOAD_CHARACTER:
      return action.state;
    case ActionsType.CHANGE_NAME:
      return { ...state, name: action.value };
    case ActionsType.GET_DAMAGE:
      const currentHpIndex = state.info.findIndex(({ id }) => id === 3);
      const currentHp = state.info[currentHpIndex].value;
      const infoCopy = [...state.info];
      if (currentHp > 0) {
        infoCopy.splice(currentHpIndex, 1, {
          ...infoCopy[currentHpIndex],
          value: infoCopy[currentHpIndex].value - 1,
        });
        return { ...state, info: infoCopy };
      }

      //  ТУТ МОЖНО ОБРАБОТАТЬ КОНЕЦ ИГРЫ)

      return state;
    default:
      return initialState;
  }
};

export default reducer;
