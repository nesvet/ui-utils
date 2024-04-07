function handlePointerUp() {
	
	setTimeout(() => window.removeEventListener("click", handleClick, true), 0);
	
}

function handleClick(event) {
	event.stopPropagation();
	
	window.removeEventListener("pointerup", handlePointerUp, true);
	
}

const options = {
	capture: true,
	once: true
};

export function catchClick() {
	
	window.addEventListener("pointerup", handlePointerUp, options);
	window.addEventListener("click", handleClick, options);
	
}
