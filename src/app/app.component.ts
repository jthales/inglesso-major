import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nome = null;

  mostrarNome = false;

  constructor(
    private readonly loaderService: NgxUiLoaderService
  ) {
  }

  public nomeValido() {
    return this.nome !== null && this.nome !== '';
  }

  public gerarConvite() {
    this.loaderService.start();
    setTimeout(() => {
      this.loaderService.stop();
      this.mostrarNome = true;
    }, 3000);
  }

}
