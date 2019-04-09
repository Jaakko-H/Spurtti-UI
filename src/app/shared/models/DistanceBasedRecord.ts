import { AbstractRecord } from './AbstractRecord';

export class DistanceBasedRecord extends AbstractRecord {

  distance: number;
  duration: number;

  public constructor(userId: string, sportType: string, entryTime: Date, distance: number, duration: number) {
    super(userId, sportType, entryTime);
    this.distance = distance;
    this.duration = duration;
  }
}
