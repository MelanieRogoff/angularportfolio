import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    portfolio = [
        {
            name: 'Legends of Tomorrow Employee Directory',
            deployed: 'https://lotapp.netlify.app/',
            github: 'https://github.com/MelanieRogoff/legendsoftomorrowapp',
            img: '../assets/img/lotapp.png'
        },
        {
            name: 'Weather Dashboard',
            deployed: 'https://melanierogoff.github.io/Unit6HW/',
            github: 'https://github.com/MelanieRogoff/Unit6HW',
            img: '../assets/img/weatherapp.png'
        },
        {
            name: 'Eat-Da-Burger!',
            deployed: 'https://floating-gorge-77305.herokuapp.com/',
            github: 'https://github.com/MelanieRogoff/burger',
            img: '../assets/img/burgerapp.png'
        },
        {
            name: 'Track That Track',
            deployed: 'https://bearpaw11.github.io/TrackThatTrack/',
            github: 'https://github.com/Bearpaw11/TrackThatTrack',
            img: '../assets/img/trackthattrack.png'
        },
        {
            name: 'JavaScript Code Quiz',
            deployed: 'https://melanierogoff.github.io/Unit4HW/',
            github: 'https://github.com/MelanieRogoff/Unit4HW',
            img: '../assets/img/quiz.png'
        },
        {
            name: 'PokeMood',
            deployed: 'https://murmuring-mountain-45065.herokuapp.com/',
            github: 'https://github.com/MelanieRogoff/PokeMood',
            img: '../assets/img/pokemood.png'
        },
      ]

    constructor() {}

    ngOnInit() {}

}

