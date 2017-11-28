import mapper from '../models/users.mapper';

export const fetchUsers = ({page, seed}) => {
    let url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            return {
                list: (res.results || []).map((entry) => mapper(entry)),
                error: res.error || null,
            }
        })
};