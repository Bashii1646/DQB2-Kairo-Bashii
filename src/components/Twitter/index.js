import React, {useEffect, useRef} from 'react';

export default function Twitter({tweetId}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderTweet = () => {
      if (
        cancelled ||
        !containerRef.current ||
        !window.twttr?.widgets
      ) {
        return;
      }

      containerRef.current.innerHTML = '';

      window.twttr.widgets.createTweet(
        tweetId,
        containerRef.current,
        {
          align: 'center',
          dnt: true,
        },
      );
    };

    if (window.twttr?.widgets) {
      renderTweet();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]',
      );

      if (existingScript) {
        existingScript.addEventListener('load', renderTweet);
      } else {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        script.onload = renderTweet;
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [tweetId]);

  return <div ref={containerRef}>Xの投稿を読み込んでいます…</div>;
}
