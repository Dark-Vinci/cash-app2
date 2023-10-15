import { BaseProps } from "..";

export interface NavCardProps extends BaseProps{
    readonly imageSRC: string;
    readonly title: string;
    readonly description: string;
}