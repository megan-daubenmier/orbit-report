import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  counts: string[] = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
  values: number = 0;

  constructor() { }

  ngOnInit() {
  }

  counter(filterValue: string): number {
    let filteredValues = [];
    for(let i = 0; i < this.satellites.length; i++) {
      if(this.satellites[i]['type'] === filterValue) {
        filteredValues.push(this.satellites[i]);
      }
    }
    return filteredValues.length;
  }

}
