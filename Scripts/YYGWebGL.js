const defaultObjectName = "UnityWebGLEventDispatcher";
function YYGSendMessageToUnity(msg)
{
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"Dispatcher",msg);
	}
}

function YYGSendMessageToUnityCustom(objectName, functionName, msg)
{
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(objectName, functionName, msg);
	}
}

function YYGOnOrientationChanged(orientation)
{
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"OnOrientationChanged", orientation);
	}
}

function YYGOnGameSizeChanged()
{
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"OnSizeChanged");
	}
}

function YYGOnBrowserShow()
{
	if(window.unityInstance)
	{
		console.log("This document has focus. Click outside the document to lose focus.");
		window.unityInstance.SendMessage(defaultObjectName,"OnBrowserShow");
	}
}

function YYGOnBrowserHide()
{
	if(window.unityInstance)
	{
		console.log("FOCUS LOST!");
		window.unityInstance.SendMessage(defaultObjectName,"OnBrowserHide");
	}
}

//binding web event
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  YYGOnOrientationChanged(type);
});

window.addEventListener("resize", YYGOnGameSizeChanged);
document.addEventListener("visibilitychange", function () {
	if (document.visibilityState === "hidden") {
		YYGOnBrowserHide();
	} else {
		YYGOnBrowserShow();
	}
});
