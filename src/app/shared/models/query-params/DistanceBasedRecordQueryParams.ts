import { AbstractRecordQueryParams } from './AbstractRecordQueryParams';

export class DistanceBasedRecordQueryParams extends AbstractRecordQueryParams {

  distanceAtLeast: number;
  distanceAtMost: number;
  durationOver: number;
  durationUnder: number;
}
