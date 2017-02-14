// Autogenerated via waterline2ts

import {Client} from './Client';
import {Social} from './Social';

export interface SocialResult {
   provider: string;  // enum: ["google","twitter","facebook","linkedin"]
   data?: Array;
   error?: string;
   queueTime?: string;  // datetime
   startTime?: string;  // datetime
   endTime?: string;  // datetime
   social?: Social;  // Association... See Social.ts
   client?: Client;  // Association... See Client.ts
}