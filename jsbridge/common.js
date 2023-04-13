function callNativeHandler(a, b, c) {
	window.WebViewJavascriptBridge
		? "undefined" != typeof c
			? window.WebViewJavascriptBridge.callHandler(a, b, c)
			: window.WebViewJavascriptBridge.callHandler(a, b)
		: document.addEventListener(
				"WebViewJavascriptBridgeReady",
				function () {
					"undefined" != typeof c
						? window.WebViewJavascriptBridge.callHandler(a, b, c)
						: window.WebViewJavascriptBridge.callHandler(a, b);
				},
				!1
			);
}

function registerWebHandler(a, b) {
	window.WebViewJavascriptBridge
		? window.WebViewJavascriptBridge.registerHandler(a, b)
		: document.addEventListener(
				"WebViewJavascriptBridgeReady",
				function () {
					window.WebViewJavascriptBridge.registerHandler(a, b);
				},
				!1
			);
}

function connectWebViewJavascriptBridge() {
	window.WebViewJavascriptBridge
		? window.WebViewJavascriptBridge.init(initWebViewJavascriptBridge)
		: document.addEventListener(
				"WebViewJavascriptBridgeReady",
				function () {
					window.WebViewJavascriptBridge.init(
						initWebViewJavascriptBridge
					);
				},
				!1
			);
}

function initWebViewJavascriptBridge(a, b) {
	console.log("message:" + a), console.log("callback:" + b);
}

connectWebViewJavascriptBridge();