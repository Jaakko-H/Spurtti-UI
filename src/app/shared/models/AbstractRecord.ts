export abstract class AbstractRecord {

  entryTime: Date;
  sportType: string;
  userId: string;

  public constructor(userId: string, sportType: string, entryTime: Date) {
    this.entryTime = entryTime;
    this.sportType = sportType;
    this.userId = userId;
  }
}
