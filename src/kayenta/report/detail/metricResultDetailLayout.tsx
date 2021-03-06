import * as React from 'react';

import Graph from './graph/graph';
import MetricResultStats from './metricResultStats';
import MetricResultActions from './metricResultActions';
import GraphTypeSelector from './graphTypeSelector';

/*
* Responsible for layout of the metric result detail view after the metric set
* pair for the result has loaded successfully.
* */
export default () => (
  <section className="vertical flex-1" style={{ overflowY: 'auto' }}>
    <GraphTypeSelector />
    <Graph />
    <MetricResultActions />
    <MetricResultStats />
  </section>
);
