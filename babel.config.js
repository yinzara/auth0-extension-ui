module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      [ '@babel/preset-env', isTest ? { targets: { node: 'current' } } : { targets: { esmodules: true } } ],
      [ '@babel/preset-react', { runtime: 'classic' } ]
    ]
  };
};
