import { Component, OnInit, ModuleWithComponentFactories, ChangeDetectionStrategy } from '@angular/core';
import { DistanceBasedRecord } from '@app/shared';
import { DistanceBasedRecordApiService } from '@app/core';
import * as _moment from 'moment';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRecordComponent implements OnInit {

  public distance: number;
  public duration: string;
  public entryTime: Date;

  public constructor(private distanceBasedRecordApiService: DistanceBasedRecordApiService) {}

  public ngOnInit() {}

  public async onSubmit(): Promise<void> {
    await this.distanceBasedRecordApiService.createRecord(
        new DistanceBasedRecord('1', 'Run', this.entryTime, this.distance, 1));
  }
}
