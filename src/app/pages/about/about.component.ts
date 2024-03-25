import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  @ViewChild('textoResumo') textoResumo!: ElementRef<HTMLElement>;
  @ViewChild('botaoPt') botaoPt!: ElementRef<HTMLElement>;
  @ViewChild('botaoUs') botaoUs!: ElementRef<HTMLElement>;


  ngAfterViewInit() {
    this.alterarIdioma(1)
  }

  alterarIdioma(idioma: number) {
    const texto1 = "Formado em Design Gráfico, estou no mercado de trabalho desde 2016, trabalhando como freelancer em diversas áreas (design gráfico, branding, fotografia, produção/edição de vídeo e motion design). No início de 2021 comecei a estudar UX/UI e a trabalhar em alguns projetos de interface, em paralelo iníciei a formação em Sistemas para Internet e 2 meses depois já consegui migrar para área de desenvolvimento de software. Atualmente, trabalho como desenvolvedor full-stack, com foco em front-end.";
    const texto2 = "Formed in Graphic Design, I have been in the workforce since 2016, working as a freelancer in various areas (social media design, branding, photography, video production/editing, and motion design). In 2021, I started studying UX/UI and working on some interface projects. Currently, I work as a full-stack developer. I am communicative, adaptable, experienced in teamwork, and continuously improving my skills.";
    
    if (idioma === 2) {
      this.textoResumo.nativeElement.innerText = texto2;
      this.botaoPt.nativeElement.classList.replace('botaoPt-ativo', 'botaoPt');
      this.botaoUs.nativeElement.classList.replace('botaoUs', 'botaoUs-ativo');
    } else {
      this.textoResumo.nativeElement.innerText = texto1;
      this.botaoPt.nativeElement.classList.replace('botaoPt', 'botaoPt-ativo');
      this.botaoUs.nativeElement.classList.replace('botaoUs-ativo', 'botaoUs');
    }
  }
}
