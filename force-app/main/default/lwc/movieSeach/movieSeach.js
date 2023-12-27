import { LightningElement } from 'lwc';
const DELAY = 300;//300 millisecond

export default class MovieSeach extends LightningElement {
    selectedType = "";
    loading = false;
    selectedSearch = "";
    selectedPageNo = "1";
    delayTimeout;
    searchResult = [];
    selectedMovie = "";

    get typeoptions() {
        return [
            { label: 'None', value: '' },
            { label: 'Movie', value: 'movie' },
            { label: 'Series', value: 'series' },
            { label: 'Episode', value: 'episode' },
        ];
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.loading = true;
        if ( name === "type" ){
            this.selectedType = value;
        } else if ( name == "search" ){
            this.selectedSearch = value;
        } else if( name == 'pageno' ){
            this.selectedPageNo = value;
        }

        //To avoid to much of Apex call or API call we use Debouncing(delaying the process for particular second) 
        clearTimeout(this.delayTimeout); //clearing the timeout value
        this.delayTimeout = setTimeout(() => {this.searchMovie();}, DELAY);
    }

    //This method will search for the entered movie
    async searchMovie() {

        const URL = `https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=cad10f5`;
        // The fetch() method starts the process of fetching a resource from a server.
        // The fetch() method returns a Promise that resolves to a Response object.
        const RES = await fetch(URL);
        const DATA = await RES.json();
        //console.log('Movie Search Output', DATA);
        this.loading = false;
        //console.log('The DATA response value is ', DATA.Response);
        if ( DATA.Response === "True" ){
            this.searchResult = DATA.Search;
            //console.log('Movie Search Output', this.searchResult);
        }
    }

    movieSelectedHandler(event) {
        this.selectedMovie = event.detail;
        
    }

    get displaySearchResult() {
        return this.searchResult.length > 0 ? true : false;
    }
}   