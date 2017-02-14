// Autogenerated via waterline2ts

import {LegacySalesAgent} from './LegacySalesAgent';

export interface LegacyPartner {
   id?: number;
   username: string;
   domain: string;
   ssodomain?: string;
   title: string;
   extras?: Array;
   deactivated?: string;  // enum: ["false","true"]
   invoiced?: string;  // enum: ["false","true"]
   apiKey?: string;
   createdAt?: string;  // datetime
   type?: string;  // enum: ["retail","reseller","enterprise"]
   agent?: LegacySalesAgent;  // Association... See LegacySalesAgent.ts
}