import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const { user, loading, error } = useSelector((state) => state);

    if (loading || error || !user) return null;

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{user.login}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Followers</th>
                        <td>{user.followers}</td>
                    </tr>
                    <tr>
                        <th>Following</th>
                        <td>{user.following}</td>
                    </tr>
                    <tr>
                        <th>Public Repos</th>
                        <td>{user.public_repos}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
