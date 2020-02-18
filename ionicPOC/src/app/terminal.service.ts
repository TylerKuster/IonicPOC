import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})

export class TerminalService {
    data = [
        {
            terminalName: "Allentown, PA",
            terminalImageURL: "https://s3-media4.fl.yelpcdn.com/bphoto/BXGv8q4Pc6xxZFVixfCa-A/o.jpg",
            terminalDescription: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and...",
            terminalDescriptionExpanded: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and local recruiting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            terminalName: "Omaha, NE",
            terminalImageURL: "https://media.glassdoor.com/l/58/2a/e0/7c/headquarters.jpg",
            terminalDescription: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and...",
            terminalDescriptionExpanded: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and local recruiting."
        },
        {
            terminalName: "Indianapolis, IN",
            terminalImageURL: "https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/werner-new.jpg",
            terminalDescription: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and...",
            terminalDescriptionExpanded: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and local recruiting."
        },
        {
            terminalName: "Laredo, TX",
            terminalImageURL: "https://www.werner.com/assets/featured/Laredo_3.jpg",
            terminalDescription: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and...",
            terminalDescriptionExpanded: "Strategically located throughout the United States, our terminals provide access to our drivers, equipment, and local recruiting."
        }
    ]

    getTerminals() {
        return this.data;
    }
}