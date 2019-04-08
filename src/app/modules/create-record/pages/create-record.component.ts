import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DistanceBasedRecord } from '@app/shared';
import { DistanceBasedRecordApiService } from '@app/core';
import * as _toMillis from 'ms';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRecordComponent implements OnInit {

  private TIME_UNIT_SEPARATOR = ':';

  public distance: number;
  public durationString: string;
  public entryTime: Date;

  public constructor(private distanceBasedRecordApiService: DistanceBasedRecordApiService) {}

  public ngOnInit() {}

  public async onSubmit(): Promise<void> {
    const duration = this.validateDuration();
    if (isNaN(duration)) {
      // TODO
    } else {
      await this.distanceBasedRecordApiService.createRecord(
        new DistanceBasedRecord('1', 'Run', this.entryTime, this.distance, duration));
    }
  }

  private validateDuration(): number {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const parts = this.durationString.split(this.TIME_UNIT_SEPARATOR, 3);
    if (parts.length === 3) {
      hours = Number(parts[0]);
      minutes = Number(parts[1]);
      seconds = Number(parts[2]);
    } else if (parts.length === 2) {
      minutes = Number(parts[0]);
      seconds = Number(parts[1]);
    } else {
      seconds = Number(parts[0]);
    }
    return _toMillis(hours + 'h') + _toMillis(minutes + 'm') + _toMillis(seconds + 's');
  }
}
