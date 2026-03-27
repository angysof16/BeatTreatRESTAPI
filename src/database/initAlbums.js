import { Album } from "../models/Album.js";

const initialAlbums = [
    {
        title: "A Night at the Opera",
        artist: "Queen",
        genre: "Rock Clásico",
        releaseYear: 1975,
        coverImage: null,
        description: "Considerado uno de los mejores álbumes de la historia. Contiene Bohemian Rhapsody.",
    },
    {
        title: "Un Verano Sin Ti",
        artist: "Bad Bunny",
        genre: "Reggaetón / Latin Pop",
        releaseYear: 2022,
        coverImage: null,
        description: "El álbum más escuchado del año. Obra maestra que celebra la cultura puertorriqueña.",
    },
    {
        title: "Midnights",
        artist: "Taylor Swift",
        genre: "Synth-Pop / Indie Pop",
        releaseYear: 2022,
        coverImage: null,
        description: "Un viaje por 13 noches de insomnio donde Taylor explora sus miedos más íntimos.",
    },
    {
        title: "Renaissance",
        artist: "Beyoncé",
        genre: "Dance / House / R&B",
        releaseYear: 2022,
        coverImage: null,
        description: "Tributo a la música dance y house de la comunidad LGBTQ+.",
    },
    {
        title: "News of the World",
        artist: "Queen",
        genre: "Rock / Arena Rock",
        releaseYear: 1977,
        coverImage: null,
        description: "Hogar de los himnos deportivos definitivos: We Will Rock You y We Are the Champions.",
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
