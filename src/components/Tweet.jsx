import { useState } from 'react';

const Tweet = ({
    profileImage,
    name,
    username,
    publication,
    timestamp,
    initialViews,
    initialLikes,
    initialRetweets,
    initialComments,
    initialShares,
}) => {
    const [views] = useState(initialViews || 0);
    const [likes, setLikes] = useState(initialLikes || 0);
    const [retweets, setRetweets] = useState(initialRetweets || 0);
    const [comments, setComments] = useState(initialComments || 0);
    const [shares, setShares] = useState(initialShares || 0);

    return (
        <div className="card shadow-sm my-3" style={{ maxWidth: '600px' }}>
            <div className="card-body">
                {/* Profile Header */}
                <div className="d-flex align-items-center mb-2">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="rounded-circle me-2"
                        width="50"
                        height="50"
                    />
                    <div>
                        <strong>{name}</strong> <span className="text-muted">@{username}</span>
                        <div className="text-muted" style={{ fontSize: '0.85em' }}>{timestamp}</div>
                    </div>
                </div>

                {/* Publication */}
                <p className="card-text">{publication}</p>

                {/* Interactions */}
                <div className="d-flex justify-content-between align-items-center text-muted mt-3" style={{ fontSize: '0.9em' }}>
                    <div>
                        <i className="bi bi-eye"></i> {views} views
                    </div>

                    <div className="d-flex gap-3">
                        <button className="btn btn-light btn-sm" onClick={() => setComments(comments + 1)}>
                            <i className="bi bi-chat"></i> {comments}
                        </button>

                        <button className="btn btn-light btn-sm" onClick={() => setRetweets(retweets + 1)}>
                            <i className="bi bi-repeat"></i> {retweets}
                        </button>

                        <button className="btn btn-light btn-sm" onClick={() => setLikes(likes + 1)}>
                            <i className="bi bi-heart"></i> {likes}
                        </button>

                        <button className="btn btn-light btn-sm" onClick={() => setShares(shares + 1)}>
                            <i className="bi bi-share"></i> {shares}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
