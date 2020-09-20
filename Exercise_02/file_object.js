/*
Model a file in computer as javascript object.
*/

"use strict";
let file = {
    fileName: "Binge_Watch",
    subFiles: "Action, Comedy, Horror, Mystery, thriller",
    sortBy: "genre",
    location: "F:\ " ,

    action= {
        numberOfFiles: "5",
        genre: "Action",
        fileSize: "3.5 Gb",
        location: "F:\binge_watch\action"
    },
    comedy= {
        numberOfFiles: "7",
        genre: "Comedy",
        fileSize: "5.5 Gb",
        location: "F:\binge_watch\comedy"
    },
    drama={
        numberOfFiles: "2",
        genre: "Drama",
        fileSize: "1.0 Gb",
        location: "F:\binge_watch\drama"
    },
    mystery={
        numberOfFiles: "10",
        genre: "Mystery",
        fileSize: "7.5 Gb",
        location: "F:\binge_watch\mystery"
    }
};
