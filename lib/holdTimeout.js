export function holdTimeout(...args) {
	const delay = typeof args[0] == "number" ? args.shift() : holdTimeout.delay;
	const callback = args.shift();
	const downEvent = args[0];
	
	let moveEvent, pointerMove;
	
	if (downEvent && ("pageX" in downEvent || "pageY" in downEvent || "clientX" in downEvent || "clientY" in downEvent))
		pointerMove = event => (moveEvent = event);
	
	const timeout = setTimeout(() => {
		
		callback(...args, moveEvent);
		
		if (pointerMove)
			window.removeEventListener("pointermove", pointerMove);
		window.removeEventListener("pointerup", clear);
		
	}, delay);
	
	function clear() {
		
		clearTimeout(timeout);
		
		if (pointerMove)
			window.removeEventListener("pointermove", pointerMove);
		
	}
	
	if (pointerMove)
		window.addEventListener("pointermove", pointerMove);
	window.addEventListener("pointerup", clear, { once: true });
	
	return timeout;
}

holdTimeout.delay = 300;
