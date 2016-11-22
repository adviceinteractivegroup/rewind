// Autogenerated via waterline2ts

import {Agency} from './Agency';
import {LegacyClient} from './LegacyClient';

export interface Client {
   businessName: string;
   city: string;
   street1?: string;
   street2?: string;
   state: string;
   postal: string;
   country?: string;  // enum: ["US","GB","CA","AU","DE","NZ"]
   website?: string;
   hours?: Array;
   hide?: boolean;
   phone: string;
   fax?: string;
   email?: string;
   owner?: string;
   isActive?: boolean;
   isDeleted?: boolean;
   clientId?: number;
   legacyClient?: LegacyClient;  // Association... See LegacyClient.ts
   LAT?: number;
   LON?: number;
   agency?: Agency;  // Association... See Agency.ts
   category?: string;
   categories?: Array;
   keywords?
   socials?
   competitors?
   reportingLists?
   links?
   custom1?: string;
   custom2?: string;
   custom3?: string;
   custom4?: string;
   custom5?: string;
   status?: string;
}
