import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '快乐学习，友好交流',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        本站是由曙光磁铁倾情打造的算法交流小站，初期目标是分享LeetCode中文站上每日一题的题解
      </>
    ),
  },
  {
    title: '活跃更新，思路独特',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        本站的题解更新以日为单位，结合了很多个人的思路和见解，如有疑问可以添加作者:<a href="https://www.feishu.cn/invitation/page/add_contact/?token=defv4fab-5052-45e5-a73e-e2a29a5bfccf&amp;unique_id=I_MEuPo4RVTYdmie-B8Q6A==">飞书</a>进行联系
      </>
    ),
  },
  {
    title: '由基于React的Docusaurus打造',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        获得了Docusaurus的强力支持，网站支持暗黑模式，支持全面使用markdown或mdx进行写作
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
