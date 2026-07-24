import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const suisyaPages = [
  {
    title: '水車の仕様',
    to: '/suisya-waterwheel-spec',
  },
  {
    title: 'シンプルな保持回路',
    to: '/suisya-simple-latch',
  },
  {
    title: '液体の保持判定',
    to: '/suisya-liquid-hold-priority',
  },
  {
    title: 'ワンショット保持・リセット回路',
    to: '/suisya-one-shot-latch',
  },
  {
    title: '保持出力継続・ワンショット出力回路',
    to: '/suisya-latch-output',
  },
  {
    title: '2進数の繰り上げ機構',
    to: '/suisya-binary-carry',
  },
  {
    title: '水車ワンショット回路',
    to: '/suisya-one-shot',
  },
  {
    title: '水車ステップ循環回路',
    to: '/suisya-step-loop',
  },
  {
    title: '段階選択回路',
    to: '/suisya-step-selector',
  },
  {
    title: '水流段階停止回路',
    to: '/suisya-step-stop',
  },
  {
    title: '13.25秒周期の水車クロック回路',
    to: '/suisya-1325s-clock',
  },
  {
    title: '11.7秒周期の水車クロック回路',
    to: '/suisya-117s-clock',
  },
  {
    title: '水と毒水のAND NOT回路',
    to: '/suisya-water-poison-and-not',
  },
  {
    title: '滝の優先順位',
    to: '/suisya-waterfall-priority',
  },
  {
    title: '水車の縦方向の動作時間',
    to: '/suisya-vertical-delay',
  },
];
const magumaPages = [
  {
    title: 'マグマエリアの判定',
    to: '/maguma-area-judgment',
  },
  {
    title: 'マグマとマグマエリアの仕様',
    to: '/maguma-area-behavior',
  },
  {
    title: 'マグネブロックを利用した回路の土台',
    to: '/maguma-magnet-foundation',
  },
  {
    title: 'マグマエリアのON/OFFスイッチ',
    to: '/maguma-area-switch',
  },
  {
    title: 'マグマエリアの応用',
    to: '/maguma-area-application',
  },
  {
    title: 'マグマエリアと水車のギミック',
    to: '/maguma-area-waterwheel',
  },
  {
    title: 'マグマエリアを利用した選択回路',
    to: '/maguma-area-selector',
  },
];
function ArticleCard({title, to}) {
  return (
    <Link className={styles.articleCard} to={to}>
      {title}
    </Link>
  );
}

function CategorySection({title, description, pages}) {
  return (
    <section className={styles.category}>
      <div className={styles.categoryHeader}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>

      <div className={styles.articleGrid}>
        {pages.map((page) => (
          <ArticleCard
            key={page.to}
            title={page.title}
            to={page.to}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="DQB2 Kairo Bashii"
      description="ドラゴンクエストビルダーズ2の回路・ギミック集">

      <main>
        <header className={styles.hero}>
          <div className="container">
            <Heading as="h1">DQB2 Kairo Bashii</Heading>

            <p className={styles.heroText}>
              ドラゴンクエストビルダーズ2の
              <br />
              回路・ギミックをまとめるサイトです。
            </p>
          </div>
        </header>

        <div className={`container ${styles.mainContent}`}>
          <CategorySection
            title="水車"
            description="水車や水・毒水の性質を利用した回路と検証です。"
            pages={suisyaPages}
          />

          <CategorySection
            title="マグマ"
            description="マグマやマグマエリアに関するギミックと検証です。"
            pages={magumaPages}
          />
        </div>
      </main>
    </Layout>
  );
}