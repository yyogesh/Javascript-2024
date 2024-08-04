type onSearchCity = (city: string) => void

export class SearchBar {
    private input: HTMLInputElement;
    private button: HTMLButtonElement;

    constructor(private onSearch: onSearchCity) {
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.id = 'cityInput';
        this.input.placeholder = 'Enter city name';

        this.button = document.createElement('button');
        this.button.id = 'searchButton';
        this.button.textContent = 'Search';

        this.button.addEventListener('click', this.handleSearch.bind(this)); // bind, call, apply

        this.input.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                this.handleSearch();
            }
        })
    }

    private handleSearch(): void {
        // Handle the search event
        const cityName = this.input.value.trim();
        if(cityName) {
            this.onSearch(cityName); // Call the callback function with the city name
        }
    }

    render(): HTMLElement {
        const container = document.createElement('div');
        container.id = 'searchContainer';
        container.appendChild(this.input);
        container.appendChild(this.button);
        return container;
    }
}