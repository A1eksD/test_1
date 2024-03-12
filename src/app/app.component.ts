import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslatedataService } from './translatedata.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'x';
  // translateData = inject(TranslatedataService);

  // constructor(private translate: TranslateService){
  //   translate.setDefaultLang('eng');
  // }

 //----------------------------------------------------------------------------------

  private readonly availableLanguages = ['eng', 'ger'];
  private readonly translateService = inject(TranslateService);
  languageOptions: any[] = [];

  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.translateService.setDefaultLang('english');
    this.buildLanguageOptions();
  }

  private buildLanguageOptions() {
    const ENGLISH =  this.translateService.get('ENGLISH');
    const PORTUGUESE = this.translateService.get('PORTUGUESE');
    const SPANISH = this.translateService.get('SPANISH');
    const FRENCH = this.translateService.get('FRENCH');

    forkJoin([
      ENGLISH,
      PORTUGUESE,
      SPANISH,
      FRENCH
    ]).subscribe(
      _response => {
        this.languageOptions = [{
          value: this.availableLanguages[0],
          label: _response[0].toUpperCase(),
        }, {
          value: this.availableLanguages[1],
          label: _response[1].toUpperCase(),
        }];
      }
    );
  }

  changeLanguage(language: any) {
    this.translateService.use(language.value);
  }
  

}
