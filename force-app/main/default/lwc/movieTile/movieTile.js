import { LightningElement, api} from 'lwc';

export default class MovieTile extends LightningElement {
    @api movie;
    @api selectedMovieId;

    clickHandler(event) {
        console.log(this.movie.imdbID);

        //CustomEvents
        //1. Created the Event
        const evt = new CustomEvent("selectedmovie", {
            detail: this.movie.imdbID
        })
        //2. Dispatch event
        this.dispatchEvent(evt);
    }

    get tileSelected() {
        return this.selectedMovieId === this.movie.imdbID ? "tile selected" : "tile";
    }
}