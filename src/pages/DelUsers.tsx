import { useRef, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export interface UsersList {
    id_users: string;
    name: string;
    mail: string;
    password: string;
}

let supp: UsersList[] = [];

const DelUsers = (UserAsupprimer: UsersList) => {
    const [listUsers, setlistUsers] = useState<UsersList[]>([]);

    axios
        .delete(`http://localhost:3000/theyUsers/${UserAsupprimer.id_users}`)

        .then((retourUserAsupprimer) => {
            supp = retourUserAsupprimer.data;
            window.location.reload();
        })

    setlistUsers(supp);

}

export default DelUsers;