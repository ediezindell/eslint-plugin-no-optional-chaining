module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow optional chaining',
    },
    messages: {
      noOptionalChaining: 'Optional chaining is not allowed.',
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.optional) {
          context.report({
            node,
            messageId: 'noOptionalChaining',
          });
        }
      },
      CallExpression(node) {
        if (node.optional) {
          context.report({
            node,
            messageId: 'noOptionalChaining',
          });
        }
      },
    };
  },
};

