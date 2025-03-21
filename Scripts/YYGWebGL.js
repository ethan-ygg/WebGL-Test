const defaultObjectName = "UnityWebGLEventDispatcher";
function YYGSendMessageToUnity(msg) {
  if (window.unityInstance) {
    window.unityInstance.SendMessage(defaultObjectName, "Dispatcher", msg);
  }
}

function YYGSendMessageToUnityCustom(objectName, functionName, msg) {
  if (window.unityInstance) {
    window.unityInstance.SendMessage(objectName, functionName, msg);
  }
}

function YYGOnOrientationChanged(orientation) {
  if (window.unityInstance) {
    window.unityInstance.SendMessage(
      defaultObjectName,
      "OnOrientationChanged",
      orientation
    );
  }
}

function YYGOnGameSizeChanged() {
  if (window.unityInstance) {
    window.unityInstance.SendMessage(defaultObjectName, "OnSizeChanged");
  }
}

function YYGOnBrowserFocus() {
  console.log(
    "This document has focus. Click outside the document to lose focus."
  );

  if (window.unityInstance) {
    window.unityInstance.SendMessage(defaultObjectName, "OnBrowserFocus");
  }
}

function YYGOnBrowserBlur() {
  console.log("FOCUS LOST!");

  if (window.unityInstance) {
    window.unityInstance.SendMessage(defaultObjectName, "OnBrowserBlur");
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
    // Page is hidden (user switched tab or minimized browser)
    // Perform actions here, e.g., pause media, save progress, etc.
    console.log("Page is hidden");
  } else {
    // Page is visible (user returned to the tab)
    // Perform actions here, e.g., resume media, restore progress, etc.
    console.log("Page is visible");
  }
});
