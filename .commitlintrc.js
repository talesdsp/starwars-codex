module.exports = {
  extends: ["./node_modules/commitlint-config-gitmoji"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ["type", "scope", "subject", "ticket"],
    },
  },
}
