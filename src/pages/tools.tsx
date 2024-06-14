import React from 'react';
import Layout from '@theme/Layout';
import SubjektifyTools from '@site/src/components/SubjektifyTools';

export default function Tools(): JSX.Element {
  return (
    <Layout
      title={`Tools`}
    >
      <main>
        <SubjektifyTools />
      </main>
    </Layout>
  );
}
