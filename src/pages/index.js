import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  return (
    <Layout
      title="DQB2 Kairo Bashii"
      description="ドラゴンクエストビルダーズ2の回路・ギミック集">
      <main>
        <div
          style={{
            padding: '5rem 1rem',
            textAlign: 'center',
          }}>
          <Heading as="h1">DQB2 Kairo Bashii</Heading>

          <p>
            ドラゴンクエストビルダーズ2の
            <br />
            回路・ギミックをまとめるサイトです。
          </p>

          <Link
            className="button button--primary button--lg"
            to="/suisya-one-shot">
            水車ワンショット回路
          </Link>

          <Link
            className="button button--primary button--lg"
            to="/suisya-step-loop">
            水車ステップ循環回路
          </Link>
        </div>
      </main>
    </Layout>
  );
}