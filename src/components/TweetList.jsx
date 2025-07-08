import { useState, useMemo } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
    const [query, setQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    const processedTweets = useMemo(() => {
        const filtered = tweets.filter((t) =>
            [t.text].some((field) => field.toLowerCase().includes(query.toLowerCase()))
        );
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return b.dataTime - a.dataTime;
                case 'oldest':
                    return a.dataTime - b.dataTime;
                case 'popular':
                    return b.likes + b.retweets - (a.likes + a.retweets);
                default:
                    return 0;
            }
        });

    }, [tweets, query, sortBy]);

    return (
        <div>
            <div className="border-b border-gray-200 p-4 bg-white space-y-3">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tweets"
                    className="text-black w-100 px-4 py-2 border rounded-pill bg-white"
                />
                <div className="d-flex py-2 justify-content-between">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-1 border rounded-pill bg-white text-black"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Most Popular</option>
                    </select>
                    <span className="px-3 py-1 bg-body-secondary rounded-pill border">
                        {processedTweets.length} tweet{processedTweets.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>
            <AnimatePresence>
                {tweets.map((tweet) => (
                    <motion.div key={tweet.id} exit={{ opacity: 1 }} layout>
                        <Tweet
                            key={tweet.id}
                            profileImage="https://i.pravatar.cc/100"
                            name="J.C. Delega"
                            username="jcdelega"
                            publication={tweet.text}
                            timestamp={tweet.dataTime}
                            initialViews={tweet.views}
                            initialLikes={tweet.likes}
                            initialRetweets={tweet.retweets}
                            initialComments={tweet.comments}
                            initialShares={tweet.shares}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
export default TweetList;
