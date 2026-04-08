import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  heroSection = viewChild<ElementRef>('heroRef');
  aboutSection = viewChild<ElementRef>('aboutRef');
  servicesSection = viewChild<ElementRef>('servicesRef');
  projectsSection = viewChild<ElementRef>('projectsRef');
  processSection = viewChild<ElementRef>('processRef');
  testimonialsSection = viewChild<ElementRef>('testimonialsRef');
  contactSection = viewChild<ElementRef>('contactRef');

  projects = [
    {
      title: 'Realitná kancelária',
    description: 'Firma mala web, ktorý nebudil dôveru a neprinášal dopyty.',
    problem: 'Návštevníci stránku rýchlo opúšťali a neozývali sa. Web pôsobil zastaralo a nebolo jasné, čo má človek spraviť.',
    solution: 'Zjednodušila som štruktúru, zvýraznila ponuky a pridala jasné výzvy na kontakt.',
    improvement: 'zvýšený počet dopytov',
    image: 'real_estate.png',
      result: '+40 % viac dopytov z webu'
    },
    {
      title: 'E-shop s kozmetikou',
      description: 'Značka mala návštevnosť, ale málo objednávok.',
      problem: 'Na mobile bol web neprehľadný a proces nákupu zbytočne komplikovaný.',
      solution: 'Navrhla som jednoduchú mobilnú verziu a skrátila cestu k nákupu na minimum.',
      improvement: 'jasná ponuka',
      image: 'aura.png',
      result: '+25 % vyššia konverzia objednávok'
    },
    {
      title: 'Fitness služba',
      description: 'Biznis mal produkt, ale slabé zapojenie používateľov.',
      problem: 'Používatelia sa vracali málo a rýchlo strácali záujem.',
      solution: 'Zjednodušila som onboarding a pridala prvky, ktoré motivujú k návratu.',
      improvement: 'vyššie zapojenie používateľov',
      image: 'fitness.png',
      result: '+30 % vyššia aktivita používateľov'
    },
    {
      title: 'Architektonické štúdio',
      description: 'Firma mala kvalitnú prácu, ale web ju neprezentoval.',
      problem: 'Stránka bola pomalá a nepôsobila profesionálne.',
      solution: 'Zrýchlila som načítanie a upravila prezentáciu projektov tak, aby budovala dôveru.',
      improvement: 'zvýšený dojem značky',
      image: 'architecture.png',
      result: 'lepší prvý dojem + viac oslovení od klientov'
    },
    {
      title: 'Objednávkový systém',
      description: 'Web komplikoval proces rezervácie.',
      problem: 'Ľudia začali rezerváciu, ale nedokončili ju.',
      solution: 'Zjednodušila som celý proces na pár krokov.',
      improvement: 'viac rezervácií',
      image: 'zenith.png',
      result: '+50 % viac dokončených rezervácií'
    }
  ];

  services = [
    {
      icon: 'code',
      title: 'Web na mieru',
      description: 'Moderný web, ktorý reprezentuje vašu firmu a pomáha získavať zákazníkov.',
      result: 'profesionálny dojem a viac dopytov'
    },
    {
      icon: 'trending_up',
      title: 'Landing page',
      description: 'Stránka zameraná na jednu konkrétnu ponuku alebo službu, ktorá predáva.',
      result: 'vyššia konverzia návštevníkov na zákazníkov'
    },
    {
      icon: 'auto_fix_high',
      title: 'Redizajn webu',
      description: 'Pre firmy, ktoré už web majú, ale nefunguje a neprináša žiadne výsledky.',
      result: 'viac dôvery, lepší výkon, lepšie výsledky'
    }
  ];

  process = [
    {
      step: '01',
      title: 'Rýchla analýza',
      description: 'Pozriem sa na váš aktuálny web alebo situáciu.'
    },
    {
      step: '02',
      title: 'Návrh riešenia',
      description: 'Ukážem vám, čo konkrétne treba zmeniť.'
    },
    {
      step: '03',
      title: 'Realizácia',
      description: 'Navrhnem a vytvorím web zameraný na výsledky.'
    },
    {
      step: '04',
      title: 'Spustenie',
      description: 'Web ide online a začína pracovať pre vás.'
    }
  ];

  testimonials = [
    {
      name: 'Sarah J.',
      role: 'Majiteľka realitnej kancelárie',
      quote: 'Predtým nám web prakticky neprinášal žiadne dopyty. Po prerábke sa to začalo otáčať a ľudia sa ozývajú pravidelne. Najväčší rozdiel je, že teraz pôsobíme dôveryhodne.',
      image: 'sarah.jpg'
    },
    {
      name: 'Michael C.',
      role: 'Majiteľ e-shopu',
      quote: 'Mali sme návštevnosť, ale málo objednávok. Po úpravách sa to výrazne zlepšilo, hlavne na mobilných zariadeniach. Web konečne plní svoj účel.',
      image: 'michael.jpg'
    }
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  private initAnimations() {
    // Fade in sections on scroll
    inView('section', (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [50, 0] },
        { duration: 0.8, ease: 'easeOut' }
      );
    });

    // Staggered animation for service cards
    inView('.service-card', (element) => {
      animate(
        element,
        { opacity: [0, 1], scale: [0.95, 1] },
        { duration: 0.5, delay: 0.2 }
      );
    });

    // Staggered animation for project cards
    inView('.project-card', (element) => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6 }
      );
    });
  }
}

