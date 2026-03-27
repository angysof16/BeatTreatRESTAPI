import { User } from "../models/User.js";

const initialUsers = [
    {
        username: "alexmrrsn",
        email: "alex@beattreat.com",
        password: "SecurePass123!",
        name: "Alex Morrison",
        bio: "Music lover | Rock enthusiast | Album collector",
        profileImage: null,
    },
    {
        username: "maria_beats",
        email: "maria@beattreat.com",
        password: "SecurePass123!",
        name: "María García",
        bio: "Reggaeton fan | Bad Bunny forever",
        profileImage: null,
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
