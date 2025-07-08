import { useState, useEffect, useCallback } from "react";
import TweetList from '../components/TweetList';
import TweetForm from '../components/TweetForm';

const Home = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        setTweets(JSON.parse(localStorage.getItem("tweets")) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }, [tweets]);

    const addTweet = (text) => {
        const newTweet = {
            id:Date.now(),
            dataTime: Date().toLocaleString(),
            text,
            likes: 0,
            vews: 0,
            retweets: 0,
            comments: 0,
            shares: 0
        };
        setTweets([newTweet, ...tweets]);
    };

    const likeHandler = useCallback((id, isLiking) => {
        setTweets((prev) =>
        prev.map((t) =>
            t.id === id ? { ...t, likes: Math.max(0, t.likes + (isLiking ? 1 : -1)) } : t
        )
        );
    }, []);

    const retweetHandler = useCallback((id, isRetweeting) => {
        setTweets((prev) =>
        prev.map((t) =>
            t.id === id ? { ...t, retweets: Math.max(0, t.retweets + (isRetweeting ? 1 : -1)) } : t
        )
        );
    }, []);

    return (
        <div>
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets}/>
        </div>
    );
};
export default Home;