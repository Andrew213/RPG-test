import { ActionsType } from "./actionTypes";

export type ParameterI = {
  name: string;
  value: number;
  id: number;
};

export interface SkillI {
  name: string;
  value: number;
  id: number;
  parameterId: number;
  maxLvL: boolean;
}

export type InfoI = {
  name: string;
  value: number;
  id: number;
};

export type ParameterAction = {
  type: ActionsType.UP_PARAMETER | ActionsType.DOWN_PARAMETER;
  parameter: ParameterI;
};

export type SkillAction = {
  type: ActionsType.LVLUP_SKILL;
  skill: SkillI;
};

export type StateT = {
  parameters: ParameterI[];
  skills: SkillI[];
  info: InfoI[];
  name: string;
};

export type UploadAction = {
  type: ActionsType.UPLOAD_CHARACTER;
  state: StateT;
};

export type ChangeNameAction = {
  type: ActionsType.CHANGE_NAME;
  value: string;
};

export type GetDamageAction = {
  type: ActionsType.GET_DAMAGE;
};

export type ActionCreatorsType =
  | UploadAction
  | ParameterAction
  | SkillAction
  | ChangeNameAction
  | GetDamageAction;
