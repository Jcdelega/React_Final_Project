import Tweet from "./Tweet";
import { AnimatePresence, motion } from 'framer-motion';

const TweetList = ({ tweets }) => {
    return (
        <div>
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
