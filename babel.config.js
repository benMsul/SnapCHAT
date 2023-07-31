process.env.EXPO_ROUTER_APP_ROOT = "../../app/index.tsx";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin", ["module:react-native-dotenv"],
    require.resolve("expo-router/babel")],
  };
};
