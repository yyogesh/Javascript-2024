export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
    },
    // weather1: [{
    //     description: string;
    //     icon: string;
    // }],
    weather: Array<{
        description: string;
        icon: string;
    }>,
    wind: {
        speed: number;
    };
}
