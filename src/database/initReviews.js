import { Review } from "../models/Review.js";

// Reseñas quemadas de otros usuarios para cubrir todos los álbumes del sprint
const seedReviews = [
    // ── Usuario 2 (María García) ──────────────────────────────────────────────
    {
        userId: 2,
        albumId: 1,   // A Night at the Opera - Queen
        rating: 5.0,
        content: "Bohemian Rhapsody por sí sola justifica el 10/10. Cada escucha revela algo nuevo. La producción de Roy Thomas Baker es simplemente majestuosa.",
    },
    {
        userId: 2,
        albumId: 2,   // Un Verano Sin Ti - Bad Bunny
        rating: 5.0,
        content: "El mejor álbum del año sin duda. Bad Bunny superó todas las expectativas con este trabajo. El Apagón es un himno generacional.",
    },
    {
        userId: 2,
        albumId: 3,   // Midnights - Taylor Swift
        rating: 4.5,
        content: "Anti-Hero es un himno de la generación Z. El álbum es íntimo y oscuro, una Taylor más vulnerable que nunca. Lavender Haze me tiene en loop.",
    },

    // ── Usuario 3 (Carlos Ruiz) ───────────────────────────────────────────────
    {
        userId: 3,
        albumId: 1,   // A Night at the Opera - Queen
        rating: 4.5,
        content: "Una obra maestra atemporal. We Are the Champions y Bohemian Rhapsody son himnos que nunca envejecen. Queen en su mejor momento.",
    },
    {
        userId: 3,
        albumId: 4,   // News of the World - Queen
        rating: 4.8,
        content: "We Will Rock You + We Are the Champions en el mismo álbum es demasiado poder en un solo disco. Imprescindible para cualquier fan del rock.",
    },
    {
        userId: 3,
        albumId: 5,   // Renaissance - Beyoncé
        rating: 4.8,
        content: "Beyoncé creó un tributo perfecto a la música dance y house. Break My Soul es uno de los mejores temas del año. Energía pura de principio a fin.",
    },

    // ── Usuario 1 (Alex Morrison) — reseñas iniciales del sprint ─────────────
    {
        userId: 1,
        albumId: 1,   // A Night at the Opera - Queen
        rating: 4.5,
        content: "One of the best CDs I own. Un álbum que revolucionó el rock y definió una generación. La producción es impecable y cada canción es memorable.",
    },
    {
        userId: 1,
        albumId: 2,   // Un Verano Sin Ti - Bad Bunny
        rating: 4.0,
        content: "Un álbum que definitivamente marcó una era en el reggaetón moderno. Moscow Mule y Tití Me Preguntó son bangers absolutos.",
    },
];

export async function loadInitialReviews() {
    try {
        const count = await Review.count();
        if (count === 0) {
            await Review.bulkCreate(seedReviews);
            console.log("Initial reviews loaded (" + seedReviews.length + " reseñas)");
        } else {
            console.log("Reviews already loaded (" + count + " existentes)");
        }
    } catch (error) {
        console.error("Error loading reviews:", error.message);
    }
}