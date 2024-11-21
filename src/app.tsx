import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./components/index";
import "./styles/global.sass";

const rootElement = document.getElementById("app-root");
if (rootElement === null) {
	throw new Error("Failed to render, #app-root not found.");
}

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<React.Fragment>
				<Outlet />
			</React.Fragment>
		),
		errorElement: null,
		children: [
			{
				path: "/",
				element: <Index />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
