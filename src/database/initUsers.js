import { User } from "../models/User.js";

const initialUsers = [
    {
        username: "alexmrrsn",
        email: "alex@beattreat.com",
        password: "SecurePass123!",
        name: "Alex Morrison",
        bio: "Music lover | Rock enthusiast | Album collector",
        profileImage: "https://cdn.phototourl.com/free/2026-04-19-7fb15066-9d76-4cc3-8695-9ec3302947f6.jpg",
    },
    {
        username: "maria_beats",
        email: "maria@beattreat.com",
        password: "SecurePass123!",
        name: "María García",
        bio: "Reggaeton fan | Bad Bunny forever",
        profileImage: "https://cdn.phototourl.com/free/2026-04-16-45a5ba1b-ce39-4e85-a6b8-36010bd95f71.png",
    },
    {
        username: "carlos_rz",
        email: "carlos@beattreat.com",
        password: "SecurePass123!",
        name: "Carlos Ruiz",
        bio: "Pop & indie | Always listening",
        profileImage: null,
    },
];

export async function loadInitialUsers() {
    try {
        const count = await User.count();
        if (count === 0) {
            await User.bulkCreate(initialUsers);
            console.log("Initial users loaded");
        } else {
            console.log("Initial users already loaded");
        }
    } catch (error) {
        console.log(error);
    }
}
