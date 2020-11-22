class Booking {
    constructor(show, date){
        this._show = show;
        this._date = date;
    }
}

class PremiumBooking extends Booking{
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }
}