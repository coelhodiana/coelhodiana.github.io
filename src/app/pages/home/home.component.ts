import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public projects = [
    {
      id: 0,
      name: 'Imersão Direito Eleitoral',
      url: 'https://imersaodireitoeleitoral.com.br/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/imersaodireitoeleitoral.png',
    },
    {
      id: 1,
      name: 'Ostenta',
      url: 'https://www.ostentar.com.br/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/ostenta.png',
    },
    {
      id: 2,
      name: 'Urban Cookie',
      url: 'https://urbancookie.github.io/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/urbancookie.png',
    },
    {
      id: 3,
      name: 'Bola Mágica',
      url: 'https://dianacoelho.com.br/bolamagica/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/bolamagica.png',
    },
    {
      id: 4,
      name: 'Contador de Série',
      url: 'https://dianacoelho.com.br/relaxe-academia/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/academia.png',
    },
    {
      id: 5,
      name: 'O Pão do Pai',
      url: 'https://opaodopai.com.br/',
      img: 'https://raw.githubusercontent.com/coelhodiana/assets-projetos/master/portfolio/opaodopai.png',
    }
  ];




  public goToSite(url: string): void {
    window.open(url, '_blank');
  }

}



