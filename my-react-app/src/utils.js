    // THIS MAKING EASY FOR US TO DYNAMICALLY IMPORT IMAGES INTO OUR DIFFERENT COMPONENTS 

    export const getImageUrl = (path) => {
        return new URL (`/assets/${path}`, import.meta.url).href;
    } 