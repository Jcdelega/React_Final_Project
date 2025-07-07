import { useState, useEffect } from "react";
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

    return (
        <div>
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets}  />
        </div>
    );
};
export default Home;