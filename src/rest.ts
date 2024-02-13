import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const houses = {
    "houses": [
        {
            "id": 1,
            "name": "Cozy Cottage",
            "price": 150000,
            "area": 1200,
            "coordinates": {
                "latitude": 34.0522,
                "longitude": -118.2437
            }
        },
        {
            "id": 2,
            "name": "Modern Townhouse",
            "price": 250000,
            "area": 1800,
            "coordinates": {
                "latitude": 40.7128,
                "longitude": -74.0060
            }
        },
        {
            "id": 3,
            "name": "Spacious Villa",
            "price": 500000,
            "area": 3000,
            "coordinates": {
                "latitude": 51.5074,
                "longitude": -0.1278
            }
        },
        {
            "id": 4,
            "name": "Luxury Penthouse",
            "price": 750000,
            "area": 2500,
            "coordinates": {
                "latitude": 48.8566,
                "longitude": 2.3522
            }
        }
    ]
};
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:56217');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});
app.get('/', (req: Request, res: Response) => {


    res.json(houses);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
