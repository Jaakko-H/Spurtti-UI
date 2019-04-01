import { Component, OnInit } from '@angular/core';
import { DistanceBasedRecord } from '@app/shared/models/DistanceBasedRecord';
import { DistanceBasedRecordApiService } from '@app/core/services/api/records/distance-based-record-api.service';

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.css']
})
export class ViewRecordsComponent implements OnInit {

  recordData: DistanceBasedRecord[] = [];
  displayedColumns = ['entryTime', 'sportType', 'distance', 'duration'];

  public constructor(private distanceBasedRecordApiService: DistanceBasedRecordApiService) {}

  public async ngOnInit() {
    this.recordData = await this.distanceBasedRecordApiService.getRecords();
  }
}
