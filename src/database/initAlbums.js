import { Album } from "../models/Album.js";

const initialAlbums = [
    {
        title: "A Night at the Opera",
        artist: "Queen",
        genre: "Rock Clásico",
        releaseYear: 1975,
        coverImage: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png",
        description: "Considerado uno de los mejores álbumes de la historia. Contiene Bohemian Rhapsody.",
    },
    {
        title: "Un Verano Sin Ti",
        artist: "Bad Bunny",
        genre: "Reggaetón / Latin Pop",
        releaseYear: 2022,
        coverImage: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png",
        description: "El álbum más escuchado del año. Obra maestra que celebra la cultura puertorriqueña.",
    },
    {
        title: "Midnights",
        artist: "Taylor Swift",
        genre: "Synth-Pop / Indie Pop",
        releaseYear: 2022,
        coverImage: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
        description: "Un viaje por 13 noches de insomnio donde Taylor explora sus miedos más íntimos.",
    },
    {
        title: "News of the World",
        artist: "Queen",
        genre: "Rock / Arena Rock",
        releaseYear: 1977,
        coverImage: "https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png",
        description: "Hogar de los himnos deportivos definitivos: We Will Rock You y We Are the Champions.",
    },
    {
        title: "Renaissance",
        artist: "Beyoncé",
        genre: "Dance / House / R&B",
        releaseYear: 2022,
        coverImage: "https://upload.wikimedia.org/wikipedia/en/a/ad/Beyonc%C3%A9_-_Renaissance.png",
        description: "Tributo a la música dance y house de la comunidad LGBTQ+.",
    },
];

export async function loadInitialAlbums() {
    try {
        const count = await Album.count();
        if (count === 0) {
            await Album.bulkCreate(initialAlbums);
            console.log("Initial albums loaded");
        } else {
            console.log("Initial albums already loaded");
        }
    } catch (error) {
        console.log(error);
    }
}