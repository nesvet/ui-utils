export function dispatchEventThrough({ type, target, bubbles, cancelable, view, button, screenX, screenY, clientX, clientY, ctrlKey, shiftKey, altKey, metaKey }, throughNode = target, root = document) {
	const targets = root.elementsFromPoint(clientX, clientY);
	const newTarget = targets[targets.indexOf(throughNode) + 1];
	const newEvent = new PointerEvent(type, { bubbles, cancelable, view, button, screenX, screenY, clientX, clientY, ctrlKey, shiftKey, altKey, metaKey });
	
	newTarget.dispatchEvent(newEvent);
	
	return newEvent;
}
