import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('texto') texto!: ElementRef<HTMLElement>;

  animarTexto: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.escreverTexto();
    }, 1000);
  }

  escreverTexto() {
    if (!this.texto || !this.texto.nativeElement) return;

    const texto1 = "Designer gráfico e desenvolvedor front end que ama se aventurar em novos projetos e experiências. Atuo como dev na maior parte do tempo e trabalho como freelancer nas horas vagas.";
    
    let index = 0;
    const tempoAparicaoletras = 40;

    const interval = setInterval(() => {
      if (index < texto1.length) {
        this.texto.nativeElement.innerText = texto1.slice(0, index + 1);
        index++;
      } else {
        clearInterval(interval);
      }
    }, tempoAparicaoletras);
  }
}

