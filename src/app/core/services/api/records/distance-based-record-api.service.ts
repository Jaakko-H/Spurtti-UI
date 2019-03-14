import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DistanceBasedRecord } from '@app/shared/models/DistanceBasedRecord';
import { environment } from '@env/environment';

@Injectable()
export class DistanceBasedRecordApiService {

  baseUrl = environment.baseUrl + '/records';

  constructor(private httpClient: HttpClient) {
  }

  public async getRecords(): Promise<DistanceBasedRecord[]> {
    return await this.httpClient.get<DistanceBasedRecord[]>(this.baseUrl + '/distance-based').toPromise();
  }
}
