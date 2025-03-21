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
	log.textContent = "SIZE CHANGED!";

	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"OnSizeChanged");
	}
}

function YYGOnBrowserFocus()
{
	log.textContent = "This document has focus. Click outside the document to lose focus.";
	
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"OnBrowserFocus");
	}
}

function YYGOnBrowserBlur()
{
	log.textContent = "FOCUS LOST!";
    
	if(window.unityInstance)
	{
		window.unityInstance.SendMessage(defaultObjectName,"OnBrowserBlur");
	}
}

//binding web event
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  YYGOnOrientationChanged(type);
});

window.addEventListener("resize", YYGOnGameSizeChanged);
window.addEventListener("blur", YYGOnBrowserBlur);
window.addEventListener("focus", YYGOnBrowserFocus);
