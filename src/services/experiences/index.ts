import { games } from "./games";
import { risqo } from "./risqo";
import { sevenApps } from "./sevenApps";

export type Experience = {
  title: string;
  period: string;
  location: string;
  description: string;
  topics: string[];
  others: string[];
};

export const experiencesService: Experience[] = [risqo, sevenApps, games];
