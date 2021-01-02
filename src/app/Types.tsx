export interface IParams {
    colorPrimaryBackground: string;
    colorPrimaryText: string;
}

export interface IApp {
    package: string;
    params: IParams;
    changeSettings: (data: any) => void;
}

export enum Layout {
    Default,
}

export const SETTINGS_CHANGE = 'SETTINGS_CHANGE';