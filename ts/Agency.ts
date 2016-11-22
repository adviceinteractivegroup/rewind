// Autogenerated via waterline2ts

import {ReportingList} from './ReportingList';
import {Agency} from './Agency';

export interface Agency {
   name: string;
   domain: string;
   domainCustomer?: string;
   partnerId?: number;
   parent?: Agency;  // Association... See Agency.ts
   users?
   deactivated?: boolean;
   invoiced?: boolean;
   apiKey?: string;
   modules
   reportingListDefault?: ReportingList;  // Association... See ReportingList.ts
   reportingLists?
   type?: string;  // enum: ["retail","reseller","enterprise"]
}
