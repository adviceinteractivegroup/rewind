// Autogenerated via waterline2ts

import {Agency} from './Agency';

export interface AgencyModule {
   name: string;  // enum: ["keywords","social","directories"]
   enabled?: boolean;
   agency?: Agency;  // Association... See Agency.ts
}