import { LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import MOVIE_CHANNEL from '@salesforce/messageChannel/movieChannel__c';

export default class MovieDetail extends LightningElement {

    subscription = null;
    loadComponent = false;
    movieDetails = {};
    
    @wire(MessageContext)
    messageContext;


    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                MOVIE_CHANNEL,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
        let movieId = message.movieId;
        // console.log('movie id is : ', movieId);
        this.fetchMovieDetail(movieId);
    }


    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }


    async fetchMovieDetail(movieId) {
        let url = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=cad10f5`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("Movie Details ", data);
        this.loadComponent = true;
        this.movieDetails = data;
    }


}



