import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string= 'karen castillo';
  public nameUpper: string='KAREN CASTILLO';
  public fullName: string='KaReN CaSTillO';

  public customDate: Date=new Date();
}
