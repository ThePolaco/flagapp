import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  // cuando se ejecuta este codigo todavia no esta creado el html
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    ) { }
  
  public country?: Country;

  // ngOnInit(): void {
  //   // si tenemos un observable dentro de otro observable, esto se llama observable hell
  //   //codigo no optimizado
  //   this.activatedRoute.params.subscribe(
  //     (params:Params) => {
  //       console.log(params['id']);
  //       this.countriesService.searchCountryByAlphaCode(params['id']).subscribe( country => {console.log(country)})
  //     }
  //   )
  // }

  ngOnInit(): void {
    //codigo OPTIMIZADO
    this.activatedRoute.params.subscribe(
      (params:Params) => {
        console.log(params['id']);
        this.searchCountry(params['id'])
      }
    )
  }

  searchCountry(code: string) {
    this.countriesService.searchCountryByAlphaCode(code).subscribe( country => {
      if(!country){
        this.router.navigateByUrl('/home');
      }else {
        this.country = country;
      }
    });
  }


}
