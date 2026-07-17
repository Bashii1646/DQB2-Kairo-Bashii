import React from 'react';
import {Tweet} from 'react-tweet';
import styles from './Tweet.module.css';

export default function TweetEmbed({id}) {
  return (
    <div className={styles.tweetSection}>
      <div className={styles.tweetLabel}>Xでの投稿</div>

      <div className={styles.tweetCard}>
        <Tweet id={id} />
      </div>
    </div>
  );
}