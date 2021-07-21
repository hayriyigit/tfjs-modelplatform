const tf = require('@tensorflow/tfjs-node');

const modelMapper = (graph) => {
  const edges = graph.edges;
  const nodes = graph.nodes;
  const inputNode = nodes.filter((node) => node.type == 'Input')[0].id;

  const tree = nodes.reduce((acc, current) => {
    acc[current.id] = {
      id: current.id,
      type: current.type,
      childs: [],
      parents: [],
      args: current.args,
    };

    const incomeEdges = edges.filter((edge) => edge.target == current.id);
    const outcomeEdges = edges.filter((edge) => edge.source == current.id);

    incomeEdges.map((edge) => {
      acc[current.id].parents = [...acc[current.id].parents, edge.source];
    });

    outcomeEdges.map((edge) => {
      acc[current.id].childs = [...acc[current.id].childs, edge.target];
    });

    return acc;
  }, {});

  const model = createModel(tree, inputNode);

  return model;
};

const createModel = (tree, inputNode) => {
  global[String(inputNode)] = tf.input({
    shape: [28, 28, 1],
  });

  let childs = tree[inputNode].childs;

  createLayers(childs, tree);
  const outputs = createOutputs(tree).reduce((acc, curr) => {
    acc.push(global[String(curr)]);
    return acc;
  }, []);

  const model = new tf.model({
    inputs: global[String(inputNode)],
    outputs: outputs,
  });

  return model;
};

const createLayers = (childs, tree) => {
  let childs_copy = childs.slice();

  if (childs.length == 0) {
    return;
  }
  childs.map((child) => {
    if (tree[child].parents.length == 1) {
      global[String(child)] = createLayer(child, tree[child].type, tree);

      childs_copy.shift();
      childs_copy.push(...tree[child].childs);
      childs_copy = [...new Set([...childs_copy])];
    } else {
      try {
        const parents = tree[child].parents.reduce((acc, curr) => {
          acc.push(global[String(curr)]);
          return acc;
        }, []);

        global[String(child)] = tf.layers
          .concatenate({ axis: 1, name: String(child) })
          .apply(parents);

        childs_copy.shift();
        childs_copy.push(...tree[child].childs);
        childs_copy = [...new Set([...childs_copy])];
      } catch (e) {
        console.error(e);
        const element = childs_copy[0];
        childs_copy.shift();
        childs_copy.push(element);
      }
    }
  });

  createLayers(childs_copy, tree);
};

const createLayer = (child, type, tree) => {
  switch (type) {
    case 'Conv2D':
      return tf.layers
        .conv2d(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);
    case 'MaxPool2D':
      return tf.layers
        .maxPooling2d(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'Dense':
      return tf.layers
        .dense(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'Dropout':
      return tf.layers
        .dropout(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'Flatten':
      return tf.layers
        .flatten(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'BatchNorm':
      return tf.layers
        .batchNormalization(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'SepConv2D':
      return tf.layers
        .separableConv2d(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);

    case 'AvgPooling2D':
      return tf.layers
        .averagePooling2d(tree[child].args)
        .apply(global[String(tree[child].parents[0])]);
  }
};

const createOutputs = (tree) => {
  let outputs = [];

  Object.keys(tree).map((key) => {
    tree[key].childs.length < 1 ? outputs.push(key) : null;
  });
  return outputs;
};

module.exports = {
  modelMapper,
};
