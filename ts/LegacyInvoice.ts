// Autogenerated via waterline2ts

import {LegacyPartner} from './LegacyPartner';

export interface LegacyInvoice {
   id?: number;
   partner?: LegacyPartner;  // Association... See LegacyPartner.ts
   datePaid?: string;  // datetime
   dateAttempted?: string;  // datetime
   dateStarting?: string;  // datetime
   data?: Array;
   paid?: boolean;
   notes?: string;
   totalServices: number;
   totalReporting: number;
   totalMaintenance: number;
   total: number;
   totalAdjustments?: number;
}
