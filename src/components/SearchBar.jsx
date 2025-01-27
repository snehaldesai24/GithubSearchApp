import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setLoading, setError } from '../redux/actions';

const SearchBar = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSearch = async () => {
        if (!username.trim()) return;
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            dispatch(setUser(data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="d-flex justify-content-center my-3">
            <input
                type="text"
                className="form-control w-50"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn btn-primary px-5 mx-2" onClick={handleSearch}>
                Search
            </button>

        </div>
    );
};

export default SearchBar;
