import clear from 'rollup-plugin-clear';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'es',
    banner: `// befn v1.0.2 Brave Chan`
  },
  plugins: [
    clear({
      targets: ['dist']
    }),
    sizeSnapshot({
      snapshotPath: './analyze/.size-snapshot.json'
    }),
    visualizer({
      filename: './analyze/stats.html',
      title: 'result size',
      open: true
    })
  ]
};
