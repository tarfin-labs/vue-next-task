import axios from 'axios';

export let HttpService = axios.create();

const apiKey = 'UIBOhNriwxAgdSxhcC2L2tzlbQ8GNJbg';

class Events {
    getEvents(key, value) {
        return HttpService.get(`https://app.ticketmaster.com/discovery/v2/events.json?${key}=${value}&source=universe&countryCode=US&apikey=${apiKey}`);
    }

    getEventDetail(id) {
        return HttpService.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apiKey}`);
    }
}

export default new Events();