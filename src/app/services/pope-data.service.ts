import { Injectable } from '@angular/core';
import { TimelineItem } from '../models/timeline-item.model';
import { AboutInfo } from '../models/about-info.model';

@Injectable({
  providedIn: 'root',
})
export class PopeDataService {
  getTimelineItems(): TimelineItem[] {
     return [
      {
        title: 'Nascimento de Jorge Mario Bergoglio',
        description: 'Nasceu em Buenos Aires, Argentina, em 17 de dezembro de 1936, filho de imigrantes italianos.',
        date: '17 Dez 1936'
      },
      {
        title: 'Ordenação Sacerdotal',
        description: 'Foi ordenado sacerdote em 13 de dezembro de 1969, após ingressar na Companhia de Jesus.',
        date: '13 Dez 1969'
      },
      {
        title: 'Eleição como Papa',
        description: 'Em 13 de março de 2013, foi eleito o 266º Papa, adotando o nome Francisco em homenagem a São Francisco de Assis.',
        date: '13 Mar 2013'
      },
      {
        title: 'Laudato Si’',
        description: 'Publicou a encíclica Laudato Si’ em 2015, chamando pela proteção do meio ambiente.',
        date: '18 Jun 2015'
      }
    ];

  }

  getAboutInfo(): AboutInfo {
    return {
      title: 'Quem Foi Papa Francisco',
      description:
        'Jorge Mario Bergoglio, conhecido como Papa Francisco, foi um líder carismático que trouxe humildade e compaixão à Igreja Católica. Nascido em Buenos Aires, Argentina, em 1936, ele se tornou o primeiro Papa jesuíta e o primeiro das Américas, marcando a história com sua simplicidade e dedicação aos mais pobres.',
      highlights: [
        {
          title: 'Humildade',
          description:
            'Escolheu viver de forma simples, rejeitando luxos e aproximando-se dos fiéis.',
          icon: 'favorite',
        },
        {
          title: 'Justiça Social',
          description:
            'Defendeu os marginalizados e promoveu a inclusão em suas mensagens.',
          icon: 'group',
        },
        {
          title: 'Diálogo Inter-religioso',
          description:
            'Construiu pontes com outras religiões, promovendo a paz.',
          icon: 'handshake',
        },
        {
          title: 'Meio Ambiente',
          description:
            'Publicou a encíclica Laudato Si’, chamando pela proteção da criação.',
          icon: 'public',
        },
      ],
    };
  }
}
