import React from 'react';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
    const { user, loading, error } = useSelector((state) => state);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    if (!user) return null;

    return (
        <div className="card text-center shadow-sm" style={{ width: '18rem' }}>
            <img src={user.avatar_url} className="card-img-top" alt={user.login} />
            <div className="card-body">
                <h5 className="card-title">{user.name || user.login}</h5>
                <p className="card-text">{user.bio || 'No bio available'}</p>
                <a href={user.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Profile Details
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
