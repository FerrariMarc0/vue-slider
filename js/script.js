/* 'use strict'; */

const { createApp } = Vue

createApp({
    data() {
    return {
        
        movie: [
        {
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, 
        {
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, 
        {
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, 
        {
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, 
        { 
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ],
    active: 0,
    heroesImg: {
    images: ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
    }

    }
    },
    /* MY FUNCTIONS */
    methods: {
        next(){
            this.active++;
            if(this.active > this.heroesImg.images.length -1){  /* increase button  */
                this.active= 0;
            }
        },
        prev(){
            this.active--;
            if(this.active < 0){
                this.active= this.heroesImg.images.length -1;   /* decrease button  */
            }
        },
        selThumb(i, event){
            this.active= i;    /* select and show thumbnail  */
        },
        mouseLeave: function(){
            this.interval=setInterval(() => {
                this.active++
                if(this.active > this.heroesImg.images.length -1){ /* autoplay sliding */
                    this.active= 0;
                }
            }, 2500)
        },
        mouseOver: function(){
            console.log('yeah')
            clearInterval(this.interval)   /* stop autoplay */
        }
        /* /MY FUNCTIONS */
    },
    mounted(){   /* sync */
        this.interval=setInterval(() => {
        this.active++
        if(this.active > this.heroesImg.images.length -1){ /* autoplay sliding */
            this.active= 0;
        }
    }, 2500)
    }
}).mount('#app')