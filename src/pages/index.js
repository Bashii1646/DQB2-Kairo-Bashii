import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const beginnerPages = [
  {step: '01', title: '回路を作るための基礎知識', to: '/circuit-basics', label: '最初に読む', description: '信号・扉・水門・水車・液体など、回路づくりの前提をまとめています。'},
  {step: '02', title: '水車の仕様', to: '/suisya-waterwheel-spec', label: '基本仕様', description: '水車を回せる液体、判定位置、約10秒ごとの動作を確認できます。'},
  {step: '03', title: '液体の保持判定', to: '/suisya-liquid-hold-priority', label: '検証資料', description: '液体の組み合わせによって、どの液体が保持されるかを整理しています。'},
  {step: '04', title: '水車ワンショット回路', to: '/suisya-one-shot', label: '最初の回路', description: '水車を1回だけ動作させる、回路づくりの基本となる仕組みです。'},
];

const featuredPages = [
  {rank: '01', tag: '基本', title: '水車の仕様', to: '/suisya-waterwheel-spec', text: '判定位置・対応液体・動作時間をまとめた基礎資料。'},
  {rank: '02', tag: '保持', title: 'シンプルな保持回路', to: '/suisya-simple-latch', text: '液体を利用して状態を残す、代表的な回路。'},
  {rank: '03', tag: '検証', title: '液体の保持判定', to: '/suisya-liquid-hold-priority', text: '液体同士の優先関係を組み合わせごとに整理。'},
];

const groups = [
  {
    id: 'waterwheel', title: '水車・液体', eyebrow: 'WATERWHEEL & LIQUID',
    description: '水車の基本仕様、液体の優先関係、保持回路、クロック回路、選択回路、計算回路をまとめています。',
    icon: 'img/waterwheel.svg', tone: 'water',
    sections: [
      {label: '基本・検証', pages: [
        ['水車の仕様', '/suisya-waterwheel-spec', '基本'],
        ['液体の保持判定', '/suisya-liquid-hold-priority', '検証'],
        ['滝の優先順位', '/suisya-waterfall-priority', '検証'],
        ['水車の縦方向の動作時間', '/suisya-vertical-delay', '検証'],
      ]},
      {label: '保持・出力', pages: [
        ['シンプルな保持回路', '/suisya-simple-latch', '保持'],
        ['ワンショット保持・リセット回路', '/suisya-one-shot-latch', '保持'],
        ['保持出力継続・ワンショット出力回路', '/suisya-latch-output', '出力'],
        ['水車ワンショット回路', '/suisya-one-shot', '基本回路'],
      ]},
      {label: '段階・クロック・計算', pages: [
        ['水車ステップ循環回路', '/suisya-step-loop', '循環'],
        ['段階選択回路', '/suisya-step-selector', '選択'],
        ['水流段階停止回路', '/suisya-step-stop', '段階'],
        ['13.25秒周期の水車クロック回路', '/suisya-1325s-clock', 'クロック'],
        ['11.7秒周期の水車クロック回路', '/suisya-117s-clock', 'クロック'],
        ['水と毒水のAND NOT回路', '/suisya-water-poison-and-not', '論理'],
        ['2進数の繰り上げ機構', '/suisya-binary-carry', '計算'],
      ]},
    ],
  },
  {
    id: 'magma', title: 'マグマ', eyebrow: 'MAGMA SYSTEM',
    description: 'マグマエリアの判定や液体変化、マグネブロック・水車を組み合わせた応用ギミックをまとめています。',
    icon: 'img/magma.svg', tone: 'magma',
    sections: [
      {label: '基本仕様', pages: [
        ['マグマエリアの判定', '/maguma-area-judgment', '基本'],
        ['マグマとマグマエリアの仕様', '/maguma-area-behavior', '仕様'],
        ['マグマエリアのON/OFF', '/maguma-area-switch', '制御'],
      ]},
      {label: '応用・回路', pages: [
        ['マグネブロックを利用した回路の土台', '/maguma-magnet-foundation', '基礎'],
        ['マグマエリアの応用', '/maguma-area-application', '応用'],
        ['マグマエリアと水車のギミック', '/maguma-area-waterwheel', '連携'],
        ['マグマエリアを利用した選択回路', '/maguma-area-selector', '選択'],
      ]},
    ],
  },
];

function ArticleLink({page, tone}) {
  return (
    <Link className={`${styles.articleLink} ${styles[tone]}`} to={page[1]}>
      <span className={styles.articleText}><small>{page[2]}</small><strong>{page[0]}</strong></span>
      <span className={styles.arrow} aria-hidden="true">→</span>
    </Link>
  );
}

