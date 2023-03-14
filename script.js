const bubble = document.getElementById('bubble')

let arr = [7, 9, 1, 23, 5, 6, 3, 10, 5, 15, 1, 2, 3, 4]
let nodes = []

const green = 'linear-gradient(45deg, green, lightgreen)'
const blue = 'linear-gradient(45deg, blue, rgb(86, 134, 255))'

arr.forEach((number, index) => {
	const newNode = document.createElement('div')
	newNode.classList.add('item')
	newNode.style.order = index + 1
	newNode.style.height = `${number * 10}px`
	newNode.textContent = number
	bubble.appendChild(newNode)
	nodes.push(newNode)
})

const bubbleSort = () => {
	for (let i = 0; i < nodes.length; i++) {
		for (let j = 0; j < nodes.length - i - 1; j++) {
			setTimeout(() => {
				nodes[j].style.background = green
				if (+nodes[j].textContent > +nodes[j + 1].textContent) {
					const temp = nodes[j]
					nodes[j] = nodes[j + 1]
					nodes[j + 1] = temp
					nodes[j + 1].style.order = +nodes[j + 1].style.order + 1
					nodes[j].style.order = +nodes[j].style.order - 1
					setTimeout(() => (nodes[j + 1].style.background = blue), 100)
				} else {
					setTimeout(() => (nodes[j].style.background = blue), 100)
				}
			}, 100 * nodes.length * i + 100 * j)
		}
	}
}

const resetArr = () => {
	arr = [7, 9, 1, 23, 5, 6, 3, 10, 5, 15, 1, 2, 3, 4]
	nodes = []

	bubble.innerHTML = ''
	arr.forEach((number, index) => {
		const newNode = document.createElement('div')
		newNode.classList.add('item')
		newNode.id = index
		newNode.style.order = index + 1
		newNode.style.height = `${number * 10}px`
		newNode.textContent = number
		bubble.appendChild(newNode)
		nodes.push(newNode)
	})
}

const start = document.getElementById('bubble-start')
start.onclick = () => {
	bubbleSort()
	start.disabled = true
	reset.disabled = true
	setTimeout(() => {
		reset.disabled = false
	}, arr.length * arr.length * 100)
}

const reset = document.getElementById('bubble-reset')
reset.onclick = () => {
	resetArr()
	start.disabled = false
}

// arr.forEach((number, index) => {
// 	const newNode = document.createElement('div')
// 	newNode.classList.add('item')
// 	newNode.id = index
// 	newNode.style.order = index + 1
// 	newNode.style.height = `${number * 100}px`
//     newNode.textContent = number
// 	bubble.appendChild(newNode)
// })

// const editArr = (i, j) => {
// 	const firstNode = document.getElementById(i)
//     firstNode.style.background = 'linear-gradient(45deg, green, lightgreen)'
// 	const secondNode = document.getElementById(j)
//     secondNode.style.background = 'linear-gradient(45deg, green, lightgreen)'
// 	const temp = firstNode.style.height
//     const tempT = firstNode.textContent
// 	firstNode.style.height = secondNode.style.height
//     firstNode.textContent = secondNode.textContent
// 	secondNode.style.height = temp
//     secondNode.textContent = tempT
//     setTimeout(() => {
//         firstNode.style.background = 'linear-gradient(45deg, #701c1c, #d36363)'
//         secondNode.style.background = 'linear-gradient(45deg, #701c1c, #d36363)'
//     }, 100)
// }

// const bubbleSort = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length - i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let temp = arr[j]
// 				arr[j] = arr[j + 1]
// 				arr[j + 1] = temp
// 				setTimeout(() => editArr(j, j + 1), 100 * arr.length * i + 100 * j)
// 			}
// 		}
// 	}
// }

// const sleepFor = (sleepDuration) => {
// 	let now = new Date().getTime()
// 	while (new Date().getTime() < now + sleepDuration) {
// 		/* Do nothing */
// 	}
// }

// function sleep(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms))
// }

// async function delay(ms) {
// 	await sleep(ms)
// }
