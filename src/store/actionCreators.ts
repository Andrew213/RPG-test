import {
  ChangeNameAction,
  GetDamageAction,
  ParameterAction,
  ParameterI,
  SkillAction,
  SkillI,
  StateT,
  UploadAction,
} from "./type";
import { ActionsType } from "./actionTypes";

export function upParameter(parameter: ParameterI) {
  const action: ParameterAction = {
    type: ActionsType.UP_PARAMETER,
    parameter,
  };

  return action;
}

export function downParameter(parameter: ParameterI) {
  const action: ParameterAction = {
    type: ActionsType.DOWN_PARAMETER,
    parameter,
  };

  return action;
}

export function lvlUPSkill(skill: SkillI) {
  const action: SkillAction = {
    type: ActionsType.LVLUP_SKILL,
    skill,
  };
  return action;
}

export function uploadCharacter(state: StateT) {
  const action: UploadAction = {
    type: ActionsType.UPLOAD_CHARACTER,
    state,
  };
  return action;
}

export function changeName(value: string) {
  const action: ChangeNameAction = {
    type: ActionsType.CHANGE_NAME,
    value,
  };
  return action;
}

export function getDamage() {
  const action: GetDamageAction = {
    type: ActionsType.GET_DAMAGE,
  };
  return action;
}
