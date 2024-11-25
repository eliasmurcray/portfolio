import path from "path";
import { fileURLToPath } from "url";
import HTMLWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: "development",
	entry: "./src/app.tsx",
	output: {
		publicPath: "",
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		clean: true,
	},
	devServer: {
		historyApiFallback: true,
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s(a|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "src/assets/",
					to: "",
				},
			],
		}),
	],
};