function BeginnerCard({page}) {
  return (
    <Link className={styles.beginnerCard} to={page.to}>
      <span className={styles.step}>{page.step}</span>
      <span className={styles.beginnerLabel}>{page.label}</span>
      <strong>{page.title}</strong>
      <p>{page.description}</p>
      <span className={styles.beginnerArrow} aria-hidden="true">→</span>
    </Link>
  );
}

function LibraryGroup({group}) {
  const count = group.sections.reduce((sum, section) => sum + section.pages.length, 0);
  return (
    <section className={`${styles.library} ${styles[group.tone]}`} id={group.id}>
      <header className={styles.libraryHeader}>
        <div className={styles.iconPlate}><img src={group.icon} alt="" className={styles.libraryIcon} /></div>
        <div>
          <span className={styles.eyebrow}>{group.eyebrow}</span>
          <Heading as="h2">{group.title}</Heading>
          <p>{group.description}</p>
        </div>
        <div className={styles.count}><span>記事数</span><strong>{count}</strong></div>
      </header>
      <div className={styles.sectionGrid}>
        {group.sections.map((section) => (
          <div className={styles.subsection} key={section.label}>
            <Heading as="h3">{section.label}</Heading>
            <div className={styles.linkList}>
              {section.pages.map((page) => <ArticleLink key={page[1]} page={page} tone={group.tone} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const total = groups.reduce((sum, group) => sum + group.sections.reduce((s, x) => s + x.pages.length, 0), 0);
  return (
    <Layout title="ドラゴンクエストビルダーズ2 回路資料館" description="ドラゴンクエストビルダーズ2の水車・液体・マグマを使った回路と検証資料">
      <main>
        <header className={styles.hero}>
          <div className={styles.blockPattern} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <span className={styles.gameTitle}>ドラゴンクエストビルダーズ2</span>
              <span className={styles.archiveTitle}>回路資料館</span>
              <Heading as="h1">回路を、<br/><em>仕組みから記録する。</em></Heading>
              <p>水車・液体・マグマなどを利用した回路と、ゲーム内で起こる仕組みを、実際の検証をもとにまとめた資料サイトです。初心者向けの基礎知識から、保持・クロック・計算回路まで掲載しています。</p>
              <div className={styles.note}>攻略情報の網羅ではなく、回路づくりに役立つ検証と仕組みを記録しています。</div>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/circuit-basics">初めて読む</Link>
                <a className={styles.secondaryButton} href="#archive">記事一覧を見る</a>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.logoFrame}><img src="img/logo.svg" alt="ドラゴンクエストビルダーズ2 回路資料館" /></div>
              <div className={styles.panelTitle}>CIRCUIT ARCHIVE</div>
              <dl>
                <div><dt>記事</dt><dd>{total}</dd></div>
                <div><dt>カテゴリ</dt><dd>{groups.length}</dd></div>
                <div className={styles.wideStat}><dt>最終更新</dt><dd>2026.07</dd></div>
              </dl>
            </div>
          </div>
        </header>

        <div className={`container ${styles.mainContent}`}>
          <section className={styles.intro}>
            <span>START HERE</span>
            <Heading as="h2">初めての方へ</Heading>
            <p>回路づくりを初めて見る方は、次の順番で読むと仕組みをつかみやすくなります。</p>
            <div className={styles.beginnerGrid}>{beginnerPages.map((page) => <BeginnerCard key={page.to} page={page} />)}</div>
          </section>

          <section className={styles.featured}>
            <div className={styles.sectionHeading}><span>FEATURED</span><Heading as="h2">おすすめの記事</Heading><p>最初に押さえておきたい基礎と、代表的な検証記事です。</p></div>
            <div className={styles.featuredGrid}>
              {featuredPages.map((page) => (
                <Link to={page.to} className={styles.featuredCard} key={page.to}>
                  <span className={styles.rank}>{page.rank}</span><span className={styles.featureTag}>{page.tag}</span>
                  <strong>{page.title}</strong><p>{page.text}</p><span className={styles.readMore}>記事を読む →</span>
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.archiveAnchor} id="archive" />
          <div className={styles.intro}><span>ARCHIVE</span><Heading as="h2">カテゴリから探す</Heading><p>用途や仕組みごとに記事を整理しています。</p></div>
          {groups.map((group) => <LibraryGroup group={group} key={group.id} />)}

          <section className={styles.updates}>
            <div><span className={styles.eyebrow}>UPDATE</span><Heading as="h2">更新履歴</Heading><p>検証結果や新しい回路を随時追加しています。</p></div>
            <div className={styles.updateList}>
              <div><time dateTime="2026-07-24">2026.07.24</time><p>初心者向けの「回路を作るための基礎知識」を追加しました。</p></div>
              <div><time dateTime="2026-07-23">2026.07.23</time><p>マグマエリアを利用した選択回路を追加しました。</p></div>
              <div><time dateTime="2026-07-22">2026.07.22</time><p>液体の保持判定に関する検証内容を整理しました。</p></div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
