import { Component,ChangeDetectionStrategy, OnInit } from "@angular/core";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {

  }
}
