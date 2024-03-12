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
  value = true;

  //---------------------------------------------------
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
    this.changeValue();
    this.buildLanguageOptions();
  }

  private buildLanguageOptions() {
    const ENGLISH =  this.translateService.get('eng');
    const DEUTSCH = this.translateService.get('ger');

    forkJoin([
      ENGLISH,
      DEUTSCH,

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
  

  changeValue(){
    if (this.value) {
      this.translateService.setDefaultLang('eng');
      this.value = false;
    } else {
      this.translateService.setDefaultLang('ger');
      this.value = true;
    }
  }

}
