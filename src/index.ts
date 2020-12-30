declare global {
	interface Window {
		Modal: ModalRuntime
	}
}

interface ModalRuntime {
	open(modalSelector: string): void
	close(modalSelector: string): void
}

export default class Modal implements ModalRuntime {
	#scrollY: number = 0

	#deferrers: {
		[key: string]: (e: MouseEvent) => void
	} = {}

	open(modalID: string) {
		console.log(`[debug] opening modalID=${modalID}`)

		this.#scrollY = window.scrollY
		document.body.style.position = "fixed"
		document.body.style.top = -this.#scrollY + "px"
		document.body.style.right = "0"
		document.body.style.left = "0"

		const modalRoot = document.getElementById(modalID)!
		modalRoot.style.display = ""
		modalRoot.style.position = "fixed"
		modalRoot.style.top = "0"
		modalRoot.style.right = "0"
		modalRoot.style.bottom = "0"
		modalRoot.style.left = "0"

		const handleClickAway = (e: MouseEvent) => {
			const { width, height } = (e.target as HTMLElement).getBoundingClientRect()
			if (width !== window.innerWidth || height !== window.innerHeight) {
				// No-op
				return
			}
			this.close(modalID)
		}

		modalRoot.addEventListener("click", handleClickAway)
		this.#deferrers[modalID] = handleClickAway
	}

	close(modalID: string) {
		console.log(`[debug] closing modalID=${modalID}`)

		document.body.style.position = ""
		document.body.style.top = ""
		document.body.style.right = ""
		document.body.style.left = ""

		window.scrollTo(0, this.#scrollY)
		this.#scrollY = 0

		const modalRoot = document.getElementById(modalID)!
		modalRoot.style.display = "none"
		modalRoot.style.position = ""
		modalRoot.style.top = ""
		modalRoot.style.right = ""
		modalRoot.style.bottom = ""
		modalRoot.style.left = ""

		modalRoot.removeEventListener("click", this.#deferrers[modalID]!)
	}
}

;(() => {
	window.Modal = new Modal()
})()
